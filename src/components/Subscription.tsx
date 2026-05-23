import { waLink } from "@/lib/contact";
import { Check, Star, Zap, Coffee, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "The Weekly Ritual",
    price: 2499,
    period: "month",
    tagline: "Your weekly sanctuary of flavor.",
    description: "Perfect for families who love fresh bakes. Get a signature loaf and a box of cookies delivered to your doorstep every week.",
    items: "4 Deliveries per month",
    perks: ["1 Signature Loaf weekly", "1 Box of Cookies weekly", "Free Delivery", "Early access to new bakes"],
    icon: <Zap className="w-6 h-6" />,
    popular: true,
  },
  {
    name: "The Monthly Surprise",
    price: 1299,
    period: "month",
    tagline: "A curated discovery of bliss.",
    description: "A surprise selection of our newest creations and seasonal favorites, delivered once a month to keep your soul uplifted.",
    items: "1 Curated Box per month",
    perks: ["Baker's Choice selection", "1 New seasonal product", "Member-only discounts", "Beautiful gift packaging"],
    icon: <Star className="w-6 h-6" />,
  },
  {
    name: "The Office Fuel",
    price: 4999,
    period: "month",
    tagline: "Elevate your team's break time.",
    description: "Keep the energy high with a weekly supply of our signature Ragi, Almond, and Pistachio sticks. The ultimate corporate perk.",
    items: "4 Large Boxes per month",
    perks: ["Assorted Sticks & Nibbles", "Bulk quantities", "Priority Monday delivery", "Customized assortment"],
    icon: <Coffee className="w-6 h-6" />,
  },
];

const Subscription = () => {
  return (
    <section id="society" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">The Bakelette Society</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-balance">
            Your Daily Dose of <em className="font-script text-primary">Bliss</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Join an exclusive community of artisanal lovers. Freshness, early access, and pure joy — delivered on your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {plans.map((plan, i) => (
            <div 
              key={plan.name} 
              className={`relative group flex flex-col rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 card-3d fade-up ${
                plan.popular 
                  ? "bg-white border-2 border-primary/30 shadow-glow ring-1 ring-primary/10" 
                  : "bg-gradient-card border border-border/60 shadow-soft hover:shadow-elegant"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-glow">
                  Most Loved
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <div className={`p-3 rounded-2xl ${plan.popular ? "bg-gradient-primary" : "bg-primary/10"}`}>
                  <span className={plan.popular ? "text-primary-foreground" : "text-primary"}>
                    {plan.icon}
                  </span>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-3xl font-display font-bold text-primary-deep">₹{plan.price}</span>
                    <span className="text-xs text-muted-foreground">/{plan.period}</span>
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${plan.popular ? "text-primary" : "text-primary"}`}>
                    {plan.items}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-display leading-tight text-foreground">
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm italic font-script ${plan.popular ? "text-primary" : "text-primary"}`}>
                {plan.tagline}
              </p>
              
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4 flex-1">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <div className={`mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-gradient-primary text-primary-foreground" : "bg-primary/15 text-primary"}`}>
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-sm text-foreground/80">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`Hi Bakelette! I'd like to join the Society with the ${plan.name} plan.`)}
                target="_blank"
                rel="noreferrer"
                className={`mt-10 w-full py-4 rounded-full font-bold text-sm text-center transition-all block ${
                  plan.popular 
                    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-elegant hover:scale-[1.02]" 
                    : "bg-primary-deep text-primary-foreground hover:bg-primary transition-colors"
                }`}
              >
                Join the Society
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/subscribe"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-base shadow-glow hover:shadow-elegant hover:scale-[1.02] transition-all group"
          >
            Explore All Plans
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm italic">
            * Subscription plans are flexible. Pause or cancel anytime via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
