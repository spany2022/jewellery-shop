import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { img } from "@/lib/products";
import { Reveal, RevealImage, SectionHeading } from "./Reveal";

/** Tradition, Reimagined — the mangalsutra feature on a dark stage. */
export function MangalsutraFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="bg-plum relative overflow-hidden">
      <motion.img
        src={img.mangalsutra}
        alt="Contemporary mangalsutra worn close to the neckline"
        loading="lazy"
        className="absolute inset-0 h-[116%] w-full object-cover opacity-70"
        style={{ y }}
      />
      <div className="from-plum via-plum/70 absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-32 md:px-10 md:py-48">
        <div className="max-w-lg">
          <SectionHeading
            tone="dark"
            eyebrow="Mangalsutras"
            title={
              <>
                Tradition,
                <br />
                Reimagined.
              </>
            }
            sub="Timeless symbolism meets contemporary design — black beads drawn fine enough for a weekday, luminous enough for a wedding."
          />
          <Reveal delay={0.15}>
            <Link
              to="/shop"
              search={{ c: "Mangalsutras" }}
              className="bg-ivory text-foreground mt-10 inline-block px-9 py-4 text-[0.68rem] tracking-[0.28em] uppercase transition-transform duration-500 hover:-translate-y-0.5"
            >
              Explore Mangalsutras
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Every Step, Adorned — anklets, intimate and close. */
export function AnkletFeature() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10 md:py-36">
      <RevealImage
        src={img.anklets}
        alt="Delicate gold payal worn on marble"
        className="aspect-[4/5]"
        width={1200}
        height={1504}
      />
      <div className="md:pl-10">
        <SectionHeading
          eyebrow="Payal / Anklets"
          title={
            <>
              Every Step,
              <br />
              Adorned.
            </>
          }
          sub="Hand-linked ghungroo that announce you softly before you enter a room. Worn in pairs, kept for years."
        />
        <Reveal delay={0.12}>
          <Link
            to="/shop"
            search={{ c: "Payal / Anklets" }}
            className="link-underline mt-9 inline-block text-[0.68rem] tracking-[0.28em] uppercase"
          >
            Shop Anklets →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/** Hair accessories editorial. */
export function HairFeature() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10 md:py-36">
        <div className="order-2 md:order-1 md:pr-10">
          <SectionHeading
            eyebrow="Hair Accessories"
            title={
              <>
                Worn where
                <br />
                the light falls.
              </>
            }
            sub="Maang tikka, fine pins and bridal clips — the finishing line of a look, placed where everyone looks first."
          />
          <Reveal delay={0.12}>
            <Link
              to="/shop"
              search={{ c: "Hair Accessories" }}
              className="link-underline mt-9 inline-block text-[0.68rem] tracking-[0.28em] uppercase"
            >
              Shop Hair Accessories →
            </Link>
          </Reveal>
        </div>
        <RevealImage
          src={img.hair}
          alt="Maang tikka and pearl hair pins styled in an updo"
          className="order-1 aspect-[4/5] md:order-2"
          width={1200}
          height={1504}
        />
      </div>
    </section>
  );
}

/** From everyday to extraordinary — the transformation diptych. */
export function Transformation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <SectionHeading
        align="center"
        eyebrow="One Brand, Every Version of You"
        title={
          <>
            From everyday
            <br />
            to extraordinary.
          </>
        }
      />
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        <motion.div style={{ y: leftY }}>
          <RevealImage
            src={img.everyday}
            alt="Minimal everyday gold jewelry"
            className="aspect-[4/5]"
            width={1200}
            height={1504}
          />
          <p className="font-script text-gold mt-5 text-4xl">Everyday</p>
          <p className="text-muted-foreground mt-1 text-sm">Fine chains, hoops and one quiet ring.</p>
        </motion.div>
        <motion.div style={{ y: rightY }}>
          <RevealImage
            src={img.festive}
            alt="Festive statement jewelry set on velvet"
            className="aspect-[4/5]"
            width={1200}
            height={1504}
          />
          <p className="font-script text-gold mt-5 text-4xl">Extraordinary</p>
          <p className="text-muted-foreground mt-1 text-sm">Full sets, heavy fringe, lamplight.</p>
        </motion.div>
      </div>
    </section>
  );
}

/** Gifting. */
export function Gifting() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[460px]">
        <img
          src={img.gifting}
          alt="Burgundy velvet jewelry box with gold ribbon"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="from-plum/90 absolute inset-0 bg-gradient-to-r via-transparent to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-[1400px] flex-col justify-center px-5 md:px-10">
          <SectionHeading
            tone="dark"
            eyebrow="Gifting"
            title={
              <>
                Give her something
                <br />
                she'll remember.
              </>
            }
            sub="Velvet box, silk wrap, gold seal and a handwritten card — presented the way it deserves to be opened."
          />
          <Reveal delay={0.15}>
            <Link
              to="/shop"
              search={{ c: "all" }}
              className="bg-ivory text-foreground mt-9 inline-block px-9 py-4 text-[0.68rem] tracking-[0.28em] uppercase transition-transform duration-500 hover:-translate-y-0.5"
            >
              Explore Gifts
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Brand story. */
export function Story() {
  return (
    <section id="story" className="bg-ivory">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-24 md:grid-cols-[1fr_1.1fr] md:px-10 md:py-36">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title={
              <>
                More than
                <br />
                jewelry.
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md font-display text-2xl leading-snug">
              "Jewelry is more than an accessory. It becomes part of celebrations, traditions, first moments,
              unforgettable evenings, and everyday memories."
            </p>
            <p className="text-muted-foreground mt-6 max-w-md text-sm">
              Every Aurvi piece is finished by hand in small batches, plated for longevity and checked stone by
              stone — so an imitation piece carries itself like an heirloom.
            </p>
            <p className="font-script text-gold mt-7 text-4xl">The Aurvi atelier</p>
          </Reveal>
        </div>
        <RevealImage
          src={img.craft}
          alt="Artisan hands finishing a gold ornament"
          className="aspect-[4/3]"
          width={1600}
          height={1104}
        />
      </div>
    </section>
  );
}
