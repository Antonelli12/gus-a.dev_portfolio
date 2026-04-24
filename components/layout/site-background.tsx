export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-site-base"
    >
      <div className="absolute inset-0 bg-site-vignette" />
      <div className="absolute inset-0 bg-site-pixel-grid opacity-70" />
      <div className="absolute inset-0 bg-site-noise opacity-40" />
      <div className="absolute inset-0 animate-site-breathe bg-site-glow" />
    </div>
  );
}