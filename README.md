# Motion Animate Web

A personal portfolio built as a hands-on playground for learning **Framer Motion** (`motion` package) in depth — every section exists primarily to explore a different animation technique, from scroll-linked transforms to spring physics and interactive hover states.

** LIVE DEMO ** ----> https://portfolio-animation-weld.vercel.app/#

The design that inspired me for this project is: https://www.wallofportfolios.in/portfolios/viha-shah/

---

## About the project

This isn't just a portfolio — it's a learning log. Instead of following a single tutorial, each section of the site was built to force a specific Framer Motion concept: `useScroll` + `useTransform` for scroll-linked storytelling, `variants` for coordinated hover states, `useSpring` for physics-based motion, and `AnimatePresence` for state-driven transitions. The result is a site that's equal parts "finished product" and "personal animation reference sheet."

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite](https://vite.dev/) |
| Animation | [Motion (Framer Motion)](https://motion.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Smooth scrolling | [Lenis](https://lenis.darkroom.engineering/) |
| Icons | [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/) |
| Utilities | [tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| Linting | ESLint 10 |

## Sections & Animation Highlights

- **Navbar** — responsive navigation with a mobile hamburger menu.
- **Hero** — parallax floating images combined with staggered entrance animations (`variants`, `staggerChildren`).
- **TimeRoundel** — an infinite auto-scrolling brand/logo slider.
- **Featured** — scroll-driven parallax image reveals.
- **Logofolio** — a logo showcase grid with subtle motion.
- **About Me** — the most animation-dense section:
  - A 3D board-game box that opens toward the viewer on hover (`rotateX`, `transformOrigin`, `perspective`), with three game covers fanning out above it.
  - A draggable "fridge magnet" tool tray with hover-triggered fan-out positioning.
  - A tap-to-swap profile photo with spring-based slide transitions (`AnimatePresence`-style phase machine).
- **Archive** — a sticky, scroll-linked horizontal gallery: images slide on the X-axis as the page scrolls, while a paper airplane image drops in diagonally from the corner, complete with a silhouette-matched "landing shadow" that closes its gap and fades on touchdown — independent scroll ranges keep the diagonal and horizontal motions from feeling tied to the same finish line.
- **Scroll Color Text** — a per-word scroll-linked color reveal, where each word gets its own `useTransform` range so color "follows" the scroll position across a paragraph.
- **Contact** — a sticky note that jumps to a new predefined position with a new joke each time the cursor catches up to it, built on discrete `animate` targets rather than continuous cursor tracking.

## Getting Started

```bash
# clone the repo
git clone https://github.com/<your-username>/Motion-Animate-Web.git
cd Motion-Animate-Web

# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build
```

## Why this project exists

I'm a frontend developer learning React, TypeScript, and motion design in depth. Rather than isolated demos, I wanted every animation technique to live inside one real, cohesive site — so each section doubles as both a portfolio piece and a personal reference for "how did I do that scroll effect again?"

## License

This project is for personal/portfolio use. Feel free to browse the code for learning purposes.
