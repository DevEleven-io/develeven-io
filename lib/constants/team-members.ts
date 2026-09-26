export interface TeamMemberLinks {
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  telegram?: string;
  facebook?: string;
}

export interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  tags: string[];
  links: TeamMemberLinks;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "abid-al-wassie",
    number: "01",
    name: "Abid Al Wassie",
    role: "Co-Founder · Full-Stack Architect",
    bio: "Creator of oneManDev. Builds high-performance web systems and full-stack architectures with clean execution and resilient cloud integrations.",
    image: "/images/team/portrait_abid_md.png",
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
    links: {
      website: "https://abidalwassie.me",
      github: "https://github.com/AbidAlWassie",
      youtube: "https://youtube.com/@oneManDev",
      linkedin: "https://www.linkedin.com/in/abidalwassie",
    },
  },
  {
    id: "ragib-al-asad",
    number: "02",
    name: "Ragib Al Asad",
    role: "Co-Founder · Senior Backend Engineer",
    bio: "Engineers high-throughput microservices, database schemas, secure authentication pipelines, and low-latency cloud infrastructure.",
    image: "/images/team/portrait_ragib_md.png",
    tags: ["Python", "FastAPI", "PostgreSQL", "Prisma", "Distributed Systems"],
    links: {
      website: "https://ragibalasad.me",
      github: "https://github.com/ragibalasad",
      twitter: "https://twitter.com/ragibalasad",
      linkedin: "https://www.linkedin.com/in/ragibalasad",
    },
  },
  {
    id: "shihab-shahriar-rashu",
    number: "03",
    name: "Shihab Shahriar Rashu",
    role: "Co-Founder · Full-Stack Engineer",
    bio: "Builds end-to-end web platforms, automated engineering workflows, and robust API endpoints with zero technical debt.",
    image: "/images/team/portrait_shihab_md.png",
    tags: ["TypeScript", "Python", "API Design", "Automation"],
    links: {
      github: "https://github.com/rushdv",
      linkedin: "https://www.linkedin.com/in/rushdv",
      facebook: "https://facebook.com/ss.rashu",
    },
  },
  {
    id: "raiyan-takrim",
    number: "04",
    name: "Raiyan Takrim",
    role: "Frontend & UI/UX Engineer",
    bio: "Crafts responsive, fluid, and accessible web interfaces, translating complex product designs into pixel-perfect frontend reality.",
    image: "/images/team/portrait_raiyan_md.png",
    tags: ["React", "Tailwind CSS", "UI/UX", "JavaScript"],
    links: {
      github: "https://github.com/raiyan-takrim",
      telegram: "https://t.me/raiyan_takrim",
      facebook: "https://facebook.com/raiyan.takrim3",
    },
  },
];
