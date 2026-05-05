const reels = [
  { 
    url: "https://www.instagram.com/reel/DXTQnJOE4pT/", 
    caption: "Inside the molten heart",
    fallback: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop"
  },
  { 
    url: "https://www.instagram.com/reel/DXlTUiniLsq/", 
    caption: "Blueberry burst",
    fallback: "https://images.unsplash.com/photo-1544908082-89662f44440b?q=80&w=800&auto=format&fit=crop"
  },
  { 
    url: "https://www.instagram.com/reel/DXdjWFHioAS/", 
    caption: "Golden brown goodness",
    fallback: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop"
  },
  { 
    url: "https://www.instagram.com/reel/DXYZhN6jVNJ/", 
    caption: "Chai time companion",
    fallback: "https://images.unsplash.com/photo-1594631252845-29fc458631b6?q=80&w=800&auto=format&fit=crop"
  },
  { 
    url: "https://www.instagram.com/reel/DXBQen2jMTU/", 
    caption: "Zesty pistachio vibes",
    fallback: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?q=80&w=800&auto=format&fit=crop"
  },
  { 
    url: "https://www.instagram.com/reel/DW6FI4Tk0g9/", 
    caption: "Gooey chocolate swirls",
    fallback: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop"
  },
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
        {reels.map((r, i) => {
          const shortcode = r.url.split("/").filter(Boolean).pop();
          // Attempt to get IG thumbnail, fallback to high-quality contextual photo
          const thumbUrl = `https://www.instagram.com/p/${shortcode}/media/?size=l`;

          return (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-soft block fade-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <img
                src={thumbUrl}
                alt={r.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-muted"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = r.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="absolute bottom-4 inset-x-4 text-white text-[10px] md:text-xs font-semibold leading-tight drop-shadow-md">
                <span className="block opacity-70 mb-1 uppercase tracking-tighter">New Reel</span>
                {r.caption}
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          href="https://instagram.com/bakelette.official"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-7 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Instagram
        </a>
      </div>
    </div>
  </section>
);

export default FollowCrumbs;
