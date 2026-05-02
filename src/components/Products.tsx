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
    tagline: "A Molten Hug for Your Soul.",
    description: "Remember the joy of discovering a hidden treasure? That's the magic here. A golden, buttery embrace that gives way to a warm, velvety Nutella heart. It’s more than a treat; it’s that sweet, comforting moment you’ve been waiting for all day.",
    notes: ["Molten Nutella core", "Belgian dark choco chips", "Whole wheat & jaggery"],
    weight: "Box of 6",
  },
  {
    name: "Nutella Chocochip Cookies",
    price: 350,
    category: "Cookies",
    img: nutellaChoco,
    tagline: "The Timeless Comfort of Home.",
    description: "Every bite is a nostalgic trip back to simpler times. We’ve captured that classic, gooey goodness of melted chocolate swirls to remind you that some things in life are simply, perfectly sweet—just like home.",
    notes: ["Choco chips", "Nutella swirl", "Soft-baked"],
    weight: "Box of 6",
  },
  {
    name: "Blueberry Yogurt Cookies",
    price: 340,
    category: "Cookies",
    img: blueberry,
    tagline: "A Soft Morning Sunbeam.",
    description: "Light, tangy, and refreshingly gentle. Real blueberries meet silky yogurt for a treat that feels like a whispered secret between you and your tea. It’s the gentle wake-up call your spirit needs.",
    notes: ["Real blueberry chunks", "Greek yogurt base", "Lightly sweetened with jaggery"],
    weight: "Box of 6",
  },
  {
    name: "Burnt Butter Style Jaggery",
    price: 320,
    category: "Cookies",
    img: burnt,
    tagline: "Soulful, Toffee-Sweet Memories.",
    description: "There’s a deep, artisanal magic in browned butter. It’s the scent of cozy rainy afternoons and the rich, toffee-like sweetness of jaggery that lingers like a fond memory you never want to end.",
    notes: ["Hand-browned French butter", "Organic cane jaggery", "Sea salt finish"],
    weight: "Box of 6",
  },
  {
    name: "Burnt Butter Jaggery",
    price: 320,
    category: "Cookies",
    img: burntJaggery,
    tagline: "Rustic Roots, Pure Joy.",
    description: "A wholesome, rustic tribute to tradition. Crafted with the nutty depth of brown butter and artisanal jaggery, this cookie is a grounded reminder to find happiness in the simplest, purest ingredients.",
    notes: ["Artisanal jaggery", "Brown butter", "No refined sugar"],
    weight: "Box of 6",
  },
  {
    name: "Mumbai Spice Brew Cookie",
    price: 330,
    category: "Cookies",
    img: mumbai,
    badge: "New",
    tagline: "A Love Letter to the Streets.",
    description: "The chaotic beauty of a Mumbai tapri, captured in a crumb. Warm ginger and bold cardamom dance together, reminding you of shared laughs and the comfort of a hot cup of chai on a busy day.",
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
    tagline: "Your Daily Dose of Kindness.",
    description: "Treating yourself shouldn't be a compromise. These crunchy nibbles are a high-five from your future self—packed with wholesome nuts and seeds to keep you fueled and feeling loved all day long.",
    notes: ["5 nuts & seeds", "Jaggery-bound", "No refined sugar"],
    weight: "200g jar",
  },
  {
    name: "Almond Sticks",
    price: 360,
    category: "Bites",
    img: almond,
    tagline: "Elegance in Every Snap.",
    description: "Refined, crisp, and effortlessly beautiful. These golden slivers are for those quiet moments of reflection. Let the delicate crunch of Mamra almonds slow down time and turn your break into a celebration of you.",
    notes: ["Hand-cut & double-baked", "Mamra almond slivers", "Subtle vanilla"],
    weight: "180g pack",
  },
  {
    name: "Pistachio Sticks",
    price: 380,
    category: "Bites",
    img: pistachioSticks,
    tagline: "The Jewel of Shared Moments.",
    description: "Emerald pistachios studded in a buttery crunch, meant for those long conversations that go late into the night. It's a sophisticated treat that says 'you deserve the best,' shared with those who matter most.",
    notes: ["Whole roasted pistachios", "Twice-baked crunch", "Cardamom hint"],
    weight: "180g pack",
  },
  {
    name: "Ragi Nibbles",
    price: 290,
    category: "Bites",
    img: ragi,
    badge: "Healthy",
    tagline: "Rooted in Love and Strength.",
    description: "A humble tribute to our heritage. Sprouted ragi and pure ghee come together to nourish your body and soothe your heart. It’s the kind of snack that feels like a warm hug from Grandma—grounded and fulfilling.",
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
    tagline: "Zesty Joy, Baked Fresh.",
    description: "A bright, citrusy spark that wakes up your spirit. Imagine the earthy depth of Iranian pistachios meeting a sunshine-filled lime glaze. It’s a moist, tender celebration of life’s most vibrant, happy flavors.",
    notes: ["Iranian pistachio paste", "Fresh lime zest glaze", "Whole wheat sponge"],
    weight: "450g loaf",
  },
  {
    name: "Rose & Saffron Celebration Loaf Cake",
    price: 520,
    category: "Loaves",
    img: roseLoaf,
    badge: "Limited",
    tagline: "A Royal Romance in Every Slice.",
    description: "Indulge in a love story thousands of years in the making. Pure Kashmiri saffron and delicate rose petals weave a fragrant tapestry of luxury. Every slice is a gift to yourself—a moment of pure, floral elegance.",
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
  const { addToCart, updateQuantity, getQuantity } = useCart();

  const filtered = selected === "All" ? products : products.filter((p) => p.category === selected);

  const handleQuantity = (p: Product, delta: number) => {
    const currentQty = getQuantity(p.name);
    if (currentQty > 0) {
      updateQuantity(p.name, currentQty + delta);
    } else {
      // If not in cart, we can still use local state or just add 1
      addToCart(p, 1);
    }
  };

  return (
    <section id="products" className="py-24 md:py-32 bg-background scroll-mt-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Our Collection</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-balance">
            Signature <em className="font-script text-primary">Bakes</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg font-medium">
            {selected === "All"
              ? "A handcrafted collection where tradition meets modern artistry. Every bake is a labor of love, using heritage grains and artisanal techniques to create moments of pure indulgence."
              : `Showing our ${selected.toLowerCase()} — handcrafted with love and curated for your soul.`}
          </p>
        </div>

        {/* Filter Tabs — visible on all screens */}
        {/* Filter Tabs — scrollable on mobile, centered on desktop */}
        <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-center gap-3 mb-12 pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0">
          {(["All", "Cookies", "Loaves", "Bites", "Brownies", "Bundles", "Gift Hampers"] as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => onSelect(c)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                selected === c
                  ? "bg-gradient-primary text-primary-foreground border-primary shadow-glow"
                  : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((p, i) => {
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
                        onClick={() => handleQuantity(p, -1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-bold">{getQuantity(p.name) || 1}</span>
                      <button 
                        onClick={() => handleQuantity(p, 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        const qty = getQuantity(p.name) || 1;
                        window.open(waLink(`Hi Bakelette! I'd like to order ${p.name} x ${qty}`), "_blank");
                      }}
                      className="rounded-full border-2 border-border text-foreground text-sm font-semibold py-2.5 hover:border-primary hover:text-primary transition-colors"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => addToCart(p, 1)}
                      className="rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold py-2.5 text-center shadow-glow hover:-translate-y-0.5 transition-all"
                    >
                      {getQuantity(p.name) > 0 ? "Add More" : "Add to Cart"}
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


