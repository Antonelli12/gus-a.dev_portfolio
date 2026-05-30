import type { Metadata } from "next";

const siteName = "Gustavo Antonelli Portfolio";

function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | Gustavo Antonelli`,
      description,
      url: path,
      siteName,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary",
      title: `${title} | Gustavo Antonelli`,
      description,
    },
  };
}

export const routeMetadata = {
  home: pageMetadata({
    title: "Developer Turned Designer",
    description:
      "Gus is a developer turned designer focused on UX engineering, technical product design, and product-minded frontend work.",
    path: "/",
  }),
  about: pageMetadata({
    title: "About",
    description:
      "The story behind Gus's move from software engineering into UX engineering, product design, and implementation-aware product thinking.",
    path: "/about",
  }),
  design: pageMetadata({
    title: "UX Design for Better Digital Experiences",
    description:
      "UX and product design work focused on clarity, empathy, interface decisions, and reducing friction in digital experiences.",
    path: "/design",
  }),
  development: pageMetadata({
    title: "Where Design Becomes Real",
    description:
      "Frontend and technical work that connects design intent to usable interfaces, data, validation, and real product constraints.",
    path: "/development",
  }),
  contact: pageMetadata({
    title: "Contact",
    description:
      "Contact Gus, view the CV, and find GitHub and LinkedIn links for UX engineering, technical product design, and product-focused frontend roles.",
    path: "/contact",
  }),
} as const;
