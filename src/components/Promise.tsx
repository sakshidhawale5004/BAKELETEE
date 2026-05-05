const OurPromise = () => (
  <section className="py-16 md:py-20 bg-gradient-warm">
    <div className="container px-4 text-center">
      <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">From the Kitchen</span>
      <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground">
        Ingredients that <em className="font-script text-primary">tell a story</em>
      </h2>
      <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
        Every ingredient we use is chosen with intention — for you, for the planet, for real joy.
      </p>
      <a
        href="/founders-letter"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 font-semibold shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all"
      >
        Read Our Founder's Letter →
      </a>
    </div>
  </section>
);

export default OurPromise;
