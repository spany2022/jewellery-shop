import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { JewelryEdit } from "@/components/site/JewelryEdit";
import { Occasions } from "@/components/site/Occasions";
import { Shelf } from "@/components/site/Shelf";
import {
  AnkletFeature,
  Gifting,
  HairFeature,
  MangalsutraFeature,
  Story,
  Transformation,
} from "@/components/site/Editorials";
import { Gallery, Newsletter, Testimonials } from "@/components/site/Social";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurvi — Designed to Be Remembered | Indian Imitation Jewelry" },
      {
        name: "description",
        content:
          "A private jewelry boutique online: statement necklace sets, jhumkas, chandbalis, mangalsutras, payal, maang tikka and rings — hand-finished in India.",
      },
      { property: "og:title", content: "Aurvi — Designed to Be Remembered" },
      {
        property: "og:description",
        content:
          "Statement pieces, everyday elegance and timeless Indian adornments made for every occasion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Nav overlay />
      <main>
        <Hero />
        <Categories />
        <JewelryEdit />
        <Occasions />
        <MangalsutraFeature />
        <AnkletFeature />
        <HairFeature />
        <Transformation />
        <Shelf />
        <Gifting />
        <Story />
        <Testimonials />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
