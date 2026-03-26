import type { StepItem } from "@/content/i18n/schema";

export function ProcessSteps({ steps }: { steps: StepItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <div key={step.title} className="section-card h-full px-5 py-6 sm:px-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-sage)] text-sm font-semibold text-[var(--primary)]">
            {index + 1}
          </span>
          <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 sm:text-base">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
