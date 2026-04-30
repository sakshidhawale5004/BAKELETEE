import { waLink } from "@/lib/contact";

const Gifting = () => (
  <section id="gifting" className="py-24 md:py-32 bg-background">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative">
        <div className="absolute -inset-6 bg-gradient-primary rounded-[2rem] opacity-20 blur-2xl" />
        <img
          src="/gift-hamper-branded.png"
          alt="Bakelette premium gift hamper"
          loading="lazy"
          className="relative rounded-[2rem] shadow-3d w-full aspect-square md:aspect-[4/5] object-cover card-3d"
        />
      </div>

      <div className="fade-up">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Premium Gifting</span>
        <h2 className="mt-4 text-4xl md:text-6xl text-balance leading-[1.05]">
          Baked with Love,
          <br />
          <em className="font-script text-primary">Wrapped with Care</em>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          Our signature gift hampers are perfect for festivals, celebrations, and corporate
          gifting. Each hamper is thoughtfully curated with our bestsellers and seasonal specials,
          packaged in premium eco-friendly boxes with handwritten notes.
        </p>
        <ul className="mt-8 space-y-3">
          {[
            "Custom assortment — pick your favourites",
            "Premium eco-packaging with ribbons",
            "Personalised handwritten note included",
            "Corporate bulk orders welcome",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <span className="mt-1 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs shrink-0">✓</span>
              <span className="text-foreground">{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href={waLink("Hi! I'd like to order a gift hamper")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 font-semibold shadow-glow hover:shadow-3d hover:-translate-y-1 transition-all"
          >
            Customise Hamper
          </a>
          <span className="text-muted-foreground">Starting at <strong className="text-foreground">₹999</strong></span>
        </div>
      </div>
    </div>
  </section>
);

export default Gifting;
