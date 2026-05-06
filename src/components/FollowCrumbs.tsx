import { useState, useEffect } from "react";

const reels = [
  { url: "https://www.instagram.com/reel/DXTQnJOE4pT/", id: "DXTQnJOE4pT" },
  { url: "https://www.instagram.com/reel/DXlTUiniLsq/", id: "DXlTUiniLsq" },
  { url: "https://www.instagram.com/reel/DXdjWFHioAS/", id: "DXdjWFHioAS" },
  { url: "https://www.instagram.com/reel/DXYZhN6jVNJ/", id: "DXYZhN6jVNJ" },
  { url: "https://www.instagram.com/reel/DXBQen2jMTU/", id: "DXBQen2jMTU" },
  { url: "https://www.instagram.com/reel/DW6FI4Tk0g9/", id: "DW6FI4Tk0g9" },
];

const FollowCrumbs = () => {
  const [activeReel, setActiveReel] = useState<number | null>(null);

  useEffect(() => {
    if (activeReel !== null) {
      // Re-process Instagram embeds when active reel changes
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
      <div className="container px-4 max-w-[1600px]">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.25em] text-[10px] font-bold">@BAKELETTE.OFFICIAL</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-foreground text-balance">
            Follow the <em className="font-script text-primary">Crumbs</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Behind-the-oven moments, fresh drops and weekly bakes — straight from our kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 items-start">
          {reels.map((reel, i) => (
            <div
              key={i}
              className="fade-up w-full min-h-[450px]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {activeReel === i ? (
                <div className="w-full flex justify-center">
                   <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={reel.url}
                    data-instgrm-version="14"
                    data-instgrm-captioned={false}
                    style={{
                      background: "#FFF",
                      border: "0",
                      borderRadius: "12px",
                      margin: "0",
                      width: "100%",
                    }}
                  ></blockquote>
                </div>
              ) : (
                <div 
                  className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-soft border border-border/40 bg-white aspect-[4/5]"
                  onClick={() => setActiveReel(i)}
                >
                  <img 
                    src={`${reel.url}media/?size=l`}
                    alt="Bakelette Reel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Native-look Header Overlay */}
                  <div className="absolute top-0 left-0 right-0 p-3 flex items-center gap-2 bg-gradient-to-b from-black/40 to-transparent">
                    <div className="w-8 h-8 rounded-full border border-white/40 bg-primary flex items-center justify-center text-[10px] font-bold text-white">B</div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-white leading-none">bakelette.official</span>
                      <span className="text-[8px] text-white/80">Instagram</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="text-[11px] font-semibold text-white/90">View on Instagram →</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <a
            href="https://instagram.com/bakelette.official"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 text-primary px-10 py-3.5 font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-sm"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/18WjsbYLsS/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 text-primary px-10 py-3.5 font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-sm"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/bakelette/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 text-primary px-10 py-3.5 font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://share.google/QM3vrylCI2OkWzygP"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 text-primary px-10 py-3.5 font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-sm"
          >
            Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowCrumbs;
