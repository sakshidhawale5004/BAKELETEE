import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="container mx-auto py-32 px-4 max-w-3xl flex-1 mt-16">
        <h1 className="text-4xl md:text-5xl font-display text-primary mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg text-muted-foreground leading-relaxed">
          <p className="mb-8 font-semibold italic text-foreground text-xl">We know no one plans to read this section. But if you're here, you're our kind of person.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. The Basics</h2>
          <p className="mb-4">By placing an order, you agree to these terms. Nothing scary — just a few things to keep everything smooth (like our batters).</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Small Batch = Big Heart</h2>
          <p className="mb-2">We don't mass produce. We bake in small batches.</p>
          <p className="mb-2">Which means:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Things can sell out</li>
            <li>Timing may vary</li>
            <li>Freshness always wins over speed</li>
          </ul>
          <p className="mb-4 font-medium">Good things take time. Great things are baked.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Real Ingredients, Real Talk</h2>
          <p className="mb-2">We use clean, honest ingredients.</p>
          <p className="mb-2">But our kitchen isn't a sterile lab:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>It handles gluten, dairy, nuts, and more</li>
            <li>So traces may exist</li>
          </ul>
          <p className="mb-4">If you have severe allergies, please choose carefully. We'd rather be honest than overly reassuring.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Not Factory Perfect (And Proud of It)</h2>
          <p className="mb-2">Every piece is handmade.</p>
          <p className="mb-4">So if your cookie looks slightly different from the last one — that's not inconsistency, that's character.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Fresh Means Fragile</h2>
          <p className="mb-2">No preservatives = shorter shelf life.</p>
          <p className="mb-2">So:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Eat it fresh (best idea)</li>
            <li>Store it right (second best idea)</li>
          </ul>
          <p className="mb-4">Waiting too long is the only real mistake here.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Orders & Payments</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Orders are confirmed after 25% advance payment</li>
            <li>Prices and availability may change</li>
          </ul>
          <p className="mb-4">We promise fairness, not forever pricing.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Delivery Realities</h2>
          <p className="mb-2">We'll get your order to you as smoothly as possible.</p>
          <p className="mb-2">But:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Timings are estimates, not guarantees</li>
            <li>Once delivered, it's yours (protect it like treasure)</li>
          </ul>
          <p className="mb-4">Especially in Mumbai weather — you know how it is.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Changes & Cancellations</h2>
          <p className="mb-2">We start preparing early.</p>
          <p className="mb-2">So:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Last-minute changes may not be possible</li>
            <li>Cancellations aren't always guaranteed</li>
          </ul>
          <p className="mb-4">Because your order isn't sitting on a shelf — it's being made for you.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. If Something's Off</h2>
          <p className="mb-2">We don't hide behind policies.</p>
          <p className="mb-2">If something isn't right:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Tell us within 24 hours</li>
            <li>Share a photo</li>
          </ul>
          <p className="mb-4">We'll fix it. Simple.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Our Stuff Is... Ours</h2>
          <p className="mb-4">All our content, recipes, and visuals belong to Bakelette. Feel free to admire. Please don't copy.</p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. The Only Rule That Matters</h2>
          <p className="mb-4">You shouldn't have to choose between indulgence and trust. Everything above exists to protect that.</p>

          <hr className="my-8 border-border" />
          <p className="font-script text-2xl text-primary text-center">If you've read this far... You definitely deserve a cookie.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Terms;
