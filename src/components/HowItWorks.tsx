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

      {/* Loyalty Card Section */}
      <div className="mt-16 pt-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Earn Rewards</span>
            <h3 className="mt-4 text-3xl md:text-4xl text-foreground">
              Bakelette <em className="font-script text-primary">Loyalty Card</em>
            </h3>
            <p className="mt-4 text-muted-foreground text-base">
              Every order brings you closer to amazing rewards!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Info */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl p-6 border border-primary/10">
                <h4 className="text-lg font-bold text-primary mb-4">How the Loyalty Program Works:</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground"><strong>First order:</strong> Receive a physical loyalty card</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground"><strong>Every order:</strong> Get a stamp on one circle</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground"><strong>Complete 4 stamps:</strong> WhatsApp us the card photo</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground"><strong>5th order:</strong> Unlock a premium surprise bake or exclusive discount</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Highlight */}
            <div className="bg-gradient-to-br from-primary via-primary-glow to-primary/80 rounded-3xl p-8 shadow-glow text-primary-foreground">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-3">Your Rewards</p>
                <h5 className="text-4xl font-bold mb-4">1 Order</h5>
                <p className="text-lg font-semibold mb-6 opacity-95">= 1 Stamp</p>
                <div className="h-px bg-primary-foreground/30 my-6"></div>
                <h5 className="text-3xl font-bold mb-2">4 Stamps</h5>
                <p className="text-lg font-semibold opacity-95">= Premium Reward</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-muted-foreground">
        💡 <strong className="text-foreground">Note:</strong> 25% advance is required to confirm all orders.
      </p>
    </div>
  </section>
);

export default HowItWorks;
