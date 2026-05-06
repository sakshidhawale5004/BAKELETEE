import { useEffect, useRef } from "react";

const items = [
  { q: "Ordered Vanilla cake for my son’s birthday celebration at school. It was everything it should be... couldn't have done it any other way.", who: "Tanvi L.", item: "Birthday Vanilla Cake" },
  { q: "Excellently baked walnut and pista loaf... no added sugar... very organic... what i really liked along with the product a small personalised msg given for you.", who: "Kajal S.", item: "Walnut & Pista Loaf" },
  { q: "Tried the Nutella Bombolini here and it was absolutely amazing! Perfectly soft, fluffy, and generously filled with rich Nutella. Not overly sweet.", who: "Kunal C.", item: "Nutella Bombolini" },
  { q: "Matcha and Oatmeal-carrot cookies... the flavours are very subtle. I requested the cookies to be less sweet and they were made exactly as needed.", who: "Saurabha B.", item: "Matcha & Oatmeal Cookies" },
  { q: "Ordered a ghee cake. The cake was made according to my need as I'm diabetic. The cake was simply delicious. I am looking forward to more such delicacies.", who: "Sanjay M.", item: "Custom Ghee Cake" },
  { q: "Cookies were not only having a tempting look but also at the same time they were fabulous in taste... and the cakes were soft and delicious.", who: "Kavita P.", item: "Classic Cookies" },
  { q: "Nice blended healthy ingredients in the cookies. Ate it happily and that too guilt-free as it is made of dates and other good organic ingredients.", who: "Anantha K.", item: "Date-Based Cookies" },
  { q: "Your Matcha cookies was beyond amazing! So crispy and perfectly balanced in sweetness. Loved every bite!", who: "Swati D.", item: "Matcha Cookies" },
  { q: "I have tried bakelette's banana walnut cake and it tastes really good. Cake is soft with loads of walnut and a peculiar taste of banana.", who: "Khushboo", item: "Banana Walnut Cake" },
  { q: "A crunchy delight on the inside with a super soft bite. The cookies are a gustatory treat. It satiates both the craving and the hunger.", who: "Violet D.", item: "Crunchy Soft Cookies" },
];

// Duplicate for seamless infinite loop
const doubled = [...items, ...items];

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let animId: number;
    const speed = 0.4; // px per frame

    const step = () => {
      pos += speed;
      // Reset when first set has fully scrolled past
      const halfWidth = track.scrollWidth / 2;
      if (pos >= halfWidth) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(step); };
    track.parentElement?.addEventListener("mouseenter", pause);
    track.parentElement?.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      track.parentElement?.removeEventListener("mouseenter", pause);
      track.parentElement?.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Love Letters</span>
          <h2 className="mt-4 text-4xl md:text-6xl">
            What Our <em className="font-script text-primary">Bake-Lovers</em> Say
          </h2>
        </div>
      </div>

      {/* Full-width scrolling strip */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
          {doubled.map((t, i) => (
            <blockquote
              key={i}
              className="w-[340px] md:w-[420px] shrink-0 bg-gradient-card rounded-3xl p-8 shadow-soft border border-border/60"
            >
              <div className="text-5xl font-display text-primary leading-none">"</div>
              <p className="mt-2 text-base text-foreground leading-relaxed">{t.q}</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg shrink-0">
                  {t.who[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.who}</div>
                  <div className="text-sm text-muted-foreground">{t.item}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
