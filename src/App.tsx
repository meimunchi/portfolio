import { useEffect, useState } from "react"

export type Artwork = {
  src: string
  alt: string
  caption: string
}

export type Project = {
  slug: string
  title: string
  year: string
  medium: string
  cardMeta?: string
  description: string
  viewerTitle?: string
  viewerMedium?: string
  viewerDescription?: string
  artworks: Artwork[]
}

export const resolveAsset = (src: string) => {
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src
  }
  const base = import.meta.env.BASE_URL || "/"
  const cleanPath = src.startsWith("/") ? src.slice(1) : src
  return `${base}${cleanPath}`
}

const images = [
  "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1618331833071-ce81bd50d300?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1533208087231-c3618eab623c?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1533157950006-c38844053d55?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1552312097-8ef75595e2a2?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1532640331846-d2da5987c3ee?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1599753894977-bc6c162417e6?auto=format&fit=crop&w=1600&q=85",
]

export type HeroSlide = {
  src: string
  alt: string
  fit?: "contain" | "cover"
}

export const heroSlides: HeroSlide[] = [
  { src: "/images/heroSlides/panda_pg1.PNG", alt: "Panda and Lion", fit: "contain" },
  { src: "/images/heroSlides/panda_pg2.PNG", alt: "Panda and Lion", fit: "contain" },
  { src: "/images/heroSlides/panda_shocked.PNG", alt: "Panda and Lion", fit: "contain" },
  // { src: "/images/heroSlides/panda_uneasy.PNG", alt: "Panda and Lion", fit: "contain" },
  // { src: "/images/heroSlides/panda_walk_classroom.PNG", alt: "Panda and Lion", fit: "contain" },
  { src: "/images/heroSlides/panda_dancing.PNG", alt: "Panda and Lion", fit: "contain" },
]

export const projects: Project[] = [
  {
    slug: "panda-and-lion",
    title: "Panda and Lion",
    year: "May 2026",
    medium: "Silent one-shot manga",
    cardMeta: "Silent one-shot manga: May 2026",
    description: "A story about a girl's first day at school.",
    artworks: [
      {
        src: "/images/heroSlides/panda_pg1.PNG", alt: "Panda and Lion",
        caption:
          "Finished first page - inked and rendered (on Clip Studio Paint)",
      }
    ],
  },
  // {
  //   slug: "the-mailman",
  //   title: "The Mailman",
  //   year: "March 2026",
  //   medium: "Silent one-shot manga",
  //   cardMeta: "Silent one-shot manga: March 2026",
  //   description: "A story about a mailman...and a monster...",
  //   artworks: [
  //     {
  //       src: images[3],
  //       alt: "Warm geometric abstract painting",
  //       caption:
  //         "Built from a small plein-air color sketch, then expanded intuitively in the studio.",
  //     },
  //     {
  //       src: images[4],
  //       alt: "White and red abstract painting",
  //       caption:
  //         "Raw linen remains visible between forms, allowing the painting to breathe.",
  //     },
  //     {
  //       src: images[5],
  //       alt: "Yellow, green and white abstract painting",
  //       caption:
  //         "A brighter study made from memory rather than direct observation.",
  //     },
  //   ],
  // },
  // {
  //   slug: "notes-on-distance",
  //   title: "Notes on Distance",
  //   viewerTitle: "Journey",
  //   year: "2023",
  //   medium: "Mixed media on paper",
  //   viewerMedium: "Mixed media on paper (acrylic paint, colored pencil)",
  //   description:
  //     "Small, immediate works made while moving between places. Each one holds a fragment of landscape without describing it literally.",
  //   viewerDescription:
  //     "A collection of acrylic and colored pencil paintings capturing the journey of a girl through a fantastical world",
  //   artworks: [
  //     {
  //       src: images[6],
  //       alt: "Blue and yellow abstract painting",
  //       caption:
  //         "Oil stick and graphite create a compact map of remembered shapes.",
  //     },
  //     {
  //       src: images[7],
  //       alt: "Yellow, red, green and black abstract painting",
  //       caption:
  //         "A fast composition made in one sitting, preserving every revision.",
  //     },
  //     {
  //       src: images[8],
  //       alt: "Blue, yellow and red abstract painting",
  //       caption:
  //         "The closing piece combines marks collected across the entire series.",
  //     },
  //   ],
  // },
]

function ProjectViewer({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose])

  return (
    <div
      className="viewer"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project view`}
    >
      <div className="viewer-bar">
        <p>
          <span>{project.year}</span> {project.title}
        </p>
        <button onClick={onClose} aria-label="Close project">
          Close <span aria-hidden="true">×</span>
        </button>
      </div>

      <div className="viewer-intro">
        <div>
          <p className="eyebrow">{project.viewerMedium || project.medium}</p>
          <h2>{project.viewerTitle || project.title}</h2>
        </div>
        <p>{project.viewerDescription || project.description}</p>
      </div>

      <div className="viewer-gallery">
        {project.artworks.map((artwork, index) => (
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

export default function App() {
  const getProjectFromLocation = (): Project | null => {
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
  const [heroSlide, setHeroSlide] = useState(0)

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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setInterval(
      () => setHeroSlide((current) => (current + 1) % heroSlides.length),
      5000,
    )
    return () => window.clearInterval(timer)
  }, [])

  const openProject = (project: Project) => {
    window.location.hash = `/projects/${project.slug}`
    setSelected(project)
    window.scrollTo(0, 0)
  }

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

  return (
    <main>
      <header>
        <a className="wordmark" href="#top">
          mei.munchii
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:victoriamsunny@gmail.com">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-slideshow">
          <img
            key={heroSlide}
            className={`hero-slide-image hero-fit-${heroSlides[heroSlide].fit ?? "contain"}`}
            src={resolveAsset(heroSlides[heroSlide].src)}
            alt={heroSlides[heroSlide].alt}
          />
          <p className="hero-label">Manga/comic artist, 2-d illustrator</p>
          <a className="text-link hero-project-link" href="#work">
            View Projects <span aria-hidden="true">↓</span>
          </a>
          <div className="slide-controls">
            <button
              onClick={() =>
                setHeroSlide(
                  (heroSlide - 1 + heroSlides.length) % heroSlides.length,
                )
              }
              aria-label="Previous artwork"
            >
              ←
            </button>
            <span>
              {String(heroSlide + 1).padStart(2, "0")} /{" "}
              {String(heroSlides.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => setHeroSlide((heroSlide + 1) % heroSlides.length)}
              aria-label="Next artwork"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected projects</p>
          <p>01—03</p>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <a
              className="project-card"
              href={`#/projects/${project.slug}`}
              onClick={(event) => {
                event.preventDefault()
                openProject(project)
              }}
              key={project.slug}
            >
              <div className="project-image">
                <img src={resolveAsset(project.artworks[0].src)} alt={project.title} />
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="view-mark" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="project-meta">
                <h2>{project.title}</h2>
                <p>
                  {project.cardMeta ?? (
                    <>
                      {project.medium}
                      <br />
                      {project.year}
                    </>
                  )}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">Contact me</p>
        <p className="contact-statement">
          For commissions, inquiries, questions, or if you want to chat, send me an email!
        </p>
        <div className="contact-detail">
          <a className="text-link" href="mailto:victoriamsunny@gmail.com">
            victoriamsunny@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 mei.munchii</p>
        <div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      {selected && <ProjectViewer project={selected} onClose={closeProject} />}
    </main>
  )
}
