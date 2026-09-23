import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      sections={[
        {
          heading: "Reservations",
          body: "Tables are held for 15 minutes past the reservation time. Please let us know as early as possible if your plans change.",
        },
        {
          heading: "Private events",
          body: "Private dining bookings are confirmed on receipt of a signed proposal and deposit. Cancellation terms are set out in each proposal.",
        },
        {
          heading: "Menus & pricing",
          body: "Menus change with the seasons and are subject to availability. Prices shown online are indicative and may differ between our New Delhi and London salons.",
        },
      ]}
    />
  );
}
