"""Stage 2: turn the raw stage-1 dump into a structured CSV.

Uses spaCy NER to pull DATE entities out of each team's paragraph. Produces
`teams.csv` with columns: Team Name, Dates, Types, Links.
"""

from collections import defaultdict

import pandas as pd
import spacy

from config import TEAM_LIST_TXT, TEAMS_CSV


def run():
    TEAMS_CSV.parent.mkdir(parents=True, exist_ok=True)

    nlp = spacy.load("en_core_web_sm")

    with open(TEAM_LIST_TXT, "r", encoding="utf-8") as f:
        text = f.read()

    teams = defaultdict(lambda: {"dates": [], "types": [], "links": []})

    for paragraph in text.strip().split("\n\n"):
        lines = paragraph.strip().split("\n")
        if len(lines) < 3:
            continue

        name = lines[0]
        categories = lines[1]
        homepage = lines[-1]

        doc = nlp(paragraph)
        date_ents = [ent.text for ent in doc.ents if ent.label_ == "DATE"]

        teams[name]["dates"].extend(date_ents)
        teams[name]["types"].extend(t.strip() for t in categories.split(","))
        teams[name]["links"].append(homepage)

    rows = [
        {
            "Team Name": name,
            "Dates": ", ".join(sorted(set(info["dates"]))),
            "Types": ", ".join(sorted(set(info["types"]))),
            "Links": ", ".join(sorted(set(info["links"]))),
        }
        for name, info in teams.items()
    ]

    pd.DataFrame(rows).to_csv(TEAMS_CSV, index=False)
    print(f"[stage2] wrote {len(rows)} teams to {TEAMS_CSV}")


if __name__ == "__main__":
    run()
