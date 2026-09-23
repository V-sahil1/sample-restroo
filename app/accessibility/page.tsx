import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Hospitality for Everyone"
      title="Accessibility"
      sections={[
        {
          heading: "Our salons",
          body: "Both our New Delhi and Mayfair salons offer step-free entry, accessible restrooms and tables that accommodate wheelchairs. Let us know when booking and we will prepare your table accordingly.",
        },
        {
          heading: "Our website",
          body: "We aim for this website to meet WCAG 2.1 AA guidelines, including keyboard navigation, descriptive image text and sufficient colour contrast.",
        },
        {
          heading: "Feedback",
          body: "If you encounter any barrier on our website or in our restaurants, please tell us so we can put it right.",
        },
      ]}
    />
  );
}
