import { useEffect, useRef } from "react";

const items = [
  { q: "The Nutella cookies are absolutely divine! My kids can't get enough. Love that it's made with jaggery — guilt-free indulgence!", who: "Priya M.", item: "Nutella Stuffed Chocochip" },
  { q: "Ordered the gift hamper for Diwali. The packaging was gorgeous and every item tasted homemade in the best way. Will order again!", who: "Arjun S.", item: "Gift Hamper" },
  { q: "The Pistachio Lime Loaf is unlike anything I've tasted. So fresh, so flavourful. Bakelette has set a new standard for me.", who: "Meera K.", item: "Pistachio Lime Loaf" },
  { q: "Finally a bakery that uses real ingredients. The banana walnut loaf had actual walnuts! Refreshingly honest baking.", who: "Rohit D.", item: "Banana Walnut Loaf" },
  { q: "Placed an order for my office team and everyone loved it! The packaging is premium and the taste is exceptional.", who: "Sneha R.", item: "Corporate Gifting" },
  { q: "The burnt butter jaggery cookies are my absolute weakness. I keep a box on my desk at all times!", who: "Kavya T.", item: "Burnt Butter Jaggery" },
  { q: "The Mumbai Spice Brew cookie with ginger tea is the best rainy day combination. Pure comfort.", who: "Rahul V.", item: "Mumbai Spice Brew" },
  { q: "I'm impressed by the quality of ingredients. You can really taste the difference when someone uses pure jaggery instead of white sugar.", who: "Ananya P.", item: "Jaggery Bakes" },
  { q: "The Ragi Nibbles are my go-to healthy snack. Crunchy, satisfying, and not too sweet. Perfect for work breaks.", who: "Vikram L.", item: "Ragi Nibbles" },
  { q: "Bakelette is my favorite find this year. Everything from the website to the packaging to the last crumb is perfect.", who: "Ishita B.", item: "All-time Favorite" },
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
