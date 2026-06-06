import { useState } from "react";
import { waLink } from "@/lib/contact";
import { Check, Star, Zap, Coffee, ArrowRight, ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SubscriptionForm } from "./SubscriptionForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const plans = [
  {
    name: "Inside The Daily Ritual",
    price: 999,
    period: "180 days",
    tagline: "Your everyday indulgence, simplified.",
    description: "Once subscribed a new link will be shared where you can see the discounted prices and enjoy seamless daily indulgence.",
    items: "Regular Tribe",
    perks: [
      "Direct website ordering",
      "Independent profile & number storage",
      "Priority support",
      "10% off on the products",
    ],
    icon: <Zap className="w-6 h-6" />,
    popular: true,
  },
  {
    name: "Inside The Weekend Sanctuary",
    price: 1299,
    period: "30 days",
    tagline: "Exclusive weekend treats, just for you.",
    description: "Join our exclusive WhatsApp community for exclusive weekend-specific bakes, special riddles, and surprises.",
    items: "Exclusive Weekend Fam",
    perks: [
      "Exclusive WhatsApp community access",
      "Order window: Fri 9 AM - Sat 6 PM",
      "Wednesday Riddles for upcoming bakes",
      "Complimentary monthly item",
      "Limited edition weekend-only bakes",
      "VIP priority delivery",
      "Members-only recipe sharing sessions once a month",
      "Flexible pause feature (up to 15 days)",
    ],
    icon: <Star className="w-6 h-6" />,
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
            Your Dose of <em className="font-script text-primary">Bliss</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Join an exclusive community of artisanal lovers. Freshness, early access, and pure joy — delivered on your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
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
                {plan.name.replace("Inside ", "")}
              </h3>
              <p className={`mt-2 text-sm italic font-script ${plan.popular ? "text-primary" : "text-primary"}`}>
                {plan.tagline}
              </p>
              
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground flex-grow">
                {plan.description}
              </p>

              <div className="mt-8 w-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full border-2 border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-glow group">
                      <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Quick View
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-[2rem] p-6 md:p-8 bg-white/95 backdrop-blur-md border-primary/20">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-display text-primary-deep">Inside {plan.name.replace("Inside ", "")}</DialogTitle>
                    </DialogHeader>
                    <ul className="mt-4 space-y-4">
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
                  </DialogContent>
                </Dialog>
              </div>

              <div className="mt-6">
                <SubscriptionForm plan={plan} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
