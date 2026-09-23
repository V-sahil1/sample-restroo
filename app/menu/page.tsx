import type { Metadata } from "next";
import { IMAGES, MENU } from "@/lib/data";
import { MenuCard } from "@/components/MenuTabs";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { FinaleBanner, PageHero, Section, SignatureDish } from "@/components/sections";

export const metadata: Metadata = { title: "Menu" };

const TASTING = [
  "Truffle Dahi Kebab",
  "Lamb Seekh Gilafi",
  "Smoked Butter Chicken",
  "36-Hour Dal Makhani & Truffle Garlic Naan",
  "Gold Leaf Gulab Jamun Tart",
];

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Tasting & À La Carte"
        title="Flavours Worth"
        accent="Coming Back For."
        description="Single-estate ingredients, tandoor roasting, and royal heritage curations — plated for the table."
        image={IMAGES.butterChicken}
      />

      {/* Category jump links */}
      <nav
        aria-label="Menu sections"
        className="sticky top-20 z-30 w-full border-b border-sage-200 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex w-full max-w-[1440px] gap-space-xs overflow-x-auto px-margin-mobile py-space-sm [scrollbar-width:none] md:justify-center md:px-margin-tablet lg:px-margin">
          {MENU.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="shrink-0 rounded-pill border border-[rgba(45,90,67,0.15)] bg-[#f0f5f2] px-space-md py-space-xs text-label-lg text-forest transition-colors hover:bg-forest hover:text-white"
            >
              {c.label}
            </a>
          ))}
          <a
            href="#tasting"
            className="shrink-0 rounded-pill bg-forest px-space-md py-space-xs text-label-lg text-white"
          >
            Tasting Menu
          </a>
        </div>
      </nav>

      {MENU.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className={`w-full py-space-2xl md:py-space-3xl ${i % 2 ? "border-y border-sage-200 bg-sage-50" : "bg-white"}`}
        >
          <div className="mx-auto w-full max-w-4xl px-margin-mobile md:px-margin-tablet">
            <div className="mb-space-xl flex items-end justify-between gap-space-md border-b border-outline-variant/50 pb-space-md">
              <h2 className="font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
                {c.label}
              </h2>
              <span className="text-label-sm uppercase tracking-[0.25em] text-gold">
                {String(i + 1).padStart(2, "0")} / {String(MENU.length).padStart(2, "0")}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
              {c.items.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Section id="tasting">
        <div className="mx-auto max-w-4xl rounded-xl bg-forest p-space-sm text-ivory">
          <div className="rounded-lg border border-gold p-space-lg text-center sm:p-space-2xl">
            <Eyebrow dark className="font-normal">Chef&apos;s Tasting Menu</Eyebrow>
            <h2 className="mt-space-xs font-display text-[28px] leading-tight text-white md:text-headline-lg">
              The Royal Procession
            </h2>
            <p className="mt-space-sm text-title-md text-gold">$95 per guest · Sommelier pairing +$60</p>
            <ol className="mx-auto mt-space-xl flex max-w-md flex-col gap-space-md">
              {TASTING.map((d, i) => (
                <li key={d} className="flex items-baseline gap-space-md border-b border-white/10 pb-space-sm text-left">
                  <span className="text-label-sm text-gold-bright">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-headline-sm italic text-white">{d}</span>
                </li>
              ))}
            </ol>
            <p className="mx-auto mt-space-lg max-w-md text-body-sm text-mint/80">
              Sommelier notes: an off-dry Alsatian Riesling with the tandoor course, and a chilled
              Beaujolais cru to meet the makhani.
            </p>
            <ButtonLink href="/reserve" className="mt-space-xl">
              Reserve the Tasting
            </ButtonLink>
          </div>
        </div>
        <p className="mt-space-lg text-center text-body-sm text-ink">
          V Vegetarian · GF Gluten Free · HALAL Halal certified. Please share allergies with your
          server.
        </p>
      </Section>

      <SignatureDish />
      <Section>
        <FinaleBanner />
      </Section>
    </>
  );
}
