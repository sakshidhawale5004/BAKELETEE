import { useEffect, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/bakelette-logo.png";
import { waLink, telLink, PHONE_DISPLAY } from "@/lib/contact";
import { useCart } from "@/contexts/CartContext";
import { Search, X, ShoppingBag, Menu } from "lucide-react";
import { searchAll, type SearchResult } from "@/lib/searchIndex";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

const Header = ({ searchQuery = "", onSearchChange }: HeaderProps) => {
  const { totalItems, setIsOpen: setOpenCart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const location = useLocation();
  const isSubscriberPage = location.pathname === "/the-daily-regular";

  const [isOpen, setIsOpen] = useState(false);

  // Global search results
  const searchResults = useMemo(() => searchAll(searchQuery), [searchQuery]);

  // Group results by section
  const grouped = useMemo(() => {
    const map: Record<string, SearchResult[]> = {};
    searchResults.forEach((r) => {
      if (!map[r.section]) map[r.section] = [];
      map[r.section].push(r);
    });
    return map;
  }, [searchResults]);

  const hasResults = searchResults.length > 0;

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        if (!searchQuery) setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [searchQuery]);

  const handleResultClick = (result: SearchResult) => {
    onSearchChange?.("");
    setIsSearchOpen(false);
    setIsOpen(false);

    if (result.action.type === "navigate") {
      navigate(result.action.url);
    } else {
      // Scroll to section
      const el = document.getElementById(result.action.target);
      if (el) {
        const headerOffset = 140;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
      }
    }
  };

  const sectionIcons: Record<string, string> = {
    "Signature Bakes": "🍪",
    "Gift Hampers": "🎁",
    "Blog": "📖",
    "Pages": "📄",
  };

  const renderDropdown = (isMobile = false) => {
    if (!searchQuery) return null;

    return (
      <div className={`${isMobile ? "mt-2" : "absolute top-full left-0 right-0 mt-2"} bg-white rounded-2xl shadow-elegant border border-border/60 overflow-hidden z-[80] max-h-[60vh] overflow-y-auto no-scrollbar`}>
        {!hasResults ? (
          <div className="p-6 text-center">
            <p className="text-muted-foreground text-sm font-medium">No results found for "{searchQuery}"</p>
            <p className="text-xs text-muted-foreground/60 mt-1">Try searching for cookies, loaves, hampers, blog…</p>
          </div>
        ) : (
          Object.entries(grouped).map(([section, items]) => (
            <div key={section}>
              <div className="px-4 py-2.5 bg-muted/40 border-b border-border/30 flex items-center gap-2">
                <span className="text-sm">{sectionIcons[section] || "✦"}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">{section}</span>
                <span className="text-[10px] text-muted-foreground ml-auto">{items.length} {items.length === 1 ? "result" : "results"}</span>
              </div>
              {items.map((item) => (
                <button
                  key={item.title + item.section}
                  onClick={() => handleResultClick(item)}
                  className="w-full text-left px-4 py-3 hover:bg-primary/5 transition-colors flex items-start gap-3 border-b border-border/20 last:border-b-0 group cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.subtitle}</p>
                  </div>
                  <span className="text-primary/40 group-hover:text-primary text-xs mt-1 shrink-0 transition-colors">→</span>
                </button>
              ))}
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? "bg-background/95 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      {!isSubscriberPage && (
        <div className="bg-primary text-primary-foreground overflow-hidden shadow-inner border-b border-primary-deep/20">
          {/* Mobile view - single line scrolling */}
          <div className="md:hidden py-2 overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="inline-block text-[8px] font-bold uppercase tracking-wider flex-shrink-0 whitespace-nowrap">
                  🎉 Artisanal bakes on subscription 🎉&nbsp;&nbsp;|&nbsp;&nbsp;🎉 Free delivery above ₹1000 🎉&nbsp;&nbsp;|&nbsp;&nbsp;🎉 750+ Happy Customers 🎉&nbsp;&nbsp;|&nbsp;&nbsp;🎉 Corporate gifting and bulk orders +91 83694 24099 🎉&nbsp;&nbsp;|
                </span>
              ))}
            </div>
          </div>
          
          {/* Desktop view - full messages */}
          <div className="hidden md:block py-3 overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...Array(15)].map((_, i) => (
                <span key={i} className="inline-block text-xs font-bold uppercase tracking-wider flex-shrink-0 whitespace-nowrap">
                  🎉 Artisanal bakes on subscription 🎉&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;🎉 Free delivery above ₹1000 🎉&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;🎉 750+ Happy Customers 🎉&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;🎉 Corporate gifting and bulk orders +91 83694 24099 🎉&nbsp;&nbsp;&nbsp;|
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={`container flex items-center justify-between gap-4 transition-all duration-500 ${scrolled || isOpen ? "py-4" : "py-6"}`}>
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

        <nav className={`hidden md:flex items-center transition-all duration-500 text-sm font-semibold whitespace-nowrap ${isSearchOpen ? "gap-3 lg:gap-6" : "gap-6"}`}>
          <a href="/#promise" className="text-primary hover:text-primary-glow transition-colors">Founder's Letter</a>
          <a href="/#products" className="text-primary hover:text-primary-glow transition-colors">Signature Bakes</a>
          <a href="/#society" className="text-primary hover:text-primary-glow transition-colors">Subscriptions</a>
          <a href="/#categories" className="text-primary hover:text-primary-glow transition-colors">Categories</a>
          <a href="/#blog" className="text-primary hover:text-primary-glow transition-colors">Blog</a>
          <a href="/#follow" className="text-primary hover:text-primary-glow transition-colors">Follow</a>
          
          <div className="relative flex items-center group" ref={searchRef}>
            <div 
              className={`flex items-center transition-all duration-500 ease-out overflow-hidden ${
                isSearchOpen 
                  ? "w-48 md:w-72 bg-white/95 backdrop-blur-md border border-primary/10 px-4 py-2.5 rounded-full shadow-elegant ring-1 ring-primary/5" 
                  : "w-10 h-10 justify-center rounded-full hover:bg-primary/5 cursor-pointer"
              }`}
              onClick={() => !isSearchOpen && setIsSearchOpen(true)}
            >
              <Search 
                className={`w-4.5 h-4.5 text-primary shrink-0 transition-transform duration-300 ${isSearchOpen ? "mr-3 scale-90" : "group-hover:scale-110"}`} 
              />
              {isSearchOpen && (
                <input 
                  autoFocus
                  type="text"
                  placeholder="Search everything..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  className="bg-transparent border-none focus:border-none focus:ring-0 focus:outline-none text-[13px] w-full text-ink font-semibold placeholder:text-muted-foreground/60 p-0 appearance-none shadow-none"
                />
              )}
              {isSearchOpen && searchQuery && (
                <button 
                  onClick={(e) => { e.stopPropagation(); onSearchChange?.(""); }} 
                  className="ml-2 text-primary/40 hover:text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {isSearchOpen && renderDropdown()}
          </div>

          <button 
            onClick={() => setOpenCart(true)}
            className="group flex items-center gap-2 text-primary hover:text-primary-glow transition-all relative px-3 py-2 rounded-full hover:bg-primary/5"
          >
            <ShoppingBag className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            <span className={`hidden ${isSearchOpen ? "xl:inline" : "lg:inline"}`}>Cart</span>
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
            className="hidden sm:inline text-sm font-semibold text-primary hover:text-primary-glow transition-colors whitespace-nowrap"
          >
            {PHONE_DISPLAY}
          </a>

          <a
            href={waLink("Hi Bakelette! I'd like to order.")}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all whitespace-nowrap"
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
            <div className="relative mb-2" ref={mobileSearchRef}>
              <input 
                type="text"
                placeholder="Search everything..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="w-full bg-white/80 border border-primary/20 rounded-2xl px-12 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-background transition-all outline-none text-ink font-semibold placeholder:text-muted-foreground/60 shadow-soft"
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
              {renderDropdown(true)}
            </div>
            <a href="/#promise" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Founder's Letter</a>
            <a href="/#products" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform">Signature Bakes</a>
            <a href="/#society" onClick={() => setIsOpen(false)} className="hover:translate-x-2 transition-transform text-primary font-bold">Subscriptions ✨</a>
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
