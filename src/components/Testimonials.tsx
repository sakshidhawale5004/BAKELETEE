const items = [
  { q: "The Nutella cookies are absolutely divine! My kids can't get enough. Love that it's made with jaggery — guilt-free indulgence!", who: "Priya M.", item: "Nutella Stuffed Chocochip" },
  { q: "Ordered the gift hamper for Diwali. The packaging was gorgeous and every item tasted homemade in the best way. Will order again!", who: "Arjun S.", item: "Gift Hamper" },
  { q: "The Pistachio Lime Loaf is unlike anything I've tasted. So fresh, so flavourful. Bakelette has set a new standard for me.", who: "Meera K.", item: "Pistachio Lime Loaf" },
  { q: "Finally a bakery that uses real ingredients. The banana walnut loaf had actual walnuts! Refreshingly honest baking.", who: "Rohit D.", item: "Banana Walnut Loaf" },
];

const Testimonials = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Love Letters</span>
        <h2 className="mt-4 text-4xl md:text-6xl">
          What Our <em className="font-script text-primary">Bake-Lovers</em> Say
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((t, i) => (
          <blockquote
            key={t.who}
            className="card-3d bg-gradient-card rounded-3xl p-8 shadow-soft border border-border/60 fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="text-5xl font-display text-primary leading-none">"</div>
            <p className="mt-2 text-lg text-foreground leading-relaxed">{t.q}</p>
            <footer className="mt-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-display font-bold">
                {t.who[0]}
              </div>
              <div>
                <div className="font-semibold text-foreground">{t.who}</div>
                <div className="text-sm text-muted-foreground">{t.item}</div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
