import Link from "next/link";
import { TypedGreeting } from "@/components/home/typed-greeting";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <TypedGreeting />

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          className="ui-button rounded-full px-6 py-3 text-sm backdrop-blur-sm transition"
          href="/design"
        >
          View design work
        </Link>

        <Link
          className="ui-button rounded-full px-6 py-3 text-sm backdrop-blur-sm transition"
          href="/development"
        >
          View development work
        </Link>
      </div>
    </section>
  );
}