import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useStore } from "@/lib/store";

const links = [
  { label: "New Arrivals", to: "/shop", search: { c: "all" } },
  { label: "Shop", to: "/shop", search: { c: "all" } },
  { label: "Collections", to: "/shop", search: { c: "Necklaces & Sets" } },
  { label: "Occasions", to: "/", hash: "occasions" },
  { label: "About", to: "/", hash: "story" },
] as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const linkProps = (l: (typeof links)[number]): any =>
  "hash" in l ? { hash: l.hash } : { search: l.search };

export function Nav({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, wishlist, setCartOpen } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overlay;
  const tone = solid ? "text-foreground" : "text-plum-foreground";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid
            ? "bg-ivory/85 border-b border-border/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
          <Link to="/" className={`font-display text-xl tracking-[0.42em] uppercase ${tone}`}>
            Aurvi
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                {...linkProps(l)}
                className={`link-underline text-[0.72rem] tracking-[0.2em] uppercase ${tone} opacity-80 transition-opacity hover:opacity-100`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={`flex items-center gap-4 md:gap-6 ${tone}`}>
            <button aria-label="Search" className="hidden opacity-80 transition-opacity hover:opacity-100 sm:block">
              <Search className="h-[18px] w-[18px]" strokeWidth={1.3} />
            </button>
            <button aria-label="Account" className="hidden opacity-80 transition-opacity hover:opacity-100 sm:block">
              <User className="h-[18px] w-[18px]" strokeWidth={1.3} />
            </button>
            <span className="relative">
              <Heart className="h-[18px] w-[18px] opacity-80" strokeWidth={1.3} />
              {wishlist.length > 0 && (
                <span className="bg-gold text-plum absolute -top-2 -right-2 grid h-4 w-4 place-items-center rounded-full text-[9px] font-semibold">
                  {wishlist.length}
                </span>
              )}
            </span>
            <button aria-label="Cart" className="relative" onClick={() => setCartOpen(true)}>
              <ShoppingBag className="h-[18px] w-[18px] opacity-80 transition-opacity hover:opacity-100" strokeWidth={1.3} />
              {count > 0 && (
                <span className="bg-gold text-plum absolute -top-2 -right-2 grid h-4 w-4 place-items-center rounded-full text-[9px] font-semibold">
                  {count}
                </span>
              )}
            </button>
            <button aria-label="Menu" className="lg:hidden" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-plum-gradient fixed inset-0 z-60 flex flex-col px-6 py-6"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="text-plum-foreground font-display text-xl tracking-[0.42em] uppercase">Aurvi</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-plum-foreground">
                <X className="h-6 w-6" strokeWidth={1.2} />
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-7">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={l.to}
                    {...linkProps(l)}
                    onClick={() => setOpen(false)}
                    className="text-plum-foreground font-display text-4xl"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className="text-gold-soft mt-auto font-script text-4xl">Adorn every moment.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
