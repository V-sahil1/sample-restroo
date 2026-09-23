import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/lib/data";
import { Eyebrow, Icon } from "@/components/ui";
import { FinaleBanner, Gallery, PageHero, Section } from "@/components/sections";

export const metadata: Metadata = { title: "Gallery" };

const MOMENTS = [
  { src: IMAGES.interior, label: "Atmosphere", title: "Twilight on the Salon Floor", span: "md:col-span-8 md:row-span-2" },
  { src: IMAGES.cocktail, label: "Mixology", title: "Saffron Smoke Cloche", span: "md:col-span-4" },
  { src: IMAGES.spices, label: "Pantry", title: "Morning Spice Grind", span: "md:col-span-4" },
  { src: IMAGES.butterChicken, label: "Kitchen", title: "Smoked Velvet Butter Chicken", span: "md:col-span-6" },
  { src: IMAGES.spices, label: "Heritage", title: "Kashmiri Saffron Threads", span: "md:col-span-6" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Odyssey"
        title="Your Camera Roll"
        accent="Will Thank You."
        description="Amber sconces, Carrara marble, smoke-veiled cocktails and plates made for the close-up."
        image={IMAGES.cocktail}
      />
      <Gallery showFollow={false} />

      <Section tone="sage">
        <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <Eyebrow>After Dark</Eyebrow>
            <h2 className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
              Moments From the Salon
            </h2>
          </div>
          <p className="flex items-center gap-space-xs text-label-lg text-forest">
            <Icon name="photo_camera" className="text-lg text-gold" /> Tag #SambharDining to be featured
          </p>
        </div>
        <div className="grid grid-cols-1 gap-space-md md:auto-rows-[260px] md:grid-cols-12">
          {MOMENTS.map((m) => (
            <figure
              key={m.title}
              className={`group relative min-h-[260px] overflow-hidden rounded-xl shadow-md ${m.span}`}
            >
              <Image
                src={m.src}
                alt={m.title}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-transparent to-transparent opacity-80" />
              <figcaption className="absolute right-space-md bottom-space-md left-space-md text-white">
                <p className="text-label-sm font-semibold uppercase tracking-wider text-gold-bright">{m.label}</p>
                <p className="text-title-md font-semibold">{m.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <FinaleBanner />
      </Section>
    </>
  );
}
