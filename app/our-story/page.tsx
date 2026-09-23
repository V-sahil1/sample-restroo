import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/lib/data";
import { Eyebrow, Icon } from "@/components/ui";
import { FinaleBanner, PageHero, Reviews, Section, Story } from "@/components/sections";
import ScrollStory from "@/components/ScrollStory";

export const metadata: Metadata = { title: "Our Story" };

const PILLARS = [
  {
    icon: "menu_book",
    title: "Royal Manuscripts",
    body: "Recipes traced to Awadhi, Rajput and Mughal court kitchens, re-read with a modern hand and a lighter touch.",
  },
  {
    icon: "local_fire_department",
    title: "Hearth & Tandoor",
    body: "Clay ovens, charcoal sigris and 36-hour dum pots — slow fire remains the soul of every plate we send.",
  },
  {
    icon: "eco",
    title: "Single-Origin Spice",
    body: "Kashmiri saffron, Malabar Tellicherry pepper and Idukki cardamom, ground in-house each morning.",
  },
];

const TIMELINE = [
  {
    year: "2018",
    text: "A twelve-seat supper club lights its first tandoor in a brick-walled Lodhi Road warehouse.",
    image: "/images/journey-2018.jpg",
    alt: "The original brick-walled supper club at night, lit by copper cage pendants",
    position: "center 58%",
  },
  {
    year: "2022",
    text: "Sambhar New Delhi opens its dining room: hand-plastered walls, low banquettes and amber light.",
    image: "/images/journey-2022.jpg",
    alt: "Long banquette dining room beneath a row of glowing amber pendants",
    position: "center 55%",
  },
  {
    year: "2024",
    text: "The Velvet Salon arrives, with crystal chandeliers, candlelit marble and our first tasting evenings.",
    image: "/images/journey-2024.jpg",
    alt: "Velvet salon with crystal chandeliers, red velvet chairs and candlelit marble tables",
    position: "center 45%",
  },
  {
    year: "2026",
    text: "Our Mayfair salon opens on Berkeley Square, with private dining beneath the brass arch.",
    image: "/images/journey-2026.png",
    alt: "Guests gathered at a round table in the Mayfair private dining room",
    position: "center",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <ScrollStory />
      <PageHero
        eyebrow="Our Story"
        title="Rooted in India."
        accent="Designed for Today."
        description="A kitchen that carries centuries of culinary lineage into rooms built for tonight."
        image={IMAGES.spices}
      />
      <Story showLink={false} />

      <Section>
        <div className="mx-auto mb-space-2xl max-w-2xl text-center">
          <Eyebrow>Kitchen Philosophy</Eyebrow>
          <h2 data-split className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
            Three Principles, Every Plate.
          </h2>
        </div>
        <div data-stagger className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-sage-200 bg-white p-space-xl shadow-[0_16px_36px_-8px_rgba(14,42,29,0.06)]"
            >
              <div className="mb-space-lg flex h-12 w-12 items-center justify-center rounded-lg bg-forest text-gold-bright">
                <Icon name={p.icon} className="text-2xl" />
              </div>
              <h3 className="mb-space-sm font-display text-headline-sm font-semibold text-forest">{p.title}</h3>
              <p className="text-body-md leading-relaxed text-ink">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pinned on desktop by ScrollStory: the gold line draws down and each year takes the frame */}
      <section data-timeline className="w-full bg-obsidian py-space-3xl text-ivory">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-space-2xl px-margin-mobile md:px-margin-tablet lg:grid-cols-12 lg:px-margin">
          <div className="lg:col-span-5">
            <Eyebrow dark className="font-normal">Our Journey</Eyebrow>
            <h2 data-split className="mt-space-xs font-display text-[28px] leading-tight text-white md:text-headline-lg">
              From a Supper Club to Two Salons.
            </h2>
            <ol className="relative mt-space-xl flex flex-col gap-space-lg pl-space-lg">
              <span aria-hidden="true" className="absolute top-0 left-0 h-full w-px bg-gold/25" />
              <span
                data-timeline-progress
                aria-hidden="true"
                className="absolute top-0 left-0 h-full w-px origin-top bg-gold-bright"
              />
              {TIMELINE.map((t) => (
                <li key={t.year} data-timeline-item className="relative">
                  <span
                    data-timeline-dot
                    className="absolute top-1.5 -left-[calc(1.75rem+5px)] h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-gold/0"
                  />
                  <p className="font-display text-headline-sm text-gold-bright">{t.year}</p>
                  <p className="text-body-md text-white/80">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:col-span-7">
            {TIMELINE.map((t, i) => (
              <div
                key={t.year}
                data-timeline-image
                className={`absolute inset-0 ${i === TIMELINE.length - 1 ? "" : "invisible"}`}
              >
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: t.position }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                <span className="absolute bottom-space-md left-space-lg font-display text-[4rem] leading-none font-semibold text-white/90 md:text-[6rem]">
                  {t.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <Section>
        <FinaleBanner />
      </Section>
    </>
  );
}
