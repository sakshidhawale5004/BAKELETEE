const items = [
  {
    title: "Whole Wheat Flour",
    body: "Stone-ground atta from heritage grains, never refined — for bakes that are as nourishing as they are delicious.",
    icon: "🌾",
  },
  {
    title: "Wood-Pressed Oil",
    body: "Cold-pressed from traditional wooden ghani, retaining natural flavour and nutrients — no refined oils, ever.",
    icon: "🫒",
  },
  {
    title: "Organic Jaggery",
    body: "Unprocessed cane jaggery from small-batch farms replaces white sugar, bringing caramel depth to every bite.",
    icon: "🍯",
  },
];

const OurPromise = () => (
  <section className="py-24 md:py-32 bg-gradient-warm">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Our Promise</span>
        <h2 className="mt-4 text-4xl md:text-6xl text-foreground text-balance">
          Ingredients That <em className="font-script text-primary">Tell a Story</em>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          We believe great baking starts with honest ingredients. Every Bakelette product is made
          with carefully sourced, wholesome components — no shortcuts, no compromises.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="card-3d bg-gradient-card rounded-3xl p-8 shadow-soft border border-border/60 fade-up"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary text-3xl flex items-center justify-center shadow-glow mb-6">
              {it.icon}
            </div>
            <h3 className="text-2xl text-foreground mb-3">{it.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurPromise;
