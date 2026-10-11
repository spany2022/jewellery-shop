import { useState } from "react";
import { Instagram, Star } from "lucide-react";
import { img } from "@/lib/products";
import { Reveal, SectionHeading } from "./Reveal";

const testimonials = [
  {
    name: "Ananya R.",
    text: "I wore the Vasundhara set to my sister's sangeet and three people asked which jeweller it was from. Nobody guessed.",
    item: "Vasundhara Bridal Set",
  },
  {
    name: "Meher K.",
    text: "The mangalsutra is so light I forget it's there — two years in and the plating still looks new.",
    item: "Mira Mangalsutra",
  },
  {
    name: "Divya S.",
    text: "Packaging alone made it feel like a real gift. The velvet box is still on my dresser.",
    item: "Noor Pearl Chandbali",
  },
  {
    name: "Sneha P.",
    text: "Finally, payal that aren't heavy or loud. They sound exactly right.",
    item: "Saanjh Layered Payal",
  },
  {
    name: "Ritika M.",
    text: "Bought the ring trio for myself and ended up ordering two more as gifts.",
    item: "Ila Stackable Rings",
  },
];

export function Testimonials() {
  return (
    <section className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading align="center" eyebrow="Customer Love" title="Worn, and written about." />
      </div>

      <div className="relative mt-14">
        <div className="flex w-max animate-[marquee_48s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={i}
              className="bg-ivory border-border w-[20rem] shrink-0 border p-7 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 sm:w-[23rem]"
            >
              <div className="text-gold flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="fill-gold h-3 w-3" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug">"{t.text}"</blockquote>
              <figcaption className="text-muted-foreground mt-6 text-[0.68rem] tracking-[0.2em] uppercase">
                {t.name} · {t.item}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

const gallery = [
  { src: img.festive, span: "row-span-2" },
  { src: img.everyday, span: "" },
  { src: img.choker, span: "" },
  { src: img.hair, span: "row-span-2" },
  { src: img.gifting, span: "" },
  { src: img.anklets, span: "" },
  { src: img.rings, span: "" },
  { src: img.necklace, span: "row-span-2" },
];

export function Gallery() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading align="center" eyebrow="@aurvijewels" title="Seen in the wild." />
        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06} className={g.span}>
              <div className="group relative h-full overflow-hidden">
                <img
                  src={g.src}
                  alt="Aurvi jewelry styled by our community"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="bg-plum/45 absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="text-plum-foreground h-5 w-5" strokeWidth={1.2} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <div className="hairline grid gap-10 pt-14 md:grid-cols-2">
        <SectionHeading eyebrow="The Invitation" title={<>Enter our world of adornment.</>} />
        <div className="md:pt-4">
          <p className="text-muted-foreground text-sm">
            Discover new collections, styling inspiration, exclusive launches and quiet offers.
          </p>
          <form
            className="mt-7 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              aria-label="Your email"
              className="border-border bg-transparent focus:border-gold flex-1 border-b px-1 py-3 text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 text-[0.65rem] tracking-[0.28em] uppercase transition-opacity hover:opacity-90"
            >
              {sent ? "Welcome in" : "Join the Collection"}
            </button>
          </form>
          {sent && <p className="text-gold mt-4 font-script text-3xl">Thank you — see you soon.</p>}
        </div>
      </div>
    </section>
  );
}
