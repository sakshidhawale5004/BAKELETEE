import { waLink } from "@/lib/contact";

const BundleOffer = () => {
  return (
    <section id="gifting" className="py-24 md:py-32 bg-warm/30 overflow-hidden relative">
      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold">Curated with Love</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display leading-tight">
            <em className="font-script text-primary text-5xl md:text-7xl">Premium</em> Collections
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Our finest bakes, thoughtfully bundled and beautifully wrapped — perfect for gifting or treating yourself.
          </p>
        </div>

        {/* Two cards side by side */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1: Bundle Offer */}
          <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] border border-primary/10 shadow-elegant overflow-hidden flex flex-col">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/bundleimagenew.jpeg"
                  alt="Premium Curations Bundle - Pistachio Lime Loaf, Mumbai Spice Brew Cookie, Blueberry Yogurt Cookie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold">Bundle Offer</span>
              <h3 className="mt-3 text-2xl md:text-3xl font-display leading-tight">
                <em className="font-script text-primary">Premium Curations</em><br />Bundle
              </h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed italic">
                "A curated tasting of our finest bakes."
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 flex-1">
                {[
                  { item: "Pistachio Lime Loaf", qty: "500 gms" },
                  { item: "Mumbai Spice Brew Cookie", qty: "8 Pcs" },
                  { item: "Blueberry Yogurt Cookie", qty: "8 Pcs" },
                ].map(({ item, qty }) => (
                  <div key={item} className="flex items-center justify-between bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] shrink-0">✨</div>
                      <span className="text-sm font-medium text-foreground/80">{item}</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{qty}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-primary/10">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Special Bundle Price</span>
                  <span className="text-3xl font-display font-bold text-primary">₹1,800</span>
                </div>
                <a
                  href={waLink("Hi! I'd like to order the Premium Curations Bundle for ₹1,800.")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center rounded-full bg-gradient-primary text-primary-foreground px-8 py-3 font-bold shadow-glow hover:shadow-3d hover:-translate-y-1 transition-all text-sm"
                >
                  Claim Bundle Offer
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Premium Gifting */}
          <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] border border-primary/10 shadow-elegant overflow-hidden flex flex-col">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-primary rounded-[2rem] opacity-20 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/gift-hamper-branded.png"
                  alt="Bakelette premium gift hamper"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold">Premium Gifting</span>
              <h3 className="mt-3 text-2xl md:text-3xl font-display leading-tight">
                Baked with Love,<br />
                <em className="font-script text-primary">Wrapped with Care</em>
              </h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Our signature gift hampers are perfect for festivals, celebrations, and corporate
                gifting. Each hamper is thoughtfully curated with our bestsellers and seasonal specials,
                packaged in premium eco-friendly boxes with handwritten notes.
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Custom assortment — pick your favourites",
                  "Premium eco-packaging with ribbons",
                  "Personalised handwritten note included",
                  "Corporate bulk orders welcome",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-[10px] shrink-0">✓</span>
                    <span className="text-sm text-foreground">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-primary/10">
                <span className="text-muted-foreground text-sm">Starting at <strong className="text-foreground text-lg">₹999</strong></span>
                <a
                  href={waLink("Hi! I'd like to order a gift hamper")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center rounded-full bg-gradient-primary text-primary-foreground px-8 py-3 font-bold shadow-glow hover:shadow-3d hover:-translate-y-1 transition-all text-sm"
                >
                  Customise Hamper
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BundleOffer;
