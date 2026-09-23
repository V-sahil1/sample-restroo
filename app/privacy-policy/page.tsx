import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      sections={[
        {
          heading: "Information we collect",
          body: "When you reserve a table, enquire about an event or contact us, we collect the details you provide — such as your name, email, phone number, party size and dietary notes — so that we can host you well.",
        },
        {
          heading: "How we use it",
          body: "Your information is used only to manage your booking, communicate with you about your visit and, where you have opted in, share news of seasonal menus and events.",
        },
        {
          heading: "Your choices",
          body: "You may request access to, correction of, or deletion of your personal data at any time by writing to our concierge team.",
        },
      ]}
    />
  );
}
