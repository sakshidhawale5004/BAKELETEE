const steps = [
  { n: "1", title: "Message Us", body: "Drop a WhatsApp message with your order" },
  { n: "2", title: "25% Advance", body: "Confirm with a small advance payment" },
  { n: "3", title: "We Bake Fresh", body: "Your order is baked to order, never stale" },
  { n: "4", title: "Delivered to You", body: "Same-city delivery within 24-48 hours" },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 md:py-32 bg-primary/5">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">How It Works</span>
        <h2 className="mt-4 text-4xl md:text-6xl text-balance">
          Order in <em className="font-script text-primary">4 Simple Steps</em>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          We bake everything fresh to order. A 25% advance confirms your slot — the rest on delivery.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="card-3d bg-gradient-card rounded-3xl p-8 shadow-soft border border-border/60 text-center fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary text-primary-foreground text-2xl font-display font-bold flex items-center justify-center shadow-glow">
              {s.n}
            </div>
            <h3 className="mt-5 text-xl text-foreground">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-muted-foreground">
        💡 <strong className="text-foreground">Note:</strong> 25% advance is required to confirm all orders.
      </p>
    </div>
  </section>
);

export default HowItWorks;
