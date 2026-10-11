import necklace from "@/assets/necklace.jpg";
import earrings from "@/assets/cat-earrings.jpg";
import rings from "@/assets/rings.jpg";
import anklets from "@/assets/anklets.jpg";
import mangalsutra from "@/assets/mangalsutra.jpg";
import hair from "@/assets/hair.jpg";
import choker from "@/assets/choker.jpg";
import everyday from "@/assets/everyday.jpg";
import festive from "@/assets/festive.jpg";
import gifting from "@/assets/gifting.jpg";
import craft from "@/assets/craft.jpg";
import heroModel from "@/assets/hero-model.jpg";

export const img = {
  necklace,
  earrings,
  rings,
  anklets,
  mangalsutra,
  hair,
  choker,
  everyday,
  festive,
  gifting,
  craft,
  heroModel,
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  badge?: "New" | "Bestseller" | "Limited";
  image: string;
  hoverImage: string;
  gallery: string[];
  description: string;
  material: string;
  dimensions: string;
  care: string;
  occasion: string[];
};

const base = {
  care: "Store in the velvet pouch provided. Keep away from perfume, water and direct sunlight. Wipe gently with a dry cloth after wear.",
};

export const products: Product[] = [
  {
    id: "vasundhara-bridal-set",
    name: "Vasundhara Bridal Necklace Set",
    category: "Necklaces & Sets",
    price: 4290,
    compareAt: 5600,
    rating: 4.9,
    reviews: 218,
    badge: "Bestseller",
    image: necklace,
    hoverImage: heroModel,
    gallery: [necklace, heroModel, festive, choker],
    description:
      "A layered kundan-inspired bib necklace with hand-set stones and freshwater-look pearl drops, finished with matching chandbali earrings. Made for the moment everyone turns to look.",
    material: "22k gold-plated brass, kundan-style stones, shell pearls",
    dimensions: "Necklace 24 cm drop · Earrings 6.5 cm",
    occasion: ["Wedding", "Festive"],
    ...base,
  },
  {
    id: "noor-pearl-chandbali",
    name: "Noor Pearl Chandbali Earrings",
    category: "Earrings",
    price: 1490,
    rating: 4.8,
    reviews: 341,
    badge: "Bestseller",
    image: earrings,
    hoverImage: hair,
    gallery: [earrings, hair, festive, necklace],
    description:
      "The crescent silhouette of a classic chandbali, lightened for everyday festive wear. Hand-strung pearl fringe catches light with every movement.",
    material: "Antique gold-plated alloy, cubic zirconia, shell pearls",
    dimensions: "5.8 cm drop · 12 g per piece",
    occasion: ["Festive", "Party", "Traditional"],
    ...base,
  },
  {
    id: "aarya-rose-choker",
    name: "Aarya Rose Enamel Choker",
    category: "Necklaces & Sets",
    price: 2750,
    rating: 4.7,
    reviews: 126,
    badge: "New",
    image: choker,
    hoverImage: necklace,
    gallery: [choker, necklace, festive, heroModel],
    description:
      "Blush enamel panels framed in fine gold beadwork — a contemporary choker that sits beautifully against both silk and linen.",
    material: "Gold-plated brass, rose enamel, glass stones",
    dimensions: "Adjustable 32–38 cm",
    occasion: ["Festive", "Party", "Wedding"],
    ...base,
  },
  {
    id: "mira-everyday-mangalsutra",
    name: "Mira Contemporary Mangalsutra",
    category: "Mangalsutras",
    price: 1890,
    rating: 4.9,
    reviews: 402,
    badge: "Bestseller",
    image: mangalsutra,
    hoverImage: everyday,
    gallery: [mangalsutra, everyday, rings, choker],
    description:
      "A whisper-thin chain of black beads with a three-stone pendant. Tradition carried lightly, designed to never be taken off.",
    material: "Gold-plated 925 silver, black onyx beads, zirconia",
    dimensions: "42 cm chain · 1.2 cm pendant",
    occasion: ["Everyday", "Office", "Traditional"],
    ...base,
  },
  {
    id: "saanjh-payal",
    name: "Saanjh Layered Payal",
    category: "Payal / Anklets",
    price: 1250,
    rating: 4.6,
    reviews: 158,
    image: anklets,
    hoverImage: everyday,
    gallery: [anklets, everyday, rings, craft],
    description:
      "Two rows of hand-linked ghungroo beads that sound softly with every step. Sold as a pair.",
    material: "Gold-plated brass, bell beads",
    dimensions: "26 cm with 3 cm extender",
    occasion: ["Everyday", "Traditional", "Festive"],
    ...base,
  },
  {
    id: "ila-stackable-rings",
    name: "Ila Stackable Ring Trio",
    category: "Finger Rings",
    price: 980,
    rating: 4.7,
    reviews: 274,
    badge: "New",
    image: rings,
    hoverImage: everyday,
    gallery: [rings, everyday, craft, choker],
    description:
      "Three weights of the same idea — a domed band, a fine pavé line and a curved solitaire. Wear one, or all three.",
    material: "18k gold-plated 925 silver, cubic zirconia",
    dimensions: "Sizes 6–9",
    occasion: ["Everyday", "Office", "Gifting"],
    ...base,
  },
  {
    id: "roshni-maang-tikka",
    name: "Roshni Pearl Maang Tikka",
    category: "Hair Accessories",
    price: 1350,
    rating: 4.8,
    reviews: 96,
    badge: "Limited",
    image: hair,
    hoverImage: earrings,
    gallery: [hair, earrings, necklace, festive],
    description:
      "A fine chain tikka with a leaf-cut kundan centre and pearl fringe, paired with two matching hair pins.",
    material: "Antique gold-plated alloy, kundan stones, shell pearls",
    dimensions: "Chain 14 cm · Pendant 4.5 cm",
    occasion: ["Wedding", "Festive", "Traditional"],
    ...base,
  },
  {
    id: "tara-everyday-set",
    name: "Tara Everyday Gold Layer",
    category: "Everyday",
    price: 1180,
    rating: 4.9,
    reviews: 511,
    image: everyday,
    hoverImage: rings,
    gallery: [everyday, rings, mangalsutra, craft],
    description:
      "A featherweight disc pendant, matching hoops and a fine bracelet — the trio we reach for on the plainest mornings.",
    material: "Gold-plated 925 silver",
    dimensions: "Chain 45 cm · Hoops 1.4 cm",
    occasion: ["Everyday", "Office", "Gifting"],
    ...base,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const categories = [
  { name: "Necklaces & Sets", blurb: "Statement bibs, chokers & festive sets", image: necklace },
  { name: "Earrings", blurb: "Jhumkas, chandbalis, hoops & studs", image: earrings },
  { name: "Hair Accessories", blurb: "Maang tikka, pins & bridal adornments", image: hair },
  { name: "Mangalsutras", blurb: "Tradition, worn every single day", image: mangalsutra },
  { name: "Payal / Anklets", blurb: "Delicate payal & layered anklets", image: anklets },
  { name: "Finger Rings", blurb: "Stackables, solitaires & statements", image: rings },
];

export const occasions = [
  { name: "Everyday", line: "Light, quiet, never taken off.", image: everyday },
  { name: "Office", line: "Composed pieces for long days.", image: rings },
  { name: "Festive", line: "Gold that answers the lamplight.", image: festive },
  { name: "Wedding", line: "Heirloom presence, modern weight.", image: necklace },
  { name: "Party", line: "One piece, and the look is done.", image: choker },
  { name: "Gifting", line: "Velvet, silk and a handwritten card.", image: gifting },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
