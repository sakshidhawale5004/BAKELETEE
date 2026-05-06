import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogJaggery = () => (
  <main className="min-h-screen bg-background flex flex-col">
    <Header />
    <div className="container mx-auto py-32 px-4 max-w-3xl flex-1 mt-16">
      <div className="mb-8">
        <Link to="/#blog" className="text-sm text-primary hover:underline inline-block mr-4">← Back to Blog</Link>
        <span className="text-primary/40 text-xs">|</span>
        <span className="ml-4 text-primary uppercase tracking-[0.25em] text-xs font-semibold">Ingredients</span>
      </div>
      <h1 className="mt-4 text-4xl md:text-5xl font-display text-foreground mb-4 leading-tight tracking-wide">Baking with Jaggery vs Refined Sugar</h1>
      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
        <span>April 28, 2026</span>
        <span className="w-1 h-1 rounded-full bg-primary/40"></span>
        <span>4 min read</span>
      </div>
      <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-8">
        <p>At Bakelette, we’ve always believed that sweetness should come with a sense of comfort, not compromise. When we started crafting our recipes, one of the biggest decisions we made was moving away from refined white sugar. Our sweetener of choice? Pure, organic jaggery.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What is Jaggery?</h2>
        <p>Jaggery, or 'gur', is a traditional unrefined sugar consumed heavily in Asia and Africa. It's made by boiling concentrated sugarcane juice until it solidifies. Because it isn't spun in a centrifuge to separate the molasses (like refined sugar is), it retains its rich, earthy flavour and its natural minerals like iron, magnesium, and potassium.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why We Prefer Jaggery in Baking</h2>
        <p>Refined white sugar is a pure carbohydrate that offers empty calories. It digests rapidly, causing a sharp spike in blood sugar followed by an inevitable crash. Jaggery, on the other hand, is a more complex carbohydrate. It digests slower, providing a steadier release of energy.</p>
        <p>But beyond the health benefits, jaggery offers something refined sugar simply cannot: <em>character</em>. White sugar only provides sweetness. Jaggery provides a deep, caramel-like flavour profile with hints of toffee and earthiness. It doesn't just sweeten a cookie; it adds depth to it.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Baking Challenge</h2>
        <p>Baking with jaggery isn't always straightforward. It contains more moisture than white sugar and is slightly acidic. This means we had to carefully adjust our flour ratios and leavening agents to ensure our cookies still achieved that perfect texture—crispy on the edges, chewy in the center.</p>
        <p>The result? Our Brown Butter Jaggery and Nutella Stuffed Chocochip cookies. They are the perfect testament to the fact that you don't need highly processed ingredients to create something truly indulgent.</p>

        <p className="mt-8">We invite you to taste the difference. Once you experience the rich, rustic sweetness of jaggery, you might never look at regular sugar the same way again.</p>
      </div>
    </div>
    <Footer />
  </main>
);

export default BlogJaggery;
