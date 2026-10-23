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
  cardFit?: "contain" | "cover"
  cardAspectRatio?: string
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

export type HeroSlide = {
  src: string
  alt: string
  project?: string
  fit?: "contain" | "cover"
}

export const heroSlides: HeroSlide[] = [
  { src: "/images/heroSlides/panda_pg1.webp", alt: "Panda and Lion", project: "Panda and Lion", fit: "contain" },
  { src: "/images/heroSlides/panda_pg2.webp", alt: "Panda and Lion", project: "Panda and Lion", fit: "contain" },
  { src: "/images/mailman/finished_pages/edge_of_cliff.webp", alt: "The Mailman", project: "The Mailman", fit: "contain" },
  { src: "/images/illustrations/chess.webp", alt: "Journey: Chess", project: "Journey", fit: "contain" },
  { src: "/images/mailman/finished_pages/run_up_hill.webp", alt: "The Mailman", project: "The Mailman", fit: "contain" },
  { src: "/images/mailman/finished_pages/pg16.webp", alt: "The Mailman", project: "The Mailman", fit: "contain" },
  { src: "/images/heroSlides/panda_shocked.webp", alt: "Panda and Lion", project: "Panda and Lion", fit: "contain" },
  // { src: "/images/heroSlides/panda_uneasy.webp", alt: "Panda and Lion", fit: "contain" },
  // { src: "/images/heroSlides/panda_walk_classroom.webp", alt: "Panda and Lion", fit: "contain" },
  { src: "/images/heroSlides/panda_dancing.webp", alt: "Panda and Lion", project: "Panda and Lion", fit: "contain" },
  { src: "/images/illustrations/sleep.webp", alt: "Journey: Sleep", project: "Journey", fit: "contain" },
]

export const projects: Project[] = [
  {
      slug: "the-mailman",
      title: "The Mailman",
      year: "March 2026",
      medium: "Silent one-shot manga",
      cardMeta: "Silent one-shot manga: March 2026",
      description: "This is a story about a mailman who really does not like being a mailman. This was my very first manga, and it took me so much time. I had to get used to panelling, storyboarding, inking, and rendering. I'm not sure I did the story complete justice! But I'm still proud for having drawn this, and it was a great learning experience for my future works.",
      artworks: [
        {
          src: "/images/mailman/finished_pages/pg1.webp", alt: "Mailman pg 1",
          caption:
            "Finished first page - inked and rendered (on Clip Studio Paint). Fun fact: I rendered this page 3 times because I couldn't get it to have the right look. In the end, I think it turned out ok.",
        },
        {
          src: "/images/mailman/sketches/Mailman-pg7-8-notes_001.webp", alt: "Mailman running",
          caption: "Since this was my first manga, I was still trying to figure out my process. Directly jumping into storyboarding with panels intimidated me. To get over that, I started with notes. These covered 1. What will happen on these 2 pages? and 2. What sort of panels could I have to show that? This gave me an arsenal of panels that I could then piece together."
        },
        {
          src: "/images/mailman/sketches/Mailman-running-initial-sketch_001.webp", alt: "Mailman running",
          caption: "I ran through many drafts with this project, with a significant amount of revision. For example, this was one of the initial storyboard sketches for a scene in which the main character runs up the mountain. After having this revision peer reviewed, I realized this scene was way too long (he runs for an entire page!) To fit in other story elements that were more important, I ended up cutting the scene (see below)."
        },
        {
          src: "/images/mailman/sketches/Mailman-running-sketch-ink_001.webp", alt: "Mailman running",
          caption: "In this rough sketched and partially inked version, I condensed the two pages down into one, while still capturing the intial feeling of urgency and tiredness I wanted to convey."
        },
        {
          src: "/images/mailman/finished_pages/run_up_hill.webp", alt: "Mailman running",
          caption: "After scanning the above page, I finished rendering and touch ups on Clip Studio paint, and this was the final page."
        },
        {
          src: "/images/mailman/sketches/Mailman-reveal-sketch_001.webp", alt: "Mailman opening box",
          caption: "One thing I learned was to give certain parts of the page more focus than others, depending on what I found to be more important. For this page, I spent a lot more time on the panel in which the main character gets flung away from the mailbox with a bang, as well as his scared expression afterwards. "
        },
        {
          src: "/images/mailman/finished_pages/monster_reveal.webp", alt: "Mailman running",
          caption: "This project spanned several months of work (though some of that was spent ramping up on processes and technology). Looking back, it was a touch but fulfilling time. I can definitely see many flaws and things I want to improve in, but I'll leave that for my future works!"
        },

      ]
  },
  {
    slug: "panda-and-lion",
    title: "Panda and Lion",
    year: "May 2026",
    medium: "Silent one-shot manga",
    cardMeta: "Silent one-shot manga: May 2026",
    description: "A story about a girl's first day at school. This was my second ever manga. It was created originally to submit in Silent Manga Audition 24 \"Letters\". For this manga, I wanted to focus on the characters' expressions and body language to show their personalities.",
    artworks: [
      {
        src: "/images/heroSlides/panda_pg1.webp", alt: "Panda and Lion",
        caption:
          "Finished first page - inked and rendered (on Clip Studio Paint). On the first page, I wanted to give a peek into the main character's boisterous and outgoing personality, without having to show her face. Her body language conveys her excitement.",
      },
      {
        src: "/images/panda_and_lion_additional/character_designs/girl_2.webp", alt: "girl2characterdesign",
        caption: "In the initial character designs, I created a girl who is very expressive. She's an open book."
      },
      {
        src: "/images/panda_and_lion_additional/character_designs/girl_1.webp", alt: "girl1characterdesign",
        caption: "Though she is usually cheerful, I also explored expressions of worry and sadness."
      },
      {
        src: "/images/panda_and_lion_additional/storyboard.webp", alt: "storyboard",
        caption: "Afterwards, I started with storyboarding, trying to focus on clear and easily followable panel structure."
      },
      {
        src: "/images/panda_and_lion_additional/sketches/sketch_pg1.webp", alt: "sketch1",
        caption: "I grew up a traditional artist, so I feel like drawing on pencil and paper gives me the best results. Because of this, I started with sketches on paper, then scanned in the sketches later to do inking and rendering on Clip Studio Paint. These are rough sketches of the first page."
      },
      {
        src: "/images/panda_and_lion_additional/clip_studio_finals.webp", alt: "storyboard",
        caption: "This project took me two weeks. I had originally only planned to submit one entry (\"The Mailman\") to SMA 24. However, I finished early and wanted to push myself to create something more challenging. It was definitely a learning curve allocating enough time for all the individual steps in the process, and nothing's more fun (and relieving) than seeing the end product."
      },
    ],
  },
  {
    slug: "journey-illustrations",
    title: "Journey",
    year: "2025",
    medium: "Mixed media on paper (acrylic paint, colored pencil)",
    cardMeta: "Mixed media: 2025",
    cardFit: "contain",
    description: "A collection of acrylic and colored pencil paintings capturing the journey of a girl through a fantastical world.",
    artworks: [
      {
        src: "/images/illustrations/sleep.webp", alt: "Journey illustration",
        caption:
          "Sleep illustration from the Journey series. We are introduced to a girl who is sleeping peacefully, observed by a strange creature.",
      },
      {
        src: "/images/illustrations/travel.webp", alt: "Journey illustration",
        caption:
          "Travel illustration from the Journey series. The creature and the girl travel.",
      },
      {
        src: "/images/illustrations/pufferfish_1.webp", alt: "Journey illustration",
        caption:
          "The girl finds a pufferfish and reaches towards it. What does she want with it?",
      },
      {
        src: "/images/illustrations/pufferfish_2.webp", alt: "Journey illustration",
        caption:
          "The creature helps the girl capture the pufferfish.",
      },
      {
        src: "/images/illustrations/chess.webp", alt: "Journey illustration",
        caption:
          "In bargain for its freedom, the pufferfish challenges the girl to a game of chess!",
      },
    ]
  },
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
    if (selected) return

    const timer = window.setTimeout(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length)
    }, 10000)

    return () => window.clearTimeout(timer)
  }, [heroSlide, selected])

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
          <span>mei.munchii</span>
          <img
            src={resolveAsset("/images/logo.webp")}
            alt="mei.munchii logo"
            className="wordmark-logo"
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
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
          <div className="hero-project-group">
            <a
              className="hero-project-tag"
              href="#work"
              title={`View ${heroSlides[heroSlide].project ?? heroSlides[heroSlide].alt} project`}
              onClick={(e) => {
                const currentProj = heroSlides[heroSlide].project || heroSlides[heroSlide].alt
                const matching = projects.find(
                  (p) => p.title.toLowerCase() === currentProj.toLowerCase(),
                )
                if (matching) {
                  e.preventDefault()
                  openProject(matching)
                }
              }}
            >
              "{heroSlides[heroSlide].project ?? heroSlides[heroSlide].alt}" Project
            </a>
            <a className="text-link hero-project-link" href="#work">
              View All Projects <span aria-hidden="true">↓</span>
            </a>
          </div>
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
          <div className="hero-progress-track" aria-hidden="true">
            {!selected && <div key={heroSlide} className="hero-progress-bar" />}
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
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
              <div className={`project-image ${project.cardFit === "contain" ? "is-contain" : ""}`}>
                <img
                  src={resolveAsset(project.artworks[0].src)}
                  alt={project.title}
                  className={`project-image-img ${project.cardFit === "contain" ? "fit-contain" : "fit-cover"}`}
                  style={project.cardAspectRatio ? { aspectRatio: project.cardAspectRatio } : undefined}
                />
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

      <section className="contact" id="contact">
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
