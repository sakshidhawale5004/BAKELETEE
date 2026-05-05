const FoundersLetterSection = () => (
  <section className="py-24 md:py-32 bg-ink text-primary-foreground overflow-hidden relative">
    {/* Decorative blobs */}
    <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

    <div className="container relative">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">From the Kitchen</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-display leading-tight">
          A Letter from Our <em className="font-script text-primary">Founders</em>
        </h2>

        <div className="mt-10 text-primary-foreground/80 text-lg leading-[1.9] space-y-5 text-left md:text-center">
          <p>Dear You,</p>
          <p>
            Bakelette didn't begin as a business idea. It began as a shared frustration — a love for sweet indulgences,
            but not for what they were made of.
          </p>
          <p>
            When health challenges pushed us away from the treats we grew up loving, we found ourselves in our kitchen,
            experimenting, failing, and trying again. We weren't chasing perfection. We were searching for something
            that felt right — lighter, cleaner, but still full of joy.
          </p>
          <p>
            Somewhere between burnt batches and small wins, <span className="text-primary font-semibold">Bakelette was born.</span>
          </p>
          <p>
            Today, every product we create carries that same intention — to never make you choose between indulgence
            and trust.
          </p>
          <p className="font-semibold text-primary-foreground">Because you deserve both.</p>
          <p className="font-bold text-xl text-primary">Guilt-free, not joy-free.</p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="font-script text-4xl text-primary">— Founders, Bakelette</p>
          <a
            href="/founders-letter"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/60 hover:text-primary transition-colors"
          >
            Read the full letter →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FoundersLetterSection;
