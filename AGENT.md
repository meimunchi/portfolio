# Agent Guidelines & Repository Architecture

> **CRITICAL AGENT DIRECTIVE**:
> When working in this repository, **ONLY read this file (`AGENT.md`) and [`README.md`](README.md)**.
> **DO NOT** perform broad directory scans, recursive file searches, or extraneous reads unless specifically directed by the user. Move fast, execute changes directly, and minimize token / computational overhead.

---

## 1. Quick Summary

- **Project**: Artist portfolio for **mei.munchii** (Victoria).
- **Domain**: Showcases manga, comics, and 2-D illustration projects.
- **Tone & Style**: Editorial, minimalist, clean typography (`Italiana` headings, `DM Sans` body).
- **Contact / Socials**: Email (`victoriamsunny@gmail.com`) and Instagram links in the top header and footer.

---

## 2. Architecture & File Structure

This repository is intentionally lightweight and centralized:

- **[`src/App.tsx`](src/App.tsx)**:
  - Contains all data arrays:
    - `heroSlides`: Carousel slides for the top hero section.
    - `projects`: Artwork metadata, descriptions, years, media types, and child artworks for the portfolio.
  - Contains all page components:
    - `<header>`: Wordmark brand, logo, navigation links (`Work`, `Contact`), and Instagram icon.
    - `<section className="hero">`: Interactive slideshow with auto-scroll and manual controls.
    - `<section className="work">`: Projects grid.
    - `<section className="contact">`: Contact section with email link.
    - `<footer>`: Copyright, back-to-top, and Instagram link.
    - `<ProjectViewer>`: Fullscreen modal gallery with escape-key handler and URL hash synchronization (`#/projects/<slug>`).
  - Helper functions: `resolveAsset()` handles asset base paths cleanly.
- **[`src/index.css`](src/index.css)**:
  - Global styles, typography imports, and animations.
  - Tailwind v4 `@import "tailwindcss";` integration.
  - Responsive design breakpoints (notably `@media (max-width: 800px)` for mobile layout).
- **[`scripts/convert-images.mjs`](scripts/convert-images.mjs)**:
  - Art protection and performance tool: converts raw exports to WebP and bounds dimensions to 1200px max edge.
- **[`public/images/`](public/images/)**:
  - Image assets structured by project (`mailman/`, `heroSlides/`, `illustrations/`, `panda_and_lion_additional/`).

---

## 3. Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript (`tsc -b && vite build`)
- **Styling**: Tailwind CSS v4 + custom CSS in `src/index.css`
- **Image Processing**: `sharp` via `node scripts/convert-images.mjs`

---

## 4. Key Workflows & Commands

- **Development server**: `npm run dev`
- **Type check & build**: `npm run build`
- **Optimize images**: `npm run convert-images -- public/images/<folder_name>`
