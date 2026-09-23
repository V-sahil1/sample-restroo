import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/lib/data";
import BookingForm from "@/components/BookingForm";
import { Eyebrow, Icon } from "@/components/ui";
import { PageHero, Reviews, Section } from "@/components/sections";

export const metadata: Metadata = { title: "Private Dining" };

const SUITES = [
  {
    name: "The Jaali Alcove",
    guests: "Up to 8 guests",
    image: IMAGES.spices,
    body: "A velvet-curtained alcove behind brass latticework — our most intimate table for proposals and anniversaries.",
    features: ["Dedicated host", "Bespoke tasting menu", "Candlelit service"],
  },
  {
    name: "The Saffron Room",
    guests: "Up to 24 guests",
    image: IMAGES.cocktail,
    body: "A private salon with its own cocktail station, ideal for birthdays, launches and long celebratory dinners.",
    features: ["Private bar", "Curated playlist", "AV on request"],
  },
  {
    name: "Full-Floor Residency",
    guests: "Up to 120 guests",
    image: IMAGES.interior,
    body: "The entire dining floor, reimagined around your evening with a menu composed by our Chef Patron.",
    features: ["Exclusive buyout", "Beverage director", "Custom styling"],
  },
];

export default function PrivateDiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Gatherings & Exclusive Buyouts"
        title="Make It"
        accent="Yours."
        description="From secluded alcoves for 8 guests to full-floor culinary residencies for 120, handcrafted by our Chef Patron and beverage director."
      />

      <Section>
        <div className="mx-auto mb-space-2xl max-w-2xl text-center">
          <Eyebrow>Private Dining Suites</Eyebrow>
          <h2 className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
            Rooms for Every Occasion.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {SUITES.map((s) => (
            <article
              key={s.name}
              className="flex flex-col overflow-hidden rounded-xl border border-sage-200 bg-white shadow-[0_16px_36px_-8px_rgba(14,42,29,0.06)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[5rem]">
                <Image src={s.image} alt={s.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-space-sm p-space-lg">
                <p className="text-label-sm uppercase tracking-[0.12em] text-gold">{s.guests}</p>
                <h3 className="font-display text-headline-sm font-semibold text-forest">{s.name}</h3>
                <p className="text-body-md text-ink">{s.body}</p>
                <ul className="mt-auto flex flex-wrap gap-space-xs pt-space-md">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-pill border border-[rgba(45,90,67,0.15)] bg-[#f0f5f2] px-space-sm py-1 text-body-sm text-forest"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sage" id="enquire">
        <div className="grid grid-cols-1 gap-space-2xl lg:grid-cols-12">
          <div className="flex flex-col gap-space-md lg:col-span-5">
            <Eyebrow>Plan an Event</Eyebrow>
            <h2 className="font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
              Tell Us About Your Evening.
            </h2>
            <p className="text-body-lg text-ink">
              Share a few details and our private dining director will craft a proposal — menus,
              pairings, styling and timings — within one business day.
            </p>
            <ul className="mt-space-sm flex flex-col gap-space-sm text-body-md text-forest">
              {["Bespoke tasting menus & sommelier pairings", "Jain, Halal & Vegan menus on request", "Floral, lighting and music styling"].map((t) => (
                <li key={t} className="flex items-center gap-space-sm">
                  <Icon name="check_circle" className="text-gold" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <BookingForm kind="event" />
          </div>
        </div>
      </Section>

      <Reviews />
    </>
  );
}
