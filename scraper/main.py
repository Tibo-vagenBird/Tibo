"""CLI entry point for the scraper pipeline.

Usage:
    python main.py stage1
    python main.py stage2
    python main.py stage3 --mode selenium   # or --mode static
    python main.py stage4 --mode selenium   # or --mode static
    python main.py stage5                   # needs ANTHROPIC_API_KEY
    python main.py all --mode selenium      # stage1..stage5 end-to-end
"""

import argparse

from pipeline import (
    stage1_team_list,
    stage2_parse_csv,
    stage3_find_recruitment,
    stage4_scrape_pages,
    stage5_summarize,
)


def _run_stage3(mode: str):
    (stage3_find_recruitment.selenium if mode == "selenium" else stage3_find_recruitment.static)()


def _run_stage4(mode: str):
    (stage4_scrape_pages.selenium if mode == "selenium" else stage4_scrape_pages.static)()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "stage",
        choices=["stage1", "stage2", "stage3", "stage4", "stage5", "all"],
    )
    parser.add_argument(
        "--mode",
        choices=["selenium", "static"],
        default="selenium",
        help="Scraping strategy for stages 3 and 4",
    )
    args = parser.parse_args()

    if args.stage == "stage1":
        stage1_team_list.run()
    elif args.stage == "stage2":
        stage2_parse_csv.run()
    elif args.stage == "stage3":
        _run_stage3(args.mode)
    elif args.stage == "stage4":
        _run_stage4(args.mode)
    elif args.stage == "stage5":
        stage5_summarize.run()
    elif args.stage == "all":
        stage1_team_list.run()
        stage2_parse_csv.run()
        _run_stage3(args.mode)
        _run_stage4(args.mode)
        stage5_summarize.run()


if __name__ == "__main__":
    main()
