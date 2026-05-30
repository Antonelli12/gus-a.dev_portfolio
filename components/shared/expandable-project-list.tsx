"use client";

import {
  Children,
  useId,
  useState,
  type ReactNode,
} from "react";
import { headingFont } from "@/app/fonts";

type ExpandableProjectListLabels = {
  expand: string;
  collapse: string;
};

export function ExpandableProjectList({
  children,
  className,
  labels,
  defaultVisibleCount = 3,
}: {
  children: ReactNode;
  className: string;
  labels: ExpandableProjectListLabels;
  defaultVisibleCount?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const gridId = useId();
  const childItems = Children.toArray(children);
  const hasOverflow = childItems.length > defaultVisibleCount;
  const visibleItems =
    hasOverflow && !isExpanded
      ? childItems.slice(0, defaultVisibleCount)
      : childItems;

  return (
    <>
      <div id={gridId} className={className}>
        {visibleItems}
      </div>

      {hasOverflow ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            aria-controls={gridId}
            aria-expanded={isExpanded}
            className={`${headingFont.className} ui-button rounded-full px-5 py-3 text-sm leading-none transition`}
            onClick={() => setIsExpanded((current) => !current)}
          >
            {isExpanded ? labels.collapse : labels.expand}
          </button>
        </div>
      ) : null}
    </>
  );
}
