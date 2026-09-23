import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Icon({
  name,
  className = "",
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${filled ? "filled" : ""} ${className}`}
    >
      {name}
    </span>
  );
}

/** Arch mark from the Sambhar logo (sambhar_modern_indian_dining_logo). */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="18 3 32 38" fill="none" aria-hidden="true" className={className}>
      <path
        d="M22 38V18C22 11.3726 27.3726 6 34 6C40.6274 6 46 11.3726 46 18V38"
        stroke="#C6A15B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M28 38V22C28 18.6863 30.6863 16 34 16C37.3137 16 40 18.6863 40 22V38"
        stroke="#E58A2B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="34" cy="22" r="2.5" fill="#C6A15B" />
    </svg>
  );
}

export const container =
  "w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin";

const btnBase =
  "inline-flex items-center justify-center rounded-lg font-sans text-label-lg uppercase tracking-wider font-semibold transition-all duration-300";

export const btn = {
  gold: `${btnBase} bg-gold hover:bg-gold-hover text-white`,
  white: `${btnBase} bg-white hover:bg-white/90 text-forest border border-white/40`,
  forest: `${btnBase} bg-forest hover:bg-forest-mid text-white hover:shadow-[0_4px_14px_rgba(197,160,89,0.2)]`,
  outline: `${btnBase} border-[1.5px] border-gold text-forest hover:bg-sage-100`,
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof btn;
  size?: "md" | "lg";
};

export function ButtonLink({
  variant = "gold",
  size = "lg",
  className = "",
  ...props
}: ButtonLinkProps) {
  const pad = size === "lg" ? "px-space-xl py-space-md" : "px-space-lg py-space-sm";
  return <Link className={`${btn[variant]} ${pad} ${className}`} {...props} />;
}

/** Italic serif link with a brass underline (DESIGN.md › Tertiary button). */
export function EditorialLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-space-xs font-display italic text-title-lg font-semibold text-forest hover:text-gold transition-colors ${className}`}
    >
      <span className="underline decoration-gold decoration-1 underline-offset-8">
        {children}
      </span>
      <Icon name="arrow_forward" className="text-lg transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function Eyebrow({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`block text-label-sm uppercase tracking-[0.25em] font-semibold ${
        dark ? "text-gold-bright" : "text-gold"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" filled className="text-lg" />
      ))}
    </div>
  );
}
