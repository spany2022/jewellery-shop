import { Link } from "@tanstack/react-router";
import { occasions } from "@/lib/products";
import { Reveal, SectionHeading } from "./Reveal";

export function Occasions() {
  return (
    <section id="occasions" className="bg-plum-gradient py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          tone="dark"
          eyebrow="Choose Your Moment"
          title={
            <>
              Jewelry for
              <br />
              every moment.
            </>
          }
          sub="From the quietest Tuesday to the loudest celebration — the same hand, a different weight of gold."
        />
      </div>

      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-10">
        {occasions.map((o, i) => (
          <Reveal key={o.name} delay={(i % 4) * 0.07} className="shrink-0 snap-start">
            <Link
              to="/shop"
              search={{ c: "all" }}
              className="group relative block h-[62vh] max-h-[560px] min-h-[380px] w-[72vw] overflow-hidden sm:w-[38vw] lg:w-[23vw]"
            >
              <img
                src={o.image}
                alt={o.name}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[18%] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="from-plum/85 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-gold-soft font-script text-3xl">{o.name}</p>
                <p className="text-plum-foreground/70 mt-1 text-sm">{o.line}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
