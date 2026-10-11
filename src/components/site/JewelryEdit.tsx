import { Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { Reveal, SectionHeading } from "./Reveal";

export function JewelryEdit() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <SectionHeading
          align="center"
          eyebrow="The Jewelry Edit"
          title="Pieces chosen for the moments that become memories."
        />

        <div className="mt-16 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 text-center">
          <Link
            to="/shop"
            search={{ c: "all" }}
            className="border-foreground/25 hover:border-gold inline-block border px-10 py-4 text-[0.68rem] tracking-[0.28em] uppercase transition-colors duration-500"
          >
            View All Jewelry
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
