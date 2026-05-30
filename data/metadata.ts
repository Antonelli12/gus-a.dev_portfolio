import type { Metadata } from "next";

const siteName = "Gustavo Antonelli Portfolio";

function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  socialTitle,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  socialTitle?: string;
}): Metadata {
  const metadataTitle = socialTitle ?? `${title} | Gustavo Antonelli`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: metadataTitle,
      description,
      url: path,
      siteName,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary",
      title: metadataTitle,
      description,
    },
  };
}

export const routeMetadata = {
  home: pageMetadata({
    title: "Gus' Portfolio",
    description:
      "Gus is a developer turned designer focused on UX engineering, technical product design, and product-minded frontend work.",
    path: "/",
    absoluteTitle: true,
    socialTitle: "Gus' Portfolio",
  }),
  about: pageMetadata({
    title: "About",
    description:
      "The story behind Gus's move from software engineering into UX engineering, product design, and implementation-aware product thinking.",
    path: "/about",
  }),
  design: pageMetadata({
    title: "Design",
    description:
      "UX and product design work focused on clarity, empathy, interface decisions, and reducing friction in digital experiences.",
    path: "/design",
  }),
  development: pageMetadata({
    title: "Development",
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

export function projectDetailMetadata({
  title,
  section,
  description,
  path,
}: {
  title: string;
  section: "Design" | "Development";
  description: string;
  path: string;
}) {
  return pageMetadata({
    title: `${title} | ${section}`,
    description,
    path,
  });
}
