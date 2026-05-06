import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogBrownButter = () => (
  <main className="min-h-screen bg-background flex flex-col">
    <Header />
    <div className="container mx-auto py-32 px-4 max-w-3xl flex-1 mt-16">
      <Link to="/#blog" className="text-sm text-primary hover:underline mb-8 inline-block">← Back to Blog</Link>
      <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Baking Science</span>
      <h1 className="mt-4 text-4xl md:text-5xl font-display text-foreground mb-4 leading-tight tracking-wide">The Magic of Brown Butter</h1>
      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
        <span>May 5, 2026</span>
        <span className="w-1 h-1 rounded-full bg-primary/40"></span>
        <span>3 min read</span>
      </div>
      <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-8">
        <p>There's a moment in the kitchen when something ordinary transforms into something extraordinary. For us, that moment is when butter hits the pan and slowly shifts from pale yellow to a deep, amber gold — releasing the most intoxicating aroma you'll ever smell. That's brown butter. And it's the secret behind some of our most beloved cookie.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Actually Happens?</h2>
        <p>When you melt butter over medium heat, the water evaporates and the milk solids begin to caramelise. The sugars and proteins undergo what's called the Maillard reaction — the same process that makes toast golden and steak seared. The result? A nutty, toffee-like depth that plain melted butter simply cannot achieve.</p>
        <p>They call it <em>beurre noisette</em> — hazelnut butter — named for the colour and the flavour it develops. It's been a cornerstone of pastry for centuries, and we've brought it into our artisan kitchen at Bakelette.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why We Use It</h2>
        <p>Our Burnt Butter Jaggery cookie starts with hand-browned butter. We brown it low and slow, watching every shade shift from cream to amber, then immediately cool it to stop the process at exactly the right moment. This gives the cookie a complex, layered flavour — warm, nutty, slightly caramel — that you can't get from any shortcut.</p>
        <p>Paired with our artisanal jaggery (which itself carries notes of molasses and earthiness), the result is a cookie that tastes like comfort itself. No refined sugar, no shortcuts. Just real ingredients doing what they do best.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Try It at Home</h2>
        <p>The next time you bake, try browning your butter first. Let it foam, watch it darken, pull it off the heat just as it smells nutty. Cool it completely before using. You'll never go back to regular melted butter again.</p>
        <p>And if you'd rather just taste the result — you know where to find us. 🍪</p>
      </div>
    </div>
    <Footer />
  </main>
);

export default BlogBrownButter;
