import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Heart, Minus, Plus, Star } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { formatPrice, getProduct, products } from "@/lib/products";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Piece not found — Aurvi" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Aurvi` },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: `${product.name} — Aurvi` },
        { property: "og:description", content: product.description.slice(0, 155) },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add, toggleWish, wishlist, setCartOpen } = useStore();
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const frame = useRef<HTMLDivElement>(null);

  const wished = wishlist.includes(product.id);
  const pairings = products.filter((p) => p.id !== product.id).slice(0, 4);

  const onMove = (e: React.MouseEvent) => {
    const r = frame.current?.getBoundingClientRect();
    if (!r) return;
    setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20">
        <div className="mx-auto max-w-[1400px] px-5 pt-10 md:px-10">
          <nav className="text-muted-foreground text-[0.65rem] tracking-[0.2em] uppercase">
            <Link to="/" className="link-underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/shop" search={{ c: product.category }} className="link-underline">
              {product.category}
            </Link>
          </nav>
        </div>

        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 md:px-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <div
              ref={frame}
              onMouseMove={onMove}
              onMouseLeave={() => setZoom(null)}
              className="light-sweep bg-secondary relative aspect-[4/5] cursor-zoom-in overflow-hidden"
            >
              <img
                src={product.gallery[active]}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500"
                style={
                  zoom
                    ? { transform: "scale(1.9)", transformOrigin: `${zoom.x}% ${zoom.y}%` }
                    : { transform: "scale(1)" }
                }
              />
            </div>
            <div className="mt-3 flex gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`aspect-[4/5] w-20 overflow-hidden border transition-colors duration-500 ${
                    active === i ? "border-gold" : "border-transparent"
                  }`}
                >
                  <img src={g} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:pt-6">
            <Reveal>
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-4 text-4xl md:text-5xl">{product.name}</h1>

              <div className="text-muted-foreground mt-4 flex items-center gap-3 text-xs">
                <span className="text-gold flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="fill-gold h-3 w-3" strokeWidth={0} />
                  ))}
                </span>
                {product.rating} · {product.reviews} reviews
              </div>

              <p className="mt-6 text-2xl">
                {formatPrice(product.price)}
                {product.compareAt && (
                  <span className="text-muted-foreground ml-3 text-base line-through">
                    {formatPrice(product.compareAt)}
                  </span>
                )}
              </p>

              <p className="text-muted-foreground mt-6 max-w-md text-sm">{product.description}</p>

              <div className="mt-9 flex items-center gap-4">
                <div className="border-border flex items-center gap-5 border px-4 py-3">
                  <button aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="text-sm tabular-nums">{qty}</span>
                  <button aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
                <button
                  onClick={() => {
                    add(product.id, qty);
                    setCartOpen(true);
                  }}
                  className="bg-primary text-primary-foreground flex-1 py-4 text-[0.68rem] tracking-[0.28em] uppercase transition-opacity hover:opacity-90"
                >
                  Add to Cart
                </button>
                <button
                  aria-label="Add to wishlist"
                  onClick={() => toggleWish(product.id)}
                  className="border-border hover:border-gold grid h-[3.25rem] w-[3.25rem] place-items-center border transition-colors"
                >
                  <Heart className={`h-4 w-4 ${wished ? "fill-rose text-rose" : ""}`} strokeWidth={1.3} />
                </button>
              </div>

              <button
                onClick={() => {
                  add(product.id, qty);
                  setCartOpen(true);
                }}
                className="border-foreground/25 hover:border-gold mt-3 w-full border py-4 text-[0.68rem] tracking-[0.28em] uppercase transition-colors"
              >
                Buy Now
              </button>

              <dl className="hairline mt-10 space-y-4 pt-8 text-sm">
                {[
                  ["Material", product.material],
                  ["Dimensions", product.dimensions],
                  ["Occasion", product.occasion.join(" · ")],
                  ["Care", product.care],
                  ["Availability", "In stock — dispatched within 48 hours"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[7rem_1fr] gap-4">
                    <dt className="text-muted-foreground text-[0.65rem] tracking-[0.2em] uppercase">{k}</dt>
                    <dd className="text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="eyebrow">Complete The Look</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Pair it with</h2>
            </Reveal>
            <div className="mt-12 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {pairings.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
