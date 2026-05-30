import { detailsComingSoon } from "@/data/project-destinations";
import {
  findAvailableDetailRecord,
  getAvailableDetailRecords,
  sortByFeaturedOrder,
  type ProjectCollection,
} from "@/data/project-types";

export const designSection = {
  eyebrow: "Design",
  titleStart: "UX Design for",
  titleHighlight: "Better",
  titleEnd: "Digital Experiences.",
  quote:
    "“A user interface is like a joke. If you have to explain it, it’s not that good.”",
  quoteAttribution: "— Martin LeBlanc, designer",
};

export const designIntro = {
  title: "How I Approach Design",
  body: [
    "I start by trying to empathise with the user: what they are trying to achieve, what gets in the way, and what would make the next step feel clearer.",
    "My development background keeps the work grounded. While shaping a journey or layout, I am also thinking about components, data, validation, responsiveness, and edge cases.",
  ],
};

export const featuredCaseStudies: ProjectCollection = {
  title: "Featured Case Studies",
  items: [
    {
      slug: "portfolio-rebuild",
      featuredOrder: 1,
      title: "Portfolio Rebuild",
      type: "UX / Visual Identity / Frontend",
      status: "In progress",
      description:
        "A redesign of my personal site around a sharper UX/product direction, with work on information architecture, visual identity, theme behaviour, and a clearer design and development narrative.",
      focus: [
        "Information architecture",
        "Visual direction",
        "Content hierarchy",
        "Design system thinking",
      ],
      destination: detailsComingSoon("Portfolio Rebuild"),
      detail: {
        available: false,
      },
    },
    {
      slug: "job-application-tracker",
      featuredOrder: 2,
      title: "Job Application Tracker",
      type: "Product Design / Interface Design",
      status: "Upcoming case study",
      description:
        "A product concept for tracking job applications, statuses, notes, and follow-ups. The design focus is reducing friction, making progress visible, and helping users manage a tiring process with more clarity.",
      focus: [
        "User flows",
        "Dashboard structure",
        "Status visibility",
        "Form usability",
      ],
      destination: detailsComingSoon("Job Application Tracker"),
      detail: {
        available: false,
      },
    },
    {
      slug: "customer-management-interface",
      featuredOrder: 3,
      title: "Customer Management Interface",
      type: "Interface Review / Product Thinking",
      status: "Project work",
      description:
        "A review of a customer and account management interface from a usability perspective, looking at how technical workflows can be translated into clearer user-facing screens.",
      focus: [
        "Workflow clarity",
        "Data presentation",
        "Error states",
        "Implementation constraints",
      ],
      destination: detailsComingSoon("Customer Management Interface"),
      detail: {
        available: false,
      },
    },
  ],
};

export const featuredCaseStudyItems = sortByFeaturedOrder(
  featuredCaseStudies.items,
);

export const availableDesignCaseStudies = getAvailableDetailRecords(
  featuredCaseStudies.items,
);

export function getAvailableDesignCaseStudy(slug: string) {
  return findAvailableDetailRecord(featuredCaseStudies.items, slug);
}

export const designProcess = {
  title: "Design Process",
  steps: [
    {
      label: "01",
      title: "Understand the problem",
      description:
        "Before thinking about the screen, I want to understand the purpose of the product, the user goal, and the friction that needs to be reduced.",
    },
    {
      label: "02",
      title: "Structure the journey",
      description:
        "I map the main user flow, the information that needs to appear, and the decisions the interface needs to support.",
    },
    {
      label: "03",
      title: "Shape the interface",
      description:
        "I turn the structure into screens, components, states, and interactions that are clear before they are visually impressive.",
    },
    {
      label: "04",
      title: "Review and iterate",
      description:
        "I look for friction, unclear hierarchy, missing states, weak copy, and places where the interface could better support the user.",
    },
  ],
} as const;

export const researchDecisions = {
  title: "Research & Decisions",
  items: [
    {
      title: "User goals before screens",
      description:
        "I want design decisions to start from what the user is trying to achieve, not from what would look good in isolation.",
    },
    {
      title: "Constraints matter",
      description:
        "Technical limits, time, data, accessibility, and edge cases all shape whether a design can become a reliable product.",
    },
    {
      title: "Clarity over decoration",
      description:
        "The visual layer should support the user’s understanding. A strong aesthetic is useful only if the product remains readable and usable.",
    },
  ],
} as const;

export const toolsMethods = {
  title: "Tools & Methods",
  groups: [
    {
      title: "Tools",
      items: [
        { label: "Figma", icon: "devicon-figma-plain" },
        { label: "Miro" },
        { label: "Azure DevOps", icon: "devicon-azuredevops-plain" },
        { label: "Microsoft Copilot" },
      ],
    },
    {
      title: "UX Methods",
      items: [
        { label: "Problem framing" },
        { label: "User flows" },
        { label: "Journey mapping" },
        { label: "Wireframes" },
      ],
    },
    {
      title: "Interface Work",
      items: [
        { label: "Information architecture" },
        { label: "Layout hierarchy" },
        { label: "Component states" },
        { label: "Responsive structure" },
      ],
    },
    {
      title: "Review",
      items: [
        { label: "Usability review" },
        { label: "Accessibility awareness" },
        { label: "Frontend validation" },
        { label: "Design iteration" },
      ],
    },
  ],
} as const;
