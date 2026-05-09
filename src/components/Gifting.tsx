import { useState } from "react";
import { waLink } from "@/lib/contact";
import QuickViewDialog, { type Product } from "./QuickViewDialog";

const hampers: Product[] = [
  {
    name: "The Muse",
    price: 999,
    category: "Gift Hamper",
    tagline: "A gentle whisper of affection.",
    img: "/assets/hampers/THE-MUSE-FINAL.jpeg",
    description: "Sometimes, the smallest gestures carry the deepest meaning. The Muse is a delicate collection of four hand-picked bakes, designed to be a gentle whisper of affection. Whether it's a quiet 'thank you' or a simple 'I'm thinking of you,' these treats are crafted to turn a fleeting moment into a lasting memory of warmth.",
    notes: ["4 Hand-picked Artisanal Treats", "Elegant Handcrafted Packaging", "Perfect for Thoughtful Gestures"],
    badge: "Most Popular",
  },
  {
    name: "The Darling",
    price: 1499,
    category: "Gift Hamper",
    tagline: "A warm embrace in a box.",
    img: "/assets/hampers/THE-DARLING-FINAL.jpeg",
    description: "Our most cherished collection, for the ones who hold a special place in your heart. The Darling brings together six of our most-loved bakes—the ones that have sparked conversations and shared smiles. It's more than a gift; it's a warm embrace in a box, meant for sharing stories and creating new traditions with the people who matter most.",
    notes: ["6 Signature Bestsellers", "Premium Keepsake Gift Box", "Designed for Shared Moments"],
    badge: "Community Choice",
  },
  {
    name: "The Icon",
    price: 1999,
    category: "Gift Hamper",
    tagline: "The ultimate expression of artisanal love.",
    img: "/assets/hampers/THE-ICON-FINAL.jpeg",
    description: "A lavish tribute to life’s grandest celebrations and most profound connections. The Icon is our ultimate expression of artisanal love, featuring eight of our most indulgent and sophisticated bakes. It is a grand gesture of abundance, designed to honor the milestones that define us and the people who inspire us. A truly iconic gift for truly iconic moments.",
    notes: ["8 Indulgent Masterpieces", "Luxury Commemorative Packaging", "The Full Bakelette Experience"],
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
      </div>

      <QuickViewDialog product={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Gifting;
