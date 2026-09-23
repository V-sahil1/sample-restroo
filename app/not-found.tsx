import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="-mt-20 flex min-h-[80vh] w-full flex-col items-center justify-center bg-forest px-margin-mobile pt-20 text-center text-white">
      <span className="text-label-sm uppercase tracking-[0.25em] text-gold-bright">404</span>
      <h1 className="mt-space-sm font-display text-[2.75rem] leading-tight font-semibold md:text-display-lg">
        This table <span className="font-normal italic text-gold-bright">isn&apos;t set.</span>
      </h1>
      <p className="mt-space-md max-w-md text-body-lg text-mint/90">
        The page you were looking for has moved or never existed.
      </p>
      <ButtonLink href="/" className="mt-space-xl">
        Return Home
      </ButtonLink>
    </section>
  );
}
