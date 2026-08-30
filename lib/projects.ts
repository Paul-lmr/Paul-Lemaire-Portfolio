export type ProjectCategory = "sustainable" | "hardware" | "software" | "data";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  meta?: string;
  /** Skip the plate border/corner-marks — for screenshots that already show native OS/browser chrome. */
  unframed?: boolean;
  /** Render at natural aspect ratio (no forced fixed-height crop) while keeping the plate frame — for real photos. */
  naturalRatio?: boolean;
  /** Real pixel dimensions (as displayed, after EXIF rotation) — required whenever unframed or naturalRatio is set. */
  width?: number;
  height?: number;
};

export type PlaceholderNote = {
  placeholder: string;
};

export type ProjectLink =
  | { label: string; href: string; placeholder?: false }
  | { label: string; placeholder: true };

export type SignalChainStep = { label: string; tone?: "accent" | "rust" };

export type Project = {
  slug: string;
  index: string; // "01".."07"
  title: string;
  categoryLabel: string; // short, used on index cards ("Sustainable Engineering")
  categoryLine: string; // full line used on detail pages ("Project 01 · Sustainable Engineering / Eco-design")
  filterCategory: ProjectCategory;
  summary: string;
  detailIntro?: string;
  status?: string;
  statusNote?: string;
  statusTone?: "accent" | "rust";
  technologies: string[];
  cardImage?: ProjectImage;
  heroImage?: ProjectImage;
  workItems?: string[];
  sections?: {
    problem?: string;
    objectives?: string;
    approach?: string;
    workPerformed?: string;
    alsoBuilt?: string;
    challenges?: string | PlaceholderNote;
    results?: string | PlaceholderNote;
    lessonsLearned?: string | PlaceholderNote;
  };
  signalChain?: SignalChainStep[][];
  gallery?: ProjectImage[];
  galleryPlaceholder?: string;
  /** A short, still-pending note shown alongside a gallery that already has real images. */
  pendingNote?: string;
  /** A titled secondary showcase (e.g. a companion app) with its own tags and image grid. */
  secondaryGallery?: {
    heading: string;
    description?: string;
    tags?: string[];
    images: ProjectImage[];
  };
  /** Golf-style secondary row: one wide image + a composite mobile trio, alongside links. */
  newsImage?: ProjectImage;
  mobileGallery?: ProjectImage[];
  mobileGalleryCaption?: string;
  links?: ProjectLink[];
  /** Short plain-text note shown under the links list (e.g. where to find demo credentials). */
  linksNote?: string;
  pipeline?: string[];
  nextSlug?: string;
};

export const projects: Project[] = [
  {
    slug: "green-air",
    index: "01",
    title: "Green Air",
    categoryLabel: "Sustainable Engineering",
    categoryLine: "Project 01 · Sustainable Engineering / Eco-design",
    filterCategory: "sustainable",
    summary:
      "Biophilic workspace enclosure with natural air purification. Curved partitions, life-cycle assessment in openLCA, Brezet Wheel analysis, SwiftUI companion app.",
    detailIntro:
      "A biophilic workspace enclosure that purifies its own air through plants and mosses — designed, modelled and assessed, not built.",
    status: "Concept · Designed · Modeled · Analyzed",
    statusNote: "no physical prototype was built",
    statusTone: "accent",
    technologies: ["openLCA", "Brezet Wheel", "Swift", "SwiftUI", "3D Modeling"],
    cardImage: { src: "/images/green-air/green-air.png", alt: "Green Air concept render", naturalRatio: true, width: 684, height: 1020 },
    heroImage: {
      src: "/images/green-air/green-air.png",
      alt: "Green Air concept render",
      caption: "Fig. 01.1 — Concept visual",
      meta: "Design render",
      naturalRatio: true,
      width: 684,
      height: 1020,
    },
    sections: {
      problem:
        "Indoor workspaces rely on mechanical ventilation. Could a small enclosure improve its own air quality using living material instead?",
      objectives:
        "Design an organic structure with curved partitions, select plants and mosses for purification, and assess the environmental cost of the design itself.",
      approach:
        "3D modelling of the enclosure, life-cycle assessment in openLCA, eco-design iteration through the Brezet Wheel, then a SwiftUI companion app for the space.",
      results:
        "The openLCA model (EF 3.0 method) ranks copper wire, container glass, and freight transport as the largest contributors to the acidification impact category — full breakdown in the contribution and Sankey views below.",
    },
    gallery: [
      {
        src: "/images/green-air/openCLA.png",
        alt: "openLCA impact and flow contribution charts for the Green Air fabrication process",
        caption: "Fig. 01.2 — Top contributors, Acidification impact",
        meta: "openLCA · EF 3.0 method",
        unframed: true,
        width: 3644,
        height: 2196,
      },
      {
        src: "/images/green-air/openCLA2.png",
        alt: "openLCA Sankey diagram of contribution flows for the Green Air fabrication process",
        caption: "Fig. 01.3 — Contribution flow diagram",
        meta: "openLCA · Sankey",
        unframed: true,
        width: 3644,
        height: 2196,
      },
      {
        src: "/images/green-air/roue-de-brezet.png",
        alt: "Brezet Wheel eco-design radar chart for Green Air",
        caption: "Fig. 01.4 — Brezet Wheel analysis",
        meta: "Eco-design",
        naturalRatio: true,
        width: 922,
        height: 634,
      },
    ],
    secondaryGallery: {
      heading: "Green Air — iOS app",
      description:
        "The workspace concept is paired with an iOS application in Swift and SwiftUI: browsing sites and pods, checking live air quality and light ambiance, booking a slot, and building a plant library for the space.",
      tags: ["SwiftUI", "Booking", "Air quality", "Plant library"],
      images: [
        {
          src: "/images/green-air/Greenairaccuail.png",
          alt: "List of Green Air sites",
          caption: "Sites",
          naturalRatio: true,
          width: 1206,
          height: 2622,
        },
        {
          src: "/images/green-air/greenairchooser.png",
          alt: "Pod list with live availability",
          caption: "Pods · availability",
          naturalRatio: true,
          width: 1206,
          height: 2622,
        },
        {
          src: "/images/green-air/greenairpage1.png",
          alt: "Pod booking screen with reservation schedule",
          caption: "Booking",
          naturalRatio: true,
          width: 1206,
          height: 2622,
        },
        {
          src: "/images/green-air/greenairpage1.2.png",
          alt: "Air quality and lighting ambiance controls",
          caption: "Air quality · ambiance",
          naturalRatio: true,
          width: 1206,
          height: 2622,
        },
        {
          src: "/images/green-air/GreenAircompagnonsetup.png",
          alt: "Plant garden library",
          caption: "Garden · plant library",
          naturalRatio: true,
          width: 1206,
          height: 2622,
        },
        {
          src: "/images/green-air/GreenAircompagnonsetup2.png",
          alt: "Recommended plant selection",
          caption: "Plant selection",
          naturalRatio: true,
          width: 1206,
          height: 2622,
        },
      ],
    },
    links: [{ label: "Repository — Swift companion app", href: "https://github.com/Paul-lmr/Application-swift-GreenAir" }],
    nextSlug: "fpv-drone",
  },
  {
    slug: "fpv-drone",
    index: "02",
    title: "FPV Drone",
    categoryLabel: "Hardware",
    categoryLine: "Project 02 · Hardware / Embedded Systems",
    filterCategory: "hardware",
    summary:
      "Custom 5-inch quadcopter: soldering, stack integration, Betaflight and PID configuration, Crossfire link and analog/digital video chains.",
    detailIntro:
      "A 5-inch quadcopter built from parts: frame, stack, radio link and video chain assembled, soldered, flashed and tuned by hand.",
    status: "Built · flying",
    statusNote: "Volador frame, iFlight Blitz stack, TBS Unify Pro",
    statusTone: "rust",
    technologies: ["Betaflight", "DShot", "UART", "Crossfire", "VTX", "Soldering", "PID tuning", "OSD"],
    cardImage: {
      src: "/images/fpv-drone/drone-build-1.jpeg",
      alt: "Drone build",
      naturalRatio: true,
      width: 5712,
      height: 4284,
    },
    heroImage: {
      src: "/images/fpv-drone/drone.jpeg",
      alt: "Assembled FPV drone",
      caption: "Fig. 02.1 — Assembled airframe",
      meta: "5-inch quad",
      naturalRatio: true,
      // Raw file is 4032x3024 but carries EXIF orientation 6 (rotate 90°) — these are the displayed dimensions.
      width: 3024,
      height: 4032,
    },
    sections: {
      problem:
        "Buying a ready-made drone teaches nothing about why it flies. The goal was to build and tune one from components, and understand every link in the chain.",
      workPerformed:
        "Full assembly and soldering, flight-controller and VTX integration, firmware flashing, Betaflight, PID and OSD configuration, protocol setup.",
      alsoBuilt: "A modified Tinywhoop, and both analog and digital video chains compared in real use.",
      lessonsLearned:
        "Flying was learned in stages before the 5-inch build: first on the Uncrashed simulator to build reflexes without risk, then on a modified Tinywhoop for real airtime at low stakes. Separating learning to fly from learning to build made both far easier than tackling them at once.",
    },
    gallery: [
      {
        src: "/images/fpv-drone/drone-build-1.jpeg",
        alt: "Electronics integration",
        caption: "Fig. 02.2 — Electronics integration",
        naturalRatio: true,
        width: 5712,
        height: 4284,
      },
      {
        src: "/images/fpv-drone/drone-build-2.jpeg",
        alt: "Assembly in progress",
        caption: "Fig. 02.3 — Assembly in progress",
        naturalRatio: true,
        width: 4284,
        height: 5712,
      },
      {
        src: "/images/fpv-drone/dronefpvbetaflight.png",
        alt: "Betaflight configurator application",
        caption: "Fig. 02.4 — Betaflight configuration",
        unframed: true,
        width: 3644,
        height: 2206,
      },
    ],
    signalChain: [
      [{ label: "Radio TX" }, { label: "Crossfire RX" }, { label: "Flight controller" }, { label: "ESC · DShot" }, { label: "Motors" }],
      [{ label: "Camera", tone: "rust" }, { label: "VTX — TBS Unify Pro", tone: "rust" }, { label: "Goggles", tone: "rust" }],
    ],
    nextSlug: "golf-club-platform",
  },
  {
    slug: "golf-club-platform",
    index: "03",
    title: "Golf Club Platform",
    categoryLabel: "Full-stack Web",
    categoryLine: "Project 03 · Software Engineering / Full-stack Web",
    filterCategory: "software",
    summary: "Client and admin experiences over one data model. Authentication, roles, database, GitHub to Vercel deployment.",
    detailIntro:
      "Two coherent experiences over one data model: members and visitors browsing the club, staff maintaining it. Deployed to production.",
    technologies: ["Next.js", "React", "TypeScript", "Authentication", "Database", "Vercel"],
    cardImage: { src: "/images/golf-club-platform/golf-home.png", alt: "Golf platform home page", unframed: true, width: 3644, height: 2202 },
    heroImage: {
      src: "/images/golf-club-platform/golf-home.png",
      alt: "Golf platform home page",
      caption: "Fig. 03.1 — Public home page",
      meta: "Production",
      unframed: true,
      width: 3644,
      height: 2202,
    },
    sections: {
      problem: "Two audiences, one source of truth — and staff who must update content without touching code.",
      approach: "Model the data first, then role-based routes and authentication, then the two interfaces over the same API.",
      challenges:
        "Connecting the backend to the frontend — the database layer in particular — was the hardest technical piece. The overall scope of the project also turned out to be much larger than initially estimated.",
      results:
        "This is a demonstration build rather than a live commercial deployment, so there are no traffic or usage figures to report.",
    },
    gallery: [
      {
        src: "/images/golf-club-platform/golf-client.png",
        alt: "Client account",
        caption: "Fig. 03.2 — Client account",
        meta: "Member side",
        unframed: true,
        width: 3644,
        height: 2206,
      },
      {
        src: "/images/golf-club-platform/golf-admin.png",
        alt: "Admin back office",
        caption: "Fig. 03.3 — Admin back office",
        meta: "Staff side",
        unframed: true,
        width: 3644,
        height: 2206,
      },
    ],
    newsImage: {
      src: "/images/golf-club-platform/golf-news.png",
      alt: "News page",
      caption: "Fig. 03.4 — News, edited from the back office",
      unframed: true,
      width: 3644,
      height: 2206,
    },
    mobileGallery: [
      { src: "/images/golf-club-platform/golf-mobile.png", alt: "Home page on mobile" },
      { src: "/images/golf-club-platform/golf-mobile-client.png", alt: "Player account on mobile" },
      { src: "/images/golf-club-platform/golf-mobile-booking.png", alt: "Tee-time booking on mobile" },
    ],
    mobileGalleryCaption: "Fig. 03.5 — Responsive client view · home, account, booking",
    links: [
      { label: "Golf de Keravel — Open live site", href: "https://golf-de-la-valee.vercel.app" },
      { label: "Repository", href: "https://github.com/Paul-lmr/Golf_de_la_valee" },
    ],
    linksNote: "Demo accounts are available directly on the site's login screen.",
    pipeline: ["GitHub", "Vercel", "Production"],
    nextSlug: "apple-ecosystem",
  },
  {
    slug: "apple-ecosystem",
    index: "04",
    title: "Apple Ecosystem",
    categoryLabel: "Software",
    categoryLine: "Project 04 · Software / Apple Platforms",
    filterCategory: "software",
    summary: "watchOS, macOS, iOS, visionOS — four experiments in Swift and SwiftUI.",
    detailIntro: "A collection of Apple-platform experiments and applications, built across four different Apple devices.",
    technologies: ["Swift", "SwiftUI", "Xcode", "iOS", "macOS", "watchOS", "visionOS"],
    workItems: [
      "Apple Watch swimming counter",
      "macOS media-control widget",
      "iOS plant maintenance application",
      "Experimental Formula 1 circuit visualization for visionOS",
    ],
    galleryPlaceholder: "Apple project screenshots to be added",
    nextSlug: "physical-controller",
  },
  {
    slug: "physical-controller",
    index: "05",
    title: "Physical Controller",
    categoryLabel: "Hardware",
    categoryLine: "Project 05 · Hardware / Human Interface",
    filterCategory: "hardware",
    summary: "Rotary-encoder ship's wheel turning mechanical motion into digital commands.",
    detailIntro:
      "A physical controller inspired by a boat steering wheel for Sea of Thieves. The objective is to translate a complex mechanical movement into digital commands.",
    status: "Concept",
    statusTone: "accent",
    technologies: ["Basic electronics", "Rotary encoders", "Hardware interfacing"],
    galleryPlaceholder: "Concept stage — build photos will follow once assembled",
    nextSlug: "blackjack",
  },
  {
    slug: "blackjack",
    index: "06",
    title: "Blackjack",
    categoryLabel: "Software",
    categoryLine: "Project 06 · Software Engineering",
    filterCategory: "software",
    summary: "Java, OOP, four-month team project — architecture and integration.",
    detailIntro: "An academic team project lasting approximately four months.",
    technologies: ["Java", "Object-Oriented Programming"],
    heroImage: { src: "/images/blackjack/blackjack.png", alt: "Blackjack game interface" },
    workItems: [
      "Software architecture",
      "OOP principles",
      "Module integration",
      "Team development",
      "Task distribution",
      "Technical presentation",
    ],
    nextSlug: "data-machine-learning",
  },
  {
    slug: "data-machine-learning",
    index: "07",
    title: "Data & ML",
    categoryLabel: "Data",
    categoryLine: "Project 07 · Data & Machine Learning",
    filterCategory: "data",
    summary: "k-NN, logistic regression, visualisation and modelling in Python.",
    technologies: ["Python", "NumPy", "Matplotlib", "scikit-learn"],
    workItems: [
      "Data analysis",
      "Visualization",
      "Supervised learning",
      "k-nearest neighbors",
      "Logistic regression",
      "Mathematical modeling",
    ],
    nextSlug: "green-air",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectByIndex(index: string): Project | undefined {
  return projects.find((p) => p.index === index);
}

export const categoryFilters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Hardware", value: "hardware" },
  { label: "Software", value: "software" },
  { label: "Data", value: "data" },
  { label: "Sustainable", value: "sustainable" },
];
