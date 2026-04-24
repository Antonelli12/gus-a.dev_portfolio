import { TypedGreeting } from "@/components/home/typed-greeting";

export function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <TypedGreeting />

      <a
        className="mt-10 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/70 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
        href="#about"
      >
        View my work ↓
      </a>
    </section>
  );
}