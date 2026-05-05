export type ProjectStatus = "Active" | "In Development" | "Case Study" | "Archived";

export type ProjectCategory =
  | "AI Products"
  | "Business Platform"
  | "Community"
  | "Wellness"
  | "Luxury Consumer";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  status: ProjectStatus;
  tags: string[];
  ctaLabel: string;
  ctaUrl: string;
  featured: boolean;
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
    slug: "mark-ai",
    title: "Mark AI",
    shortDescription: "AI-assisted marketing operations for founder-led teams.",
    longDescription:
      "Mark AI streamlines campaign ideation, message testing, and content workflows so teams can move from strategy to execution with less friction.",
    status: "Active",
    tags: ["AI", "Marketing", "Automation"],
    ctaLabel: "View Project",
    ctaUrl: "/projects/mark-ai",
    featured: true,
    category: "AI Products",
  },
  {
    slug: "vet-my-business",
    title: "Vet My Business",
    shortDescription: "A practical evaluation framework for business ideas and operators.",
    longDescription:
      "Vet My Business helps entrepreneurs pressure-test opportunities across market, operations, and growth assumptions before committing resources.",
    status: "In Development",
    tags: ["Strategy", "Due Diligence", "Founder Tools"],
    ctaLabel: "Explore Details",
    ctaUrl: "/projects/vet-my-business",
    featured: true,
    category: "Business Platform",
  },
  {
    slug: "mcs",
    title: "MCS",
    shortDescription: "Operational systems and strategic execution framework.",
    longDescription:
      "MCS is a systems-first operating model focused on clarity, accountability, and measurable progress across growth-stage initiatives.",
    status: "Case Study",
    tags: ["Operations", "Systems", "Execution"],
    ctaLabel: "Read Case Study",
    ctaUrl: "/projects/mcs",
    featured: false,
    category: "Business Platform",
  },
  {
    slug: "the-honeymooners-club",
    title: "The Honeymooners Club",
    shortDescription: "A modern relationship and travel community concept.",
    longDescription:
      "The Honeymooners Club blends community, content, and curated experiences to help couples invest in stronger relationships and intentional travel.",
    status: "In Development",
    tags: ["Community", "Lifestyle", "Travel"],
    ctaLabel: "Join Waitlist",
    ctaUrl: "/contact",
    featured: false,
    category: "Community",
  },
  {
    slug: "joia",
    title: "JOIA",
    shortDescription: "A luxury-forward wellness concept rooted in daily ritual.",
    longDescription:
      "JOIA is a premium wellness brand concept focused on elevated routines, refined product design, and sustainable personal performance.",
    status: "Archived",
    tags: ["Wellness", "Luxury", "Consumer Brand"],
    ctaLabel: "Request Brief",
    ctaUrl: "/contact",
    featured: false,
    category: "Luxury Consumer",
  },
];
