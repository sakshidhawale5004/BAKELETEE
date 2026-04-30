import { useEffect, useState } from "react";
import { waLink } from "@/lib/contact";
import { useCart } from "@/contexts/CartContext";

export interface Product {
  name: string;
  price: number;
  category: "Cookies" | "Loaves" | "Bites" | "Brownies" | "Bundles" | "Gift Hampers";
  img: string;
  badge?: string;
  tagline: string;
  description: string;
  notes: string[];
  weight?: string;
}

interface Props {
  product: Product | null;
  onClose: () => void;
}

const QuickViewDialog = ({ product, onClose }: Props) => {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!product) return;
    setQty(1); // Reset qty when product changes
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-background rounded-3xl shadow-3d border border-border animate-scale-in grid md:grid-cols-2 no-scrollbar">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center hover:bg-muted transition-colors"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[520px] overflow-hidden bg-warm">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-glow">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col">
          <span className="text-xs text-primary uppercase tracking-[0.25em] font-semibold">
            {product.category}
          </span>

          <h3 className="mt-3 font-script text-3xl md:text-4xl text-primary leading-tight italic">
            {product.tagline}
          </h3>
          <h2 className="mt-2 text-2xl md:text-3xl font-display text-foreground leading-tight">
            {product.name}
          </h2>

          <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-widest text-foreground/70 font-semibold mb-3">
              What makes it special
            </h4>
            <ul className="space-y-2">
              {product.notes.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1 w-4 h-4 rounded-full bg-gradient-primary text-primary-foreground text-[10px] flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-8 space-y-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-3xl font-display font-semibold text-primary">₹{product.price}</div>
                {product.weight && (
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{product.weight}</div>
                )}
              </div>
              
              <div className="flex items-center bg-muted rounded-full p-1 border border-border/50">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-background transition-colors font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold">{qty}</span>
                <button 
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-background transition-colors font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  addToCart(product, qty);
                  onClose();
                }}
                className="rounded-full border-2 border-primary text-primary py-4 font-bold hover:bg-primary/5 transition-all"
              >
                Add to Cart
              </button>
              <a
                href={waLink(
                  `Hi Bakelette! 🧁\nI'd like to order:\n• ${product.name} x ${qty} — ₹${product.price * qty}${
                    product.weight ? ` (${product.weight})` : ""
                  }\n\nCould you share availability & delivery details?`
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-4 font-bold shadow-glow hover:-translate-y-0.5 hover:brightness-110 transition-all"
              >
                Buy Now
              </a>
            </div>
            
            <p className="text-[10px] text-muted-foreground text-center uppercase tracking-[0.2em]">
              Baked fresh to order · 24-48h delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewDialog;

