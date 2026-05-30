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

export const currentPortfolioRepository: ProjectDestination = {
  kind: "external",
  href: "https://github.com/Antonelli12/gus-a.dev_portfolio",
  label: "View GitHub repo",
  ariaLabel: "View the Portfolio Rebuild GitHub repository",
};

export const designCaseStudyComingLater: ProjectDestination = {
  kind: "unavailable",
  label: "Case study coming later",
  ariaLabel: "Case study coming later",
};

export const developmentDetailsComingSoon: ProjectDestination = {
  kind: "unavailable",
  label: "Details coming soon",
  ariaLabel: "Details coming soon",
};
