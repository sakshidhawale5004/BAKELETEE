import { useState } from "react";
import { waLink } from "@/lib/contact";
import QuickViewDialog, { type Product } from "./QuickViewDialog";

const hampers: Product[] = [
  {
    name: "The Muse",
    price: 999,
    category: "Gift Hamper",
    tagline: "A graceful introduction to artisan bakes.",
    img: "/assets/hampers/The-muse-new.png",
    description: "Perfect for a thoughtful gesture, The Muse features a curated selection of our signature bakes, offering a gentle taste of Bakelette's artisanal craft. Ideal for birthdays, thank-you notes, or just because.",
    notes: ["Pistachio Lime Loaf", "Mumbai Spice Brew Cookies", "Artisanal Packaging"],
    badge: "Most Popular",
  },
  {
    name: "The Darling",
    price: 1499,
    category: "Gift Hamper",
    tagline: "A beloved collection of our bestsellers.",
    img: "/assets/hampers/The-darling-new.png",
    description: "Our most popular choice. The Darling brings together the bakes that have captured the hearts of our community. A balanced mix of sweet, savory, and wholesome that promises to delight every recipient.",
    notes: ["Signature Banana Loaf", "Nutella Stuffed Cookies", "Almond Sticks", "Premium Gift Box"],
    badge: "Bestseller",
  },
  {
    name: "The Icon",
    price: 1999,
    category: "Gift Hamper",
    tagline: "The ultimate expression of Bakelette luxury.",
    img: "/assets/hampers/The-icon-new.png",
    description: "The grandest of them all. The Icon is a lavish celebration of our entire range, featuring our most indulgent loaves, cookies, and bites. A statement piece for weddings, anniversaries, or corporate gifting.",
    notes: ["Rose & Saffron Loaf", "Matcha & Blueberry Cookies", "Full Range of Nibbles", "Luxury Keepsake Box"],
    badge: "Luxury Edition",
  },
];

const Gifting = () => {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section id="gifting" className="py-24 md:py-32 bg-background scroll-mt-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold">Premium Collections</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-balance font-display tracking-tight">
            Artisanal <em className="font-script text-primary non-italic">Curations</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughtfully curated hampers for every celebration, wrapped in elegance and baked with love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {hampers.map((h) => (
            <div key={h.name} className="group flex flex-col bg-white rounded-[2.5rem] p-5 border border-warm-200/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
              <button 
                onClick={() => setActive(h)}
                className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 shadow-inner border border-warm-100 group/img w-full text-left"
              >
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white relative">
                  <img 
                    src={h.img} 
                    alt={h.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute inset-x-4 bottom-4 bg-background/95 backdrop-blur-md text-foreground text-xs font-semibold py-3 rounded-full text-center shadow-elegant opacity-0 group-hover/img:opacity-100 transition-opacity">
                    Quick View →
                  </span>
                </div>
              </button>
              <div className="px-2 flex-1 flex flex-col">
                <h3 className="text-2xl font-display text-ink tracking-tight">{h.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">{h.tagline}</p>
                
                <div className="mt-auto pt-8 flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1 opacity-60">Starting at</span>
                    <span className="text-3xl font-semibold text-primary">₹{h.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActive(h)}
                      className="w-14 h-14 rounded-full border-2 border-primary/20 text-primary flex items-center justify-center hover:bg-primary/5 transition-all"
                    >
                      <span className="text-sm font-bold">Info</span>
                    </button>
                    <a
                      href={waLink(`Hi! I'd like to order ${h.name} hamper`)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-glow transition-all shadow-glow group-hover:scale-105 active:scale-95"
                    >
                      <span className="text-2xl">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center px-4">
          <div className="inline-block bg-warm-50 px-8 py-4 rounded-2xl border border-warm-100">
            <p className="text-sm text-muted-foreground">
              For corporate bulk orders or custom assortments, kindly connect with us on 
              <strong className="text-ink font-semibold block sm:inline sm:ml-2"> +91 83694 24099</strong>
            </p>
          </div>
        </div>
      </div>

      <QuickViewDialog product={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Gifting;
