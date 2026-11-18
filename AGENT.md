# Agent Guidelines & Repository Architecture

> **CRITICAL AGENT DIRECTIVE**:
> When working in this repository, **ONLY read this file (`AGENT.md`) and [`README.md`](README.md)**.
> **DO NOT** perform broad directory scans, recursive file searches, or extraneous reads unless specifically directed by the user. Move fast, execute changes directly, and minimize token / computational overhead.

---

## 1. Quick Summary

- **Project**: Artist portfolio for **mei.munchii** (Victoria).
- **Framework**: **Astro JS** with `@astrojs/react` Islands and Tailwind CSS v4.
- **Domain**: Showcases manga, comics, and 2-D illustration projects.
- **Tone & Style**: Editorial, minimalist, clean typography (`Italiana` headings, `DM Sans` body).
- **Contact / Socials**: Email (`victoriamsunny@gmail.com`) and Instagram links in the top header and footer.

---

## 2. Architecture & File Structure

This repository uses Astro's Islands Architecture:

- **[`src/pages/index.astro`](src/pages/index.astro)**:
  - Main landing page. Assembles static Astro components with interactive React islands.
- **[`src/layouts/Layout.astro`](src/layouts/Layout.astro)**:
  - Base HTML shell with fonts (`Italiana`, `DM Sans`), meta tags, favicon, and global styles.
- **[`src/data/portfolio.ts`](src/data/portfolio.ts)**:
  - Central data module containing:
    - `galleryArtworks`: Artworks featured in the Hero Gallery.
    - `projects`: Artwork metadata, descriptions, years, media types, and page artworks for manga projects.
    - `INSTAGRAM_URL`: Social profile link.
    - `resolveAsset()`: Helper function handling GitHub Pages / Vite base path URLs.
- **Static Components (Zero Client JS)**:
  - **[`src/components/Header.astro`](src/components/Header.astro)**: Brand wordmark, logo, navigation links (`Work`, `Contact`), and Instagram icon.
  - **[`src/components/Projects.astro`](src/components/Projects.astro)**: Projects grid (`01—03`) linking to `#/projects/<slug>`.
  - **[`src/components/Contact.astro`](src/components/Contact.astro)**: Contact statement and email link.
  - **[`src/components/Footer.astro`](src/components/Footer.astro)**: Copyright, back-to-top, and Instagram link.
- **Interactive React Islands (`client:load` / `client:idle`)**:
  - **[`src/components/HeroGallery.tsx`](src/components/HeroGallery.tsx)**:
    - Responsive multi-column gallery grid.
    - Lightbox expanded view modal with `Escape` / arrow key navigation, counter (`01 / 09`), caption, and direct "View Project" link.
  - **[`src/components/ProjectViewer.tsx`](src/components/ProjectViewer.tsx)**:
    - Fullscreen manga/illustration reader modal synchronized with URL hash (`#/projects/<slug>`).
- **[`src/index.css`](src/index.css)**:
  - Global styles, typography, animations, Tailwind v4 `@import "tailwindcss";`, and mobile media queries (`@media (max-width: 800px)` and `@media (max-width: 550px)`).
- **[`astro.config.mjs`](astro.config.mjs)**:
  - Configures `@astrojs/react`, `@tailwindcss/vite`, path aliases (`@/*`), and production base path (`/portfolio/`).
- **[`scripts/convert-images.mjs`](scripts/convert-images.mjs)**:
  - Image optimization tool (sharp): downscales to 1200px max edge and converts to WebP.
- **[`public/images/`](public/images/)**:
  - Project images and hero artworks.

---

## 3. Tech Stack

- **Framework**: Astro JS (v5+)
- **Interactive UI**: React 19 (`@astrojs/react`)
- **Styling**: Tailwind CSS v4 + custom CSS in `src/index.css`
- **Language**: TypeScript (`astro check && astro build`)
- **Image Processing**: `sharp` via `node scripts/convert-images.mjs`

---

## 4. Key Workflows & Commands

- **Development server**: `npm run dev` (`astro dev`)
- **Type check & production build**: `npm run build` (`astro check && astro build`)
- **Preview production build**: `npm run preview` (`astro preview`)
- **Optimize images**: `npm run convert-images -- public/images/<folder_name>`
