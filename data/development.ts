export const devSection = {
  eyebrow: "Development",
  titleStart: "Building",
  titleHighlight: "interfaces",
  titleEnd: "with design context.",
  intro:
    "This page collects the development side of my portfolio: frontend implementation, API integration, responsive interfaces, component systems, and the technical constraints behind usable digital products.",
};

export const developmentIntro = {
  title: "Development Direction",
  body: [
    "I still want frontend development to remain part of my work. I enjoy turning design ideas into real interfaces, connecting them to data, and understanding how decisions behave once they become components, routes, forms, states, and user flows.",
    "My development background gives me a practical understanding of what happens beneath the surface of an interface. That helps me think about feasibility, edge cases, loading states, validation, responsiveness, accessibility, and how a product behaves outside the ideal happy path.",
    "The main value I want to bring is the ability to understand both sides of the process: the design intent behind an experience and the implementation constraints that shape how it actually gets built.",
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
    "Future GraphQL integration",
  ],
};

export const designSystemsComponents = {
  title: "Design Systems & Components",
  body: [
    "I want my frontend work to support a consistent design language rather than becoming a collection of one-off screens. This portfolio is already moving in that direction through reusable cards, buttons, fields, pills, theme variables, and typography helpers.",
    "The aim is not to over-engineer every small detail. The aim is to make the interface easier to maintain, easier to extend, and more visually consistent as the site grows.",
  ],
};

export const technicalProjects = {
  title: "Technical Projects",
  items: [
    {
      title: "Portfolio Rebuild",
      type: "Next.js / React / TypeScript / Tailwind",
      status: "In progress",
      description:
        "A rebuild of my personal portfolio around a new developer turned designer direction, using reusable theme-aware components, route-based structure, and a custom CRT-inspired visual identity.",
      focus: [
        "Next.js routing",
        "Theme system",
        "Reusable UI classes",
        "Responsive layout",
      ],
    },
    {
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
    },
    {
      title: "Job Application Tracker",
      type: "Product concept / Frontend project",
      status: "Planned",
      description:
        "A planned application for tracking job applications, statuses, notes, and follow-ups. The development focus will be on stateful UI, filtering, sorting, forms, and clear status visibility.",
      focus: [
        "Stateful UI",
        "Filtering",
        "Status tracking",
        "Form UX",
      ],
    },
  ],
} as const;

export const toolsStack = {
  title: "Tools & Stack",
  groups: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Styling",
      items: ["Tailwind CSS", "CSS variables", "Responsive design", "Theme tokens"],
    },
    {
      title: "Integration",
      items: ["REST APIs", "Formspree", "Postman", "Future GraphQL"],
    },
    {
      title: "Workflow",
      items: ["Git", "GitHub", "Vercel", "VS Code", "Linux"],
    },
  ],
} as const;