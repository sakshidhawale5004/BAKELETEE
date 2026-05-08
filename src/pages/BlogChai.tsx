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
        <p><strong>The Pairings:</strong> Mumbai Spice Brew Cookie, Banana Walnut Loaf, or Ghee Cake</p>
        <p>A strong ginger chai needs a companion that can hold its own. While our Mumbai Spice Brew cookie is a classic dunking choice, a warm slice of our moist <strong>Banana Walnut Loaf</strong> or <strong>Traditional Ghee Cake</strong> offers a soulful, buttery contrast to the spice. For those who love a crunch, our <strong>Almond</strong> or <strong>Pistachio Sticks</strong> provide a sophisticated, nutty snap with every sip.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Mild Green Tea or Chamomile</h2>
        <p><strong>The Pairings:</strong> Blueberry Yogurt Cookies or Rose & Saffron Loaf</p>
        <p>When sipping a light, floral, or herbal tea, you want a gentle treat that won't overpower the delicate flavors. Our <strong>Blueberry Yogurt Cookies</strong> are the ideal companion, but for a truly royal experience, try a slice of our <strong>Rose & Saffron Celebration Loaf</strong>. Its floral notes dance beautifully with the lightness of green tea.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Strong Black Coffee or Espresso</h2>
        <p><strong>The Pairings:</strong> Burnt Butter Jaggery Cookies or Chocolate Brownie</p>
        <p>The deep, roasted, nutty flavors of our <strong>Burnt Butter Cookies</strong> perfectly complement the bitterness of a strong black coffee. If you're in the mood for something more decadent, our fudgy <strong>Chocolate Brownie</strong> creates a rich, mocha-like experience that melts on the palate.</p>

        <p className="mt-8">What's your favorite pairing? Don't limit yourself to cookies—our cakes and bites are crafted to turn every tea time into a celebration. Let us know your favorite combo the next time you order!</p>
      </div>
    </div>
    <Footer />
  </main>
);

export default BlogChai;
