import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products, { type Category } from "@/components/Products";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import Cart from "@/components/Cart";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import subscribeHero from "@/assets/subscribe-hero.png";
import { useSubscription } from "@/contexts/SubscriptionContext";

const TheDailyRegular = () => {
  const [selected, setSelected] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isSubscribed } = useSubscription();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Redirect to home if not subscribed
  useEffect(() => {
    if (!isSubscribed) {
      navigate('/');
    }
  }, [isSubscribed, navigate]);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="flex-1 pt-20">
        {/* Banner Section */}
        <section className="relative h-[45vh] min-h-[400px] md:h-[55vh] flex items-center justify-center overflow-hidden">
          <img
            src={subscribeHero}
            alt="The Daily Ritual Subscription"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
          
          <div className="container relative z-10 px-4 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 drop-shadow-md">
              The Daily Ritual
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-sm font-medium">
              Welcome to your exclusive member area! Enjoy a special <strong>10% discount</strong> on all our signature bakes.
            </p>
            <span className="inline-block bg-white text-primary-deep px-6 py-2 rounded-full text-sm md:text-base font-bold tracking-wide shadow-glow">
              🎉 10% OFF APPLIED TO ALL PRODUCTS
            </span>
          </div>
        </section>

        <div className="container px-4 mt-8 md:mt-12">
          <Link to="/#society" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 md:mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Society
          </Link>
        </div>

        {/* Important Notice */}
        <div className="container px-4 mb-12">
          <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 md:p-8 max-w-3xl">
            <div className="flex gap-4">
              <div className="text-2xl shrink-0">⚠️</div>
              <div>
                <h3 className="text-lg md:text-xl font-display text-primary-deep font-bold mb-2">
                  Important: Use Your Registered Mobile Number
                </h3>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  When placing orders, please use the <strong>same mobile number</strong> that you registered for your Daily Ritual subscription. This helps us verify your membership and apply your 10% discount correctly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Products 
          selected={selected} 
          onSelect={setSelected} 
          searchQuery={searchQuery} 
          discountPercentage={10} 
        />
      </div>

      <Footer />
      <WhatsAppPopup />
      <Cart />
    </main>
  );
};

export default TheDailyRegular;
