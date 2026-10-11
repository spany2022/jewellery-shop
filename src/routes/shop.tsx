import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { categories, products } from "@/lib/products";

const searchSchema = z.object({ c: z.string().optional().default("all") });

export const Route = createFileRoute("/shop")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Shop All Jewelry — Aurvi" },
      {
        name: "description",
        content:
          "Browse Aurvi's full collection: necklace sets, earrings, hair accessories, mangalsutras, anklets and rings.",
      },
      { property: "og:title", content: "Shop All Jewelry — Aurvi" },
      {
        property: "og:description",
        content: "Necklace sets, jhumkas, mangalsutras, payal and rings — hand-finished imitation jewelry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { c } = Route.useSearch();
  const list = c === "all" ? products : products.filter((p) => p.category === c);
  const filters = ["all", ...categories.map((x) => x.name)];

  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20">
        <section className="mx-auto max-w-[1400px] px-5 pt-16 pb-10 md:px-10 md:pt-24">
          <Reveal>
            <p className="eyebrow">The Collection</p>
            <h1 className="mt-5 text-5xl md:text-7xl">{c === "all" ? "All Jewelry" : c}</h1>
            <p className="text-muted-foreground mt-5 max-w-md text-sm">
              {list.length} piece{list.length === 1 ? "" : "s"} — photographed close, finished by hand, packed in
              velvet.
            </p>
          </Reveal>

          <div className="no-scrollbar mt-10 flex gap-3 overflow-x-auto pb-2">
            {filters.map((f) => (
              <Link
                key={f}
                to="/shop"
                search={{ c: f }}
                className={`shrink-0 border px-5 py-2.5 text-[0.65rem] tracking-[0.2em] whitespace-nowrap uppercase transition-colors duration-500 ${
                  c === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-gold"
                }`}
              >
                {f === "all" ? "Everything" : f}
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-28 md:px-10">
          <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          {list.length === 0 && (
            <p className="text-muted-foreground py-24 text-center font-script text-4xl">
              Nothing here yet — try another category.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
