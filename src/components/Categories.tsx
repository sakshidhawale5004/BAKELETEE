import type { Category } from "./Products";
import nutella from "@/assets/products/nutella.jpeg";
import roseLoaf from "@/assets/products/rose-loaf.jpeg";
import pistachioSticks from "@/assets/products/pistachio-sticks.png";
import chocolateBrownie from "@/assets/products/chocolate-brownie.png";
import bananaWalnut from "@/assets/products/banana-walnut.png";
import bundle from "@/assets/products/bundle.png";
import hamper from "@/assets/products/hamper.png";
import almond from "@/assets/products/almond.jpeg";
import blueberry from "@/assets/products/blueberry.jpeg";

const cats: {
  name: Exclude<Category, "All">;
  icon: JSX.Element;
  count: string;
  desc: string;
  tagline: string;
}[] = [
  {
    name: "Cookies",
    icon: <img src={nutella} alt="Cookies" className="w-full h-full object-cover rounded-2xl" />,
    count: "7 Varieties",
    desc: "Crunchy, chewy, stuffed",
    tagline: "One bite. Pure drama.",
  },
  {
    name: "Brownie and Fudge",
    icon: <img src={chocolateBrownie} alt="Brownie and Fudge" className="w-full h-full object-cover rounded-2xl" />,
    count: "Classic Fudgy",
    desc: "Rich, fudgy, decadent",
    tagline: "The ultimate indulgence.",
  },
  {
    name: "Loaves",
    icon: <img src={bananaWalnut} alt="Loaves" className="w-full h-full object-cover rounded-2xl" />,
    count: "2 Sizes Available",
    desc: "Soft, moist, artisanal loaf cakes",
    tagline: "Slow afternoons, sliced.",
  },
  {
    name: "Bites",
    icon: <img src={pistachioSticks} alt="Bites" className="w-full h-full object-cover rounded-2xl" />,
    count: "4 Options",
    desc: "Perfect snack-sized treats",
    tagline: "Tiny bites, big energy.",
  },
  {
    name: "Bundles",
    icon: <img src={bundle} alt="Bundles" className="w-full h-full object-cover rounded-2xl" />,
    count: "Curated Sets",
    desc: "Perfectly paired bakes",
    tagline: "More to love, more to share.",
  },
];

interface Props {
  onSelect: (c: Category) => void;
}

const Categories = ({ onSelect }: Props) => {
  const handle = (c: string) => {
    onSelect(c as Category);
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
          <p className="mt-5 text-muted-foreground text-lg">
            A universe of flavour. Tap one — we'll take you straight to the good stuff.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((c, i) => (
            <div
              key={c.name}
              className="group bg-background rounded-3xl p-6 shadow-soft border border-border/60 hover:border-primary hover:shadow-elegant transition-all duration-300 fade-up cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => handle(c.name)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-warm flex items-center justify-center shadow-glow shrink-0 overflow-hidden border border-border/50">
                  {c.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {c.count}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-display text-foreground">{c.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{c.desc}</p>
                <p className="text-primary font-script italic text-base mt-2">{c.tagline}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 group-hover:text-primary transition-colors">
                  Explore the {c.name}
                </span>
                <div className="w-8 h-8 rounded-full border border-border/60 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all text-muted-foreground">
                  →
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
};

export default Categories;
