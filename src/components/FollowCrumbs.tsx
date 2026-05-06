import { useEffect, useRef } from "react";

const reels = [
  "https://www.instagram.com/reel/DXTQnJOE4pT/",
  "https://www.instagram.com/reel/DXlTUiniLsq/",
  "https://www.instagram.com/reel/DXdjWFHioAS/",
  "https://www.instagram.com/reel/DXYZhN6jVNJ/",
  "https://www.instagram.com/reel/DXBQen2jMTU/",
  "https://www.instagram.com/reel/DW6FI4Tk0g9/",
];

const FollowCrumbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script
    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, re-process embeds
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <section id="follow" className="py-24 md:py-32 bg-gradient-warm overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-14">
          <span className="text-primary uppercase tracking-[0.25em] text-[10px] font-bold">@BAKELETTE.OFFICIAL</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-foreground text-balance">
            Follow the <em className="font-script text-primary">Crumbs</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Behind-the-oven moments, fresh drops and weekly bakes — straight from our kitchen.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 items-start"
        >
          {reels.map((url, i) => (
            <div
              key={i}
              className="fade-up flex justify-center w-full"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned={false}
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "12px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "0",
                  minWidth: "100%",
                  padding: "0",
                  width: "100%",
                }}
              ></blockquote>
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
