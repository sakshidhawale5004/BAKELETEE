import { useState } from "react";
import { waLink } from "@/lib/contact";
import QuickViewDialog, { type Product } from "./QuickViewDialog";
import nutella from "@/assets/products/nutella.jpeg";
import nutellaChoco from "@/assets/products/nutella-choco.png";
import blueberry from "@/assets/products/blueberry.jpeg";
import burnt from "@/assets/products/burnt.jpeg";
import burntJaggery from "@/assets/products/burnt-jaggery.png";
import oats from "@/assets/products/oats.jpeg";
import pistachioLoaf from "@/assets/products/pistachio-loaf.png";
import roseLoaf from "@/assets/products/rose-loaf.jpeg";

import almond from "@/assets/products/almond.jpeg";
import pistachioSticks from "@/assets/products/pistachio-sticks.png";
import mumbai from "@/assets/products/mumbai.png";
import ragi from "@/assets/products/ragi.png";


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
    description: "A golden chocochip cookie hiding a molten heart of Nutella. Crack it open and watch hazelnut-cocoa lava ooze out — warm, rich, ridiculously good.",
    notes: ["Molten Nutella core", "Belgian dark choco chips", "Whole wheat & jaggery"],
    weight: "Box of 6",
  },
  {
    name: "Nutella Chocochip Cookies",
    price: 350,
    category: "Cookies",
    img: nutellaChoco,
    tagline: "Classic. Gooey. Irresistible.",
    description: "Our classic Nutella chocochip cookies — rich, buttery, loaded with chocolate chips and a hidden Nutella swirl.",
    notes: ["Choco chips", "Nutella swirl", "Soft-baked"],
    weight: "Box of 6",
  },
  {
    name: "Blueberry Yogurt Cookies",
    price: 340,
    category: "Cookies",
    img: blueberry,
    tagline: "Berry Sweet. Cloud Soft.",
    description: "Tangy wild blueberries folded into a pillow-soft yogurt cookie. Light, fragrant, and dangerously snackable with chai or coffee.",
    notes: ["Real blueberry chunks", "Greek yogurt base", "Lightly sweetened with jaggery"],
    weight: "Box of 6",
  },
  {
    name: "Burnt Butter Style Jaggery",
    price: 320,
    category: "Cookies",
    img: burnt,
    tagline: "Caramel Whispers, Burnt-Butter Soul.",
    description: "Slow-browned butter meets organic jaggery in a chewy-crisp cookie that tastes like nostalgia. Toffee-deep, buttery, unforgettable.",
    notes: ["Hand-browned French butter", "Organic cane jaggery", "Sea salt finish"],
    weight: "Box of 6",
  },
  {
    name: "Burnt Butter Jaggery",
    price: 320,
    category: "Cookies",
    img: burntJaggery,
    tagline: "Rustic. Rich. Rewarding.",
    description: "A wholesome, rustic cookie crafted with brown butter and artisanal jaggery — the perfect companion for your evening chai.",
    notes: ["Artisanal jaggery", "Brown butter", "No refined sugar"],
    weight: "Box of 6",
  },
  {
    name: "Mumbai Spice Brew Cookie",
    price: 330,
    category: "Cookies",
    img: mumbai,
    badge: "New",
    tagline: "Cutting Chai, Reimagined.",
    description: "Inspired by tapri masala chai — cardamom, ginger, clove, and a hit of black pepper baked into a buttery cookie.",
    notes: ["Hand-pounded chai masala", "Ginger & cardamom", "Best with hot chai"],
    weight: "Box of 6",
  },

  // Bites
  {
    name: "Oats and Nuts Nibbles",
    price: 280,
    category: "Bites",
    img: oats,
    badge: "Wholesome",
    tagline: "Tiny Bites, Big Energy.",
    description: "Crunchy clusters of toasted oats, almonds, walnuts and seeds bound with jaggery. Your guilt-free 4 PM hero.",
    notes: ["5 nuts & seeds", "Jaggery-bound", "No refined sugar"],
    weight: "200g jar",
  },
  {
    name: "Almond Sticks",
    price: 360,
    category: "Bites",
    img: almond,
    tagline: "Snap. Crunch. Repeat.",
    description: "Slim, golden sticks loaded with toasted almond slivers. The perfect crisp-buttery match for your morning coffee.",
    notes: ["Hand-cut & double-baked", "Mamra almond slivers", "Subtle vanilla"],
    weight: "180g pack",
  },
  {
    name: "Pistachio Sticks",
    price: 380,
    category: "Bites",
    img: pistachioSticks,
    tagline: "Emerald Crunch in Every Bite.",
    description: "Buttery biscotti-style sticks studded with whole pistachios. Crisp, fragrant, and ridiculously elegant on a cheese board.",
    notes: ["Whole roasted pistachios", "Twice-baked crunch", "Cardamom hint"],
    weight: "180g pack",
  },
  {
    name: "Ragi Nibbles",
    price: 290,
    category: "Bites",
    img: ragi,
    badge: "Healthy",
    tagline: "Old-School Grain. New-School Crunch.",
    description: "Nutty finger millet nibbles with a hint of jaggery and ghee. Iron-rich, gut-friendly, and the smartest snack in your pantry.",
    notes: ["Sprouted ragi flour", "Cow ghee", "Naturally gluten-aware"],
    weight: "200g jar",
  },

  // Loaves
  {
    name: "Pistachio & Lime Loaf Cake",
    price: 450,
    category: "Loaves",
    img: pistachioLoaf,
    badge: "Fresh Today",
    tagline: "Green Gold. Citrus Spark.",
    description: "Stone-ground Iranian pistachios meet a bright lime glaze on a tender, moist loaf. Earthy, zesty, elegant.",
    notes: ["Iranian pistachio paste", "Fresh lime zest glaze", "Whole wheat sponge"],
    weight: "450g loaf",
  },
  {
    name: "Rose & Saffron Celebration Loaf Cake",
    price: 520,
    category: "Loaves",
    img: roseLoaf,
    badge: "Limited",
    tagline: "A Love Letter, Baked.",
    description: "Kashmiri saffron and Damask rose petals folded into a celebration loaf. Romantic, fragrant, jewel-toned.",
    notes: ["Pure Kashmiri saffron", "Edible rose petals", "Pistachio crown"],
    weight: "500g loaf",
  },
];

import { useCart } from "@/contexts/CartContext";


interface ProductsProps {
  selected: Category;
  onSelect: (c: Category) => void;
}

const Products = ({ selected, onSelect }: ProductsProps) => {
  const [active, setActive] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const filtered = selected === "All" ? products : products.filter((p) => p.category === selected);

  const handleQuantity = (name: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [name]: Math.max(1, (prev[name] || 1) + delta)
    }));
  };

  return (
    <section id="products" className="py-24 md:py-32 bg-background scroll-mt-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Our Collection</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-balance">
            Signature <em className="font-script text-primary">Bakes</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg italic">
            {selected === "All"
              ? "A symphony of flavours, baked to perfection. Each bite tells a story of artisanal mastery and wholesome ingredients."
              : `Showing our ${selected.toLowerCase()} — handcrafted with love and curated for your soul.`}
          </p>
        </div>

        {/* Category Tabs for Mobile/All */}
        <div className="flex overflow-x-auto pb-8 gap-3 no-scrollbar -mx-4 px-4 md:hidden">
          {(["All", "Cookies", "Loaves", "Bites", "Brownies", "Bundles", "Gift Hampers"] as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => onSelect(c)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                selected === c
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((p, i) => {
            const qty = quantities[p.name] || 1;
            return (
              <article
                key={p.name}
                className="card-3d group bg-gradient-card rounded-3xl overflow-hidden shadow-soft border border-border/60 fade-up flex flex-col"
                style={{ animationDelay: `${(i % 4) * 0.08}s` }}
              >
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="relative aspect-square sm:aspect-[4/5] overflow-hidden bg-warm text-left"
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
                    <div className="flex flex-col">
                      <span className="text-2xl font-display font-semibold text-primary">₹{p.price}</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{p.weight ?? "per box"}</span>
                    </div>
                    <div className="flex items-center bg-muted rounded-full p-1 border border-border/50">
                      <button 
                        onClick={() => handleQuantity(p.name, -1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-bold">{qty}</span>
                      <button 
                        onClick={() => handleQuantity(p.name, 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      className="rounded-full border-2 border-border text-foreground text-sm font-semibold py-2.5 hover:border-primary hover:text-primary transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => addToCart(p, qty)}
                      className="rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold py-2.5 text-center shadow-glow hover:-translate-y-0.5 transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
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


