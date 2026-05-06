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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {reels.map((reel, i) => (
            <div
              key={i}
              className="fade-up relative w-full bg-white rounded-xl overflow-hidden shadow-soft border border-border/50 transition-all duration-300 h-full"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {activeReel === i ? (
                <div className="w-full h-full min-h-[450px] animate-in fade-in duration-500">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={reel.url}
                    data-instgrm-version="14"
                    data-instgrm-captioned={false}
                    style={{
                      background: "#FFF",
                      border: "0",
                      borderRadius: "0",
                      margin: "0",
                      padding: "0",
                      width: "100%",
                    }}
                  ></blockquote>
                </div>
              ) : (
                <div 
                  className="flex flex-col h-full cursor-pointer group bg-white" 
                  onClick={() => setActiveReel(i)}
                >
                  {/* Instagram Header Mockup */}
                  <div className="p-3 flex items-center justify-between border-b border-border/10 bg-white">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
                        <div className="w-full h-full rounded-full bg-white p-[1px]">
                           <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center text-[8px] font-bold text-primary">B</div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold leading-none">bakelette.official</span>
                        <span className="text-[8px] text-muted-foreground">Original audio</span>
                      </div>
                    </div>
                    <div className="text-[10px] bg-[#0095F6] text-white px-3 py-1 rounded-md font-semibold">
                      View profile
                    </div>
                  </div>

                  {/* Thumbnail with Play Button */}
                  <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                    <img
                      src={reel.thumb}
                      alt="Instagram Reel"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Instagram Footer Mockup */}
                  <div className="p-3 space-y-2 bg-white flex-1 flex flex-col justify-between">
                    <div className="text-[10px] font-medium text-primary hover:underline">View more on Instagram</div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 opacity-60">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                        </div>
                        <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                      </div>
                      <div className="text-[9px] font-bold">{20 + Math.floor(Math.random() * 50)} likes</div>
                      <div className="text-[9px] text-muted-foreground border-t border-border/10 pt-1.5 mt-1.5 flex items-center justify-between">
                        <span>Add a comment...</span>
                        <span className="text-[10px]">☺</span>
                      </div>
                    </div>
                  </div>
                </div>
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
