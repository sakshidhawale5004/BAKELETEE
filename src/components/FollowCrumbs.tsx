import { useState, useEffect } from "react";

const reels = [
  { url: "https://www.instagram.com/reel/DXTQnJOE4pT/", thumb: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DXlTUiniLsq/", thumb: "https://images.unsplash.com/photo-1544908101-037036496b1e?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DXdjWFHioAS/", thumb: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DXYZhN6jVNJ/", thumb: "https://images.unsplash.com/photo-1544787210-2213d4b97547?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DXBQen2jMTU/", thumb: "https://images.unsplash.com/photo-1515037893149-de7facc46e9a?auto=format&fit=crop&q=80&w=500" },
  { url: "https://www.instagram.com/reel/DW6FI4Tk0g9/", thumb: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=500" },
];

const FollowCrumbs = () => {
  const [activeReel, setActiveReel] = useState<number | null>(null);

  useEffect(() => {
    if (activeReel !== null) {
      // Load Instagram embed script if an active reel is set
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, [activeReel]);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 items-start">
          {reels.map((reel, i) => (
            <div
              key={i}
              className="fade-up relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-soft group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {activeReel === i ? (
                <div className="w-full h-full overflow-y-auto no-scrollbar bg-white">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={reel.url}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: "0",
                      borderRadius: "0",
                      margin: "0",
                      padding: "0",
                      width: "100%",
                      minHeight: "100%",
                    }}
                  ></blockquote>
                </div>
              ) : (
                <button
                  onClick={() => setActiveReel(i)}
                  className="w-full h-full relative group"
                  aria-label="Play Reel"
                >
                  <img
                    src={reel.thumb}
                    alt="Instagram Reel Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
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
