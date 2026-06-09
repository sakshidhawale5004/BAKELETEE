import { useState } from "react";
import { Coffee, ChevronDown } from "lucide-react";

const FAQ = () => {
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
      q: "What are the order rules for The Weekend Sanctuary?",
      a: "The Weekend Sanctuary is highly exclusive. Orders are strictly accepted between Friday 9:00 AM and Saturday 6:00 PM. As a member, you'll also receive our mid-week Wednesday Riddles in the community group, giving you a chance to guess what's baking next!"
    },
    {
      q: "How does ordering work with Bakelette?",
      a: "Bakelette offers seamless ordering through our website for The Daily Ritual members. Simply place your order, and we'll bake it fresh to order. We also accept orders via WhatsApp for all customers. A 25% advance confirms your order, and the rest is paid on delivery."
    },
    {
      q: "What makes Bakelette different from regular bakeries?",
      a: "At Bakelette, everything is baked fresh to order, never stale. We use wholesome ingredients and handcraft each item with love. Our subscription plans offer exclusive perks, priority support, and special access to limited edition bakes."
    },
    {
      q: "Can I cancel or pause my subscription anytime?",
      a: "For The Weekend Sanctuary, instead of cancelling, we provide the power to pause your subscription whenever you need to. For The Daily Ritual, you can manage your subscription preferences anytime. We believe in giving you flexibility to enjoy our bakes on your terms!"
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 shadow-inner">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display text-primary-deep font-bold">Curious Minds Want to Know</h3>
            <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">
              Everything you need to know about Bakelette and our subscription plans. If you don't see your question here, just ask us on WhatsApp!
            </p>
          </div>
          
          <div className="space-y-4">
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
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className={`font-display text-base md:text-lg font-bold transition-colors duration-300 ${faqOpen[index] ? "text-primary" : "text-primary-deep group-hover:text-primary"}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${faqOpen[index] ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20"}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${faqOpen[index] ? "rotate-180" : ""}`} />
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    faqOpen[index] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed">
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

export default FAQ;
