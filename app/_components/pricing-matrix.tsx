"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type BillingCycle = "monthly" | "annual";
type CurrencyCode = "INR" | "USD" | "EUR";
type PlanName = "Core" | "Scale" | "Command";

type CurrencyConfig = {
  code: CurrencyCode;
  symbol: string;
  exchangeRate: number;
  tariffMultiplier: number;
};

type PricingConfig = {
  annualDiscount: number;
  currencies: Record<CurrencyCode, CurrencyConfig>;
  tiers: Record<
    PlanName,
    {
      baseMonthlyUsd: number;
      summary: string;
      note: string;
      seats: string;
      features: string[];
    }
  >;
};

const pricingConfig: PricingConfig = {
  annualDiscount: 0.8,
  currencies: {
    INR: { code: "INR", symbol: "\u20B9", exchangeRate: 83, tariffMultiplier: 0.92 },
    USD: { code: "USD", symbol: "$", exchangeRate: 1, tariffMultiplier: 1 },
    EUR: { code: "EUR", symbol: "\u20AC", exchangeRate: 0.94, tariffMultiplier: 1.08 },
  },
  tiers: {
    Core: {
      baseMonthlyUsd: 59,
      summary: "For small teams getting their first automation workflows into daily use.",
      note: "Good place to start",
      seats: "Up to 5 builders",
      features: ["1 unified retrieval workspace", "Rule-based workflow triggers", "Usage and trace inspection"],
    },
    Scale: {
      baseMonthlyUsd: 129,
      summary: "For growing teams running automation across product, support, and operations.",
      note: "Most popular",
      seats: "Up to 18 builders",
      features: ["Multi-source orchestration", "Human approval lanes", "Priority deployment support"],
    },
    Command: {
      baseMonthlyUsd: 249,
      summary: "For larger organizations managing high-volume or business-critical workflows.",
      note: "Advanced control",
      seats: "Custom operator count",
      features: ["Dedicated environment controls", "Audit-ready access history", "Custom rollout architecture"],
    },
  },
};

const planOrder: PlanName[] = ["Core", "Scale", "Command"];
const planIcons: Record<PlanName, string> = {
  Core: "/icons/cube-16-solid.svg",
  Scale: "/icons/arrow-path.svg",
  Command: "/icons/cog-8-tooth.svg",
};

function formatAmount(value: number, currency: CurrencyCode) {
  if (currency === "INR") {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);
  }

  return new Intl.NumberFormat("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
}

function calculatePrice(plan: PlanName, currencyCode: CurrencyCode, billing: BillingCycle) {
  const tier = pricingConfig.tiers[plan];
  const currency = pricingConfig.currencies[currencyCode];
  const base = tier.baseMonthlyUsd * currency.exchangeRate * currency.tariffMultiplier;
  const billed = billing === "annual" ? base * pricingConfig.annualDiscount : base;

  return {
    price: Math.round(billed),
    suffix: billing === "annual" ? "/month, billed yearly" : "/month",
    yearlyCallout:
      billing === "annual"
        ? `Includes a ${Math.round((1 - pricingConfig.annualDiscount) * 100)}% annual savings adjustment`
        : "Switch to annual to save 20%",
  };
}

export function PricingMatrix() {
  const rootRef = useRef<HTMLDivElement>(null);
  const billingRef = useRef<BillingCycle>("monthly");
  const currencyRef = useRef<CurrencyCode>("USD");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const currencyButtons = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-currency-option]"));
    const billingButtons = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-billing-option]"));

    const updateVisiblePrices = () => {
      const planNodes = root.querySelectorAll<HTMLElement>("[data-plan]");

      planNodes.forEach((node) => {
        const plan = node.dataset.plan as PlanName;
        const amountNode = node.querySelector<HTMLElement>("[data-price-amount]");
        const prefixNode = node.querySelector<HTMLElement>("[data-price-prefix]");
        const suffixNode = node.querySelector<HTMLElement>("[data-price-suffix]");
        const noteNode = node.querySelector<HTMLElement>("[data-price-note]");
        const cycleNode = node.querySelector<HTMLElement>("[data-cycle-copy]");
        const output = calculatePrice(plan, currencyRef.current, billingRef.current);
        const currency = pricingConfig.currencies[currencyRef.current];

        if (amountNode) amountNode.textContent = formatAmount(output.price, currency.code);
        if (prefixNode) prefixNode.textContent = currency.symbol;
        if (suffixNode) suffixNode.textContent = output.suffix;
        if (noteNode) noteNode.textContent = output.yearlyCallout;
        if (cycleNode) {
          cycleNode.textContent = billingRef.current === "annual" ? "Annual billing active" : "Monthly billing active";
        }
      });
    };

    const syncButtonStates = () => {
      currencyButtons.forEach((button) => {
        const active = button.dataset.currencyOption === currencyRef.current;
        button.dataset.active = String(active);
        button.setAttribute("aria-pressed", String(active));
      });

      billingButtons.forEach((button) => {
        const active = button.dataset.billingOption === billingRef.current;
        button.dataset.active = String(active);
        button.setAttribute("aria-pressed", String(active));
      });
    };

    const handleCurrencyClick = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      currencyRef.current = button.dataset.currencyOption as CurrencyCode;
      syncButtonStates();
      updateVisiblePrices();
    };

    const handleBillingClick = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      billingRef.current = button.dataset.billingOption as BillingCycle;
      syncButtonStates();
      updateVisiblePrices();
    };

    currencyButtons.forEach((button) => button.addEventListener("click", handleCurrencyClick));
    billingButtons.forEach((button) => button.addEventListener("click", handleBillingClick));

    syncButtonStates();
    updateVisiblePrices();

    return () => {
      currencyButtons.forEach((button) => button.removeEventListener("click", handleCurrencyClick));
      billingButtons.forEach((button) => button.removeEventListener("click", handleBillingClick));
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="rounded-[2rem] border border-[var(--line-strong)] bg-[var(--panel)] p-6 shadow-[var(--shadow-hard)] lg:p-8"
    >
      <div className="flex flex-col gap-5 border-b border-[var(--line)] pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Billing options
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            View plans in your preferred currency and choose monthly or annual billing based on how your team buys
            software.
          </p>
        </div>

        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="inline-flex w-fit rounded-full border border-[var(--line)] bg-[var(--surface)] p-1">
            {(["USD", "EUR", "INR"] as CurrencyCode[]).map((currency) => (
              <button
                key={currency}
                type="button"
                data-currency-option={currency}
                className="rounded-full px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition duration-200 ease-out data-[active=true]:bg-[var(--ink)] data-[active=true]:text-[var(--surface)]"
              >
                {currency}
              </button>
            ))}
          </div>
          <div className="inline-flex w-fit rounded-full border border-[var(--line)] bg-[var(--surface)] p-1">
            {(["monthly", "annual"] as BillingCycle[]).map((cycle) => (
              <button
                key={cycle}
                type="button"
                data-billing-option={cycle}
                className="rounded-full px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition duration-200 ease-out data-[active=true]:bg-[var(--ink)] data-[active=true]:text-[var(--surface)]"
              >
                {cycle}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-3">
        {planOrder.map((plan) => {
          const tier = pricingConfig.tiers[plan];

          return (
            <article
              key={plan}
              data-plan={plan}
              className={`rounded-[1.75rem] border p-6 transition-[transform,box-shadow,border-color,background-color] duration-[180ms] ease-out hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(17,76,90,0.12)] lg:p-7 ${
                plan === "Scale"
                  ? "border-[var(--brand-yellow)] bg-[var(--brand-dark)] text-[var(--surface)]"
                  : "border-[var(--line)] bg-[var(--surface)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={planIcons[plan]}
                      alt=""
                      width={24}
                      height={24}
                      className={`h-6 w-6 ${plan === "Scale" ? "invert" : ""}`}
                    />
                    <h3 className="font-[family-name:var(--font-display)] text-[2rem]">{plan}</h3>
                  </div>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      plan === "Scale" ? "text-[color:rgba(248,250,252,0.74)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {tier.summary}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] ${
                    plan === "Scale"
                      ? "bg-[color:rgba(248,250,252,0.14)] text-[var(--surface)]"
                      : "bg-[var(--panel)] text-[var(--brand-teal)]"
                  }`}
                >
                  {tier.note}
                </span>
              </div>

              <div className="mt-8 flex items-end gap-2">
                <span data-price-prefix className="text-2xl">
                  $
                </span>
                <span data-price-amount className="font-[family-name:var(--font-display)] text-[3.35rem] tracking-[-0.04em]">
                  0
                </span>
              </div>
              <p
                data-price-suffix
                className={`mt-2 text-sm ${
                  plan === "Scale" ? "text-[color:rgba(248,250,252,0.74)]" : "text-[var(--muted)]"
                }`}
              >
                /month
              </p>

              <p
                data-price-note
                className={`mt-4 text-sm leading-7 ${
                  plan === "Scale" ? "text-[color:rgba(248,250,252,0.74)]" : "text-[var(--muted)]"
                }`}
              >
                Switch to annual to unlock the 20% commit adjustment
              </p>

              <p
                data-cycle-copy
                className="mt-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--accent-strong)]"
              >
                Monthly billing active
              </p>

              <div className="mt-6 border-t border-[var(--line)] pt-6">
                <p
                  className={`font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] ${
                    plan === "Scale" ? "text-[color:rgba(248,250,252,0.6)]" : "text-[var(--muted)]"
                  }`}
                >
                  {tier.seats}
                </p>
                <ul className="mt-4 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`text-sm leading-7 ${
                        plan === "Scale" ? "text-[color:rgba(248,250,252,0.88)]" : "text-[var(--ink)]"
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
