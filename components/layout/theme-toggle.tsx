export function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="group relative h-5 w-9 rounded-full border border-white/15 bg-[#729CAE]/35 shadow-[0_0_14px_rgba(114,156,174,0.25)] transition hover:bg-[#729CAE]/50"
    >
      <span className="absolute left-0.5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.45)] transition group-hover:translate-x-0.5" />
    </button>
  );
}