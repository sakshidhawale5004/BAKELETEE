import nutella from "@/assets/products/nutella.jpeg";
import nutellaChoco from "@/assets/products/nutella-choco.png";
import blueberry from "@/assets/products/blueberry.jpeg";
import burnt from "@/assets/products/burnt.jpeg";
import mumbai from "@/assets/products/mumbai.png";
import pistachioLoaf from "@/assets/products/pistachio-loaf.png";

const reels = [
  { url: "https://www.instagram.com/reel/DXTQnJOE4pT/", thumb: nutella, caption: "Inside the molten heart" },
  { url: "https://www.instagram.com/reel/DXlTUiniLsq/", thumb: blueberry, caption: "Blueberry burst" },
  { url: "https://www.instagram.com/reel/DXdjWFHioAS/", thumb: burnt, caption: "Golden brown goodness" },
  { url: "https://www.instagram.com/reel/DXYZhN6jVNJ/", thumb: mumbai, caption: "Chai time companion" },
  { url: "https://www.instagram.com/reel/DXBQen2jMTU/", thumb: pistachioLoaf, caption: "Zesty pistachio vibes" },
  { url: "https://www.instagram.com/reel/DW6FI4Tk0g9/", thumb: nutellaChoco, caption: "Gooey chocolate swirls" },
];


const FollowCrumbs = () => (
  <section id="follow" className="py-24 md:py-32 bg-gradient-warm">
    <div className="container">
      <div className="text-center mb-14">
        <a
          href="https://instagram.com/bakelette.official"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-primary uppercase tracking-[0.25em] text-xs font-semibold hover:underline"
        >
          @bakelette.official
        </a>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Follow the <em className="font-script text-primary">Crumbs</em>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
          Behind-the-oven moments, fresh drops and weekly bakes — straight from our kitchen.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {reels.map((r, i) => (
          <a
            key={r.url}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className="card-3d group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-soft block fade-up"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <img
              src={r.thumb}
              alt={r.caption}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-primary shadow-soft">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div className="absolute bottom-3 inset-x-3 text-primary-foreground text-sm font-medium drop-shadow-lg">
              ▶ {r.caption}
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://instagram.com/bakelette.official"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-7 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Follow on Instagram →
        </a>
      </div>
    </div>
  </section>
);

export default FollowCrumbs;
