"use client";

import Image from "next/image";
import { useState } from "react";

const featureCards = [
  {
    name: "Signal Weaving",
    eyebrow: "01",
    icon: "/icons/link-solid.svg",
    description:
      "Blend product, support, and ops context into one retrievable layer so agents stop improvising with incomplete data.",
  },
  {
    name: "Guarded Execution",
    eyebrow: "02",
    icon: "/icons/cog-8-tooth.svg",
    description:
      "Let automations branch with confidence thresholds, approval checkpoints, and clean fallback paths.",
  },
  {
    name: "Observability Fabric",
    eyebrow: "03",
    icon: "/icons/chart-pie.svg",
    description:
      "See what was retrieved, why a step fired, and where a human stepped in without opening three separate tools.",
  },
  {
    name: "Launch Velocity",
    eyebrow: "04",
    icon: "/icons/arrow-trending-up.svg",
    description:
      "Move from concept to production-ready workflows with a UX that stays readable across desktop, tablet, and phone.",
  },
];

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-label="Platform features">
      <div className="hidden gap-5 lg:grid lg:grid-cols-[1.12fr_0.88fr]">
        <div className="grid gap-5 md:grid-cols-2">
          {featureCards.map((card, index) => {
            const active = index === activeIndex;

            return (
              <article
                key={card.name}
                className={`group rounded-[2rem] border p-7 shadow-[var(--shadow-soft)] transition-[transform,background-color,border-color,color] duration-[180ms] ease-out ${
                  active
                    ? "border-[var(--brand-yellow)] bg-[var(--brand-dark)] text-[var(--surface)]"
                    : "border-[var(--line)] bg-[var(--panel)] hover:-translate-y-1 hover:border-[var(--brand-dark)]"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocusCapture={() => setActiveIndex(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--muted)] group-hover:text-[var(--surface)]">
                    {card.eyebrow}
                  </p>
                  <Image
                    src={card.icon}
                    alt=""
                    width={24}
                    height={24}
                    className={`h-6 w-6 ${active ? "invert" : ""}`}
                  />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-[2.15rem] leading-tight">{card.name}</h3>
                <p className={`mt-4 text-sm leading-7 ${active ? "text-[color:rgba(248,250,252,0.78)]" : "text-[var(--muted)]"}`}>
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <aside className="feature-panel rounded-[2rem] border border-[var(--line-strong)] bg-[var(--panel)] p-8 shadow-[var(--shadow-hard)]">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Active system behavior
          </p>
          <div className="mt-10 space-y-6">
            <div className="grid h-56 place-items-center rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)]">
              <div className={`signal-stack signal-${activeIndex + 1}`}>
                <Image src={featureCards[activeIndex].icon} alt="" width={56} height={56} className="h-14 w-14" />
              </div>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-[2.15rem] leading-tight">{featureCards[activeIndex].name}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
                {featureCards[activeIndex].description}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="grid gap-4 lg:hidden">
        {featureCards.map((card, index) => {
          const open = activeIndex === index;

          return (
            <article
              key={card.name}
              className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] shadow-[var(--shadow-soft)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                aria-expanded={open}
                aria-controls={`feature-panel-${index}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="flex items-start gap-3">
                  <Image src={card.icon} alt="" width={20} height={20} className="mt-1 h-5 w-5" />
                  <span>
                    <span className="block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      {card.eyebrow}
                    </span>
                    <span className="mt-2 block font-[family-name:var(--font-display)] text-2xl">{card.name}</span>
                  </span>
                </span>
                <Image
                  src={open ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </button>
              <div
                id={`feature-panel-${index}`}
                className={`grid transition-[grid-template-rows] duration-[340ms] ease-in-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[var(--line)] px-5 py-5">
                    <div className="grid h-36 place-items-center rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]">
                      <div className={`signal-stack signal-${index + 1}`}>
                        <Image src={card.icon} alt="" width={40} height={40} className="h-10 w-10" />
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
                    <p className="mt-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                      Context preserved on layout change
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
