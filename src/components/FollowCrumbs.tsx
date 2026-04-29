const reels = [
  { url: "https://www.instagram.com/reel/DXTQnJOE4pT/", thumb: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80", caption: "Fresh batch dropping" },
  { url: "https://www.instagram.com/reel/DXlTUiniLsq/", thumb: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=600&q=80", caption: "Behind the oven" },
  { url: "https://www.instagram.com/reel/DXdjWFHioAS/", thumb: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80", caption: "Crumbs in motion" },
  { url: "https://www.instagram.com/reel/DXYZhN6jVNJ/", thumb: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", caption: "Weekly bake" },
  { url: "https://www.instagram.com/reel/DXBQen2jMTU/", thumb: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80", caption: "From our kitchen" },
  { url: "https://www.instagram.com/reel/DW6FI4Tk0g9/", thumb: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", caption: "Fresh drop" },
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
