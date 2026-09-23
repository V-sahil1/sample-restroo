import {
  Experiences,
  Gallery,
  Hero,
  LocationsAndFinale,
  MenuPreview,
  Moods,
  PrivateDiningBand,
  Reviews,
  SignatureDish,
  Story,
} from "@/components/sections";
import ScrollStory from "@/components/ScrollStory";

export default function Home() {
  return (
    <>
      <ScrollStory />
      <Hero />
      <Story />
      <Experiences />
      <MenuPreview />
      <SignatureDish />
      <Moods />
      <Gallery />
      <PrivateDiningBand />
      <Reviews />
      <LocationsAndFinale />
    </>
  );
}
