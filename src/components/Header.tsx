import { useEffect, useState } from "react";
import logo from "@/assets/bakelette-logo.png";
import { waLink, telLink, PHONE_DISPLAY } from "@/lib/contact";
import { useCart } from "@/contexts/CartContext";
import { Search, X, ShoppingBag, Menu } from "lucide-react";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

const Header = ({ searchQuery = "", onSearchChange }: HeaderProps) => {
  const { totalItems, setIsOpen: setOpenCart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden whitespace-nowrap shadow-inner border-b border-primary-deep/20">
        <div className="flex animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-[0.2em]">
              <span>✨ Free delivery on all orders above ₹1000 ✨</span>
              <span className="opacity-50">|</span>
              <span>FOR CORPORATE GIFTING & BULK ORDERS, KINDLY CONNECT ON +91 83694 24099.</span>
              <span className="opacity-50">|</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`container flex items-center justify-between gap-4 transition-all duration-500 ${scrolled || isOpen ? "py-2" : "py-4"}`}>
        <a href="/" className="flex flex-col items-start gap-0 group shrink-0">
          <div className="flex items-center justify-center gap-3">
            <img
              src={logo}
              alt="Bakelette artisan bakery logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="text-[10px] md:text-[11px] font-medium text-primary mt-1 tracking-widest leading-none ml-10 md:ml-12 text-left">
            Joy Alchemy in every bite.
          </p>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="/#promise" className="text-primary hover:text-primary-glow transition-colors">Founder's Letter</a>
          <a href="/#products" className="text-primary hover:text-primary-glow transition-colors">Signature Bakes</a>
          <a href="/#categories" className="text-primary hover:text-primary-glow transition-colors">Categories</a>
          <a href="/#blog" className="text-primary hover:text-primary-glow transition-colors">Blog</a>
          <a href="/#follow" className="text-primary hover:text-primary-glow transition-colors">Follow</a>
          
          <div className="relative flex items-center group">
            <div 
              className={`flex items-center transition-all duration-500 ease-out overflow-hidden ${
                isSearchOpen 
                  ? "w-48 md:w-64 bg-background/40 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-full shadow-elegant" 
                  : "w-10 h-10 justify-center rounded-full hover:bg-primary/5 cursor-pointer"
              }`}
              onClick={() => !isSearchOpen && setIsSearchOpen(true)}
            >
              <Search 
                className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${isSearchOpen ? "mr-2 scale-90" : "group-hover:scale-110"}`} 
              />
              {isSearchOpen && (
                <input 
                  autoFocus
                  type="text"
                  placeholder="Search our bakes..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  onBlur={() => !searchQuery && setIsSearchOpen(false)}
                  className="bg-transparent border-none focus:ring-0 text-xs w-full text-primary placeholder:text-primary/40 p-0"
                />
              )}
              {isSearchOpen && searchQuery && (
                <button 
                  onClick={(e) => { e.stopPropagation(); onSearchChange?.(""); }} 
                  className="ml-2 text-primary/50 hover:text-primary transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          <button 
            onClick={() => setOpenCart(true)}
            className="group flex items-center gap-2 text-primary hover:text-primary-glow transition-all relative px-3 py-2 rounded-full hover:bg-primary/5"
          >
            <ShoppingBag className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            <span className="hidden lg:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-glow animate-in zoom-in">
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
            className="md:hidden p-2 text-primary bg-primary/5 rounded-full hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-y-auto no-scrollbar ${isOpen ? "max-h-[80vh] py-6 shadow-elegant" : "max-h-0 py-0"}`}>

        <nav className="container flex flex-col gap-6 text-lg font-semibold text-primary">
          <div className="flex flex-col gap-4 border-b border-border pb-6 pt-2">
            <div className="relative mb-2">
              <input 
                type="text"
                placeholder="Search bakes..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-12 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-background transition-all outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-50" />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange?.("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1"
                >
                  <X className="w-4 h-4 text-primary opacity-50" />
                </button>
              )}
            </div>
            <a href="/#promise" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Founder's Letter</a>
            <a href="/#products" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Signature Bakes</a>
            <a href="/#categories" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Categories</a>
            <a href="/#blog" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Blog</a>
            <a href="/#follow" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Follow</a>
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
