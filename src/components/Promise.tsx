const OurPromise = () => (
  <section id="promise" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
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
          <img 
            src="/splitbiscuit.png" 
            alt="The Bakelette Way vs Regular Way: Ingredients comparison" 
            className="w-full h-auto rounded-[2rem] shadow-elegant mx-auto block"
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurPromise;
