"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { Icon, LogoMark, btn } from "@/components/ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-forest/95 backdrop-blur-md shadow-[0_16px_36px_-8px_rgba(14,42,29,0.25)]">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-gutter px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Link href="/" className="flex items-center gap-space-md" aria-label="SAMBHAR Modern Indian — Home">
          <LogoMark className="h-8 w-auto" />
          <span className="flex flex-col">
            <span className="font-display text-title-lg font-semibold uppercase tracking-widest text-white">
              SAMBHAR
            </span>
            <span className="text-label-sm uppercase tracking-[0.2em] text-gold-bright">
              Modern Indian
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-space-lg xl:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-label-lg uppercase tracking-wider transition-colors ${
                  active
                    ? "font-semibold text-mint underline decoration-mint decoration-1 underline-offset-8"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-md">
          <span className="hidden sm:inline-flex">
            <Link href="/reserve" className={`${btn.gold} px-space-lg py-space-sm shadow-sm`}>
              Reserve a Table
            </Link>
          </span>
          <span
            aria-hidden="true"
            className="hidden h-8 w-8 items-center justify-center rounded-pill border border-white/20 bg-forest-soft sm:flex"
          >
            <Icon name="person" className="text-[18px] text-white" />
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white xl:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        id="mobile-nav"
        className={`xl:hidden fixed inset-x-0 top-20 bottom-0 bg-forest transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="flex h-full flex-col gap-space-xs overflow-y-auto px-margin-mobile py-space-xl md:px-margin-tablet"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-white/10 py-space-md font-display text-headline-md transition-colors ${
                  active ? "text-gold-bright italic" : "text-white hover:text-gold-light"
                }`}
              >
                {link.label}
                <Icon name="arrow_forward" className="text-xl text-gold" />
              </Link>
            );
          })}
          <Link href="/reserve" onClick={() => setOpen(false)} className={`${btn.gold} mt-space-xl px-space-xl py-space-md`}>
            Reserve a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
