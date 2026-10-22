# mei.munchii — Artist Portfolio

A minimalist, editorial portfolio website showcasing manga, comics, and 2-D illustration work. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Features

- **Hero Slideshow**: Dynamic artwork carousel with smooth transitions and manual next/previous navigation.
- **Projects Grid**: Selected manga and art projects with hover interactions and metadata tags.
- **Project Detail Modal**: Immersive gallery viewer displaying high-resolution artworks with individual captions, keyboard navigation (`Escape` to close), and route synchronization.
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop screens with reduced motion support.
- **Customizable**: Clean data structure in `src/App.tsx` for updating projects, bio, images, and contact links.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Development

Run the local development server:

```bash
npm run dev
```

Open your browser at the local URL (typically `http://localhost:5173`).

### Production Build

Create an optimized static build in the `dist` folder:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── App.tsx          # Main portfolio layout, project data, and project viewer
│   ├── index.css        # Typography, global styles, animations & Tailwind v4
│   ├── main.tsx         # React root entry point
│   └── vite-env.d.ts    # Vite TypeScript declarations
├── index.html           # HTML shell & SEO metadata
├── vite.config.ts       # Vite & Tailwind configuration
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
3. Update the `projects` or `heroSlides` arrays in `src/App.tsx` with your image paths (using `.webp`), titles, descriptions, year, medium, and artwork captions.