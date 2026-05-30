import Link from "next/link";
import { TypedGreeting } from "@/components/home/typed-greeting";
import { homeHero } from "@/data/home";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <h1 id="home-title" className="sr-only">
        {homeHero.staticHeading}
      </h1>
      <p className="sr-only">{homeHero.staticSummary}</p>

      <TypedGreeting />

      <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
        {homeHero.callsToAction.map((action) => (
          <Link
            key={action.href}
            className="ui-button min-h-10 rounded-full px-4 py-2.5 text-xs backdrop-blur-sm transition min-[380px]:px-5 sm:px-6 sm:py-3 sm:text-sm"
            href={action.href}
          >
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
