import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurPromise from "@/components/Promise";
import FoundersLetterSection from "@/components/FoundersLetterSection";
import Products, { type Category } from "@/components/Products";
import Categories from "@/components/Categories";
import Gifting from "@/components/Gifting";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FollowCrumbs from "@/components/FollowCrumbs";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";

import Cart from "@/components/Cart";

const Index = () => {
  const [selected, setSelected] = useState<Category>("All");

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <OurPromise />
      <FoundersLetterSection />
      <Products selected={selected} onSelect={setSelected} />
      <Categories onSelect={setSelected} />
      <Gifting />
      <HowItWorks />
      <Testimonials />
      <Blog />
      <FollowCrumbs />
      <Footer />
      <WhatsAppPopup />
      <Cart />
    </main>
  );
};


export default Index;
