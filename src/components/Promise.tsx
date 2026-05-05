const OurPromise = () => (
  <section className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
    <div className="container relative">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto fade-up">
        <a
          href="/founders-letter"
          className="mb-12 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 font-semibold shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all"
        >
          Read Our Founder's Letter →
        </a>

        <div className="relative fade-up w-full" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/40 fade-up bg-white/50 backdrop-blur-sm p-3 md:p-8 hover:scale-[1.01] transition-transform duration-500">
            <img 
              src="/split-cookie.png" 
              alt="Wholesome vs Refined: Ingredients that tell a story" 
              className="w-full h-auto rounded-3xl shadow-soft mx-auto block"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurPromise;
