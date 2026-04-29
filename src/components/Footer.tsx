import logo from "@/assets/bakelette-logo.png";
import { PHONE_DISPLAY, telLink, waLink, INSTAGRAM_URL } from "@/lib/contact";

const Footer = () => (
  <footer className="bg-ink text-primary-foreground py-16">
    <div className="container grid md:grid-cols-3 gap-10">
      <div>
        <img src={logo} alt="Bakelette" className="h-12 w-auto mb-4 brightness-0 invert opacity-90" />
        <p className="text-primary-foreground/70 max-w-sm">
          Wholesome, handcrafted bakes made with whole wheat, jaggery and wood-pressed oil. Baked fresh, with love.
        </p>
      </div>
      <div>
        <h4 className="text-primary-glow font-display text-xl mb-4">Explore</h4>
        <ul className="space-y-2 text-primary-foreground/80">
          <li><a href="#products" className="hover:text-primary-glow">Bakes</a></li>
          <li><a href="#categories" className="hover:text-primary-glow">Categories</a></li>
          <li><a href="#gifting" className="hover:text-primary-glow">Gifting</a></li>
          <li><a href="#follow" className="hover:text-primary-glow">Follow the Crumbs</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-primary-glow font-display text-xl mb-4">Get in touch</h4>
        <ul className="space-y-2 text-primary-foreground/80">
          <li>
            <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-primary-glow">
              WhatsApp · {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <a href={telLink} className="hover:text-primary-glow">Call · {PHONE_DISPLAY}</a>
          </li>
          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary-glow">
              Instagram · @bakelette.official
            </a>
          </li>
          <li>Same-city delivery · 24–48 hrs</li>
        </ul>
      </div>
    </div>
    <div className="container mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-sm">
      © {new Date().getFullYear()} Bakelette · Crafted with love
    </div>
  </footer>
);

export default Footer;
