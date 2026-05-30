export type HighlightedHeroPart = readonly [text: string, highlight: true];
export type HeroPhrasePart = string | HighlightedHeroPart;

export const homeHero = {
  greeting: "Hello There!",
  prefix: "I am ",
  name: "Gus",
  staticHeading: "Gus, Developer Turned Designer",
  staticSummary:
    "UX engineer and technical product designer focused on usable digital products, frontend implementation, and product-minded workflows.",
  callsToAction: [
    {
      label: "View design work",
      href: "/design",
    },
    {
      label: "View development work",
      href: "/development",
    },
  ],
} as const;

export const homeHeroPhrases = [
  [", ", ["Developer", true], " Turned ", ["Designer", true]],
  [", a ", ["UX", true], " ", ["Engineer", true]],
  [
    ", a ",
    ["Technical", true],
    " ",
    ["Product", true],
    " ",
    ["Designer", true],
  ],
  [", a ", ["Product-First", true], " ", ["Engineer", true]],
  [", a ", ["Designer", true], " with ", ["Technical", true], " Depth"],
] as const satisfies readonly (readonly HeroPhrasePart[])[];
