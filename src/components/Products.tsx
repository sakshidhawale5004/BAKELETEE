import { useState } from "react";
import { waLink } from "@/lib/contact";
import QuickViewDialog, { type Product } from "./QuickViewDialog";
import nutella from "@/assets/products/Nutella_Stuffed_Chocochip.jpeg";
import blueberry from "@/assets/products/Blueberry_Yogurt.jpeg";
import burnt from "@/assets/products/Burnt_Butter_Style_Jaggery.jpeg";
import oats from "@/assets/products/Oats_and_Nuts_Nibbles_.jpeg";
import pistachioLoaf from "@/assets/products/Pistachio___Lime_Loaf_Cake.jpeg";
import roseLoaf from "@/assets/products/Rose___Saffron_Celebration_Loaf_Cake.jpeg";
import almond from "@/assets/products/Almond_Sticks.jpeg";
import pistachioSticks from "@/assets/products/Pistachio_sticks.jpeg";
import mumbai from "@/assets/products/Mumbai_spice_brew_cookie.jpeg";
import ragi from "@/assets/products/Ragi_nibbles.jpeg";

export type Category =
  | "All"
  | "Cookies"
  | "Loaves"
  | "Bites"
  | "Brownies"
  | "Bundles"
  | "Gift Hampers";

export const products: Product[] = [
  // Cookies
  {
    name: "Nutella Stuffed Chocochip",
    price: 350,
    category: "Cookies",
    img: nutella,
    badge: "Bestseller",
    tagline: "One Bite. Pure Drama.",
    description:
      "A golden chocochip cookie hiding a molten heart of Nutella. Crack it open and watch hazelnut-cocoa lava ooze out — warm, rich, ridiculously good.",
    notes: ["Molten Nutella core", "Belgian dark choco chips", "Whole wheat & jaggery"],
    weight: "Box of 6",
  },
  {
    name: "Blueberry Yogurt Cookies",
    price: 340,
    category: "Cookies",
    img: blueberry,
    tagline: "Berry Sweet. Cloud Soft.",
    description:
      "Tangy wild blueberries folded into a pillow-soft yogurt cookie. Light, fragrant, and dangerously snackable with chai or coffee.",
    notes: ["Real blueberry chunks", "Greek yogurt base", "Lightly sweetened with jaggery"],
    weight: "Box of 6",
  },

  // Loaves
  {
    name: "Pistachio & Lime Loaf Cake",
    price: 450,
    category: "Loaves",
    img: pistachioLoaf,
    badge: "Fresh Today",
    tagline: "Green Gold. Citrus Spark.",
    description:
      "Stone-ground Iranian pistachios meet a bright lime glaze on a tender, moist loaf. Earthy, zesty, elegant — your new tea-time obsession.",
    notes: ["Iranian pistachio paste", "Fresh lime zest glaze", "Whole wheat sponge"],
    weight: "450g loaf",
  },
  {
    name: "Rose & Saffron Loaf Cake",
    price: 520,
    category: "Loaves",
    img: roseLoaf,
    badge: "Limited",
    tagline: "A Love Letter, Baked.",
    description:
      "Kashmiri saffron and Damask rose petals folded into a celebration loaf. Romantic, fragrant, jewel-toned — made for the moments that matter.",
    notes: ["Pure Kashmiri saffron", "Edible rose petals", "Pistachio crown"],
    weight: "500g loaf",
  },

  // Bites
  {
    name: "Oats & Nuts Nibbles",
    price: 280,
    category: "Bites",
    img: oats,
    badge: "Wholesome",
    tagline: "Tiny Bites, Big Energy.",
    description:
      "Crunchy clusters of toasted oats, almonds, walnuts and seeds bound with jaggery. Your guilt-free 4 PM hero — wholesome and addictive.",
    notes: ["5 nuts & seeds", "Jaggery-bound", "No refined sugar"],
    weight: "200g jar",
  },
  {
    name: "Almond Sticks",
    price: 360,
    category: "Bites",
    img: almond,
    tagline: "Snap. Crunch. Repeat.",
    description:
      "Slim, golden sticks loaded with toasted almond slivers. The perfect crisp-buttery match for your morning coffee or evening wine.",
    notes: ["Hand-cut & double-baked", "Mamra almond slivers", "Subtle vanilla"],
    weight: "180g pack",
  },

  // Brownies
  {
    name: "Classic Fudge Brownie",
    price: 380,
    category: "Brownies",
    img: burnt,
    badge: "Fudgy",
    tagline: "Dense. Dark. Devastating.",
    description:
      "A square of pure indulgence — crackly top, gooey middle, deep cocoa soul. The brownie all other brownies are trying to be.",
    notes: ["72% Belgian cocoa", "Gooey molten centre", "Sea-salt finish"],
    weight: "Box of 4",
  },
  {
    name: "Walnut Jaggery Brownie",
    price: 410,
    category: "Brownies",
    img: nutella,
    tagline: "Wholesome Goes Wicked.",
    description:
      "Toasted Kashmiri walnuts and dark jaggery turn this brownie into a caramel-deep, nutty masterpiece. Rustic, rich, refined.",
    notes: ["Kashmiri walnut chunks", "Dark Kolhapuri jaggery", "Whole wheat base"],
    weight: "Box of 4",
  },

  // Bundles
  {
    name: "Cookie Lover's Box",
    price: 899,
    category: "Bundles",
    img: blueberry,
    badge: "Combo",
    tagline: "All The Cookies. Zero Regrets.",
    description:
      "A curated tasting of our bestseller cookies. Sharing optional.",
    notes: ["12 assorted cookies", "4 signature flavours", "Gift-ready box"],
    weight: "Box of 12",
  },
  {
    name: "Tea-Time Bundle",
    price: 749,
    category: "Bundles",
    img: oats,
    tagline: "Steep. Dunk. Repeat.",
    description:
      "Built for that golden 5 PM hour — almond sticks, oats nibbles, and a half-loaf of pistachio-lime.",
    notes: ["3 tea-time staples", "Perfect for 2–4 people", "Hand-tied with jute"],
    weight: "Mixed bundle",
  },

  // Gift Hampers
  {
    name: "Signature Celebration Hamper",
    price: 1499,
    category: "Gift Hampers",
    img: roseLoaf,
    badge: "Premium",
    tagline: "Gifting, Elevated.",
    description:
      "Our signature loaf, a tin of cookies, and artisan bites — wrapped in linen and ribbon.",
    notes: ["Hand-curated assortment", "Linen-wrapped premium box", "Handwritten card"],
    weight: "Premium hamper",
  },
  {
    name: "Festive Luxury Hamper",
    price: 2299,
    category: "Gift Hampers",
    img: roseLoaf,
    badge: "Luxury",
    tagline: "The Showstopper.",
    description:
      "Two signature loaves, premium cookies, nut bites and brownies in a wooden keepsake tray.",
    notes: ["Wooden keepsake tray", "Loaves + cookies + bites", "Custom ribbon & note"],
    weight: "Luxury hamper",
  },
];

interface ProductsProps {
  selected: Category;
  onSelect: (c: Category) => void;
}

const Products = ({ selected, onSelect }: ProductsProps) => {
  const [active, setActive] = useState<Product | null>(null);
  const filtered = selected === "All" ? products : products.filter((p) => p.category === selected);

  return (
    <section id="products" className="py-24 md:py-32 bg-background scroll-mt-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Our Collection</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-balance">
            Signature <em className="font-script text-primary">Bakes</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            {selected === "All"
              ? "Tap any bake for the full story — then order in one tap on WhatsApp."
              : `Showing our ${selected.toLowerCase()} — tap any card for the full story.`}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((p, i) => (
            <article
              key={p.name}
              className="card-3d group bg-gradient-card rounded-3xl overflow-hidden shadow-soft border border-border/60 fade-up flex flex-col"
              style={{ animationDelay: `${(i % 4) * 0.08}s` }}
            >
              <button
                type="button"
                onClick={() => setActive(p)}
                className="relative aspect-[4/5] overflow-hidden bg-warm text-left"
                aria-label={`Quick view ${p.name}`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {p.badge && (
                  <span className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-glow">
                    {p.badge}
                  </span>
                )}
                <span className="absolute inset-x-4 bottom-4 bg-background/95 backdrop-blur-md text-foreground text-sm font-semibold py-3 rounded-full text-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-elegant">
                  Quick View →
                </span>
              </button>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="mt-2 text-xl text-foreground leading-tight">{p.name}</h3>
                <p className="mt-2 text-sm font-script text-primary italic leading-snug">{p.tagline}</p>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-2xl font-display font-semibold text-primary">₹{p.price}</span>
                  <span className="text-xs text-muted-foreground">{p.weight ?? "per box"}</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="rounded-full border-2 border-border text-foreground text-sm font-semibold py-2.5 hover:border-primary hover:text-primary transition-colors"
                  >
                    Quick View
                  </button>
                  <a
                    href={waLink(`Hi Bakelette! I'd like to order: ${p.name} (₹${p.price})`)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold py-2.5 text-center shadow-glow hover:-translate-y-0.5 transition-all"
                  >
                    Order
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">No items in this category yet.</p>
        )}
      </div>

      <QuickViewDialog product={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Products;


