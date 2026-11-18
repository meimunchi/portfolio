import { useEffect, useState } from "react"
import { projects, resolveAsset, type Project } from "../data/portfolio"

export default function ProjectViewer() {
  const getProjectFromLocation = (): Project | null => {
    if (typeof window === "undefined") return null
    // Check hash first (#/projects/slug or #project-slug)
    const hashMatch = window.location.hash.match(
      /#(?:\/projects\/|project-)([^/?#]+)/,
    )
    if (hashMatch) {
      const found = projects.find((p) => p.slug === hashMatch[1])
      if (found) return found
    }

    // Check pathname fallback (/projects/slug)
    const pathMatch = window.location.pathname.match(/\/projects\/([^/?#]+)/)
    if (pathMatch) {
      const found = projects.find((p) => p.slug === pathMatch[1])
      if (found) return found
    }

    return null
  }

  const [selected, setSelected] = useState<Project | null>(getProjectFromLocation)

  useEffect(() => {
    const handleLocationChange = () => {
      setSelected(getProjectFromLocation())
    }
    window.addEventListener("popstate", handleLocationChange)
    window.addEventListener("hashchange", handleLocationChange)
    return () => {
      window.removeEventListener("popstate", handleLocationChange)
      window.removeEventListener("hashchange", handleLocationChange)
    }
  }, [])

  useEffect(() => {
    if (!selected) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProject()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [selected])

  const closeProject = () => {
    if (window.location.hash) {
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search,
      )
    }
    setSelected(null)
  }

  if (!selected) return null

  return (
    <div
      className="viewer"
      role="dialog"
      aria-modal="true"
      aria-label={`${selected.title} project view`}
    >
      <div className="viewer-bar">
        <p>
          <span>{selected.year}</span> {selected.title}
        </p>
        <button onClick={closeProject} aria-label="Close project">
          Close <span aria-hidden="true">×</span>
        </button>
      </div>

      <div className="viewer-intro">
        <div>
          <p className="eyebrow">{selected.viewerMedium || selected.medium}</p>
          <h2>{selected.viewerTitle || selected.title}</h2>
        </div>
        <p>{selected.viewerDescription || selected.description}</p>
      </div>

      <div className="viewer-gallery">
        {selected.artworks.map((artwork, index) => (
          <figure key={`${artwork.src}-${index}`}>
            <img src={resolveAsset(artwork.src)} alt={artwork.alt} loading="lazy" />
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{artwork.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
