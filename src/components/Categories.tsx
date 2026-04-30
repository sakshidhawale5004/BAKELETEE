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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {cats.map((c, i) => {
            const categoryProducts = products.filter((p) => p.category === c.name);
            const mainImg = categoryProducts[0]?.img || "";
            
            return (
              <div
                key={c.name}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-elegant border border-border/40 fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Background Image */}
                <img 
                  src={mainImg} 
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary-foreground/70 text-xs uppercase tracking-[0.3em] font-semibold">
                      {c.count}
                    </span>
                    <h3 className="text-3xl md:text-4xl text-white mt-2 font-display">{c.name}</h3>
                    <p className="text-white/70 mt-3 text-sm line-clamp-2 max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {c.desc}
                    </p>
                    
                    <button
                      onClick={() => handle(c.name)}
                      className="mt-6 w-full py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary hover:border-primary transition-all shadow-glow"
                    >
                      Browse {c.name} <span className="text-lg">→</span>
                    </button>
                  </div>
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
