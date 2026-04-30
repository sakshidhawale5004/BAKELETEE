import hero from "@/assets/hero-bakery.jpg";

const Hero = () => (
  <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
    <img
      src={hero}
      alt="Artisan bakery spread of cookies, jaggery loaf cake, brownies and oats"
      className="absolute inset-0 w-full h-full object-cover scale-105"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl float-anim" />

    <div className="container relative z-10 py-32 md:py-40">
      <div className="max-w-2xl reveal">
        <span className="inline-flex items-center gap-2 text-primary-glow uppercase tracking-[0.25em] text-xs md:text-sm font-medium">
          <span className="h-px w-10 bg-primary-glow" />
          Artisanal Bakery. Est. 2025
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] text-balance font-bold">
          Wholesome Bakes,
          <br />
          <em className="font-script text-primary-glow not-italic font-medium">
            <span className="italic">Crafted with Love</span>
          </em>
        </h1>
        <p className="mt-6 text-base md:text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
          Because Your Bakes Should Uplift You, Not Weigh You Down.
        </p>



        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#products"
            className="rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 font-semibold shadow-glow hover:shadow-3d hover:-translate-y-1 transition-all"
          >
            Shop Fresh Bakes
          </a>
          <a
            href="#gifting"
            className="rounded-full border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 font-semibold backdrop-blur-md hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all"
          >
            Order Bundle
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-xs uppercase tracking-widest animate-bounce">
      Scroll
    </div>
  </section>
);

export default Hero;
