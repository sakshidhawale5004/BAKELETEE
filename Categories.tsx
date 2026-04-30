import type { Category } from "./Products";

const cats: {
    name: Exclude<Category, "All">;
    icon: JSX.Element;
    count: string;
    desc: string;
    tagline: string;
}[] = [
        {
            name: "Cookies",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
                    <circle cx="14" cy="8" r="0.8" fill="currentColor" stroke="none" />
                    <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
                    <circle cx="10" cy="14.5" r="0.8" fill="currentColor" stroke="none" />
                    <path d="M12 3c0 1.1-.9 2-2 2" />
                    <path d="M21 12c-1.1 0-2-.9-2-2" />
                </svg>
            ),
            count: "6 Varieties",
            desc: "Crunchy, chewy, stuffed",
            tagline: "One bite. Pure drama.",
        },
        {
            name: "Loaves",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8v2H4v-2z" />
                    <path d="M4 16h16" />
                    <path d="M4 19h16" />
                    <path d="M8 16v3" />
                    <path d="M12 16v3" />
                    <path d="M16 16v3" />
                </svg>
            ),
            count: "2 Flavours",
            desc: "Pistachio-lime, rose-saffron",
            tagline: "Slow afternoons, sliced.",
        },
        {
            name: "Bites",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M3 11l19-9-9 19-2-8-8-2z" />
                </svg>
            ),
            count: "4 Options",
            desc: "Perfect snack-sized treats",
            tagline: "Tiny bites, big energy.",
        },
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
                    <p className="mt-5 text-muted-foreground text-lg">
                        Three little universes of flavour. Tap one — we'll take you straight to the good stuff.
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
                                {/* SVG Icon in turquoise box */}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow shrink-0">
                                    {c.icon}
                                </div>
                                {/* Count Badge */}
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                                    {c.count}
                                </span>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-2xl font-display text-foreground">{c.name}</h3>
                                <p className="text-muted-foreground text-sm mt-1">{c.desc}</p>
                                <p className="text-primary font-script italic text-base mt-2">{c.tagline}</p>
                            </div>

                            {/* Explore CTA */}
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
