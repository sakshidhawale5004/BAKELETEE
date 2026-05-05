const reels = [
  { url: "https://www.instagram.com/reel/DXTQnJOE4pT/", caption: "Inside the molten heart" },
  { url: "https://www.instagram.com/reel/DXlTUiniLsq/", caption: "Blueberry burst" },
  { url: "https://www.instagram.com/reel/DXdjWFHioAS/", caption: "Golden brown goodness" },
  { url: "https://www.instagram.com/reel/DXYZhN6jVNJ/", caption: "Chai time companion" },
  { url: "https://www.instagram.com/reel/DXBQen2jMTU/", caption: "Zesty pistachio vibes" },
  { url: "https://www.instagram.com/reel/DW6FI4Tk0g9/", caption: "Gooey chocolate swirls" },
];

const FollowCrumbs = () => (
  <section id="follow" className="py-24 md:py-32 bg-gradient-warm overflow-hidden">
    <div className="container">
      <div className="text-center mb-14">
        <span className="text-primary uppercase tracking-[0.25em] text-[10px] font-bold">@BAKELETTE.OFFICIAL</span>
        <h2 className="mt-4 text-4xl md:text-6xl text-foreground">
          Follow the <em className="font-script text-primary">Crumbs</em>
        </h2>
        <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Behind-the-oven moments, fresh drops and weekly bakes — straight from our kitchen.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {reels.map((r, i) => (
          <div
            key={r.url}
            className="fade-up rounded-xl overflow-hidden shadow-soft border border-border/40 bg-white"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <iframe
              src={`${r.url}embed/`}
              className="w-full"
              style={{ height: "480px", border: "none" }}
              title={r.caption}
              loading="lazy"
              allowFullScreen
              scrolling="no"
            />
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

export default FollowCrumbs;
