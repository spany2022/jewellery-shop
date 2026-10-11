import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { formatPrice, products } from "@/lib/products";
import { SectionHeading } from "./Reveal";

/** Horizontal boutique showcase — products travel sideways as the page scrolls. */
export function Shelf() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-62%"]);

  return (
    <section ref={ref} className="relative hidden h-[320vh] lg:block">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-10">
          <SectionHeading eyebrow="The Showcase" title="An endless display case." />
        </div>

        <motion.div className="mt-12 flex gap-6 pl-10" style={{ x }}>
          {products.map((p) => (
            <Link
              key={p.id}
              to="/product/$id"
              params={{ id: p.id }}
              className="group w-[26rem] shrink-0"
            >
              <div className="light-sweep aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <p className="font-display text-2xl">{p.name}</p>
                <span className="text-muted-foreground text-sm">{formatPrice(p.price)}</span>
              </div>
              <p className="text-muted-foreground mt-1 text-[0.65rem] tracking-[0.22em] uppercase">
                {p.category}
              </p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
