import { useEffect } from "react";

const reels = [
  "https://www.instagram.com/reel/DXTQnJOE4pT/",
  "https://www.instagram.com/reel/DXlTUiniLsq/",
  "https://www.instagram.com/reel/DXdjWFHioAS/",
  "https://www.instagram.com/reel/DXYZhN6jVNJ/",
  "https://www.instagram.com/reel/DXBQen2jMTU/",
];

const FollowCrumbs = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="follow" className="py-24 md:py-32 bg-gradient-warm overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.25em] text-[10px] font-bold">@BAKELETTE.OFFICIAL</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-foreground text-balance">
            Follow the <em className="font-script text-primary">Crumbs</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Behind-the-oven moments, fresh drops and weekly bakes — straight from our kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-start">
          {reels.map((url, i) => (
            <div
              key={i}
              className="fade-up w-full flex justify-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "12px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "100%",
                  minWidth: "100%",
                  padding: "0",
                  width: "100%",
                }}
              ></blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowCrumbs;
