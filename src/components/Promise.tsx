import cookieImage from "@/assets/bakeletee-cookie.png";

const OurPromise = () => (
  <section className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
    <div className="container relative">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto fade-up">
        <a
          href="/founders-letter"
          className="mb-12 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 font-semibold shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all"
        >
          Read Our Founder's Letter →
        </a>

        <div className="relative fade-up w-full" style={{ animationDelay: "0.2s" }}>
          <img 
            src={cookieImage} 
            alt="Split bakelette cookie showing its wholesome ingredients" 
            className="w-full max-w-2xl mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurPromise;
