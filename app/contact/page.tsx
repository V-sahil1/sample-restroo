import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { CONCIERGE } from "@/lib/data";
import { Eyebrow, Icon } from "@/components/ui";
import { Locations, PageHero, Section } from "@/components/sections";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Concierge"
        title="We'd Love to"
        accent="Hear From You."
        description="Questions, dietary requirements, press or partnerships — our concierge team is here every evening."
      />
      <Section>
        <Locations />
      </Section>
      <Section tone="sage">
        <div className="grid grid-cols-1 gap-space-2xl lg:grid-cols-12">
          <div className="flex flex-col gap-space-lg lg:col-span-5">
            <div>
              <Eyebrow>Write to Us</Eyebrow>
              <h2 className="mt-space-xs font-display text-[28px] leading-[36px] font-semibold text-forest md:text-headline-lg">
                Send a Message
              </h2>
            </div>
            <a href={CONCIERGE.phoneHref} className="flex items-center gap-space-md text-body-md text-forest hover:text-gold">
              <Icon name="call" className="text-gold" /> {CONCIERGE.phone}
            </a>
            <a href={`mailto:${CONCIERGE.email}`} className="flex items-center gap-space-md text-body-md text-forest hover:text-gold">
              <Icon name="mail" className="text-gold" /> {CONCIERGE.email}
            </a>
            <p className="flex items-center gap-space-md text-body-md text-ink">
              <Icon name="schedule" className="text-gold" /> Concierge hours: daily, 12:00 PM – 11:00 PM
            </p>
          </div>
          <div className="lg:col-span-7">
            <BookingForm kind="contact" />
          </div>
        </div>
      </Section>
    </>
  );
}
