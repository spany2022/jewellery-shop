import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroModel from "@/assets/hero-model.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="bg-plum relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <motion.img
          src={heroModel}
          alt="Model wearing a kundan statement necklace and chandbali earrings"
          width={1600}
          height={1920}
          className="h-[118%] w-full object-cover object-[60%_30%]"
          initial={{ scale: 1.25, opacity: 0, filter: "brightness(0.25)" }}
          animate={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
          transition={{ duration: 2.6, delay: 0.3, ease }}
        />
      </motion.div>

      {/* cinematic grade */}
      <div className="from-plum/85 via-plum/25 absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="from-plum/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

      {/* thin golden light that opens the scene */}
      <motion.div
        className="via-gold absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 0.35] }}
        transition={{ duration: 2, delay: 0.1, ease }}
      />

      <motion.div
        className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-20 md:px-10 md:pb-28"
        style={{ y: textY, opacity: fade }}
      >
        <motion.p
          className="text-gold-soft font-script text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease }}
        >
          Adornment that tells your story
        </motion.p>

        <motion.h1
          className="text-plum-foreground mt-4 max-w-4xl text-[3.2rem] leading-[0.95] sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, y: 40, clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.5, delay: 1.25, ease }}
        >
          Designed to Be
          <br />
          Remembered.
        </motion.h1>

        <motion.p
          className="text-plum-foreground/70 mt-7 max-w-md text-[0.95rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6, ease }}
        >
          Statement pieces, everyday elegance, and timeless Indian adornments made for every occasion.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.85, ease }}
        >
          <Link
            to="/shop"
            search={{ c: "all" }}
            className="bg-ivory text-foreground px-9 py-4 text-[0.68rem] tracking-[0.28em] uppercase transition-transform duration-500 hover:-translate-y-0.5"
          >
            Explore Collection
          </Link>
          <Link
            to="/"
            hash="occasions"
            className="text-plum-foreground border-plum-foreground/35 hover:border-gold border px-9 py-4 text-[0.68rem] tracking-[0.28em] uppercase transition-colors duration-500"
          >
            Discover Your Style
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 1 }}
        style={{ opacity: fade }}
      >
        <div className="via-gold h-14 w-px bg-gradient-to-b from-transparent to-transparent" />
      </motion.div>
    </section>
  );
}
