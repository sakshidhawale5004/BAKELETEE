import type { Category } from "./Products";

const cats: { name: Exclude<Category, "All">; count: string; desc: string; icon: string }[] = [
  { name: "Cookies", count: "2 varieties", desc: "Crunchy, chewy, stuffed", icon: "🍪" },
  { name: "Loaves", count: "2 flavours", desc: "Pistachio-lime, rose-saffron", icon: "🍞" },
  { name: "Bites", count: "2 options", desc: "Perfect snack-sized treats", icon: "🥮" },
  { name: "Brownies", count: "2 types", desc: "Fudgy, rich, decadent", icon: "🍫" },
  { name: "Bundles", count: "2 combos", desc: "Mix & match favourites", icon: "🎁" },
  { name: "Gift Hampers", count: "2 hampers", desc: "Premium gifting solutions", icon: "🎀" },
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
          {cats.map((c, i) => (
            <div
              key={c.name}
              className="card-3d text-left bg-gradient-card rounded-3xl p-8 shadow-soft border border-border/60 flex items-center gap-5 fade-up hover:border-primary transition-colors group"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-4xl shadow-glow shrink-0">
                {c.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-foreground">{c.name}</h3>
                <p className="text-primary text-sm font-semibold mt-1">{c.count}</p>
                <p className="text-muted-foreground text-sm mt-1">{c.desc}</p>
                <button
                  onClick={() => handle(c.name)}
                  className="mt-4 text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Know More <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
