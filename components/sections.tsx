import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import MenuTabs from "@/components/MenuTabs";
import {
  CONCIERGE,
  DIRECTIONS_URL,
  EXPERIENCES,
  IMAGES,
  LOCATIONS,
  MOODS,
  REVIEWS,
} from "@/lib/data";
import {
  ButtonLink,
  EditorialLink,
  Eyebrow,
  Icon,
  Stars,
  container,
} from "@/components/ui";

const cardShadow = "shadow-[0_16px_36px_-8px_rgba(14,42,29,0.06)]";

/* 1. HERO ---------------------------------------------------------------- */
export function Hero() {
  return (
    <section
      data-hero
      className="relative -mt-20 flex min-h-svh w-full items-center justify-center overflow-hidden bg-forest"
    >
      {/* Two wrappers so the load-in zoom and the scroll zoom never fight over one transform */}
      <div data-hero-bg-scale className="absolute inset-0">
        <div data-hero-bg className="absolute inset-0">
          <Image src={IMAGES.interior} alt="" fill preload sizes="100vw" className="scale-105 object-cover" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/85 to-[#00140a]/75 mix-blend-multiply" />
      <div data-hero-overlay className="absolute inset-0 bg-forest opacity-0" />

      <div className={`${container} relative z-10 flex flex-col items-center pt-28 pb-space-2xl text-center`}>
        <div data-hero-fade>
          <div
            data-hero-badge
            className="mb-space-lg inline-flex items-center gap-space-sm rounded-pill border border-gold/40 bg-forest/80 px-space-md py-space-xs shadow-sm backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="text-label-sm uppercase tracking-[0.25em] text-gold-light">
              Modern Indian Hospitality
            </span>
          </div>
        </div>
        <h1
          data-hero-title
          className="mx-auto max-w-4xl font-display text-[3.25rem] leading-[1.15] font-semibold tracking-tight text-white drop-shadow-md sm:text-display md:text-[5.5rem] lg:text-[6.5rem]"
        >
          <span data-hero-left className="inline-block">“India,</span>{" "}
          <span data-hero-right className="inline-block">
            <span className="font-normal italic text-gold-bright">Reimagined.</span>”
          </span>
        </h1>
        <div data-hero-fade className="flex w-full flex-col items-center">
          <p data-hero-copy className="mx-auto mt-space-lg max-w-2xl text-body-lg leading-relaxed text-mint/90">
            Timeless Indian flavours, contemporary sensorial architecture, and a curated table
            designed for unforgettable twilight moments.
          </p>
          <div data-hero-cta className="mt-space-xl flex w-full flex-wrap items-center justify-center gap-space-md">
            <ButtonLink href="/#menu-preview" className="shadow-[0_16px_36px_-8px_rgba(198,161,91,0.4)]">
              Explore Menu
            </ButtonLink>
            <ButtonLink href="/reserve" variant="white" className="shadow-sm backdrop-blur-md">
              Reserve a Table
            </ButtonLink>
          </div>
          <a
            data-hero-cue
            href="#our-story"
            className="mt-space-2xl inline-flex flex-col items-center gap-space-xs text-gold-bright transition-colors hover:text-gold-light"
          >
            <span className="text-label-sm uppercase tracking-[0.2em]">Scroll to Discover</span>
            <Icon name="south" className="animate-bounce text-sm" />
          </a>
        </div>
      </div>

      {/* Revealed mid-scroll by ScrollStory, the bridge into Our Story */}
      <div
        data-hero-chapter
        aria-hidden="true"
        className="invisible pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-margin-mobile text-center opacity-0"
      >
        <span className="text-label-sm uppercase tracking-[0.35em] text-gold-light">Chapter I</span>
        <p className="mt-space-md max-w-3xl font-display text-[2.25rem] leading-tight text-white md:text-display-lg">
          Every plate begins with a <span className="italic text-gold-bright">story.</span>
        </p>
        <span data-hero-chapter-line className="mt-space-lg block h-px w-40 origin-center scale-x-0 bg-gold" />
      </div>
    </section>
  );
}

/* Sub-page hero ---------------------------------------------------------- */
export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image = IMAGES.interior,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative -mt-20 flex min-h-[56vh] w-full items-end overflow-hidden bg-forest">
      <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/85 to-[#00140a]/75 mix-blend-multiply" />
      <div className={`${container} relative z-10 pt-40 pb-space-2xl md:pb-space-3xl`}>
        <div className="mb-space-md inline-flex items-center gap-space-sm rounded-pill border border-gold/40 bg-forest/80 px-space-md py-space-xs backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="text-label-sm uppercase tracking-[0.25em] text-gold-light">{eyebrow}</span>
        </div>
        <h1 className="max-w-4xl font-display text-[2.75rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-display-lg md:text-display">
          {title} {accent && <span className="font-normal italic text-gold-bright">{accent}</span>}
        </h1>
        {description && (
          <p className="mt-space-md max-w-2xl text-body-lg leading-relaxed text-mint/90">{description}</p>
        )}
      </div>
    </section>
  );
}

/* 2. STORY --------------------------------------------------------------- */
export function Story({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="our-story" className="relative w-full border-y border-sage-200 bg-sage-50 py-space-3xl">
      <div className={container}>
        <div className="grid grid-cols-1 items-center gap-space-2xl lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                data-clip-reveal
                className="relative aspect-[4/5] overflow-hidden rounded-t-[7rem] rounded-b-xl bg-sage-200 shadow-[0_20px_48px_-12px_rgba(14,42,29,0.12)]"
              >
                <div data-clip-img className="absolute inset-0">
                  <Image
                    src={IMAGES.spices}
                    alt="Artisan Indian spices, green cardamom, star anise, saffron, and terracotta grinder"
                    fill
                    sizes="(min-width: 1024px) 50vw, 28rem"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                <div data-reveal className="absolute right-space-lg bottom-space-lg left-space-lg rounded-lg border border-sage-200 bg-white/95 p-space-md shadow-sm backdrop-blur-md">
                  <p className="text-label-sm font-semibold uppercase tracking-widest text-gold">Heritage Terroir</p>
                  <p className="text-title-md font-semibold text-forest">
                    Kashmiri Saffron &amp; Malabar Tellicherry Pepper
                  </p>
                </div>
              </div>
              <div data-pop className="absolute right-0 sm:-right-4 -bottom-6 flex h-28 w-28 rotate-12 items-center justify-center rounded-pill border border-gold/40 bg-forest p-2 text-center text-mint shadow-xl md:-right-8">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider">
                  100% Single Origin Spices
                </span>
              </div>
            </div>
          </div>

          <div data-stagger className="flex flex-col gap-space-lg lg:col-span-6">
            <div className="inline-flex items-center gap-space-xs text-label-lg font-semibold uppercase tracking-[0.2em]">
              <span className="h-0.5 w-6 bg-gold" />
              <span className="text-gold">Our Story</span>
            </div>
            <h2 className="max-w-lg font-display text-[28px] leading-tight font-semibold text-forest md:text-headline-lg">
              “Rooted in India. <br />
              <span className="font-normal italic text-forest-mid">Designed for Today.”</span>
            </h2>
            <p className="text-body-lg leading-relaxed text-ink">
              From generations-old hearth cooking to contemporary dining room artistry, our kitchen
              bridges India’s 28 diverse culinary traditions with modern global gastronomy. We
              honour royal culinary manuscripts while composing dishes with unbridled sensory joy.
            </p>
            {showLink && (
              <EditorialLink href="/our-story">Discover Our Lineage &amp; Kitchen Philosophy</EditorialLink>
            )}
            <div className="mt-space-md grid grid-cols-3 gap-space-md border-t border-outline-variant/50 pt-space-lg">
              {[
                ["14", "Culinary Regions"],
                ["28", "Bespoke Spices"],
                ["0%", "Compromise"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p data-count={parseInt(n)} className="font-display text-headline-md font-bold text-forest">{n}</p>
                  <p className="mt-1 text-label-sm uppercase tracking-wider text-ink">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. SIGNATURE EXPERIENCE ------------------------------------------------ */
export function Experiences() {
  return (
    <section className="relative w-full overflow-hidden bg-forest py-space-3xl text-white">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-5">
        <defs>
          <pattern id="jaali" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 0 L120 60 L60 120 L0 60 Z M60 20 L100 60 L60 100 L20 60 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jaali)" />
      </svg>
      <div className={`${container} relative z-10`}>
        <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <Eyebrow dark className="font-normal">Signature Experience</Eyebrow>
            <h2 data-split className="mt-space-xs font-display text-[28px] leading-[36px] md:text-headline-lg">More Than a Meal.</h2>
          </div>
          <p data-reveal className="max-w-md text-body-md leading-relaxed text-mint/90">
            A multi-sensory salon curated to ignite curiosity, celebrate companionship, and indulge
            palate sophistication.
          </p>
        </div>
        <div data-stagger className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCES.map((e) => (
            <div
              key={e.title}
              className="group flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/[0.06] p-space-xl shadow-[0_16px_36px_-8px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.12]"
            >
              <div>
                <div className="mb-space-lg flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-forest-mid text-gold-bright transition-transform group-hover:scale-110">
                  <Icon name={e.icon} className="text-2xl" />
                </div>
                <h3 className="mb-space-sm font-display text-headline-sm text-white">{e.title}</h3>
                <p className="text-body-sm leading-relaxed text-mint/80">{e.body}</p>
              </div>
              <span className="pt-space-lg text-[0.65rem] font-semibold uppercase tracking-widest text-gold-bright">
                {e.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4. MENU PREVIEW -------------------------------------------------------- */
export function MenuPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="menu-preview" className="w-full bg-white py-space-3xl">
      <div className={container}>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Our Menu</Eyebrow>
          <h2 data-split className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
            “Flavours Worth Coming Back For.”
          </h2>
          <p className="mt-2 max-w-lg text-body-md text-ink">
            Meticulously plated courses featuring single-estate ingredients, tandoor roasting, and
            royal heritage curations.
          </p>
        </div>
        <MenuTabs />
        {showLink && (
          <div className="mt-space-2xl text-center">
            <EditorialLink href="/menu">Explore Full Tasting &amp; À La Carte Menu</EditorialLink>
          </div>
        )}
      </div>
    </section>
  );
}

/* 5. SIGNATURE DISH ------------------------------------------------------ */
export function SignatureDish() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-obsidian py-space-3xl text-ivory">
      <div className={container}>
        <div className="grid grid-cols-1 items-center gap-space-2xl lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <div
              data-clip-reveal="left"
              className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)]"
            >
              <div data-clip-img className="absolute inset-0">
                <Image
                  src={IMAGES.butterChicken}
                  alt="Plated Smoked Velvet Butter Chicken with fenugreek lace tuile, copper cups, and rustic wood table"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            </div>
            <div data-pop className="absolute -top-4 -left-2 rounded-pill border border-white/20 bg-gold px-space-lg py-space-sm text-title-md font-semibold text-white shadow-lg sm:-left-4">
              $34 Signature
            </div>
          </div>
          <div data-stagger className="flex flex-col gap-space-md lg:col-span-5">
            <Eyebrow dark className="font-normal">The Signature Creation</Eyebrow>
            <h2 data-split className="font-display text-[28px] leading-tight text-white md:text-headline-lg">
              “A Modern Take on the Classics.”
            </h2>
            <h3 className="font-display text-title-lg text-mint">Smoked Velvet Butter Chicken</h3>
            <p className="text-body-md leading-relaxed text-white/80">
              Free-range tender chicken steeped in a 24-hour slow-simmered tomato makhani, draped
              with smoked cultured butter, delicate golden lace tuile, 24k edible gold leaf, and
              fresh micro coriander leaves. Accompanied by charred wood-fired flatbread.
            </p>
            <div className="flex flex-wrap items-center gap-space-lg pt-space-sm">
              <div>
                <p className="text-label-sm font-semibold uppercase tracking-wider text-gold-bright">Preparation</p>
                <p className="text-body-md font-medium text-white">24h Makhani Simmer</p>
              </div>
              <div>
                <p className="text-label-sm font-semibold uppercase tracking-wider text-gold-bright">Fire Profile</p>
                <p className="text-body-md font-medium text-white">Clay Tandoor Charcoal</p>
              </div>
            </div>
            <div className="pt-space-md">
              <ButtonLink href="/reserve" className="shadow-md">
                Taste Our Signature →
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 6. MOODS --------------------------------------------------------------- */
export function Moods() {
  return (
    <section className="w-full bg-sage-50 py-space-3xl">
      <div className={container}>
        <div className="mx-auto mb-space-2xl max-w-2xl text-center">
          <Eyebrow>Atmosphere &amp; Energy</Eyebrow>
          <h2 data-split className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
            Made for Your Kind of Night.
          </h2>
          <p className="mt-2 text-body-md text-ink">
            From curated dining playlists to low ambient glows, step into a vibe designed for
            contemporary memory making.
          </p>
        </div>
        <div data-stagger className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {MOODS.map((m) => (
            <div
              key={m.title}
              className={`flex flex-col justify-between rounded-xl border border-sage-200 bg-white p-space-xl transition-all duration-300 hover:shadow-lg ${cardShadow}`}
            >
              <div>
                <div
                  className={`mb-space-lg inline-flex items-center gap-2 rounded-lg px-space-sm py-1 text-forest ${
                    m.tint ? "bg-mint/60" : "bg-sage-200"
                  }`}
                >
                  <Icon name={m.badgeIcon} className={`text-sm ${m.tint ? "text-forest" : "text-gold"}`} />
                  <span className="text-label-sm font-semibold uppercase tracking-wider">{m.badge}</span>
                </div>
                <h3 className="mb-space-sm font-display text-headline-sm font-semibold text-forest">{m.title}</h3>
                <p className="text-body-md leading-relaxed text-ink">{m.body}</p>
              </div>
              <div className="mt-space-md flex items-center justify-between border-t border-sage-200 pt-space-xl text-ink">
                <span className="text-[0.7rem] font-semibold uppercase tracking-wider">{m.footer}</span>
                <Icon name={m.footerIcon} className="text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 7. GALLERY ------------------------------------------------------------- */
function GalleryTile({
  src,
  alt,
  label,
  title,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  label?: string;
  title?: string;
  className: string;
  sizes: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-xl shadow-md ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover transition-transform duration-700 group-hover:scale-105" />
      {title ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
          <div className="absolute right-space-md bottom-space-md left-space-md text-white">
            <p className="text-label-sm font-semibold uppercase tracking-wider text-gold-bright">{label}</p>
            <p className="text-title-md font-semibold text-white">{title}</p>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-forest/20 transition-colors group-hover:bg-transparent" />
      )}
    </div>
  );
}

export function Gallery({ showFollow = true }: { showFollow?: boolean }) {
  return (
    <section className="w-full border-t border-sage-200 bg-white py-space-3xl">
      <div className={container}>
        <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <Eyebrow>Visual Odyssey</Eyebrow>
            <h2 data-split className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
              “Your Camera Roll Will Thank You.”
            </h2>
          </div>
          {showFollow && (
            <Link
              href="/gallery"
              className="inline-flex w-fit items-center gap-space-xs rounded-pill border border-line bg-sage-100 px-space-lg py-space-sm text-label-lg font-semibold text-forest transition-all hover:bg-sage-200"
            >
              <Icon name="photo_camera" className="text-lg text-gold" />
              <span>Follow @sambhar.dining</span>
            </Link>
          )}
        </div>
        <div data-stagger className="grid grid-cols-1 items-stretch gap-space-md md:grid-cols-12">
          <GalleryTile
            src={IMAGES.cocktail}
            alt="Cocktail with glowing aromatic smoke bubble on dark marble bar counter"
            label="Aromatic Smoke Cloche"
            title="The Saffron Twilight Bubble"
            className="min-h-[380px] md:col-span-5"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
          <GalleryTile
            src={IMAGES.interior}
            alt="Vibrant restaurant dining hall filled with stylish young diners under warm lighting"
            label="Atmosphere"
            title="The Velvet Dining Salon"
            className="min-h-[380px] md:col-span-4"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <div className="flex flex-col gap-space-md md:col-span-3">
            <GalleryTile
              src={IMAGES.spices}
              alt="Slate slab with whole Indian spices, star anise and saffron"
              className="min-h-[180px] flex-1"
              sizes="(min-width: 768px) 25vw, 100vw"
            />
            <GalleryTile
              src={IMAGES.butterChicken}
              alt="Close up of plated butter chicken with lace tuile and herbs"
              className="min-h-[180px] flex-1"
              sizes="(min-width: 768px) 25vw, 100vw"
            />
          </div>
        </div>
        <div className="mt-space-lg flex flex-wrap items-center justify-between gap-space-sm text-label-sm font-medium uppercase tracking-widest text-ink">
          <span>Sambhar • New Delhi &amp; Mayfair London</span>
          <span>Tagged #SambharDining • 42.8k Mentions</span>
        </div>
      </div>
    </section>
  );
}

/* 8. PRIVATE DINING BAND ------------------------------------------------- */
export function PrivateDiningBand() {
  return (
    <section className="relative w-full bg-forest py-space-3xl text-white">
      <div className={container}>
        <div data-stagger className="mx-auto flex max-w-3xl flex-col items-center gap-space-md text-center">
          <Eyebrow dark className="font-normal">Private Gatherings &amp; Exclusive Buyouts</Eyebrow>
          <h2 data-split className="font-display text-[28px] leading-[36px] md:text-headline-lg">“Make It Yours.”</h2>
          <p className="text-body-lg leading-relaxed text-mint/90">
            From secluded velvet-curtained alcoves for 8 guests to full-floor culinary residencies
            for 120, allow our Chef Patron and beverage director to handcraft your private tasting
            symphony.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-lg">
            <ButtonLink href="/private-dining" className="shadow-md">Private Dining Suites</ButtonLink>
            <ButtonLink href="/private-dining#enquire" variant="white">Plan an Event</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 9. REVIEWS ------------------------------------------------------------- */
export function Reviews() {
  return (
    <section className="w-full border-t border-sage-200 bg-sage-50 py-space-3xl">
      <div className={container}>
        <div className="mx-auto mb-space-2xl max-w-xl text-center">
          <Eyebrow>Guest Chronicles</Eyebrow>
          <h2 data-split className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
            “Loved Around the Table.”
          </h2>
        </div>
        <div data-stagger className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className={`flex flex-col justify-between rounded-xl border border-sage-200 bg-white p-space-xl ${cardShadow}`}
            >
              <div>
                <div className="mb-space-md"><Stars /></div>
                <blockquote className="mb-space-md font-display text-title-md italic text-forest">
                  “{r.quote}”
                </blockquote>
              </div>
              <figcaption>
                <p className="text-title-md font-bold text-forest">{r.name}</p>
                <p className="text-label-sm font-semibold uppercase tracking-wider text-gold">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 10a. LOCATIONS --------------------------------------------------------- */
export function Locations({ heading = "Visit Our Salons" }: { heading?: string }) {
  return (
    <div className="grid grid-cols-1 items-center gap-space-2xl lg:grid-cols-12">
      <div className="flex flex-col gap-space-lg lg:col-span-5">
        <div>
          <Eyebrow>Our Locations</Eyebrow>
          <h2 data-split className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
            {heading}
          </h2>
        </div>
        {LOCATIONS.map((l) => (
          <div key={l.id} className="rounded-xl border border-sage-200 bg-sage-50 p-space-lg shadow-sm">
            <h4 className="font-display text-title-lg font-semibold text-forest">{l.title}</h4>
            <p className="mt-1 text-body-sm text-ink">{l.address}</p>
            <p className="mt-1 text-body-sm font-medium text-forest-soft">{l.hours}</p>
          </div>
        ))}
        <div className="flex items-start gap-space-md text-body-sm text-ink">
          <Icon name="call" className="text-gold" />
          <span>
            Concierge Direct:{" "}
            <a href={CONCIERGE.phoneHref} className="hover:text-forest">{CONCIERGE.phone}</a> /{" "}
            <a href={`mailto:${CONCIERGE.email}`} className="break-all hover:text-forest">{CONCIERGE.email}</a>
          </span>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="relative flex h-80 w-full items-end overflow-hidden rounded-2xl border border-sage-200 p-space-md shadow-lg sm:p-space-lg md:h-96">
          <Image
            src={IMAGES.map}
            alt="Map of central London showing the Mayfair flagship"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
          <div className="relative flex w-full flex-col items-start justify-between gap-space-sm rounded-xl border border-sage-200 bg-white/95 p-space-md shadow-md backdrop-blur-md sm:flex-row sm:items-center">
            <div>
              <p className="text-label-sm font-semibold uppercase tracking-wider text-gold">Flagship Direction</p>
              <p className="text-title-md font-semibold text-forest">12 Berkeley Square, Mayfair</p>
            </div>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg bg-forest px-space-md py-space-xs text-label-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-forest-mid"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 10b. FINALE CTA -------------------------------------------------------- */
export function FinaleBanner() {
  return (
    <div data-scale-in className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-forest p-space-xl text-center text-white shadow-2xl sm:p-space-2xl md:p-space-3xl">
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
        <Eyebrow dark className="mb-space-sm font-normal">Unforgettable Gatherings</Eyebrow>
        <h2 data-split className="font-display text-[2.5rem] leading-tight font-semibold text-white sm:text-display-lg md:text-[4rem]">
          “Your Table Is Waiting.”
        </h2>
        <p className="mt-space-md max-w-lg text-body-lg leading-relaxed text-mint/90">
          Good food. Great company. An elevated sensory evening worth remembering for a lifetime.
        </p>
        <ButtonLink
          href="/reserve"
          className="mt-space-xl px-space-2xl shadow-[0_16px_36px_-8px_rgba(198,161,91,0.4)]"
        >
          Reserve Your Table
        </ButtonLink>
      </div>
    </div>
  );
}

export function LocationsAndFinale() {
  return (
    <section id="reservation" className="w-full bg-white py-space-3xl">
      <div className={container}>
        <div className="mb-space-3xl">
          <Locations />
        </div>
        <FinaleBanner />
      </div>
    </section>
  );
}

/* Generic content section used on sub-pages ------------------------------ */
export function Section({
  children,
  tone = "white",
  id,
}: {
  children: ReactNode;
  tone?: "white" | "sage" | "forest";
  id?: string;
}) {
  const tones = {
    white: "bg-white",
    sage: "bg-sage-50 border-y border-sage-200",
    forest: "bg-forest text-white",
  };
  return (
    <section id={id} className={`w-full py-space-3xl ${tones[tone]}`}>
      <div className={container}>{children}</div>
    </section>
  );
}
