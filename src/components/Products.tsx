import { useState } from "react";
import { waLink } from "@/lib/contact";
import QuickViewDialog, { type Product } from "./QuickViewDialog";
import nutella from "@/assets/products/nutella.jpeg";
import blueberry from "@/assets/products/blueberry.jpeg";
import burnt from "@/assets/products/burnt.jpeg";
import oats from "@/assets/products/oats.jpeg";
import pistachioLoaf from "@/assets/products/pistachio-loaf.png";
import roseLoaf from "@/assets/products/rose-loaf.jpeg";
import almond from "@/assets/products/almond.jpeg";
import pistachioSticks from "@/assets/products/pistachio-sticks.png";
import mumbai from "@/assets/products/mumbai.png";
import ragi from "@/assets/products/ragi.png";
import bananaWalnut from "@/assets/products/banana-walnut.png";
import matcha from "@/assets/products/matcha.png";
import gingerbread from "@/assets/products/gingerbread.png";
import gheeCake from "@/assets/products/ghee-cake.png";
import oatmealCarrot from "@/assets/products/oatmeal-carrot.png";
import chocolateBrownie from "@/assets/products/chocolate-brownie.png";
import fudgelogy from "@/assets/products/chocolate-hazelnut-fudgelogy.jpeg";
import bundle from "@/assets/products/bundle-final.jpeg";



export const products: Product[] = [
  // Cookies
  {
    name: "Nutella Stuffed Chocochip Cookies",
    price: 450,
    category: "Cookies",
    img: nutella,
    badge: "Must Try",
    tagline: "A Molten Hug for Your Soul.",
    description: "Remember the joy of discovering a hidden treasure? That's the magic here. A golden, buttery embrace that gives way to a warm, velvety Nutella heart. It’s more than a treat; it’s that sweet, comforting moment you’ve been waiting for all day.",
    notes: ["Molten Nutella Core", "Choco Chips", "Whole Wheat & Jaggery"],
    weight: "250 grams",
  },
  {
    name: "Blueberry Yogurt Cookies",
    price: 510,
    category: "Cookies",
    img: blueberry,
    badge: "Probiotic Goodness",
    tagline: "A Soft Morning Sunbeam.",
    description: "Light, tangy, and refreshingly gentle. Real blueberries meet silky yogurt for a treat that feels like a whispered secret between you and your tea. It’s the gentle wake-up call your spirit needs.",
    notes: ["Real Blueberry Chunks", "Greek Yogurt Base", "Lightly Sweetened with Jaggery"],
    weight: "250 grams",
  },
  {
    name: "Burnt Butter Style Jaggery Cookies",
    price: 360,
    category: "Cookies",
    img: burnt,
    badge: "Refined Sugar-Free",
    tagline: "Soulful, Toffee-Sweet Memories.",
    description: "There’s a deep, artisanal magic in browned butter. It’s the scent of cozy rainy afternoons and the rich, toffee-like sweetness of jaggery that lingers like a fond memory you never want to end.",
    notes: ["Hand-browned Butter", "Organic Cane Jaggery"],
    weight: "250 grams",
  },

  {
    name: "Mumbai Spice Brew Cookies",
    price: 500,
    category: "Cookies",
    img: mumbai,
    badge: "Culture Infused",
    tagline: "A Love Letter to the Streets.",
    mainCharacter: "The Unexpected Hits",
    description: "The chaotic beauty of a Mumbai Culture, captured in a crumb. Warm ginger and bold cardamom dance together with coffee-infused depth, reminding you of shared laughs and comfort.",
    notes: ["Coffee Infused", "Ginger & Cardamom", "Best with Hot Brew"],
    weight: "250 grams",
  },
  {
    name: "Matcha Cookies",
    price: 435,
    category: "Cookies",
    img: matcha,
    badge: "Zen Moment",
    tagline: "A Serene Green Escape.",
    mainCharacter: "The Main Characters",
    description: "Matcha meets the creamy sweetness of white chocolate chunks. A sophisticated, earthy treat that’s as beautiful to look at as it is to eat. Perfect for a mindful tea break.",
    notes: ["White Choco Chunks", "Whole Wheat & Jaggery"],
    weight: "250 grams",
  },
  {
    name: "Gingerbread Cookies",
    price: 395,
    category: "Cookies",
    img: gingerbread,
    badge: "Seasonal Favorite",
    tagline: "A Hug of Winter Sunshine.",
    description: "Classic, warming, and nostalgic. Our gingerbread cookies are a spice-rich journey through ginger, cinnamon, and molasses. They bring the warmth of a crackling fireplace to your tea time.",
    notes: ["Fresh Ginger", "Organic Molasses", "Spiced Whole Wheat"],
    weight: "250 grams",
  },
  {
    name: "Oatmeal & Carrot Cookies",
    price: 465,
    category: "Cookies",
    img: oatmealCarrot,
    badge: "Fiber Rich",
    tagline: "Wholesome, Hearty, and Humble.",
    description: "A breakfast-inspired bake that feels like a warm bowl of sunshine. Packed with fiber-rich oats and the natural sweetness of fresh carrots, it's a wholesome companion for your morning brew that feels just as good as it tastes.",
    notes: ["Fresh Carrots", "Roasted Oats", "Whole Wheat & Jaggery"],
    weight: "250 grams",
  },

  // Brownies
  {
    name: "Chocolate Brownie",
    price: 275,
    category: "Brownie",
    img: chocolateBrownie,
    badge: "Zen Moment",
    tagline: "The Ultimate Fudgy Escape.",
    mainCharacter: "The Main Characters",
    description: "Intensely chocolatey, remarkably fudgy, and crafted with naturally unsweetened cocoa powder. A decadent treat that melts in your mouth and stays in your heart.",
    notes: ["Naturally Unsweetened Cocoa Powder", "Gooey Center", "Refined Sugar-Free", "Khapli Atta"],
    weight: "4 pcs",
  },

  // Bites
  {
    name: "Oats & Nuts Nibbles",
    price: 400,
    category: "Bites",
    img: oats,
    badge: "Fiber Rich",
    tagline: "Your Daily Dose of Kindness.",
    description: "Treating yourself shouldn't be a compromise. These crunchy nibbles are a high-five from your future self—packed with wholesome nuts and roasted oats to keep you fueled and feeling loved all day long.",
    notes: ["Nuts & Oats", "Jaggery-Bound", "No Refined Sugar"],
    weight: "250 gms",
  },
  {
    name: "Almond Sticks",
    price: 440,
    category: "Bites",
    img: almond,
    badge: "Nutrient Dense",
    tagline: "Elegance in Every Snap.",
    description: "Refined, crisp, and effortlessly beautiful. These golden slivers are for those quiet moments of reflection. Let the delicate crunch of Mamra almonds slow down time and turn your break into a celebration of you.",
    notes: ["Hand-Cut", "Mamra Almond Slivers", "Subtle Vanilla"],
    weight: "250 gms",
  },
  {
    name: "Pistachio Sticks",
    price: 450,
    category: "Bites",
    img: pistachioSticks,
    badge: "Heart Healthy",
    tagline: "The Jewel of Shared Moments.",
    description: "Emerald pistachios studded in a ghee crunch, meant for those long conversations that go late into the night. It's a sophisticated treat that says 'you deserve the best,' shared with those who matter most.",
    notes: ["Whole Pistachios", "Organic Ghee"],
    weight: "250 gms",
  },
  {
    name: "Ragi Nibbles",
    price: 350,
    category: "Bites",
    img: ragi,
    badge: "Calcium Powerhouse",
    tagline: "Rooted in Love and Strength.",
    description: "A humble tribute to our heritage. Ragi and organic ghee come together to nourish your body and soothe your heart. It’s the kind of snack that feels like a warm hug from Grandma—grounded and fulfilling.",
    notes: ["Ragi Flour", "Organic Ghee"],
    weight: "250 gms",
  },

  // Loaves
  {
    name: "Signature Banana Walnut Loaf Cake",
    price: 785,
    category: "Loaves",
    img: bananaWalnut,
    badge: "Zen Moment",
    tagline: "The Ultimate Comfort Classic.",
    mainCharacter: "The Main Characters",
    description: "A timeless favorite, perfected. Super moist banana sponge studded with the crunch of premium walnuts. It’s the kind of cake that makes the whole house smell like love and home.",
    notes: ["Bananas", "Toasted Walnuts", "Khapli Atta"],
    weight: "500 grams",
    variants: [
      { weight: "250 grams", price: 475 },
      { weight: "500 grams", price: 785 },
    ],
  },
  {
    name: "Rose & Saffron Celebration Loaf Cake",
    price: 670,
    category: "Loaves",
    img: roseLoaf,
    badge: "Antioxidant Rich",
    tagline: "A Royal Romance in Every Slice.",
    description: "Indulge in a love story thousands of years in the making. Pure Kashmiri saffron and delicate rose petals weave a fragrant tapestry of luxury. Every slice is a gift to yourself—a moment of pure, floral elegance.",
    notes: ["Pure Kashmiri Saffron", "Edible Rose Petals", "Pistachio Crown", "Khapli Atta"],
    weight: "500 grams",
    variants: [
      { weight: "250 grams", price: 405 },
      { weight: "500 grams", price: 670 },
    ],
  },
  {
    name: "Traditional Ghee Loaf Cake",
    price: 645,
    category: "Loaves",
    img: gheeCake,
    badge: "Heritage Bake",
    tagline: "Pure, Aromatic Heritage.",
    description: "A tribute to traditional flavors. Infused with the golden aroma of organic ghee, this cake is incredibly soft, buttery, and carries a fragrance that takes you back to simpler times.",
    notes: ["Organic Grass-Fed Ghee", "Melt-In-Mouth", "Subtle Cardamom", "Khapli Atta"],
    weight: "500 grams",
    variants: [
      { weight: "250 grams", price: 390 },
      { weight: "500 grams", price: 645 },
    ],
  },
  {
    name: "Pistachio & Lime Loaf Cake",
    price: 930,
    category: "Loaves",
    img: pistachioLoaf,
    badge: "Fresh & Natural",
    tagline: "Zesty Joy, Baked Fresh.",
    mainCharacter: "The Unexpected Hits",
    description: "A bright, citrusy spark that wakes up your spirit. Imagine the earthy depth of pistachios meeting a sunshine-filled lime zest. It’s a moist, tender celebration of life’s most vibrant, happy flavors.",
    notes: ["Pistachio", "Fresh Lime Zest", "Khapli Atta"],
    weight: "500 grams",
    variants: [
      { weight: "250 grams", price: 465 },
      { weight: "500 grams", price: 930 },
    ],
  },
  {
    name: "Chocolate Hazelnut Fudgelogy",
    price: 325,
    category: "Brownie",
    img: fudgelogy,
    badge: "Fudgy Goodness",
    tagline: "Hazelnut Heaven Unleashed.",
    description: "Rich, velvety fudgelogy meets the toasted elegance of premium hazelnuts. A gooey, decadent center encased in dark chocolate—pure indulgence in every bite. This is for those who believe in the transformative power of true chocolate.",
    notes: ["Roasted Hazelnuts", "Gooey Center", "Dark Chocolate Crafted", "Refined Sugar-Free"],
    weight: "4 pcs",
    minOrderQuantity: 2,
  },
  {
    name: "Premium Curations Bundle",
    price: 1800,
    category: "Bundles",
    img: bundle,
    badge: "Artisanal Choice",
    tagline: "The Zenith of Artisanal Craft.",
    description: "An exquisite symphony of our finest bakes, meticulously curated to offer an unparalleled sensory journey. This bundle is more than just a selection—it is an invitation to explore the very heart of Bakelette Bliss. Each item is chosen for its unique story, texture, and flavor, coming together to create an elevated experience that transcends the ordinary.",
    notes: [
      "A bespoke collection of our master-crafted bakes",
      "Curated for a perfect harmony of flavors and textures",
      "Elegant presentation for a truly elevated gifting or tasting experience",
      "The definitive Bakelette discovery journey"
    ],
    weight: "Full Set",
  },
];

import { useCart } from "@/contexts/CartContext";

export type Category =
  | "All"
  | "Cookies"
  | "Brownie"
  | "Loaves"
  | "Bites"
  | "Bundles"
  | "Gift Hamper";

interface ProductsProps {
  selected: Category;
  onSelect: (c: Category) => void;
  searchQuery?: string;
  discountPercentage?: number;
}

const Products = ({ selected, onSelect, searchQuery = "", discountPercentage = 0 }: ProductsProps) => {
  const [active, setActive] = useState<Product | null>(null);

  const filtered = products
    .filter((p) => {
      // If there's a search query, we show all matching products regardless of category
      if (searchQuery) return true;
      return selected === "All" ? true : p.category === selected;
    })
    .filter((p) => 
      searchQuery === "" || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

        <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-center gap-3 mb-12 pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0">
          {(["All", "Cookies", "Brownie", "Loaves", "Bites", "Bundles"] as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => {
                if (c === "Gift Hamper") {
                  document.getElementById("gifting")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  onSelect(c as Category);
                }
              }}
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
          {filtered.map((p, i) => (
            <ProductCard 
              key={p.name} 
              product={p} 
              index={i} 
              onQuickView={() => setActive(p)} 
              discountPercentage={discountPercentage}
            />
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

const ProductCard = ({ 
  product: p, 
  index: i, 
  onQuickView,
  discountPercentage = 0
}: { 
  product: Product; 
  index: number; 
  onQuickView: () => void;
  discountPercentage?: number;
}) => {
  const { addToCart, updateQuantity, getQuantity, setIsOpen } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(p.variants ? p.variants[1] : null);

  const currentPrice = selectedVariant ? selectedVariant.price : p.price;
  const discountedPrice = discountPercentage > 0 ? Math.round(currentPrice * (1 - discountPercentage / 100)) : currentPrice;
  const currentWeight = selectedVariant ? selectedVariant.weight : p.weight;
  const targetName = selectedVariant ? `${p.name} (${selectedVariant.weight})` : p.name;
  const currentInCart = getQuantity(targetName);

  const minOrderQty = p.minOrderQuantity || 1;

  const handleQuantity = (delta: number) => {
    if (currentInCart > 0) {
      const newQty = Math.max(minOrderQty, currentInCart + delta);
      updateQuantity(targetName, newQty);
    } else if (delta > 0) {
      addToCart({
        ...p,
        price: discountedPrice,
        weight: currentWeight,
        name: targetName
      }, minOrderQty);
    }
  };

  return (
    <article
      className="card-3d group bg-gradient-card rounded-3xl overflow-hidden shadow-soft border border-border/60 fade-up flex flex-col"
      style={{ animationDelay: `${(i % 4) * 0.08}s` }}
    >
      <button
        type="button"
        onClick={onQuickView}
        className={`relative ${p.category === 'Bundles' ? 'aspect-[1/1.65]' : 'aspect-square sm:aspect-[4/5]'} overflow-hidden ${p.category === 'Bundles' ? 'bg-[#f0f4f8]' : 'bg-warm'} text-left`}
      >
        <img src={p.img} alt={p.name} className={`w-full h-full ${p.category === 'Bundles' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-700 will-change-transform [backface-visibility:hidden]`} />
        {p.badge && (
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-glow">
              {p.badge}
            </span>
            {p.mainCharacter && (
              <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-glow">
                {p.mainCharacter}
              </span>
            )}
          </div>
        )}
        <span className={`absolute inset-x-4 ${p.category === 'Bundles' ? 'bottom-6' : 'bottom-4'} bg-background/95 backdrop-blur-md text-foreground text-sm font-semibold py-3 rounded-full text-center shadow-elegant transition-all duration-300`}>
          Quick View →
        </span>
      </button>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="mt-2 text-xl text-foreground leading-tight">{p.name}</h3>
        <p className="mt-2 text-sm font-script text-primary italic leading-snug">{p.tagline}</p>
        
        <div className="mt-4 flex items-baseline justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-semibold text-primary">₹{discountedPrice}</span>
              {discountPercentage > 0 && (
                <span className="text-sm text-muted-foreground line-through">₹{currentPrice}</span>
              )}
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              {p.variants ? (
                p.variants.map((v) => (
                  <button
                    key={v.weight}
                    onClick={() => setSelectedVariant(v)}
                    className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md transition-all ${
                      selectedVariant?.weight === v.weight
                        ? "bg-primary text-primary-foreground font-bold"
                        : "bg-muted text-muted-foreground hover:bg-muted-foreground/20"
                    }`}
                  >
                    {v.weight.replace(" grams", "g")}
                  </button>
                ))
              ) : (
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{p.weight ?? "per box"}</span>
              )}
            </div>
          </div>

          <div className="flex items-center bg-muted rounded-full p-1 border border-border/50">
            <button onClick={() => handleQuantity(-1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors">-</button>
            <span className="w-8 text-center text-sm font-bold">{currentInCart || minOrderQty}</span>
            <button onClick={() => handleQuantity(1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors">+</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              const qty = Math.max(minOrderQty, currentInCart);
              const itemTotal = discountedPrice * qty;
              const message = `Hi Bakelette! I'd like to order the following:\n\n- ${targetName} x ${qty} (₹${itemTotal})\n\nTotal: ₹${itemTotal}\n\nThank you!`;
              window.open(waLink(message), "_blank");
            }}
            className="rounded-full border-2 border-border text-foreground text-sm font-semibold py-2.5 hover:border-primary hover:text-primary transition-colors"
          >
            Buy Now
          </button>
          {currentInCart > 0 ? (
            <button onClick={() => setIsOpen(true)} className="rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold py-2.5 text-center shadow-glow hover:-translate-y-0.5 transition-all">View Cart</button>
          ) : (
            <button onClick={() => handleQuantity(1)} className="rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold py-2.5 text-center shadow-glow hover:-translate-y-0.5 transition-all">Add to Cart</button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Products;
