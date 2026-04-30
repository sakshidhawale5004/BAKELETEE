import logo from "@/assets/bakelette-logo.png";
import { PHONE_DISPLAY, telLink, waLink, INSTAGRAM_URL } from "@/lib/contact";

const Footer = () => (
  <footer className="bg-ink text-primary-foreground py-16">
    <div className="container grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Bakelette" className="h-14 w-auto brightness-0 invert opacity-95" />
          <div>
            <div className="text-2xl font-display font-bold text-primary-foreground tracking-wide">Bakelette</div>
            <div className="text-xs text-primary uppercase tracking-[0.2em] font-semibold">Joy Alchemy in every bite.</div>
          </div>
        </div>
        <p className="text-primary-foreground/70 max-w-sm text-sm leading-relaxed">
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
        <h4 className="text-primary-glow font-display text-xl mb-4">Get in Touch</h4>
        <ul className="space-y-3 text-primary-foreground/80 text-sm">
          <li>
            <a href="mailto:contact@bakelette.in" className="hover:text-primary-glow">
              ✉️ contact@bakelette.in
            </a>
          </li>
          <li>
            <a href="tel:+918369424099" className="hover:text-primary-glow">📞 +91 8369424099</a>
          </li>
          <li>
            <a href="tel:+919920144632" className="hover:text-primary-glow">📞 +91 9920144632</a>
          </li>
          <li className="leading-relaxed">
            📍 Building No. 2/212, Seva Samiti CHS Ltd.,<br />
            Near Shanmukhananda Hall,<br />
            Gandhi Market, Mumbai – 400037
          </li>
          <li>
            <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-primary-glow">
              💬 WhatsApp · {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary-glow">
              Instagram · @bakelette.official
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-sm">
      © {new Date().getFullYear()} Bakelette · Crafted with love
    </div>
  </footer>
);

export default Footer;
