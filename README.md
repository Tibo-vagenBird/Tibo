# tibosaqira.org

In Mongolian, *Tibo* speaks of the center — vast, quiet, a word that reaches toward something it cannot quite hold. An ambition without edges, a room without walls.

*Saqira* is light. Not the light that follows, but the light that completes — the warmth that turns an endless space into a place worth standing in.

Two names, brother and sister, given by the same family and joined here into one word. Together they are whole.

---

A personal portfolio for an embedded software developer, hand-built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies.

## Features

- **Bilingual** — Full English and Chinese support with a one-click toggle. Language is auto-detected on first visit via IP geolocation.
- **Dark / Light theme** — Switchable from the navbar, persisted across sessions in localStorage.
- **Responsive** — Adapts from desktop to mobile with a collapsible hamburger menu.

## Sections

- **Hero** — An animated oscilloscope canvas draws sine and square waveforms behind the introduction, reflecting the embedded systems theme.
- **About** — A terminal-style profile card that types itself out line by line.
- **Projects** — Featured work including the 8052 Reflow Controller (pure Assembly, FSM architecture) and the Ulysses Ground Control Station (Qt Quick C++/QML for UBC Rocket).
- **Skills** — Seven skill categories orbit in a 3D-like ring animation, auto-cycling every five seconds. Hover to pause and inspect. Categories span languages, embedded techniques, frameworks, scripting, dev tools, CAD, and lab equipment.
- **Experience** — A vertical timeline with animated entries.
- **Contact** — Direct email link.

## Tech

- **Canvas API** — Dot grid background and signal waveform visualization, GPU-accelerated via requestAnimationFrame.
- **CSS custom properties** — All theming driven by variables, with glassmorphism card effects and smooth cubic-bezier transitions.
- **IntersectionObserver** — Scroll-triggered reveal animations with directional staggering.
- **Zero external JS** — All logic (i18n, theme, canvas, orbital animation) in a single `script.js`.

## Structure

```
├── index.html    # Markup
├── style.css     # Styling
├── script.js     # Logic
└── bg.png        # Hero background
```

## Run Locally

Open `index.html` in a browser. For live reload:

```bash
npx serve .
```

[www.tibosaqira.org](https://www.tibosaqira.org)

© 2026 Bo Ti
