import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/products";
import { Reveal, SectionHeading } from "./Reveal";

export function Categories() {
  return (
    <section id="collections" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Signature Collection"
          title={
            <>
              Six ways to
              <br />
              be adorned.
            </>
          }
        />
        <Reveal delay={0.1}>
          <p className="text-muted-foreground max-w-xs text-sm">
            Each category is its own small campaign — photographed close, finished by hand, and made to be worn
            far more often than it is stored.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.name} delay={(i % 3) * 0.08}>
            <Link
              to="/shop"
              search={{ c: cat.name }}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="h-full w-full scale-[1.02] object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="from-plum/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />
              <div className="light-sweep absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-plum-foreground text-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                  {cat.name}
                </h3>
                <p className="text-plum-foreground/65 mt-1 text-xs">{cat.blurb}</p>
                <span className="text-gold-soft mt-4 inline-block translate-y-3 text-[0.65rem] tracking-[0.25em] uppercase opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  Explore {cat.name.split(" ")[0]} →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
