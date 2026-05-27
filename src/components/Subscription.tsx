import { useState } from "react";
import { waLink } from "@/lib/contact";
import { Check, Star, Zap, Coffee, ArrowRight, ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SubscriptionForm } from "./SubscriptionForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const plans = [
  {
    name: "The Daily Ritual",
    price: 999,
    period: "60 days",
    tagline: "For our regular daily consumers.",
    description: "Perfect for regular consumers. Order directly from our website and enjoy seamless daily indulgence.",
    items: "Regular Tribe",
    perks: [
      "Direct website ordering",
      "Independent profile & number storage",
      "Priority support",
      "Exclusive member-only discounts",
    ],
    icon: <Zap className="w-6 h-6" />,
    popular: true,
  },
  {
    name: "The Weekend Sanctuary",
    price: 1299,
    period: "30 days",
    tagline: "A curated weekend discovery.",
    description: "Join our exclusive WhatsApp community for weekend-specific bakes, special riddles, and surprises.",
    items: "Exclusive Weekend Fam",
    perks: [
      "Exclusive WhatsApp community access",
      "Order window: Fri 9 AM - Sat 6 PM",
      "Wednesday hints/riddles for upcoming bakes",
      "Complimentary monthly item",
      "Limited edition weekend-only bakes",
      "VIP priority delivery",
      "Flexible pause feature (up to 15 days)",
      "Members-only recipe sharing sessions once a month",
    ],
    icon: <Star className="w-6 h-6" />,
  },
];

const Subscription = () => {
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({
    0: false,
  });

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      q: "How does the flexible pause feature work for The Weekend Sanctuary?",
      a: "The Weekend Sanctuary is designed with complete flexibility in mind. You can pause your subscription for up to a max time period of 15 days or resume deliveries any time before at your convenience. Just send us a quick message on WhatsApp!"
    },
    {
      q: "What are the rules for The Weekend Sanctuary subscription?",
      a: "The Weekend Sanctuary is highly exclusive. Orders are strictly accepted between Friday 9:00 AM and Saturday 6:00 PM. As a member, you'll also receive our mid-week Wednesday Riddles in the community group, giving you a chance to guess what's baking next!"
    },
    {
      q: "How does ordering work for The Daily Ritual?",
      a: "The Daily Ritual offers seamless ordering directly through our website. Once subscribed, you'll have your own profile with stored preferences and contact details, making it quick and easy to place orders whenever you need your daily dose of freshly baked goodness!"
    },
    {
      q: "What makes The Daily Ritual different from regular orders?",
      a: "As a Daily Ritual member, you get priority support, exclusive member-only discounts, and the convenience of having your profile and preferences saved. It's designed for our regular consumers who want a hassle-free, consistent experience with special perks!"
    },
    {
      q: "Can I cancel my subscription at any time?",
      a: "For The Weekend Sanctuary, instead of cancelling, we provide the power to pause your subscription whenever you need to. For The Daily Ritual, you can manage your subscription preferences anytime. We believe in giving you flexibility to enjoy our bakes on your terms!"
    }
  ];

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
                    <button className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full border-2 border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-glow group">
                      <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
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

              <SubscriptionForm plan={plan} />
            </div>
          ))}
        </div>





        <div className="mt-32 max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 shadow-inner">
              <Coffee className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display text-primary-deep font-bold">Curious Minds Want to Know</h3>
            <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto">
              Everything you need to know about The Bakelette Society. If you don't see your question here, just ask us on WhatsApp!
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`group border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                  faqOpen[index] 
                    ? "bg-white shadow-elegant border-primary/30 scale-[1.02] -translate-y-1" 
                    : "bg-white/60 backdrop-blur-sm shadow-soft border-border/60 hover:bg-white hover:border-primary/20 hover:shadow-md"
                }`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left cursor-pointer"
                >
                  <span className={`font-display text-lg md:text-xl font-bold transition-colors duration-300 ${faqOpen[index] ? "text-primary" : "text-primary-deep group-hover:text-primary"}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${faqOpen[index] ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20"}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${faqOpen[index] ? "rotate-180" : ""}`} />
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    faqOpen[index] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
