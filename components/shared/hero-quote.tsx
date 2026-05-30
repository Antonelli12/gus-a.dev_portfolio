export function HeroQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <figure className="mt-8 max-w-2xl">
      <blockquote className="text-base italic leading-8 text-theme-accent sm:text-lg">
        {quote}
      </blockquote>
      <figcaption className="mt-3 text-sm text-theme-faint">
        {attribution}
      </figcaption>
    </figure>
  );
}
