import { useState } from "react";
import { waLink } from "@/lib/contact";
import { Check, Star, Zap, Coffee, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { SubscriptionForm } from "./SubscriptionForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const plans = [
  {
    name: "The Daily Regular",
    price: 999,
    period: "month",
    tagline: "For our regular daily consumers.",
    description: "Perfect for regular consumers. Order directly from our website and enjoy seamless daily indulgence.",
    items: "Regular Access",
    perks: [
      "Direct website ordering",
      "Independent profile & number storage",
    ],
    icon: <Zap className="w-6 h-6" />,
    popular: true,
  },
  {
    name: "The Weekend Exclusive",
    price: 1299,
    period: "month",
    tagline: "A curated weekend discovery.",
    description: "Join our exclusive WhatsApp community for weekend-specific bakes, special riddles, and surprises.",
    items: "Weekend Access",
    perks: [
      "Exclusive WhatsApp community access",
      "Order window: Fri 9 AM - Sat 6 PM",
      "Wed hints/riddles for upcoming bakes",
      "Complimentary monthly item",
    ],
    icon: <Star className="w-6 h-6" />,
  },
];

const Subscription = () => {
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm italic font-script ${plan.popular ? "text-primary" : "text-primary"}`}>
                {plan.tagline}
              </p>
              
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 flex-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-glow transition-colors">
                      Quick View Benefits
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-[2rem] p-6 md:p-8 bg-white/95 backdrop-blur-md border-primary/20">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-display text-primary-deep">{plan.name} Perks</DialogTitle>
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

              {plan.name === "The Daily Regular" ? (
                <SubscriptionForm plan={plan} />
              ) : (
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
              )}
            </div>
          ))}
        </div>





        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-display text-primary">Rules & FAQs</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Everything you need to know about The Bakelette Society.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-soft transition-all duration-300">
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full flex justify-between items-center p-6 text-left font-display text-base md:text-lg text-primary-deep font-bold cursor-pointer hover:bg-muted/10"
              >
                <span>How does the flexible pause feature work?</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${faqOpen[0] ? "rotate-180" : ""}`} />
              </button>
              {faqOpen[0] && (
                <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1">
                  Both subscription tiers offer complete flexibility. You can pause your subscription for up to 15 days or resume it earlier whenever you want. Deliveries will be suspended immediately during this period, and no credits will go to waste. Simply drop us a quick note on WhatsApp!
                </div>
              )}
            </div>

            <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-soft transition-all duration-300">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full flex justify-between items-center p-6 text-left font-display text-base md:text-lg text-primary-deep font-bold cursor-pointer hover:bg-muted/10"
              >
                <span>What are the rules for the Weekend Exclusive subscription?</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${faqOpen[1] ? "rotate-180" : ""}`} />
              </button>
              {faqOpen[1] && (
                <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1">
                  Weekend Sanctuary is highly exclusive. Orders are strictly accepted between Friday 9:00 AM and Saturday 6:00 PM. As a member, you'll also receive our mid-week Wednesday Riddles in the community group, giving you a chance to guess what's baking next!
                </div>
              )}
            </div>
            
            <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-soft transition-all duration-300">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full flex justify-between items-center p-6 text-left font-display text-base md:text-lg text-primary-deep font-bold cursor-pointer hover:bg-muted/10"
              >
                <span>Can I cancel at any time?</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${faqOpen[2] ? "rotate-180" : ""}`} />
              </button>
              {faqOpen[2] && (
                <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1">
                  Instead of cancelling, we provide the power to pause your subscription whenever you need to. We believe in giving you the flexibility to take a break and resume your daily bliss when you're ready!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
