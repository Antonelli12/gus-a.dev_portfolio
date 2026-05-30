export type ProjectDestination =
  | {
      kind: "internal";
      href: string;
      label: string;
      ariaLabel: string;
    }
  | {
      kind: "external";
      href: string;
      label: string;
      ariaLabel: string;
    }
  | {
      kind: "unavailable";
      label: string;
      ariaLabel: string;
    };

export const DETAILS_COMING_SOON_LABEL = "Details Coming Soon";

export function detailsComingSoon(projectTitle: string): ProjectDestination {
  return {
    kind: "unavailable",
    label: DETAILS_COMING_SOON_LABEL,
    ariaLabel: `${DETAILS_COMING_SOON_LABEL} for ${projectTitle}`,
  };
}

export const currentPortfolioRepository: ProjectDestination = {
  kind: "external",
  href: "https://github.com/Antonelli12/gus-a.dev_portfolio",
  label: "View GitHub repo",
  ariaLabel: "View the Portfolio Rebuild GitHub repository",
};
