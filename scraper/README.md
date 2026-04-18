# UBC Design Teams Tracker — Scraper

Scheduled pipeline that refreshes `../data/teams.json` (consumed by `../project-teams.html`).

## Stages

| Stage | File | What it does |
|-------|------|--------------|
| 1 | `pipeline/stage1_team_list.py` | Selenium-scrapes the UBC design-teams directory into `data/raw/team_list.txt`. |
| 2 | `pipeline/stage2_parse_csv.py` | spaCy NER (`en_core_web_sm`) pulls DATE entities; writes `data/processed/teams.csv`. |
| 3 | `pipeline/stage3_find_recruitment.py` | For each team homepage, locate the recruitment sub-page. Selenium (default) or static. |
| 4 | `pipeline/stage4_scrape_pages.py` | Dump each recruitment page into `data/raw/recruitment_pages.txt`. Selenium handles accordions, overlays, and Orbit's custom layout. |
| 5 | `pipeline/stage5_summarize.py` | Call Claude (Haiku) on each team's raw text; produce structured `../data/teams.json`. |

Only `data/teams.json` (at the repo root) is committed. Intermediate files under `scraper/data/` are gitignored.

## Run locally

```bash
cd scraper
python -m pip install -r requirements.txt
python -m spacy download en_core_web_sm

export ANTHROPIC_API_KEY=sk-ant-...        # needed by stage5 only
python main.py all --mode selenium          # end-to-end
# or individual stages:
python main.py stage1
python main.py stage4 --mode static
python main.py stage5
python main.py stage5 --no-llm   # seed teams.json from CSV without calling Claude
```

Windows uses Edge; Linux CI uses Chrome. Controlled by `SELENIUM_BROWSER=edge|chrome` (defaults to `edge` in `config.py`).

## Scheduled refresh

`.github/workflows/scrape-teams.yml` runs every Sunday 12:00 UTC during August and September, with a date-guard step that restricts actual execution to **Aug 15 – Sep 15**. Outside that window the workflow exits immediately. Manual `workflow_dispatch` runs bypass the date guard.

### Required GitHub secret

Add `ANTHROPIC_API_KEY` under **Settings → Secrets and variables → Actions**. Without it stage 5 fails.
