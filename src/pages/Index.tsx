import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurPromise from "@/components/Promise";
import Products from "@/components/Products";
import Gifting from "@/components/Gifting";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FollowCrumbs from "@/components/FollowCrumbs";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <OurPromise />
      <Products />
      <Gifting />
      <HowItWorks />
      <Testimonials />
      <FollowCrumbs />
      <Footer />
      <WhatsAppPopup />
    </main>
  );
};

export default Index;
