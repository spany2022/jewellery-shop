import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/** Jewelry-inspired entrance: a pendant silhouette is drawn in gold, then the wordmark. */
export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.sessionStorage.getItem("aurvi.entered")) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      window.sessionStorage.setItem("aurvi.entered", "1");
    }, 2300);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="bg-plum-gradient fixed inset-0 z-100 flex flex-col items-center justify-center"
          exit={{ clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
        >
          <svg viewBox="0 0 120 140" className="h-28 w-24" fill="none">
            <motion.path
              d="M60 18 C 34 18, 18 42, 18 66 C 18 96, 40 122, 60 132 C 80 122, 102 96, 102 66 C 102 42, 86 18, 60 18 Z"
              stroke="var(--color-gold)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.circle
              cx="60"
              cy="66"
              r="13"
              stroke="var(--color-gold-soft)"
              strokeWidth="0.6"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "60px 66px" }}
            />
            <motion.path
              d="M60 6 L60 18"
              stroke="var(--color-gold)"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </svg>
          <motion.p
            className="text-plum-foreground mt-8 font-display text-[1.6rem] tracking-[0.5em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Aurvi
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
