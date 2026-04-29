import { useEffect, useState } from "react";
import logo from "@/assets/bakelette-logo.png";
import { waLink, telLink, PHONE_DISPLAY } from "@/lib/contact";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 group shrink-0">
          <img
            src={logo}
            alt="Bakelette artisan bakery logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#products" className="hover:text-primary transition-colors">Bakes</a>
          <a href="#categories" className="hover:text-primary transition-colors">Categories</a>
          <a href="#gifting" className="hover:text-primary transition-colors">Gifting</a>
          <a href="#follow" className="hover:text-primary transition-colors">Follow</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={telLink}
            className="hidden sm:inline text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink("Hi Bakelette! I'd like to order.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
