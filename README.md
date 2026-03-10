# Personal Website v2

A vanilla HTML/CSS/JS portfolio site for an embedded software developer, featuring bilingual support, orbital skill animations, signal waveform canvas, and glassmorphism design — no frameworks or build tools.

## Features

- **Zero dependencies** — Pure HTML, CSS, and JavaScript; no build step
- **Bilingual** — English/Chinese toggle with auto-detection via IP geolocation
- **Dark/Light theme** — Persisted in localStorage
- **Interactive visuals** — Orbital skills animation, animated oscilloscope canvas, dot grid background
- **Responsive** — Mobile hamburger menu, flexible layouts down to small screens

## Sections

| Section | Content |
|---------|---------|
| Hero | Name, title, bio, signal waveform canvas |
| About | Terminal-style profile card |
| Projects | 8052 Reflow Controller, Ulysses Ground Control Station |
| Skills | 7-category orbital animation (Languages, Embedded, Frameworks, etc.) |
| Experience | Timeline — UBC Rocket Ground Control Software Engineer |
| Contact | Email CTA |

## Structure

```
personal-website-v2/
├── index.html    # All markup
├── style.css     # All styling (custom properties, glassmorphism, responsive)
├── script.js     # All logic (i18n, canvas, animations, theme)
└── bg.png        # Hero background
```

## Run Locally

Open `index.html` in a browser. No server or build step needed.

For live reload during development:

```bash
npx serve .
```

## Customization

- **Translations** — Edit the `translations` object in `script.js`
- **Theme colors** — Edit CSS custom properties (`:root` / `[data-theme="light"]`) in `style.css`
- **Projects/Experience** — Edit the corresponding sections directly in `index.html`

## License

© 2026 Bo Ti
