const OurPromise = () => (
  <section className="py-24 md:py-32 bg-gradient-warm">
    <div className="container px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Ingredients</span>
        <h2 className="mt-4 text-4xl md:text-6xl text-foreground text-balance font-serif">
          Ingredients that <em className="font-script text-primary">tell a story</em>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          Wholesome ingredients on the left, refined on the right. See why our bakes are better for you.
        </p>
      </div>


      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40 fade-up bg-white/50 backdrop-blur-sm p-3 md:p-8 hover:scale-[1.01] transition-transform duration-500">

          <img 
            src="/split-cookie.png" 
            alt="Wholesome vs Refined: Ingredients that tell a story" 
            className="w-full h-auto rounded-3xl shadow-soft mx-auto block"
          />

        </div>
        <p className="mt-8 text-center text-muted-foreground text-sm uppercase tracking-widest">
          The 50:50 Concept: Real Food vs Refined Fillers
        </p>
      </div>

    </div>
  </section>
);

export default OurPromise;

