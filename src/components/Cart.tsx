import { useCart } from "@/contexts/CartContext";
import { waLink } from "@/lib/contact";

const Cart = () => {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    const itemsList = cart
      .map((item) => `- ${item.name} x ${item.quantity} (₹${item.price * item.quantity})`)
      .join("\n");
    const message = `Hi Bakelette! I'd like to order the following:\n\n${itemsList}\n\nTotal: ₹${totalPrice}\n\nThank you!`;
    window.open(waLink(message), "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      />
      
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-background shadow-3d flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-serif">Your Cart</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-3xl">🛒</div>
              <p className="text-muted-foreground">Your cart is empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-primary font-bold hover:underline"
              >
                Go shopping →
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.name} className="flex gap-4 group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-border">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-foreground leading-tight">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.name)}
                      className="text-muted-foreground hover:text-destructive transition-colors text-xs"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-sm text-primary font-bold mt-1">₹{item.price}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center bg-muted rounded-full p-1 border border-border/50">
                      <button 
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-background transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-background transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-semibold">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-muted/30 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total Amount</span>
              <span className="text-primary">₹{totalPrice}</span>
            </div>
            <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest">
              Free delivery on orders above ₹1000
            </p>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-primary text-primary-foreground py-4 rounded-full font-bold shadow-glow hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              Checkout on WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
