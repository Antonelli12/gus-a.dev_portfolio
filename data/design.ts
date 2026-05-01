export const designSection = {
  eyebrow: "Design",
  titleStart: "UX / Product",
  titleHighlight: "design",
  titleEnd: "for clearer digital experiences.",
  intro:
    "This page collects the design side of my portfolio: product thinking, user flows, interface structure, research, prototypes, and case studies. It represents the direction I am moving towards professionally.",
};

export const designIntro = {
  title: "Design Direction",
  body: [
    "My design work is currently focused on turning unclear digital experiences into something more structured, usable, and understandable.",
    "I am especially interested in the space between product thinking and interface design: understanding what a user is trying to do, shaping the journey around that goal, and making the screen support the task rather than distract from it.",
    "Because I come from a development background, I also think about how design decisions translate into real interfaces, components, states, data, and edge cases.",
  ],
};

export const featuredCaseStudies = {
  title: "Featured Case Studies",
  items: [
    {
      title: "Portfolio Rebuild",
      type: "UX / Visual Identity / Frontend",
      status: "In progress",
      description:
        "A redesign of my personal portfolio around a new professional direction: developer turned designer. The project explores positioning, information architecture, visual identity, theme systems, and the balance between personality and usability.",
      focus: [
        "Information architecture",
        "Visual direction",
        "Content hierarchy",
        "Design system thinking",
      ],
    },
    {
      title: "Job Application Tracker",
      type: "Product Design / Interface Design",
      status: "Planned case study",
      description:
        "A product concept for tracking job applications, statuses, notes, and follow-ups. The design focus is on reducing friction, making progress visible, and helping users manage an emotionally tiring process with more clarity.",
      focus: [
        "User flows",
        "Dashboard structure",
        "Status visibility",
        "Form usability",
      ],
    },
    {
      title: "Customer Management Interface",
      type: "Interface Review / Product Thinking",
      status: "Planned case study",
      description:
        "A review of a customer and account management interface from a usability perspective, looking at how technical workflows can be translated into clearer user-facing screens.",
      focus: [
        "Workflow clarity",
        "Data presentation",
        "Error states",
        "Implementation constraints",
      ],
    },
  ],
} as const;

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
      title: "Product Thinking",
      items: [
        "Problem framing",
        "User goals",
        "Journey mapping",
        "Feature prioritisation",
      ],
    },
    {
      title: "UX Design",
      items: [
        "User flows",
        "Wireframes",
        "Information architecture",
        "Usability review",
      ],
    },
    {
      title: "Interface Design",
      items: [
        "Layout hierarchy",
        "Component states",
        "Responsive structure",
        "Accessibility awareness",
      ],
    },
    {
      title: "Prototyping",
      items: [
        "Low-fidelity concepts",
        "Interactive prototypes",
        "Design iteration",
        "Frontend validation",
      ],
    },
  ],
} as const;