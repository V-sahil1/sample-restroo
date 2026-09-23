import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { CONCIERGE, IMAGES, LOCATIONS } from "@/lib/data";
import { Eyebrow, Icon } from "@/components/ui";
import { PageHero, Section } from "@/components/sections";

export const metadata: Metadata = { title: "Reserve a Table" };

export default function ReservePage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Your Table"
        accent="Is Waiting."
        description="Good food. Great company. An elevated sensory evening worth remembering for a lifetime."
        image={IMAGES.interior}
      />
      <Section tone="sage">
        <div className="grid grid-cols-1 gap-space-2xl lg:grid-cols-12">
          <div className="order-2 lg:col-span-7">
            <BookingForm kind="reserve" />
          </div>
          <aside className="order-1 flex flex-col gap-space-lg lg:col-span-5">
            <div>
              <Eyebrow>Book Your Evening</Eyebrow>
              <h2 className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
                Reserve a Table
              </h2>
              <p className="mt-space-sm text-body-md text-ink">
                Online reservations are available for parties of up to 8. For larger groups, visit{" "}
                <Link href="/private-dining#enquire" className="text-forest underline decoration-gold underline-offset-4">
                  Private Dining
                </Link>
                .
              </p>
            </div>
            {LOCATIONS.map((l) => (
              <div key={l.id} className="rounded-xl border border-sage-200 bg-white p-space-lg shadow-sm">
                <h3 className="font-display text-title-lg font-semibold text-forest">{l.title}</h3>
                <p className="mt-1 text-body-sm text-ink">{l.address}</p>
                <p className="mt-1 text-body-sm font-medium text-forest-soft">{l.hours}</p>
              </div>
            ))}
            <div className="rounded-xl border border-[rgba(197,160,89,0.45)] bg-forest p-space-lg text-white">
              <p className="text-label-sm uppercase tracking-[0.12em] text-gold-bright">Chef&apos;s Table</p>
              <p className="mt-1 font-display text-headline-sm">Six seats at the pass, Thursday – Saturday.</p>
              <a href={CONCIERGE.phoneHref} className="mt-space-sm inline-flex items-center gap-space-xs text-body-sm text-mint hover:text-white">
                <Icon name="call" className="text-base text-gold" /> Call {CONCIERGE.phone}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
