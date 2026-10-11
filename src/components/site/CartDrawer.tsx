import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const { cartOpen, setCartOpen, lines, setQty, remove, total } = useStore();

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            className="bg-plum/45 fixed inset-0 z-70 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            className="bg-ivory fixed top-0 right-0 z-80 flex h-full w-full max-w-[26rem] flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border-border flex items-center justify-between border-b px-6 py-5">
              <p className="eyebrow">Your Collection</p>
              <button aria-label="Close cart" onClick={() => setCartOpen(false)}>
                <X className="h-5 w-5" strokeWidth={1.2} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="font-script text-gold text-5xl">Still empty</p>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Nothing chosen yet. Every piece is waiting.
                  </p>
                  <Link
                    to="/shop"
                    search={{ c: "all" }}
                    onClick={() => setCartOpen(false)}
                    className="bg-primary text-primary-foreground mt-7 px-7 py-3 text-[0.68rem] tracking-[0.25em] uppercase"
                  >
                    Explore Collection
                  </Link>
                </div>
              ) : (
                <ul className="divide-border divide-y">
                  {lines.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-4 py-5">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-28 w-22 shrink-0 object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-display text-lg leading-tight">{product.name}</p>
                        <p className="text-muted-foreground mt-1 text-xs tracking-[0.12em] uppercase">
                          {product.category}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="border-border flex items-center gap-3 border px-2 py-1">
                            <button aria-label="Decrease" onClick={() => setQty(product.id, qty - 1)}>
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-xs tabular-nums">{qty}</span>
                            <button aria-label="Increase" onClick={() => setQty(product.id, qty + 1)}>
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="text-sm">{formatPrice(product.price * qty)}</span>
                        </div>
                        <button
                          onClick={() => remove(product.id)}
                          className="text-muted-foreground mt-2 text-[0.65rem] tracking-[0.18em] uppercase hover:text-foreground"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-border border-t px-6 py-5">
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow">Subtotal</span>
                  <span className="font-display text-2xl">{formatPrice(total)}</span>
                </div>
                <p className="text-muted-foreground mt-2 text-xs">
                  Complimentary insured shipping and velvet packaging on every order.
                </p>
                <button className="bg-primary text-primary-foreground mt-5 w-full py-4 text-[0.68rem] tracking-[0.25em] uppercase transition-opacity hover:opacity-90">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
