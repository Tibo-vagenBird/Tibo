from pathlib import Path

ROOT = Path(__file__).resolve().parent
REPO_ROOT = ROOT.parent

DATA_RAW = ROOT / "data" / "raw"
DATA_PROCESSED = ROOT / "data" / "processed"

TEAM_LIST_TXT = DATA_RAW / "team_list.txt"
TEAMS_CSV = DATA_PROCESSED / "teams.csv"
RECRUITMENT_PAGES_TXT = DATA_RAW / "recruitment_pages.txt"

# Published artifact consumed by project-teams.html
TEAMS_JSON = REPO_ROOT / "data" / "teams.json"

UBC_DIRECTORY_URL = (
    "https://experience.apsc.ubc.ca/student-groups/engineering-design-teams-list"
)

# "edge" for local Windows dev, "chrome" for Linux CI
SELENIUM_BROWSER = "edge"

HTTP_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0"
    )
}

RECRUITMENT_KEYWORDS = ["recruitment", "join us", "join", "apply"]
EXPAND_KEYWORDS = ["more"]

PAGE_LOAD_WAIT = 3
CLICK_WAIT = 0.5

# Anthropic model used by stage 5 (Claude Haiku 4.5: cheap, fast, capable enough)
ANTHROPIC_MODEL = "claude-haiku-4-5-20251001"
