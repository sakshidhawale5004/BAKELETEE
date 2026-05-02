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

      <div className="relative w-full md:max-w-4xl h-full md:h-auto md:max-h-[92vh] overflow-y-auto bg-background md:rounded-3xl shadow-3d border-t md:border border-border animate-scale-in flex flex-col md:grid md:grid-cols-2 no-scrollbar">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="fixed md:absolute top-4 right-4 z-[60] w-10 h-10 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center hover:bg-muted transition-colors shadow-soft"
        >
          ✕
        </button>

        {/* Image - Shorter on mobile */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px] overflow-hidden bg-warm shrink-0">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-glow">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-1 min-h-0">
          <div className="p-6 md:p-10 flex-1">
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
            {/* Spacer for sticky footer on mobile */}
            <div className="h-24 md:hidden" />
          </div>

          {/* Empty space for consistency */}
          <div className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default QuickViewDialog;


