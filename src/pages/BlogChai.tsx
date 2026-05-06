import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogChai = () => (
  <main className="min-h-screen bg-background flex flex-col">
    <Header />
    <div className="container mx-auto py-32 px-4 max-w-3xl flex-1 mt-16">
      <div className="mb-8">
        <Link to="/#blog" className="text-sm text-primary hover:underline inline-block mr-4">← Back to Blog</Link>
        <span className="text-primary/40 text-xs">|</span>
        <span className="ml-4 text-primary uppercase tracking-[0.25em] text-xs font-semibold">Pairings</span>
      </div>
      <h1 className="mt-4 text-4xl md:text-5xl font-display text-foreground mb-4 leading-tight tracking-wide">Our Favorite Chai Pairings</h1>
      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
        <span>April 15, 2026</span>
        <span className="w-1 h-1 rounded-full bg-primary/40"></span>
        <span>2 min read</span>
      </div>
      <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-8">
        <p>In India, a cup of tea is never just a cup of tea. It's a pause in a chaotic day, a warm welcome to a guest, or a comforting companion during a rainy afternoon. And what is chai without the perfect accompaniment to dip into it?</p>

        <p>At Bakelette, we designed our Mumbai Spice Brew cookie specifically with chai in mind. It's an homage to the bustling streets of Mumbai and the iconic 'cutting chai'. Here are our favorite ways to pair our bakes with different types of tea.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. The Classic Adrak (Ginger) Chai</h2>
        <p><strong>The Pairing:</strong> Mumbai Spice Brew Cookie</p>
        <p>A strong ginger chai needs a cookie that can hold its own. The hand-pounded chai masala, ginger, and cardamom in our Mumbai Spice Brew cookie elevate the warmth of the ginger in the tea. The sturdy texture of the cookie makes it perfect for a quick dunk.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Mild Green Tea or Chamomile</h2>
        <p><strong>The Pairing:</strong> Blueberry Yogurt Cookies</p>
        <p>When sipping a light, floral, or herbal tea, you want a gentle treat that won't overpower the delicate flavors of the beverage. Our Blueberry Yogurt Cookies, with their soft texture and light tanginess, are the ideal companion. They offer a refreshing bite without being overly sweet.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Strong Black Coffee or Espresso</h2>
        <p><strong>The Pairing:</strong> Burnt Butter Jaggery Cookies</p>
        <p>While this isn't a chai pairing, we couldn't leave out coffee lovers! The deep, roasted, nutty flavors of our burnt butter perfectly complement the bitterness of a strong black coffee. The natural jaggery provides just the right amount of sweetness to balance the cup.</p>

        <p className="mt-8">What's your favorite pairing? Let us know the next time you order!</p>
      </div>
    </div>
    <Footer />
  </main>
);

export default BlogChai;
