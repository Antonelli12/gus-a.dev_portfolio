export type HighlightedHeroPart = readonly [text: string, highlight: true];
export type HeroPhrasePart = string | HighlightedHeroPart;

export const homeHero = {
  greeting: "Hello There!",
  prefix: "I am ",
  name: "Gus",
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
  [", ", ["Developer", true], " turned ", ["Designer", true]],
  [", a ", ["UX", true], " ", ["Engineer", true]],
  [
    ", a ",
    ["Technical", true],
    " ",
    ["Product", true],
    " ",
    ["Designer", true],
  ],
  [", a ", ["Product-first", true], " ", ["Engineer", true]],
  [", a ", ["Designer", true], " with ", ["technical", true], " depth"],
] as const satisfies readonly (readonly HeroPhrasePart[])[];
