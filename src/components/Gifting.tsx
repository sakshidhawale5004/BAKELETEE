import { waLink } from "@/lib/contact";

const hampers = [
  {
    name: "The Muse",
    price: "999",
    tagline: "A graceful introduction to artisan bakes.",
    img: "https://images.unsplash.com/photo-1549462111-80a18d322429?w=800&q=80",
  },
  {
    name: "The Darling",
    price: "1499",
    tagline: "A beloved collection of our bestsellers.",
    img: "https://images.unsplash.com/photo-1544480542-1428b093f664?w=800&q=80",
  },
  {
    name: "The Icon",
    price: "1999",
    tagline: "The ultimate expression of Bakelette luxury.",
    img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&q=80",
  },
];

const Gifting = () => (
  <section id="gifting" className="py-24 md:py-32 bg-background scroll-mt-24">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Premium Collections</span>
        <h2 className="mt-4 text-4xl md:text-6xl text-balance">
          Artisanal <em className="font-script text-primary">Curations</em>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          Thoughtfully curated hampers for every celebration, wrapped in elegance and baked with love.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {hampers.map((h) => (
          <div key={h.name} className="group relative bg-gradient-card rounded-2xl p-3 border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
              <img 
                src={h.img} 
                alt={h.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
            <div className="px-1 pb-1">
              <h3 className="text-xl font-display text-foreground">{h.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{h.tagline}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">Starting at ₹{h.price}</span>
                <a
                  href={waLink(`Hi! I'd like to order ${h.name} hamper`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-glow transition-colors shadow-glow text-sm"
                >
                  →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          For corporate bulk orders or custom assortments, kindly connect with us on 
          <strong className="text-foreground"> +91 83694 24099</strong>.
        </p>
      </div>
    </div>
  </section>
);

export default Gifting;
