import type { Metadata } from "next";
import { IMAGES } from "@/lib/data";
import {
  Experiences,
  FinaleBanner,
  Moods,
  PageHero,
  PrivateDiningBand,
  Section,
  SignatureDish,
} from "@/components/sections";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Signature Experience"
        title="More Than"
        accent="a Meal."
        description="A multi-sensory salon curated to ignite curiosity, celebrate companionship, and indulge palate sophistication."
        image={IMAGES.cocktail}
      />
      <Experiences />
      <Moods />
      <SignatureDish />
      <PrivateDiningBand />
      <Section>
        <FinaleBanner />
      </Section>
    </>
  );
}
