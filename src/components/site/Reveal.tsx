import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Cinematic mask reveal — content unveils like a jewelry box opening. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, clipPath: "inset(12% 0% 0% 0%)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Image that scales down out of an overflow mask as it enters the viewport. */
export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <motion.div
      className={`light-sweep overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`eyebrow ${tone === "dark" ? "text-gold-soft" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-5 text-4xl leading-[1.02] sm:text-5xl md:text-6xl ${
          tone === "dark" ? "text-plum-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-5 text-[0.95rem] ${
            tone === "dark" ? "text-plum-foreground/65" : "text-muted-foreground"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
