import Link from "next/link";
import { CONCIERGE } from "@/lib/data";
import { Icon, LogoMark, container } from "@/components/ui";

const NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/experience", label: "Experience" },
];

const HOSPITALITY = [
  { href: "/gallery", label: "Gallery" },
  { href: "/private-dining", label: "Private Dining" },
  { href: "/reserve", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL = [
  { href: "https://www.instagram.com/", label: "Instagram", icon: "photo_camera" },
  { href: "https://www.facebook.com/", label: "Facebook", icon: "public" },
  { href: "https://www.tiktok.com/", label: "TikTok", icon: "videocam" },
];

const LEGAL = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/accessibility", label: "Accessibility" },
];

const linkCls = "text-body-sm text-sage/80 hover:text-white transition-colors";
const headingCls = "text-label-lg uppercase tracking-widest font-semibold text-gold-bright";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-obsidian py-space-3xl text-ivory">
      <div className={container}>
        <div className="grid grid-cols-1 gap-space-2xl pb-space-2xl md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-space-md lg:col-span-4">
            <Link href="/" className="flex items-center gap-space-md">
              <LogoMark className="h-10 w-auto" />
              <span className="font-display text-headline-sm font-semibold uppercase tracking-widest text-white">
                SAMBHAR
              </span>
            </Link>
            <p className="font-display text-title-lg italic text-gold-bright">Modern Indian Dining</p>
            <p className="max-w-sm text-body-md text-sage/80">
              An elevated culinary odyssey celebrating heritage palace hospitality, avant-garde
              sensory creations, and twilight gastronomy.
            </p>
          </div>

          <div className="flex flex-col gap-space-md lg:col-span-2">
            <span className={headingCls}>Navigation</span>
            <nav className="flex flex-col gap-space-sm" aria-label="Footer navigation">
              {NAVIGATION.map((l) => (
                <Link key={l.href} href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-space-md lg:col-span-2">
            <span className={headingCls}>Hospitality</span>
            <nav className="flex flex-col gap-space-sm" aria-label="Hospitality">
              {HOSPITALITY.map((l) => (
                <Link key={l.href} href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-space-md lg:col-span-4">
            <span className={headingCls}>Social Channels</span>
            <div className="flex flex-col gap-space-sm">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkCls} flex items-center gap-space-xs`}
                >
                  <Icon name={s.icon} className="text-sm text-gold-bright" />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
            <p className="pt-space-sm text-body-sm text-sage/80">
              Reservations &amp; Concierge:{" "}
              <a href={CONCIERGE.phoneHref} className="hover:text-white">
                {CONCIERGE.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md border-t border-white/10 pt-space-xl text-center md:flex-row md:text-left">
          <span className="text-body-sm text-sage/80">
            © {new Date().getFullYear()} SAMBHAR Modern Indian Dining. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-sm">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className={linkCls}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
