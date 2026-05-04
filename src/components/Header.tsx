import { useEffect, useState } from "react";
import logo from "@/assets/bakelette-logo.png";
import { waLink, telLink, PHONE_DISPLAY } from "@/lib/contact";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { totalItems, setIsOpen: setOpenCart } = useCart();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? "bg-background/95 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="bg-primary text-primary-foreground py-2 px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-inner">
        <span>✨ Free delivery on all orders above ₹1000 ✨</span>
        <span className="hidden md:inline">|</span>
        <span>FOR CORPORATE GIFTING AND BULK ORDERS, KINDLY CONNECT ON +91 83694 24099.</span>
      </div>
      <div className={`container flex items-center justify-between gap-4 transition-all duration-500 ${scrolled || isOpen ? "py-2" : "py-4"}`}>
        <a href="#top" className="flex flex-col items-center gap-0 group shrink-0">
          <div className="flex items-center justify-center gap-3">
            <img
              src={logo}
              alt="Bakelette artisan bakery logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="text-[10px] md:text-[11px] font-medium text-primary mt-1 tracking-widest leading-none text-center">
            Joy Alchemy in every bite.
          </p>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#products" className="text-primary hover:text-primary-glow transition-colors">Bakes</a>
          <a href="#categories" className="text-primary hover:text-primary-glow transition-colors">Categories</a>
          <a href="#gifting" className="text-primary hover:text-primary-glow transition-colors">Gifting</a>
          <a href="#follow" className="text-primary hover:text-primary-glow transition-colors">Follow</a>
          <button 
            onClick={() => setOpenCart(true)}
            className="text-primary hover:text-primary-glow transition-colors relative"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

        </nav>

        <div className="flex items-center gap-3">
          <a
            href={telLink}
            className="hidden sm:inline text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
          >
            {PHONE_DISPLAY}
          </a>

          <a
            href={waLink("Hi Bakelette! I'd like to order.")}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Order Now
          </a>
          
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center relative">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-y-auto no-scrollbar ${isOpen ? "max-h-[80vh] py-6 shadow-elegant" : "max-h-0 py-0"}`}>

        <nav className="container flex flex-col gap-6 text-lg font-semibold text-primary">
          <div className="flex flex-col gap-4 border-b border-border pb-6 pt-2">
            <a href="#products" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Bakes</a>
            <a href="#categories" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Categories</a>
            <a href="#gifting" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Gifting</a>
            <a href="#follow" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Follow</a>
          </div>

          <button onClick={() => { setIsOpen(false); setOpenCart(true); }} className="flex items-center justify-between bg-primary/5 p-4 rounded-2xl w-full text-left">
            <span className="font-bold text-primary">Cart</span>
            <div className="flex items-center gap-2">
              {totalItems > 0 && (
                <span className="bg-primary text-primary-foreground text-xs w-6 h-6 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="text-primary">→</span>
            </div>
          </button>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={waLink("Hi Bakelette! I'd like to order.")}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground py-4 font-bold shadow-glow"
            >
              Order Now
            </a>
            <a
              href={telLink}
              className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-medium py-2"
            >
              Call us: {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};


export default Header;
