import Image from "next/image";
import { EntryOrchestrator } from "./_components/entry-orchestrator";
import { FeatureShowcase } from "./_components/feature-showcase";
import { PricingMatrix } from "./_components/pricing-matrix";

const signals = [
  // { value: "4.9/5", label: "operator-rated clarity", icon: "/icons/link-solid.svg" },
  { value: "500ms", label: "entry motion budget", icon: "/icons/arrow-path.svg" },
  { value: "3 currencies", label: "pricing matrix modes", icon: "/icons/chart-pie.svg" },
];

const caseStudies = [
  {
    name: "Signal Cartography",
    summary:
      "Unifies CRM, support, and analytics streams into one retrieval layer for teams deploying AI agents across departments.",
    impact: "Faster insight handoff",
    icon: "/icons/chart-pie.svg",
  },
  {
    name: "Ops Relay",
    summary:
      "Routes failures, approvals, and escalations before automation chains stall in production.",
    impact: "Smoother daily operations",
    icon: "/icons/arrow-trending-up.svg",
  },
  {
    name: "Trust Ledger",
    summary:
      "Keeps audit visibility, context lineage, and human checkpoints visible for enterprise deployments.",
    impact: "Clear trace visibility",
    icon: "/icons/cog-8-tooth.svg",
  },
];

const testimonials = [
  {
    quote:
      "We needed one place to manage context, approvals, and visibility. Armory gave our team that without adding more operational noise.",
    person: "Maya Chen",
    role: "Head of Operations, Northstar Health",
  },
  {
    quote:
      "The pricing is straightforward, the workflows are easy to understand, and the product feels dependable from the first look.",
    person: "Rahul Mehta",
    role: "Automation Lead, CircuitFlow",
  },
  {
    quote:
      "What stood out most was how clearly the platform explains complex automation work without making it feel technical for the wrong reasons.",
    person: "Elena Brooks",
    role: "Product Director, Harbor Stack",
  },
];

const proofStats = [
  { value: "32%", label: "faster rollout cycles" },
  { value: "99.2%", label: "traceable decision steps" },
  { value: "18 hrs", label: "weekly manual work removed" },
];

const footerLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "Proof", href: "#proof" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <EntryOrchestrator />

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3" data-reveal>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-dark)] text-white shadow-[var(--shadow-soft)]">
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold">A</span>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg leading-none">Armory Systems</p>
              <p className="mt-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                Automation &amp; AI
              </p>
            </div>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 font-[family-name:var(--font-mono)] text-sm text-[var(--muted)] md:flex"
            data-reveal
          >
            <a href="#platform" className="nav-link transition duration-200 ease-out hover:text-[var(--ink)]">
              Platform
            </a>
            <a href="#pricing" className="nav-link transition duration-200 ease-out hover:text-[var(--ink)]">
              Pricing
            </a>
            <a href="#proof" className="nav-link transition duration-200 ease-out hover:text-[var(--ink)]">
              Proof
            </a>
            <a
              href="#pricing"
              className="button-primary button-pill inline-flex items-center justify-center rounded-full px-5 py-2 text-white transition duration-200 ease-out hover:-translate-y-0.5"
            >
              Book Demo
            </a>
          </nav>

          <details className="group relative md:hidden" data-reveal>
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-2xl border border-[var(--line)] bg-white text-[var(--brand-dark)] transition duration-200 ease-out hover:border-[var(--line-strong)]">
              <span className="sr-only">Toggle navigation</span>
              <span className="mobile-nav-icon" aria-hidden="true" />
            </summary>
            <div className="absolute right-0 top-14 w-64 rounded-3xl border border-[var(--line)] bg-white p-3 shadow-[var(--shadow-hard)]">
              <a href="#platform" className="block rounded-2xl px-4 py-3 text-sm text-[var(--ink)] transition hover:bg-[var(--surface)]">
                Platform
              </a>
              <a href="#pricing" className="mt-1 block rounded-2xl px-4 py-3 text-sm text-[var(--ink)] transition hover:bg-[var(--surface)]">
                Pricing
              </a>
              <a href="#proof" className="mt-1 block rounded-2xl px-4 py-3 text-sm text-[var(--ink)] transition hover:bg-[var(--surface)]">
                Proof
              </a>
              <a
                href="#pricing"
                className="button-primary mt-3 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-white"
              >
                Book Demo
              </a>
            </div>
          </details>
        </div>
      </header>

      <section id="top" className="hero-shell border-b border-[var(--line)]">
        <div className="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-14">
          <div className="flex flex-col justify-center gap-8" data-reveal>
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--line)] bg-white px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--muted)] shadow-[var(--shadow-soft)]">
              <span className="rounded-full bg-[var(--brand-yellow)] px-2 py-1 text-[var(--brand-dark)]">New</span>
              AI operations platform
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[0.96] text-[var(--brand-dark)] md:text-6xl xl:text-7xl">
                Visible, reliable AI automation for modern operations.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[var(--muted-strong)]">
                Retrieval-aware workflows, approval-safe automations, and production visibility in one clean platform.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="button-primary inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.16em] text-white transition duration-200 ease-out hover:-translate-y-0.5"
              >
                <Image src="/icons/link-solid.svg" alt="" width={16} height={16} className="h-4 w-4 invert" />
                Start your rollout
              </a>
              <a
                href="#platform"
                className="button-secondary inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.16em] text-[var(--brand-dark)] transition duration-200 ease-out hover:-translate-y-0.5"
              >
                <Image src="/icons/arrow-path.svg" alt="" width={16} height={16} className="h-4 w-4" />
                Explore platform
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="rounded-full border border-[var(--line)] bg-white px-3 py-2">Semantic HTML</span>
              <span className="rounded-full border border-[var(--line)] bg-white px-3 py-2">Responsive motion</span>
              <span className="rounded-full border border-[var(--line)] bg-white px-3 py-2">Zero UI dependencies</span>
            </div>

            <dl className="grid gap-4 md:grid-cols-3">
              {signals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[var(--brand-dark)]"
                >
                  <dt className="flex items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    <Image src={signal.icon} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                    {signal.label}
                  </dt>
                  <dd className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand-dark)]">
                    {signal.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="relative flex items-center" data-reveal>
            <div className="hero-media-frame">
              <div className="hero-media-backdrop" />

              <div className="hero-grid-overlay" />
              <div className="hero-orbit hero-orbit-a" />
              <div className="hero-orbit hero-orbit-b" />
              <div className="hero-cube hero-cube-main">
                <div className="hero-cube-face hero-cube-front">
                  <Image src="/icons/cube-16-solid.svg" alt="" width={28} height={28} className="h-7 w-7" />
                </div>
                <div className="hero-cube-face hero-cube-top" />
                <div className="hero-cube-face hero-cube-side" />
              </div>
              <div className="hero-robot-panel">
                <div className="hero-avatar">
                  <div className="hero-avatar-head">
                    <div className="hero-avatar-visor">
                      <span className="hero-eye" />
                      <span className="hero-eye" />
                    </div>
                  </div>
                  <div className="hero-avatar-body" />
                  <div className="hero-avatar-leg hero-avatar-leg-left" />
                  <div className="hero-avatar-leg hero-avatar-leg-right" />
                </div>
              </div>

              <div className="hero-bubble hero-bubble-right">Live</div>
              <div className="hero-bubble hero-bubble-left">AI-ready</div>
              <div className="hero-status-pill">
                <Image src="/icons/arrow-trending-up.svg" alt="" width={16} height={16} className="h-4 w-4" />
                <span>Workflow health: stable</span>
              </div>

              <div className="hero-side-card hero-side-card-top">
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Active modules
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand-dark)]">12</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">retrieval, routing, approvals, analytics</p>
              </div>

              <div className="hero-side-card hero-side-card-bottom">
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Response quality
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand-dark)]">98.4%</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">guardrail pass rate in supervised flows</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="platform" className="border-b border-[var(--line)] bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 lg:px-10">
          <div
            className="grid gap-6 rounded-[2rem] border border-[var(--line)] bg-[var(--brand-dark)] p-7 text-white shadow-[var(--shadow-hard)] lg:grid-cols-[0.92fr_1.08fr]"
            data-reveal
          >
            <div className="space-y-4">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/60">
                Platform structure
              </p>
              <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-[-0.04em] md:text-5xl">
                Technical depth without losing readability.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-white/74">
              Bring workflow logic, approvals, and observability into one calm operating layer your team can actually use
              every day.
            </p>
          </div>

          <FeatureShowcase />
        </div>
      </section>

      <section id="pricing" className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 lg:px-10">
          <div className="max-w-4xl space-y-5" data-reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Matrix pricing
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-[-0.04em] text-[var(--brand-dark)] md:text-5xl">
              Flexible pricing for teams at different stages.
            </h2>
            <p className="text-lg leading-8 text-[var(--muted-strong)]">
              Choose the plan that fits your team today, then switch billing cadence or currency without friction as you
              grow.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3" data-reveal>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Clear pricing
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                Plans stay easy to compare across currencies and billing cycles without making the page harder to scan.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Built to scale
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                Start with a focused setup, then expand into multi-team workflows, approvals, and deeper controls.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Shared visibility
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                Product, operations, and support teams can work from the same automation picture instead of separate tools.
              </p>
            </div>
          </div>

          <PricingMatrix />
        </div>
      </section>

      <section id="proof" className="border-b border-[var(--line)] bg-[var(--brand-dark)] text-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="space-y-5" data-reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/60">
              Social proof
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-[-0.04em] md:text-6xl">
              Teams rely on Armory to keep automation understandable.
            </h2>
            <p className="text-lg leading-8 text-white/74">
              From daily workflows to high-stakes approvals, the platform helps teams move faster without losing context
              or control.
            </p>
            <div className="grid gap-4 pt-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {proofStats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/12 bg-white/6 p-5">
                  <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand-yellow)]">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.name}
                className="rounded-[1.75rem] border border-white/12 bg-white/6 p-6 shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-[family-name:var(--font-display)] text-2xl">{study.name}</p>
                  <Image src={study.icon} alt="" width={24} height={24} className="h-6 w-6 invert" />
                </div>
                <p className="mt-4 text-sm leading-7 text-white/74">{study.summary}</p>
                <p className="mt-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--brand-yellow)]">
                  {study.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-16 lg:px-10">
          <div className="max-w-3xl space-y-4" data-reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Customer voices
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-[-0.04em] text-[var(--brand-dark)] md:text-5xl">
              What teams say after launch.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.person}
                className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[var(--brand-dark)]"
              >
                <p className="text-lg leading-8 text-[var(--brand-dark)]">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6">
                  <p className="font-[family-name:var(--font-display)] text-xl">{item.person}</p>
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {item.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-10" data-reveal>
          <div className="grid gap-8 rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-hard)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Ready to launch
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-[-0.04em] text-[var(--brand-dark)] md:text-5xl">
                Bring calm, visible automation into everyday work.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted-strong)]">
                Give your team one place to run workflows, review approvals, and understand what your AI systems are doing
                in real time.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="#pricing"
                className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.16em] text-white transition duration-200 ease-out hover:-translate-y-0.5"
              >
                View plans
              </a>
              <a
                href="#top"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-6 py-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.16em] text-[var(--brand-dark)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--brand-dark)]"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--brand-dark)] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[var(--brand-dark)] shadow-[var(--shadow-soft)]">
                <span className="font-[family-name:var(--font-display)] text-lg font-semibold">A</span>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-xl">Armory Systems</p>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/55">
                  AI Automation Platform
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
              Built for teams that want automation to feel clear, trustworthy, and easy to operate across product,
              support, and operations.
            </p>
          </div>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white/55">Navigation</p>
            <div className="mt-5 grid gap-3">
              {footerLinks.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/78 transition duration-200 ease-out hover:text-[var(--brand-yellow)]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
