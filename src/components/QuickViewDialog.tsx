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

      <div className="relative w-full md:max-w-4xl h-full md:h-auto md:max-h-[92vh] overflow-y-auto bg-background md:rounded-3xl shadow-3d border-t md:border border-border animate-scale-in grid md:grid-cols-2 no-scrollbar">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="fixed md:absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center hover:bg-muted transition-colors shadow-soft"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative aspect-square md:aspect-auto md:min-h-[520px] overflow-hidden bg-warm">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-glow">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col min-h-full">
          <div className="flex-1">
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
              <ul className="grid grid-cols-1 gap-2">
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
          </div>

          <div className="mt-10 pt-8 border-t border-border/50 space-y-6 pb-8 md:pb-0">
            <div className="flex flex-wrap items-center justify-between gap-4">
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
                <span className="w-12 text-center font-bold text-lg">{qty}</span>
                <button 
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-background transition-colors font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  addToCart(product, qty);
                  onClose();
                }}
                className="rounded-full border-2 border-primary text-primary py-4 font-bold hover:bg-primary/5 transition-all order-2 sm:order-1"
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground py-4 font-bold shadow-glow hover:-translate-y-0.5 transition-all order-1 sm:order-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.52 3.48A11.78 11.78 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 005.71 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.42-8.43zM12.06 21.8h-.01a9.92 9.92 0 01-5.05-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.91 9.91 0 01-1.52-5.28c0-5.48 4.46-9.94 9.94-9.94 2.66 0 5.15 1.04 7.03 2.91a9.86 9.86 0 012.91 7.03c0 5.48-4.46 9.92-9.94 9.92zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35z"/>
                </svg>
                Buy on WhatsApp
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

