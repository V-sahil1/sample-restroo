import { PageHero, Section } from "@/components/sections";
import { CONCIERGE } from "@/lib/data";

export default function LegalPage({
  eyebrow,
  title,
  sections,
}: {
  eyebrow: string;
  title: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-space-xl">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-headline-sm font-semibold text-forest">{s.heading}</h2>
              <p className="mt-space-sm text-body-lg text-ink">{s.body}</p>
            </div>
          ))}
          <p className="border-t border-sage-200 pt-space-lg text-body-sm text-ink">
            Questions? Contact{" "}
            <a href={`mailto:${CONCIERGE.email}`} className="text-forest underline decoration-gold underline-offset-4">
              {CONCIERGE.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
