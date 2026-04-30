import { products } from "./Products";
import type { Category } from "./Products";

interface Props {
  onSelect: (c: Category) => void;
}

const Categories = ({ onSelect }: Props) => {
  const scrollToProducts = () => {
    onSelect("All");
    setTimeout(() => {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section id="categories" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Our Bakes</span>
          <h2 className="mt-4 text-4xl md:text-6xl">
            <em className="font-script text-primary">Every Bite</em> Tells a Story
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">Tap any bake to explore &amp; order.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <button
              key={p.name}
              onClick={scrollToProducts}
              className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-soft border border-border/40 fade-up text-left"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              {p.badge && (
                <span className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full shadow-glow">
                  {p.badge}
                </span>
              )}
              <div className="absolute bottom-0 inset-x-0 p-3 md:p-4">
                <p className="text-white/70 text-[10px] md:text-xs uppercase tracking-widest font-semibold">{p.category}</p>
                <h3 className="text-white text-sm md:text-base font-display leading-tight mt-0.5">{p.name}</h3>
                <p className="text-primary text-sm md:text-base font-bold mt-1">₹{p.price}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToProducts}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 font-semibold shadow-glow hover:-translate-y-1 transition-all"
          >
            View All &amp; Order →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
