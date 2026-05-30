import {
  currentPortfolioRepository,
  detailsComingSoon,
} from "@/data/project-destinations";
import {
  findAvailableDetailRecord,
  getAvailableDetailRecords,
  sortByFeaturedOrder,
  type ProjectCollection,
} from "@/data/project-types";

export const devSection = {
  eyebrow: "Development",
  titleStart: "Where Design",
  titleHighlight: "Becomes",
  titleEnd: "Real.",
  quote:
    "“Design is not just what it looks like and feels like. Design is how it works.”",
  quoteAttribution: "— Steve Jobs, Apple co-founder",
};

export const developmentIntro = {
  title: "How I Build",
  body: [
    "I like building interfaces that have to work under real conditions, not just in a tidy mockup.",
    "I care about forms, state, data, validation, responsiveness, and edge cases because those details shape how usable the product feels.",
    "The part I enjoy most is connecting design intent to practical implementation: keeping the idea clear while making it work in the browser.",
  ],
};

export const frontendImplementation = {
  title: "Frontend Implementation",
  items: [
    {
      title: "React components",
      description:
        "Building reusable interface pieces with clear structure, predictable props, and maintainable styling.",
    },
    {
      title: "Next.js routing",
      description:
        "Structuring pages, layouts, and routes in a way that supports a clear user journey.",
    },
    {
      title: "Responsive layouts",
      description:
        "Creating interfaces that adapt across screen sizes without losing hierarchy or usability.",
    },
    {
      title: "Theme-aware styling",
      description:
        "Using design tokens, CSS variables, and reusable utility classes to keep visual systems consistent.",
    },
  ],
} as const;

export const apiIntegration = {
  title: "API Integration",
  body: [
    "I am particularly interested in the part of frontend development where interfaces connect to real data. A screen is not just a static layout: it has loading states, empty states, errors, validation, permissions, and user actions that need to be handled clearly.",
    "That is where development and UX overlap strongly. Good implementation should make the product feel understandable even when something is loading, missing, invalid, or failing.",
  ],
  items: [
    "REST API consumption",
    "Form submission flows",
    "Loading and error states",
    "Validation feedback",
    "Data-driven UI",
    "GraphQL Integration",
  ],
};

export const designSystemsComponents = {
  title: "Design Systems & Components",
  body: [
    "I prefer reusable patterns because they make interfaces easier to keep consistent, reliable, and manageable as they grow. Cards, forms, and buttons should behave predictably enough that users are not relearning the product on every screen.",
    "The goal is simple: fewer fragile one-offs, clearer decisions, and a UI that is easier to maintain.",
  ],
};

export const technicalProjects: ProjectCollection = {
  title: "Technical Projects",
  items: [
    {
      slug: "portfolio-rebuild",
      featuredOrder: 1,
      title: "Portfolio Rebuild",
      type: "Next.js / React / TypeScript / Tailwind",
      status: "In progress",
      description:
        "A rebuild of my personal site around a sharper design and development narrative, using reusable theme-aware components, route-based structure, and a custom CRT-inspired visual identity.",
      focus: [
        "Next.js routing",
        "Theme system",
        "Reusable UI classes",
        "Responsive layout",
      ],
      destination: currentPortfolioRepository,
      detail: {
        available: false,
      },
    },
    {
      slug: "customer-account-management-interface",
      featuredOrder: 2,
      title: "Customer & Account Management Interface",
      type: "React / REST APIs / Java Spring backend",
      status: "Project work",
      description:
        "A full-stack customer and account management project with a React interface consuming RESTful services. The frontend focus is on CRUD workflows, data presentation, and connecting user actions to backend behaviour.",
      focus: [
        "REST integration",
        "CRUD workflows",
        "Form handling",
        "Data presentation",
      ],
      destination: detailsComingSoon("Customer & Account Management Interface"),
      detail: {
        available: false,
      },
    },
    {
      slug: "job-application-tracker",
      featuredOrder: 3,
      title: "Job Application Tracker",
      type: "Product concept / Frontend project",
      status: "Upcoming",
      description:
        "An application for tracking job applications, statuses, notes, and follow-ups. The development focus is stateful UI, filtering, sorting, forms, and clear status visibility.",
      focus: [
        "Stateful UI",
        "Filtering",
        "Status tracking",
        "Form UX",
      ],
      destination: detailsComingSoon("Job Application Tracker"),
      detail: {
        available: false,
      },
    },
  ],
};

export const technicalProjectItems = sortByFeaturedOrder(
  technicalProjects.items,
);

export const availableDevelopmentProjects = getAvailableDetailRecords(
  technicalProjects.items,
);

export function getAvailableDevelopmentProject(slug: string) {
  return findAvailableDetailRecord(technicalProjects.items, slug);
}

export const toolsStack = {
  title: "Tools & Stack",
  groups: [
    {
      title: "Frontend",
      items: [
        { label: "React", icon: "devicon-react-original" },
        { label: "Next.js", icon: "devicon-nextjs-plain" },
        { label: "TypeScript", icon: "devicon-typescript-plain" },
        { label: "JavaScript", icon: "devicon-javascript-plain" },
      ],
    },
    {
      title: "Styling",
      items: [
        { label: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
        { label: "CSS variables" },
        { label: "Responsive design" },
      ],
    },
    {
      title: "Integration",
      items: [
        { label: "REST APIs" },
        { label: "Postman", icon: "devicon-postman-plain" },
        { label: "GraphQL", icon: "devicon-graphql-plain" },
      ],
    },
    {
      title: "Workflow",
      items: [
        { label: "Git", icon: "devicon-git-plain" },
        { label: "GitHub", icon: "devicon-github-original" },
        { label: "Vercel", icon: "devicon-vercel-original" },
        { label: "VS Code", icon: "devicon-vscode-plain" },
      ],
    },
  ],
} as const;
