import { products, type Category } from "./Products";

const cats: { name: Exclude<Category, "All">; count: string; desc: string }[] = [
  { name: "Cookies", count: "6 varieties", desc: "Crunchy, chewy, stuffed" },
  { name: "Loaves", count: "2 flavours", desc: "Pistachio-lime, rose-saffron" },
  { name: "Bites", count: "4 options", desc: "Perfect snack-sized treats" },
  { name: "Brownies", count: "2 types", desc: "Fudgy, rich, decadent" },
  { name: "Bundles", count: "2 combos", desc: "Mix & match favourites" },
  { name: "Gift Hampers", count: "2 hampers", desc: "Premium gifting solutions" },
];

interface Props {
  onSelect: (c: Category) => void;
}

const Categories = ({ onSelect }: Props) => {
  const handle = (c: Exclude<Category, "All">) => {
    onSelect(c);
    setTimeout(() => {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section id="categories" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Browse by</span>
          <h2 className="mt-4 text-4xl md:text-6xl">
            <em className="font-script text-primary">Categories</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">Our curated selection of premium bakes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((c, i) => {
            const categoryProducts = products.filter((p) => p.category === c.name);
            return (
              <div
                key={c.name}
                className="card-3d text-left bg-gradient-card rounded-3xl p-6 shadow-soft border border-border/60 flex flex-col fade-up hover:border-primary transition-colors group"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex -space-x-4 mb-4 overflow-hidden py-2 px-1">
                  {categoryProducts.slice(0, 4).map((p, j) => (
                    <img
                      key={p.name}
                      src={p.img}
                      alt={p.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-background shadow-sm group-hover:-translate-y-1 transition-transform"
                      style={{ transitionDelay: `${j * 0.05}s`, zIndex: 10 - j }}
                    />
                  ))}
                  {categoryProducts.length > 4 && (
                    <div className="w-14 h-14 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shadow-sm z-0">
                      +{categoryProducts.length - 4}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl text-foreground">{c.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{c.desc}</p>
                  <button
                    onClick={() => handle(c.name)}
                    className="mt-4 text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Know More <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Categories;
