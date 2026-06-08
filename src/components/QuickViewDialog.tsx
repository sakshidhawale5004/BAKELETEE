import { useEffect, useState } from "react";
import { waLink } from "@/lib/contact";
import { useCart } from "@/contexts/CartContext";

export interface Product {
  name: string;
  price: number;
  category: "Cookies" | "Loaves" | "Bites" | "Brownie" | "Brownie and Fudge" | "Bundles" | "Gift Hamper";
  img: string;
  badge?: string;
  tagline: string;
  mainCharacter?: string;
  description: string;
  notes: string[];
  weight?: string;
  minOrderQuantity?: number;
  variants?: {
    weight: string;
    price: number;
  }[];
}

interface Props {
  product: Product | null;
  onClose: () => void;
}

const QuickViewDialog = ({ product, onClose }: Props) => {
  const [qty, setQty] = useState(product?.minOrderQuantity || 1);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[1] || null); // Default to 500g if exists
  const { addToCart } = useCart();

  useEffect(() => {
    if (!product) return;
    setQty(product?.minOrderQuantity || 1); 
    setSelectedVariant(product.variants?.[1] || null);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentWeight = selectedVariant ? selectedVariant.weight : product.weight;

  const handleAddToCart = () => {
    const finalProduct = {
      ...product,
      price: currentPrice,
      weight: currentWeight,
      // If it's a variant, we modify the name to make it unique in the cart
      name: selectedVariant ? `${product.name} (${selectedVariant.weight})` : product.name,
    };
    addToCart(finalProduct, qty);
    onClose();
  };

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

      <div className="relative w-full md:max-w-4xl h-full md:h-[85vh] md:max-h-[85vh] bg-background md:rounded-3xl shadow-3d border-t md:border border-border animate-scale-in flex flex-col md:grid md:grid-cols-2">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="fixed md:absolute top-4 right-4 z-[60] w-10 h-10 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center hover:bg-muted transition-colors shadow-soft"
        >
          ✕
        </button>

        {/* Image - Shorter on mobile */}
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-white p-4 md:p-8 shrink-0 flex items-center justify-center md:rounded-l-3xl">
          <img src={product.img} alt={product.name} className="w-full h-full object-contain drop-shadow-elegant" />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-glow">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </div>

        {/* Content Area */}
        <div className="flex flex-col min-h-0 overflow-hidden">
          <div className="p-5 md:p-8 flex-1 overflow-y-auto no-scrollbar min-h-0">
            <span className="text-xs text-primary uppercase tracking-[0.25em] font-semibold">
              {product.category}
            </span>

            <h3 className="mt-3 font-script text-3xl md:text-4xl text-primary leading-tight italic">
              {product.tagline}
            </h3>
            {product.mainCharacter && (
              <p className="mt-2 text-xs text-primary uppercase tracking-[0.25em] font-semibold">
                {product.mainCharacter}
              </p>
            )}
            <h2 className="mt-2 text-2xl md:text-3xl font-display text-foreground leading-tight">
              {product.name}
            </h2>

            {product.variants && (
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-widest text-foreground/70 font-semibold mb-3">
                  Select Size
                </h4>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.weight}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 rounded-xl border-2 transition-all ${
                        selectedVariant?.weight === v.weight
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50 text-muted-foreground"
                      }`}
                    >
                      <div className="text-sm font-bold">{v.weight}</div>
                      <div className="text-[10px]">₹{v.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Special elevated layout for Bundles & Gift Hampers */}
            {(product.category === "Bundles" || product.category === "Gift Hamper") ? (
              <div className="mt-6">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="my-6 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <span className="text-primary text-lg">✦</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>
                <div className="bg-gradient-to-br from-primary/5 via-warm/30 to-primary/5 rounded-2xl p-6 border border-primary/10">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
                    The Experience
                  </h4>
                  <ul className="space-y-3">
                    {product.notes.map((n) => (
                      <li key={n} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                        <span className="text-primary mt-0.5 shrink-0">✦</span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-xs text-center text-primary/50 italic font-medium">
                  Every piece is a chapter in our story — we invite you to begin yours.
                </p>
              </div>
            ) : (
              <>
                <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>

                {product.notes.length > 0 && (
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
                )}
              </>
            )}

            {product.minOrderQuantity && !product.variants && (
              <div className="mt-6 bg-primary/10 border border-primary/20 rounded-xl p-4">
                <p className="text-xs text-primary font-semibold mb-2">
                  ⚠ Minimum Order Quantity (MOQ)
                </p>
                <p className="text-sm text-primary font-bold">
                  {product.minOrderQuantity} pieces × ₹{currentPrice} = ₹{currentPrice * product.minOrderQuantity}
                </p>
              </div>
            )}
            
            {product.minOrderQuantity && product.variants && (
              <div className="mt-6 bg-primary/10 border border-primary/20 rounded-xl p-4">
                <p className="text-xs text-primary font-semibold mb-2">
                  ℹ Minimum Order Quantity
                </p>
                <p className="text-sm text-primary font-bold">
                  MOQ: {selectedVariant?.weight === "2 pieces" ? "2 pieces" : "1 piece"} (₹{currentPrice})
                </p>
              </div>
            )}
          </div>

          {/* Sticky Footer for Action */}
          <div className="p-4 md:p-6 bg-background border-t border-border shrink-0">
            <div className="flex items-center justify-between gap-6">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Total Price</span>
                <span className="text-3xl font-display font-bold text-primary">₹{currentPrice * qty}</span>
              </div>
              <div className="flex items-center bg-background rounded-full p-1 border border-border">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 rounded-full hover:bg-muted transition-colors">-</button>
                <span className="w-8 text-center font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-8 h-8 rounded-full hover:bg-muted transition-colors">+</button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full mt-3 bg-gradient-primary text-primary-foreground py-3 rounded-full font-bold shadow-glow hover:shadow-elegant transition-all active:scale-[0.98]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewDialog;


