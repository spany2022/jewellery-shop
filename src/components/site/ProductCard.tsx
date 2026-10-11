import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import { motion } from "motion/react";
import { formatPrice, type Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add, toggleWish, wishlist, setCartOpen } = useStore();
  const wished = wishlist.includes(product.id);

  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 34, clipPath: "inset(10% 0% 0% 0%)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="light-sweep bg-secondary relative aspect-[4/5] overflow-hidden">
        <Link to="/product/$id" params={{ id: product.id }} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:opacity-0"
          />
          <img
            src={product.hoverImage}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100"
          />
        </Link>

        {product.badge && (
          <span className="bg-ivory/90 text-foreground absolute top-3 left-3 px-3 py-1 text-[0.6rem] tracking-[0.22em] uppercase">
            {product.badge}
          </span>
        )}

        <button
          aria-label="Add to wishlist"
          onClick={() => toggleWish(product.id)}
          className="bg-ivory/90 absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full transition-transform duration-500 hover:scale-110"
        >
          <Heart
            className={`h-[15px] w-[15px] ${wished ? "fill-rose text-rose" : "text-foreground"}`}
            strokeWidth={1.3}
          />
        </button>

        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
          <button
            onClick={() => {
              add(product.id);
              setCartOpen(true);
            }}
            className="bg-ivory/95 text-foreground hover:bg-primary hover:text-primary-foreground w-full py-3 text-[0.65rem] tracking-[0.25em] uppercase transition-colors duration-500"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <Link to="/product/$id" params={{ id: product.id }} className="font-display text-xl leading-tight">
            {product.name}
          </Link>
          <span className="text-muted-foreground flex shrink-0 items-center gap-1 pt-1 text-[0.7rem]">
            <Star className="fill-gold text-gold h-3 w-3" strokeWidth={0} />
            {product.rating}
          </span>
        </div>
        <p className="text-muted-foreground mt-1 text-[0.68rem] tracking-[0.18em] uppercase">{product.category}</p>
        <p className="mt-2 text-sm">
          {formatPrice(product.price)}
          {product.compareAt && (
            <span className="text-muted-foreground ml-2 line-through">{formatPrice(product.compareAt)}</span>
          )}
        </p>
      </div>
    </motion.article>
  );
}
