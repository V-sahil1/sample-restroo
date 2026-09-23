"use client";

import { useState } from "react";
import { MENU, type MenuItem } from "@/lib/data";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex flex-col gap-space-sm rounded-xl border border-sage-200 bg-sage-50 p-space-lg shadow-sm transition-colors hover:bg-sage-100">
      <div className="flex items-baseline justify-between gap-space-md">
        <h4 className="font-display text-title-lg font-semibold text-forest">{item.name}</h4>
        <span className="text-title-md font-bold text-gold">${item.price}</span>
      </div>
      <p className="text-body-sm text-ink">{item.description}</p>
      {item.tags && (
        <div className="mt-1 flex items-center gap-space-xs">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-[0.125rem] px-2 py-0.5 text-[0.65rem] font-bold text-forest ${
                tag === "SIGNATURE" ? "bg-mint" : "bg-sage-200"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MenuTabs() {
  const [active, setActive] = useState(MENU[0].id);
  const category = MENU.find((c) => c.id === active) ?? MENU[0];

  return (
    <>
      <div
        role="tablist"
        aria-label="Menu categories"
        className="mx-auto mt-space-xl flex w-fit max-w-full flex-wrap items-center justify-center gap-space-xs rounded-pill border border-line bg-sage-100 p-1.5 md:gap-space-sm"
      >
        {MENU.map((c) => {
          const selected = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={selected}
              aria-controls={`panel-${c.id}`}
              onClick={() => setActive(c.id)}
              className={`rounded-pill px-space-md py-space-xs text-label-lg transition-all sm:px-space-lg ${
                selected
                  ? "bg-forest font-semibold text-white shadow-sm"
                  : "font-medium text-ink hover:text-forest"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${category.id}`}
        aria-labelledby={`tab-${category.id}`}
        className="mx-auto mt-space-xl grid w-full max-w-4xl grid-cols-1 gap-space-lg md:grid-cols-2 md:gap-space-xl"
      >
        {category.items.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </>
  );
}
