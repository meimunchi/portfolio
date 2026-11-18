import { useState, useEffect } from "react"
import { galleryArtworks, resolveAsset, type GalleryArtwork } from "../data/portfolio"

export default function HeroGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const activeArtwork: GalleryArtwork | null =
    selectedIndex !== null ? galleryArtworks[selectedIndex] : null

  // Keyboard navigation for expanded modal
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null)
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + galleryArtworks.length) % galleryArtworks.length : null,
        )
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % galleryArtworks.length : null,
        )
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex])

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const navigatePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + galleryArtworks.length) % galleryArtworks.length : null,
    )
  }

  const navigateNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryArtworks.length : null,
    )
  }

  const goToProject = (projectSlug: string) => {
    setSelectedIndex(null)
    window.location.hash = `/projects/${projectSlug}`
  }

  return (
    <section className="hero-gallery-section" id="top">
      <div className="hero-gallery-bar">
        <p className="eyebrow">Featured Artworks</p>
        <p className="hero-gallery-note">Click any artwork to expand view</p>
      </div>

      <div className="hero-gallery-grid">
        {galleryArtworks.map((artwork, index) => (
          <button
            key={artwork.id}
            type="button"
            className="gallery-card"
            onClick={() => openLightbox(index)}
            aria-label={`Expand view of ${artwork.title}`}
          >
            <div className="gallery-card-media">
              <img
                src={resolveAsset(artwork.src)}
                alt={artwork.alt}
                loading={index < 4 ? "eager" : "lazy"}
              />
              <span className="gallery-expand-cue" aria-hidden="true">
                ⤢
              </span>
              <span className="gallery-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="gallery-card-info">
              <span className="gallery-card-title">{artwork.title}</span>
              {artwork.projectTitle && (
                <span className="gallery-card-project">
                  {artwork.projectTitle}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Expanded View Lightbox Modal */}
      {activeArtwork && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeArtwork.title}
          onClick={closeLightbox}
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="lightbox-top-bar">
              <div className="lightbox-counter">
                <span>{String((selectedIndex ?? 0) + 1).padStart(2, "0")}</span> /{" "}
                {String(galleryArtworks.length).padStart(2, "0")}
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close expanded view"
              >
                Close <span aria-hidden="true">×</span>
              </button>
            </div>

            {/* Main Image Stage */}
            <div className="lightbox-stage">
              <button
                type="button"
                className="lightbox-nav-btn prev"
                onClick={navigatePrev}
                aria-label="Previous artwork"
              >
                ←
              </button>

              <div className="lightbox-image-wrap">
                <img
                  src={resolveAsset(activeArtwork.src)}
                  alt={activeArtwork.alt}
                  className="lightbox-image"
                />
              </div>

              <button
                type="button"
                className="lightbox-nav-btn next"
                onClick={navigateNext}
                aria-label="Next artwork"
              >
                →
              </button>
            </div>

            {/* Bottom Caption & Project Action */}
            <div className="lightbox-footer">
              <div className="lightbox-meta">
                <h3>{activeArtwork.title}</h3>
                {activeArtwork.caption && <p>{activeArtwork.caption}</p>}
              </div>

              {activeArtwork.projectSlug && (
                <button
                  type="button"
                  className="lightbox-project-action"
                  onClick={() => goToProject(activeArtwork.projectSlug!)}
                >
                  View Full "{activeArtwork.projectTitle}" Project <span aria-hidden="true">↗</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
