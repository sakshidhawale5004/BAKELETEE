const OurPromise = () => (
  <section className="py-24 md:py-32 bg-gradient-warm">
    <div className="container px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Our Philosophy</span>
        <h2 className="mt-4 text-4xl md:text-6xl text-foreground text-balance font-serif">
          The <em className="font-script text-primary">Systematic Indulgence Plan</em>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          Bakelette fits every moment — without slowing you down. Experience the joy of indulgence with our thoughtfully crafted bakes that prioritize your well-being.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40 fade-up bg-white/50 backdrop-blur-sm p-4 hover:scale-[1.02] transition-transform duration-500">
          <img 
            src="/sip-comparison.png" 
            alt="Systematic Indulgence Plan vs Regular Cookie" 
            className="w-full h-auto rounded-3xl"
          />
        </div>
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40 fade-up bg-white/50 backdrop-blur-sm p-4 hover:scale-[1.02] transition-transform duration-500" style={{ animationDelay: "0.2s" }}>
          <img 
            src="/sip-plan.png" 
            alt="Start your SIP today" 
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurPromise;

