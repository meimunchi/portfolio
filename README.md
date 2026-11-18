# mei.munchii — Artist Portfolio

A minimalist, editorial portfolio website showcasing manga, comics, and 2-D illustration work. Built with **Astro JS**, React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Hero Gallery & Expanded View**: Responsive multi-column artwork gallery with a full-screen lightbox modal, keyboard navigation (`Escape`, arrow keys), and direct project links.
- **Projects Grid**: Selected manga and art projects with hover interactions and metadata tags.
- **Project Detail Reader Modal**: Immersive gallery viewer displaying high-resolution artworks with individual captions, keyboard navigation (`Escape` to close), and route synchronization (`#/projects/:slug`).
- **Social Integration**: Direct header and footer links to Instagram and contact email.
- **Zero Client JS by Default**: Static sections (header, projects, contact, footer) render as lightweight HTML, while interactive modals run as optimized React islands.
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop screens with reduced motion support.
- **Customizable**: Centralized data structure in `src/data/portfolio.ts` for updating gallery items, manga projects, captions, and links.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Development

Run the Astro development server:

```bash
npm run dev
```

Open your browser at the local URL (typically `http://localhost:4321`).

### Production Build & Type Check

Type-check and create an optimized static build in the `dist/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/                 # Static assets (images, favicon, etc.)
│   └── images/             # Manga & illustration folders (mailman, heroSlides, etc.)
├── src/
│   ├── components/         # Astro & React components
│   │   ├── Header.astro    # Navigation, brand wordmark, logo & Instagram icon
│   │   ├── HeroGallery.tsx # Hero gallery grid + interactive lightbox modal
│   │   ├── Projects.astro  # Static projects grid
│   │   ├── ProjectViewer.tsx # Fullscreen manga/illustration viewer
│   │   ├── Contact.astro   # Contact statement and email
│   │   └── Footer.astro    # Copyright, Instagram & back-to-top links
│   ├── data/
│   │   └── portfolio.ts    # Centralized portfolio data & TypeScript types
│   ├── layouts/
│   │   └── Layout.astro    # Base HTML document shell with fonts & SEO tags
│   ├── pages/
│   │   └── index.astro     # Main homepage assembling all components
│   └── index.css           # Typography, global styles, animations & Tailwind v4
├── astro.config.mjs        # Astro configuration & React / Tailwind plugins
└── package.json
```

## Adding & Optimizing Artwork

To protect your original art from high-resolution theft/unauthorized printing and keep the website loading fast, convert your raw exports (PNG/JPEG) into optimized **WebP** format using the built-in helper script.

### Image Optimization Helper

You can convert an entire folder (including all subfolders) or specific image files:

```bash
# Convert an entire folder and all its subfolders recursively:
npm run convert-images -- public/images/panda_and_lion_additional

# Convert specific individual image files:
npm run convert-images -- public/images/art1.png public/images/art2.jpeg

# Custom max dimension (default: 1200px) and quality (default: 80%):
npm run convert-images -- public/images/heroSlides --max-size 1400 --quality 85

# Keep the original files alongside the new .webp files:
npm run convert-images -- public/images/sketches --keep-original
```

#### What the helper does:
1. **Resolution Throttling (Art Protection):** Downscales images so their longest edge does not exceed 1200px (customizable with `--max-size`). Images already smaller than this are never upscaled. This ensures artworks look crisp on Retina and 4K displays while preventing high-resolution physical printing.
2. **WebP Compression:** Compresses images using high-efficiency WebP (default quality 80%), reducing file size by 85–95% without visible visual loss.
3. **Replaces Originals:** Automatically deletes the heavy original files after successful conversion (unless `--keep-original` is passed).

---

## Adding Your Own Artwork

To update or add your artworks:
1. Place image files in `public/images/`.
2. Run `npm run convert-images -- public/images/<folder_name>` to optimize them.
3. Update `src/data/portfolio.ts`:
   - Add items to `galleryArtworks` for the top Hero Gallery.
   - Add or modify projects in the `projects` array with your image paths (using `.webp`), titles, descriptions, year, medium, and artwork captions.
