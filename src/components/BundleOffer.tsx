import { waLink } from "@/lib/contact";

const BundleOffer = () => {
  return (
    <section id="bundle-offer" className="py-24 md:py-32 bg-warm/30 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant border border-primary/10">
                <img 
                  src="/gift-hamper.png" 
                  alt="Bakelette Premium Bundle Offer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-glow">
                  EXCLUSIVE OFFER
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 text-left">
            <span className="text-primary uppercase tracking-[0.25em] text-xs font-bold">Bundle Offer</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-display leading-tight">
              The <em className="font-script text-primary text-5xl md:text-7xl">Bakelette Bliss</em> Bundle
            </h2>
            
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              Experience the very heart of our kitchen with our signature curation. We've brought together our most-loved bakes into one perfect collection — designed for those who want it all.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "1x Assorted Cookies (Box of 6)",
                "1x Signature Loaf Cake",
                "1x Artisanal Nibbles (200g)",
                "1x Premium Keepsake Box"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-primary/5">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0">✨</div>
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-primary/10">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-muted-foreground line-through text-sm">Value ₹1,250+</span>
                <span className="text-4xl font-display font-bold text-primary">₹1,000</span>
              </div>
              
              <a
                href={waLink("Hi! I'd like to order the Premium Curations Bundle Offer for ₹1000.")}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center rounded-full bg-gradient-primary text-primary-foreground px-10 py-4 font-bold shadow-glow hover:shadow-3d hover:-translate-y-1 transition-all"
              >
                Claim Bundle Offer
              </a>
            </div>
            
            <p className="mt-6 text-xs text-muted-foreground italic">
              *Only one exclusive bundle offer available per order. Limited weekly bakes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleOffer;
