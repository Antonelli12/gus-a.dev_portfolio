export type ToolIconItem = {
  label: string;
  icon?: string;
};

export function ToolIconList({ items }: { items: readonly ToolIconItem[] }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-3">
      {items.map((item) => (
        <li
          key={item.label}
          className={`flex min-h-12 min-w-0 items-center gap-2 rounded-xl px-3 py-2 text-[0.8rem] leading-5 sm:text-sm ${
            item.icon
              ? "border border-[var(--border-subtle)] text-theme-muted"
              : "ui-pill"
          }`}
        >
          {item.icon ? (
            <i
              aria-hidden="true"
              className={`${item.icon} shrink-0 text-[1.25rem] text-theme-accent`}
            />
          ) : null}
          <span className="min-w-0 break-words">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
