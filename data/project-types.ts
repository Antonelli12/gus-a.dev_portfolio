import type { ProjectDestination } from "@/data/project-destinations";

export type ProjectDetailSection = {
  title: string;
  body: readonly string[];
  items?: readonly string[];
};

export type ProjectDetailLink = {
  label: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
};

export type ProjectDetail =
  | {
      available: false;
    }
  | {
      available: true;
      route: string;
      metadataDescription: string;
      overview: readonly string[];
      sections: readonly ProjectDetailSection[];
      tools?: readonly string[];
      platforms?: readonly string[];
      stack?: readonly string[];
      links?: readonly ProjectDetailLink[];
    };

export type ProjectCardRecord = {
  slug: string;
  featuredOrder: number;
  title: string;
  type: string;
  status: string;
  description: string;
  focus: readonly string[];
  tools?: readonly string[];
  platforms?: readonly string[];
  destination: ProjectDestination;
  detail: ProjectDetail;
};

export type ProjectCollection<T extends ProjectCardRecord = ProjectCardRecord> =
  {
    title: string;
    items: readonly T[];
  };

export type ProjectWithAvailableDetail<
  T extends ProjectCardRecord = ProjectCardRecord,
> = T & {
  detail: Extract<ProjectDetail, { available: true }>;
};

export function sortByFeaturedOrder<T extends Pick<ProjectCardRecord, "featuredOrder">>(
  items: readonly T[],
) {
  return [...items].sort((a, b) => a.featuredOrder - b.featuredOrder);
}

export function hasAvailableDetail<T extends ProjectCardRecord>(
  project: T,
): project is ProjectWithAvailableDetail<T> {
  return project.detail.available;
}

export function getAvailableDetailRecords<T extends ProjectCardRecord>(
  items: readonly T[],
) {
  return sortByFeaturedOrder(items).filter(hasAvailableDetail);
}

export function findAvailableDetailRecord<T extends ProjectCardRecord>(
  items: readonly T[],
  slug: string,
) {
  const project = items.find((item) => item.slug === slug);

  return project && hasAvailableDetail(project) ? project : undefined;
}

export function resolveProjectDestination(
  project: ProjectCardRecord,
  internalLabel = "View details",
): ProjectDestination {
  if (project.detail.available) {
    return {
      kind: "internal",
      href: project.detail.route,
      label: internalLabel,
      ariaLabel: `${internalLabel} for ${project.title}`,
    };
  }

  return project.destination;
}
