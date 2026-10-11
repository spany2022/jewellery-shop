import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

type CartLine = { id: string; qty: number };

type StoreValue = {
  cart: CartLine[];
  wishlist: string[];
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggleWish: (id: string) => void;
  lines: { product: Product; qty: number }[];
  count: number;
  total: number;
};

const StoreContext = createContext<StoreValue | null>(null);

const read = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(read<CartLine[]>("aurvi.cart", []));
    setWishlist(read<string[]>("aurvi.wishlist", []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("aurvi.cart", JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("aurvi.wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const value = useMemo<StoreValue>(() => {
    const lines = cart
      .map((l) => ({ product: products.find((p) => p.id === l.id)!, qty: l.qty }))
      .filter((l) => Boolean(l.product));

    return {
      cart,
      wishlist,
      cartOpen,
      setCartOpen,
      add: (id, qty = 1) =>
        setCart((c) =>
          c.some((l) => l.id === id)
            ? c.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l))
            : [...c, { id, qty }],
        ),
      remove: (id) => setCart((c) => c.filter((l) => l.id !== id)),
      setQty: (id, qty) =>
        setCart((c) => (qty <= 0 ? c.filter((l) => l.id !== id) : c.map((l) => (l.id === id ? { ...l, qty } : l)))),
      toggleWish: (id) => setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id])),
      lines,
      count: cart.reduce((s, l) => s + l.qty, 0),
      total: lines.reduce((s, l) => s + l.product.price * l.qty, 0),
    };
  }, [cart, wishlist, cartOpen]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
