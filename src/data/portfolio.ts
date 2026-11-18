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

export type GalleryArtwork = {
  id: string
  src: string
  title: string
  alt: string
  caption?: string
  projectSlug?: string
  projectTitle?: string
  fit?: "contain" | "cover"
  aspectRatio?: string
}

export const INSTAGRAM_URL = "https://instagram.com"

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

export const galleryArtworks: GalleryArtwork[] = [
  {
    id: "panda-pg1",
    src: "/images/heroSlides/panda_pg1.webp",
    title: "Panda and Lion — Page 1",
    alt: "Panda and Lion Page 1",
    caption: "Finished first page from 'Panda and Lion', an expressive silent manga one-shot.",
    projectSlug: "panda-and-lion",
    projectTitle: "Panda and Lion",
    fit: "contain",
  },
  {
    id: "mailman-cliff",
    src: "/images/mailman/finished_pages/edge_of_cliff.webp",
    title: "The Mailman — Edge of Cliff",
    alt: "The Mailman on cliff",
    caption: "Dramatic cliffside vista from 'The Mailman' silent manga.",
    projectSlug: "the-mailman",
    projectTitle: "The Mailman",
    fit: "contain",
  },
  {
    id: "journey-chess",
    src: "/images/illustrations/chess.webp",
    title: "Journey: Chess",
    alt: "Journey: Chess illustration",
    caption: "A game of chess with the pufferfish in bargain for its freedom. Acrylic & colored pencil.",
    projectSlug: "journey-illustrations",
    projectTitle: "Journey",
    fit: "contain",
  },
  {
    id: "panda-pg2",
    src: "/images/heroSlides/panda_pg2.webp",
    title: "Panda and Lion — Page 2",
    alt: "Panda and Lion Page 2",
    caption: "Second page exploration focusing on subtle comedic timing and character reactions.",
    projectSlug: "panda-and-lion",
    projectTitle: "Panda and Lion",
    fit: "contain",
  },
  {
    id: "mailman-run",
    src: "/images/mailman/finished_pages/run_up_hill.webp",
    title: "The Mailman — Running Up Hill",
    alt: "The Mailman running uphill",
    caption: "Final inked and rendered page depicting the exhausted mailman ascending the mountain.",
    projectSlug: "the-mailman",
    projectTitle: "The Mailman",
    fit: "contain",
  },
  {
    id: "panda-dancing",
    src: "/images/heroSlides/panda_dancing.webp",
    title: "Panda and Lion — Dancing",
    alt: "Panda and Lion dancing",
    caption: "Joyous character animation study showcasing expressive body language.",
    projectSlug: "panda-and-lion",
    projectTitle: "Panda and Lion",
    fit: "contain",
  },
  {
    id: "journey-sleep",
    src: "/images/illustrations/sleep.webp",
    title: "Journey: Sleep",
    alt: "Journey: Sleep illustration",
    caption: "Peaceful forest scene with a curious creature watching over the sleeping traveler.",
    projectSlug: "journey-illustrations",
    projectTitle: "Journey",
    fit: "contain",
  },
  {
    id: "mailman-pg16",
    src: "/images/mailman/finished_pages/pg16.webp",
    title: "The Mailman — Delivery",
    alt: "The Mailman delivery",
    caption: "Climactic story panel as the mystery of the mailbox unfolds.",
    projectSlug: "the-mailman",
    projectTitle: "The Mailman",
    fit: "contain",
  },
  {
    id: "panda-shocked",
    src: "/images/heroSlides/panda_shocked.webp",
    title: "Panda and Lion — Shocked",
    alt: "Panda and Lion shocked expression",
    caption: "Exaggerated facial expressions and manga speedlines.",
    projectSlug: "panda-and-lion",
    projectTitle: "Panda and Lion",
    fit: "contain",
  },
]

export const projects: Project[] = [
  {
    slug: "the-mailman",
    title: "The Mailman",
    year: "March 2026",
    medium: "Silent one-shot manga",
    cardMeta: "Silent one-shot manga: March 2026",
    description: "This is a story about a mailman who really does not like being a mailman. It was created originally to submit in Silent Manga Audition 24 \"Letters\". This was my very first manga, and it took me so much time. I had to get used to panelling, storyboarding, inking, and rendering. I'm not sure I did the story complete justice! But I'm still proud for having drawn this, and it was a great learning experience for my future works.",
    artworks: [
      {
        src: "/images/mailman/finished_pages/pg1.webp",
        alt: "Mailman pg 1",
        caption: "Finished first page - inked and rendered (on Clip Studio Paint). Fun fact: I rendered this page 3 times because I couldn't get it to have the right look. In the end, I think it turned out ok.",
      },
      {
        src: "/images/mailman/sketches/Mailman-pg7-8-notes_001.webp",
        alt: "Mailman running",
        caption: "Since this was my first manga, I was still trying to figure out my process. Directly jumping into storyboarding with panels intimidated me. To get over that, I started with notes. These covered 1. What will happen on these 2 pages? and 2. What sort of panels could I have to show that? This gave me an arsenal of panels that I could then piece together.",
      },
      {
        src: "/images/mailman/sketches/Mailman-running-initial-sketch_001.webp",
        alt: "Mailman running",
        caption: "I ran through many drafts with this project, with a significant amount of revision. For example, this was one of the initial storyboard sketches for a scene in which the main character runs up the mountain. After having this revision peer reviewed, I realized this scene was way too long (he runs for an entire page!) To fit in other story elements that were more important, I ended up cutting the scene (see below).",
      },
      {
        src: "/images/mailman/sketches/Mailman-running-sketch-ink_001.webp",
        alt: "Mailman running",
        caption: "In this rough sketched and partially inked version, I condensed the two pages down into one, while still capturing the intial feeling of urgency and tiredness I wanted to convey.",
      },
      {
        src: "/images/mailman/finished_pages/run_up_hill.webp",
        alt: "Mailman running",
        caption: "After scanning the above page, I finished rendering and touch ups on Clip Studio paint, and this was the final page.",
      },
      {
        src: "/images/mailman/sketches/Mailman-reveal-sketch_001.webp",
        alt: "Mailman opening box",
        caption: "One thing I learned was to give certain parts of the page more focus than others, depending on what I found to be more important. For this page, I spent a lot more time on the panel in which the main character gets flung away from the mailbox with a bang, as well as his scared expression afterwards.",
      },
      {
        src: "/images/mailman/finished_pages/monster_reveal.webp",
        alt: "Mailman running",
        caption: "This project spanned several months of work (though some of that was spent ramping up on processes and technology). Looking back, it was a touch but fulfilling time. I can definitely see many flaws and things I want to improve in, but I'll leave that for my future works!",
      },
    ],
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
        src: "/images/heroSlides/panda_pg1.webp",
        alt: "Panda and Lion",
        caption: "Finished first page - inked and rendered (on Clip Studio Paint). On the first page, I wanted to give a peek into the main character's boisterous and outgoing personality, without having to show her face. Her body language conveys her excitement.",
      },
      {
        src: "/images/panda_and_lion_additional/character_designs/girl_2.webp",
        alt: "girl2characterdesign",
        caption: "In the initial character designs, I created a girl who is very expressive. She's an open book.",
      },
      {
        src: "/images/panda_and_lion_additional/character_designs/girl_1.webp",
        alt: "girl1characterdesign",
        caption: "Though she is usually cheerful, I also explored expressions of worry and sadness.",
      },
      {
        src: "/images/panda_and_lion_additional/storyboard.webp",
        alt: "storyboard",
        caption: "Afterwards, I started with storyboarding, trying to focus on clear and easily followable panel structure.",
      },
      {
        src: "/images/panda_and_lion_additional/sketches/sketch_pg1.webp",
        alt: "sketch1",
        caption: "I grew up a traditional artist, so I feel like drawing on pencil and paper gives me the best results. Because of this, I started with sketches on paper, then scanned in the sketches later to do inking and rendering on Clip Studio Paint. These are rough sketches of the first page.",
      },
      {
        src: "/images/panda_and_lion_additional/clip_studio_finals.webp",
        alt: "storyboard",
        caption: "This project took me two weeks. I had originally only planned to submit one entry (\"The Mailman\") to SMA 24. However, I finished early and wanted to push myself to create something more challenging. It was definitely a learning curve allocating enough time for all the individual steps in the process, and nothing's more fun (and relieving) than seeing the end product.",
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
    description: "A collection of acrylic and colored pencil paintings capturing the journey of a girl through a fantastical world. I wanted to take the viewer on a beautiful visual journey that follows this girl as she goes on an adventure.",
    artworks: [
      {
        src: "/images/illustrations/sleep.webp",
        alt: "Journey illustration",
        caption: "Sleep illustration from the Journey series. We are introduced to a girl who is sleeping peacefully, observed by a strange creature.",
      },
      {
        src: "/images/illustrations/travel.webp",
        alt: "Journey illustration",
        caption: "Travel illustration from the Journey series. The creature and the girl travel.",
      },
      {
        src: "/images/illustrations/pufferfish_1.webp",
        alt: "Journey illustration",
        caption: "The girl finds a pufferfish and reaches towards it. What does she want with it?",
      },
      {
        src: "/images/illustrations/pufferfish_2.webp",
        alt: "Journey illustration",
        caption: "The creature helps the girl capture the pufferfish.",
      },
      {
        src: "/images/illustrations/chess.webp",
        alt: "Journey illustration",
        caption: "In bargain for its freedom, the pufferfish challenges the girl to a game of chess!",
      },
    ],
  },
]
