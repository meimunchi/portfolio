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

## Adding Your Own Artwork

To update or add your artworks:
1. Place image files in `public/images/` or import them in `src/App.tsx`.
2. Update the `projects` array in `src/App.tsx` with your project titles, descriptions, year, medium, and artwork captions.