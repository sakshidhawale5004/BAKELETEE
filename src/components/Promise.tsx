const OurPromise = () => (
  <section className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
    <div className="container relative">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto fade-up">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold mb-4">From the Kitchen</span>
        <h2 className="text-4xl md:text-6xl text-foreground font-serif mb-12">
          Ingredients that <em className="font-script text-primary">tell a story</em>
        </h2>

        <a
          href="/founders-letter"
          className="mb-16 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 font-semibold shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all"
        >
          Read Our Founder's Letter →
        </a>

        <div className="relative fade-up w-full" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40 bg-white/80 backdrop-blur-md p-4 md:p-12 hover:scale-[1.01] transition-transform duration-500">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
              
              {/* Wholesome Side */}
              <div className="order-2 md:order-1 flex flex-col gap-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">The Bakelette Way</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { label: "Slow Release of Energy", icon: "📈" },
                    { label: "Better Digestion", icon: "🌿" },
                    { label: "Natural Sweetness, Lower Glycemic", icon: "🍯" },
                    { label: "Heart-Friendly Fats", icon: "❤️" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group/item">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm md:text-base font-medium text-foreground/80 group-hover/item:text-primary transition-colors">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-6 border-t border-primary/10">
                  <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-primary/60 mb-3">Key Ingredients</p>
                  <div className="flex flex-wrap gap-2">
                    {["Whole Wheat", "Almonds, Pistachios & Walnuts", "Wood-pressed Oil", "Artisanal Jaggery"].map(i => (
                      <span key={i} className="px-3 py-1 bg-primary/5 rounded-full text-xs font-semibold text-primary">{i}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Central Image (Hidden on mobile grid, shown separately or as part of a layout) */}
              <div className="order-1 md:order-none md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-[300px] md:max-w-[450px] mx-auto z-10 pointer-events-none">
                <img 
                  src="/split-cookie-new.png" 
                  alt="Wholesome vs Refined" 
                  className="w-full h-auto drop-shadow-2xl scale-110"
                />
              </div>

              {/* Refined Side */}
              <div className="order-3 md:order-2 flex flex-col gap-6 text-right items-end md:pl-32">
                <div className="flex items-center gap-3 justify-end">
                  <h3 className="text-xl md:text-2xl font-bold text-muted-foreground/60">The Regular Way</h3>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">✕</div>
                </div>
                <ul className="space-y-4">
                  {[
                    { label: "Unstable Energy", icon: "📉" },
                    { label: "Heavy on the Gut", icon: "☁️" },
                    { label: "Causes Fast Sugar Spikes", icon: "⚡" },
                    { label: "Poor Nutrition", icon: "⚠️" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex flex-row-reverse items-center gap-4 group/item">
                      <span className="text-xl opacity-50">{item.icon}</span>
                      <span className="text-sm md:text-base font-medium text-muted-foreground group-hover/item:text-foreground transition-colors">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-6 border-t border-border w-full">
                  <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-muted-foreground/60 mb-3">Common Ingredients</p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {["Refined Sugars", "Refined Wheat Flour", "Processed Fats"].map(i => (
                      <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground">{i}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurPromise;
