import { useState } from "react";

const reels = [
  { url: "https://www.instagram.com/reel/DXTQnJOE4pT/", caption: "Inside the molten heart", thumb: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DXlTUiniLsq/", caption: "Blueberry burst", thumb: "https://images.unsplash.com/photo-1544908101-037036496b1e?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DXdjWFHioAS/", caption: "Golden brown goodness", thumb: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DXYZhN6jVNJ/", caption: "Chai time companion", thumb: "https://images.unsplash.com/photo-1544787210-2213d4b97547?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DXBQen2jMTU/", caption: "Zesty pistachio vibes", thumb: "https://images.unsplash.com/photo-1515037893149-de7facc46e9a?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DW6FI4Tk0g9/", caption: "Gooey chocolate swirls", thumb: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=500" },
];

const ReelCard = ({ reel, isActive, onPlay, index }: { reel: typeof reels[0], isActive: boolean, onPlay: () => void, index: number }) => {
  return (
    <div
      className="fade-up rounded-xl overflow-hidden shadow-soft border border-border/40 bg-white relative group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {isActive ? (
        <iframe
          src={`${reel.url}embed/`}
          className="w-full"
          style={{ height: "480px", border: "none" }}
          title={reel.caption}
          scrolling="no"
          allowFullScreen
        />
      ) : (
        <button
          onClick={onPlay}
          className="w-full h-[480px] relative group"
          aria-label={`Play ${reel.caption}`}
        >
          <img
            src={reel.thumb}
            alt={reel.caption}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-sm font-medium">{reel.caption}</p>
          </div>
        </button>
      )}
    </div>
  );
};

const FollowCrumbs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="follow" className="py-24 md:py-32 bg-gradient-warm overflow-hidden">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-primary uppercase tracking-[0.25em] text-[10px] font-bold">@BAKELETTE.OFFICIAL</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-foreground text-balance">
            Follow the <em className="font-script text-primary">Crumbs</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Behind-the-oven moments, fresh drops and weekly bakes — straight from our kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {reels.map((r, i) => (
            <ReelCard
              key={i}
              reel={r}
              index={i}
              isActive={activeIndex === i}
              onPlay={() => setActiveIndex(i)}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://instagram.com/bakelette.official"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-sm"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/18WjsbYLsS/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-sm"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/bakelette/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://share.google/QM3vrylCI2OkWzygP"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-sm"
          >
            Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowCrumbs;
