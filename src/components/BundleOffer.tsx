import { waLink } from "@/lib/contact";

const BundleOffer = () => {
  return (
    <section id="bundles" className="py-24 md:py-32 bg-warm/30 overflow-hidden relative scroll-mt-24">
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

        {/* Single Bundle Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] border border-primary/10 shadow-elegant overflow-hidden flex flex-col">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="/bundlefinalimage.png"
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

              <div className="mt-6 flex-1">
                <div className="flex items-center justify-between bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0">✨</div>
                    <span className="text-base font-medium text-foreground/80">3 Signature Bakes</span>
                  </div>
                  <span className="text-sm font-bold text-primary">Full Set</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 pt-8 border-t border-primary/10 text-center">
                <p className="text-sm font-medium text-ink/80">
                  Includes: Pistachio Lime Loaf, Mumbai Spice Brew Cookie & Blueberry Yogurt Cookie
                </p>
                <a
                  href={waLink("Hi! I'd like to order the Premium Curations Bundle.")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center rounded-full bg-gradient-primary text-primary-foreground px-8 py-3 font-bold shadow-glow hover:shadow-3d hover:-translate-y-1 transition-all text-sm mt-2"
                >
                  Order Bundle
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
