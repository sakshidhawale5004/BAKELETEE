import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurPromise from "@/components/Promise";
import Products, { type Category } from "@/components/Products";
import Categories from "@/components/Categories";
import Gifting from "@/components/Gifting";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FollowCrumbs from "@/components/FollowCrumbs";
import Blog from "@/components/Blog";
import Subscription from "@/components/Subscription";

import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";

import Cart from "@/components/Cart";

const Index = () => {
  const { hash } = useLocation();
  const [selected, setSelected] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);



  return (
    <main className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Hero />
      <OurPromise />
      <Products selected={selected} onSelect={setSelected} searchQuery={searchQuery} />
      <Categories onSelect={setSelected} />
      <Gifting />
      <Subscription />
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
