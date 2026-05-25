import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products, { type Category } from "@/components/Products";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import Cart from "@/components/Cart";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TheDailyRegular = () => {
  const [selected, setSelected] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="flex-1 pt-24 md:pt-32">
        <div className="container px-4">
          <Link to="/#society" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Society
          </Link>
          
          <div className="bg-primary/5 rounded-[2rem] p-8 md:p-12 mb-12 border border-primary/10 text-center relative overflow-hidden">
             {/* Decorative background elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
             
            <h1 className="text-4xl md:text-5xl font-display text-primary-deep mb-4 relative z-10">
              The Daily Regular
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 relative z-10">
              Welcome to your exclusive member area! Enjoy a special <strong>10% discount</strong> on all our signature bakes as part of your Daily Regular subscription.
            </p>
            <span className="inline-block bg-gradient-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-glow relative z-10">
              10% OFF APPLIED TO ALL PRODUCTS
            </span>
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
