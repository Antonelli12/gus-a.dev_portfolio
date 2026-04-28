import { TypedGreeting } from "@/components/home/typed-greeting";

export function HeroSection() {
  return (
    <section 
    id="home"
    className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <TypedGreeting />

      <a
        className="ui-button mt-10 rounded-full px-6 py-3 text-sm backdrop-blur-sm transition"
        href="#about"
      >
        View my work ↓
      </a>
    </section>
  );
}