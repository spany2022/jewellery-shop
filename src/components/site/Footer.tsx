import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Shop",
    items: ["Necklaces & Sets", "Earrings", "Hair Accessories", "Mangalsutras", "Payal / Anklets", "Finger Rings"],
  },
  { title: "Support", items: ["Contact", "Shipping", "Returns", "FAQs", "Care Guide"] },
  { title: "Company", items: ["About Us", "Our Story", "Instagram", "Pinterest", "Facebook"] },
];

export function Footer() {
  return (
    <footer className="bg-plum-gradient text-plum-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <p className="font-display text-2xl tracking-[0.42em] uppercase">Aurvi</p>
            <p className="text-plum-foreground/60 mt-5 max-w-xs text-sm">
              Hand-finished imitation jewelry made in India — designed for celebration, worn every day.
            </p>
            <p className="text-gold-soft mt-8 font-script text-4xl">Adorn Every Moment.</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-gold-soft text-[0.65rem] tracking-[0.3em] uppercase">{col.title}</p>
              <ul className="mt-6 space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      search={{ c: "all" }}
                      className="link-underline text-plum-foreground/70 hover:text-plum-foreground text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-plum-foreground/15 mt-16 flex flex-col gap-3 border-t pt-7 text-[0.68rem] tracking-[0.15em] uppercase md:flex-row md:items-center md:justify-between">
          <span className="text-plum-foreground/50">© {new Date().getFullYear()} Aurvi Jewels</span>
          <span className="text-plum-foreground/50">Privacy · Terms · Made in India</span>
        </div>
      </div>
    </footer>
  );
}
