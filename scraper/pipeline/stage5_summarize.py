"""Stage 5: call Claude to turn the raw text dumps into structured JSON.

Reads:
    data/raw/recruitment_pages.txt  (per-team visible text + hrefs)
    data/processed/teams.csv        (name, types, dates, homepage, recruitment url)

Writes:
    <repo-root>/data/teams.json     (consumed by project-teams.html)

Schema:
    {
      "generated_at": "2026-04-18T12:34:56Z",
      "model": "claude-haiku-...",
      "teams": [
        {
          "name": "AeroDesign",
          "types": ["Aerospace"],
          "homepage": "https://...",
          "recruitment_url": "https://.../recruitment",
          "status": "open" | "closed" | "unknown",
          "status_detail": "Applications open until Sept 15.",
          "timeline": "Mid-September",
          "roles": ["Mechanical Member", ...],
          "application_link": "https://forms.gle/...",
          "summary": "Two-sentence human-readable blurb."
        },
        ...
      ]
    }
"""

import json
import os
import re
import sys
from datetime import datetime, timezone

import pandas as pd
from anthropic import Anthropic

from config import ANTHROPIC_MODEL, RECRUITMENT_PAGES_TXT, TEAMS_CSV, TEAMS_JSON


BLOCK_RE = re.compile(
    r"^===\s*(?P<name>.+?)\s*(?:\(selenium\))?\s*===\s*\n"
    r"(?P<body>.*?)"
    r"^(?:-{3,})\s*$",
    re.MULTILINE | re.DOTALL,
)

MAX_BODY_CHARS = 12000  # trim very long pages to keep prompt size reasonable

SYSTEM_PROMPT = (
    "You extract UBC Engineering design-team recruitment info from scraped "
    "web pages. You always reply with a single JSON object and nothing else."
)

USER_TEMPLATE = """Team: {name}
Types: {types}
Homepage: {homepage}
Recruitment page URL: {recruitment_url}
Dates hinted from directory: {dates}

Raw scraped content of the recruitment page:
<<<
{body}
>>>

Based ONLY on the scraped content above, return a JSON object with these keys:

- status: one of "open", "closed", "unknown"
    * "open" if the page actively invites applications right now
    * "closed" if it says recruitment is over / ended / will reopen later
    * "unknown" if you genuinely cannot tell
- status_detail: short phrase (<=120 chars) quoting or paraphrasing the key
    sentence that establishes the status. Empty string if nothing specific.
- timeline: short phrase describing when recruitment happens (e.g.
    "Mid-September", "January + September", "Next cycle Fall 2025"). Empty
    string if not stated.
- roles: array of distinct roles / positions being recruited, as short
    strings. Empty array if none listed.
- application_link: a single URL to apply (Google Form, Typeform, etc.) if
    one appears in the content. Empty string if none found.
- summary: 1-2 sentence plain-English summary of the team's current
    recruitment state for a prospective student.

Reply with ONLY the JSON object, no markdown, no prose."""


def _load_blocks(path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8")
    blocks: dict[str, str] = {}
    for match in BLOCK_RE.finditer(text):
        name = match.group("name").strip()
        body = match.group("body").strip()
        if name and body:
            blocks[name] = body[:MAX_BODY_CHARS]
    return blocks


def _extract_json(raw: str) -> dict:
    """Claude sometimes wraps JSON in ```json fences despite instructions."""
    raw = raw.strip()
    if raw.startswith("```"):
        raw = re.sub(r"^```(?:json)?\s*|\s*```$", "", raw, flags=re.DOTALL)
    return json.loads(raw)


def _call_claude(client: Anthropic, name: str, meta: dict, body: str) -> dict:
    prompt = USER_TEMPLATE.format(
        name=name,
        types=meta.get("types", ""),
        homepage=meta.get("homepage", ""),
        recruitment_url=meta.get("recruitment_url", ""),
        dates=meta.get("dates", ""),
        body=body,
    )
    resp = client.messages.create(
        model=ANTHROPIC_MODEL,
        max_tokens=1024,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": prompt}],
    )
    text = "".join(
        block.text for block in resp.content if getattr(block, "type", "") == "text"
    )
    return _extract_json(text)


def _empty_summary(name: str, meta: dict, reason: str) -> dict:
    return {
        "name": name,
        "types": _split_list(meta.get("types", "")),
        "homepage": meta.get("homepage", ""),
        "recruitment_url": meta.get("recruitment_url", ""),
        "status": "unknown",
        "status_detail": reason,
        "timeline": meta.get("dates", ""),
        "roles": [],
        "application_link": "",
        "summary": reason,
    }


def _split_list(s: str) -> list[str]:
    return [part.strip() for part in s.split(",") if part.strip()]


def run(no_llm: bool = False):
    if not TEAMS_CSV.exists():
        print(f"[stage5] missing {TEAMS_CSV}", file=sys.stderr)
        sys.exit(1)

    df = pd.read_csv(TEAMS_CSV).fillna("")
    blocks = _load_blocks(RECRUITMENT_PAGES_TXT) if RECRUITMENT_PAGES_TXT.exists() else {}

    client = None
    if not no_llm:
        api_key = os.environ.get("ANTHROPIC_API_KEY")
        if not api_key:
            print("[stage5] ANTHROPIC_API_KEY not set (pass --no-llm to skip)", file=sys.stderr)
            sys.exit(1)
        client = Anthropic(api_key=api_key)

    teams = []
    for _, row in df.iterrows():
        name = row["Team Name"]
        meta = {
            "types": row.get("Types", ""),
            "homepage": row.get("Links", ""),
            "recruitment_url": row.get("Recruitment", ""),
            "dates": row.get("Dates", ""),
        }

        if no_llm:
            reason = "Summary pending next scheduled refresh."
            teams.append(_empty_summary(name, meta, reason))
            continue

        body = blocks.get(name, "")
        if not body or body.startswith("(fetch failed)") or body.startswith("(JS-required"):
            print(f"[stage5] {name}: no usable body, emitting placeholder")
            teams.append(_empty_summary(name, meta, "Recruitment page data not available this run."))
            continue

        print(f"[stage5] {name}: calling Claude")
        try:
            payload = _call_claude(client, name, meta, body)
        except Exception as exc:
            print(f"[stage5]   error: {exc}")
            teams.append(_empty_summary(name, meta, f"Summarization failed: {exc}"))
            continue

        teams.append({
            "name": name,
            "types": _split_list(meta["types"]),
            "homepage": meta["homepage"],
            "recruitment_url": meta["recruitment_url"],
            "status": payload.get("status", "unknown"),
            "status_detail": payload.get("status_detail", "") or "",
            "timeline": payload.get("timeline", "") or meta.get("dates", ""),
            "roles": payload.get("roles", []) or [],
            "application_link": payload.get("application_link", "") or "",
            "summary": payload.get("summary", "") or "",
        })

    out = {
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "model": "seed" if no_llm else ANTHROPIC_MODEL,
        "teams": teams,
    }

    TEAMS_JSON.parent.mkdir(parents=True, exist_ok=True)
    TEAMS_JSON.write_text(
        json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"[stage5] wrote {len(teams)} teams to {TEAMS_JSON}")


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--no-llm", action="store_true",
                        help="Skip Claude; write skeleton JSON from CSV metadata only.")
    args = parser.parse_args()
    run(no_llm=args.no_llm)
