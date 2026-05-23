import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import { waLink } from "@/lib/contact";
import subscribeHero from "@/assets/subscribe-hero.png";
import { 
  Check, Star, Calendar, MapPin, Pause, Play, Sparkles, 
  Clock, ArrowRight, Lock, HelpCircle, MessageSquare, 
  Info, Bell, ShoppingBag, ShieldCheck, CheckCircle2, ChevronDown,
  Smartphone
} from "lucide-react";
import { toast } from "sonner";

// Simulated Riddles for Wednesday Bakes
const RIDDLES = [
  {
    riddle: "I am dark yet sweet, dotted with sea salt from the coast. Browned in butter before I bake, I'm what teams love the most. What am I?",
    answer: "Brown Butter Sea Salt Chocolate Chip Cookies",
    hint: "Think of our signature cookies that melt in your mouth."
  },
  {
    riddle: "Earthy and rich, I use no refined white grain. Made with ragi, almond, and pistachio, I am crunchy health in a stick. What am I?",
    answer: "Ragi Almond Pistachio Sticks",
    hint: "A healthy tea-time snack shaped like sticks."
  },
  {
    riddle: "Sweetened by nature's gold, I bypass the cane. Paired with warm spices, I keep you guilt-free from pain. What am I?",
    answer: "Jaggery Spiced Cake Loaf",
    hint: "An earthy alternative to refined sugar loaves."
  }
];

const Subscribe = () => {
  // Search query state for Header
  const [searchQuery, setSearchQuery] = useState("");

  // Delivery Calculator State
  const [distance, setDistance] = useState(8);
  const [deliveryFee, setDeliveryFee] = useState(75);

  // Pause Simulation State
  const [pauseDuration, setPauseDuration] = useState(7);
  const [selectedPlanToPause, setSelectedPlanToPause] = useState("regular");
  const [isPaused, setIsPaused] = useState(false);
  const [pausedUntilDate, setPausedUntilDate] = useState("");

  // Phone registration simulation for Regular plan
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  // Wednesday Riddle State
  const [riddleIndex, setRiddleIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [showRiddleHint, setShowRiddleHint] = useState(false);
  const [riddleRevealed, setRiddleRevealed] = useState(false);
  const [riddleFeedback, setRiddleFeedback] = useState("");

  // Accordion FAQ states
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({
    0: true, // open the first FAQ by default
  });

  // Calculate delivery fee whenever distance changes
  useEffect(() => {
    if (distance <= 10) {
      setDeliveryFee(75);
    } else if (distance <= 15) {
      setDeliveryFee(125);
    } else {
      setDeliveryFee(-1); // Subject to distance
    }
  }, [distance]);

  // Handle Pausing simulation
  const handlePause = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPaused) {
      setIsPaused(false);
      toast.success("Subscription resumed successfully! Welcome back to the bliss!");
      return;
    }

    const resumeDate = new Date();
    resumeDate.setDate(resumeDate.getDate() + pauseDuration);
    
    const formattedDate = resumeDate.toLocaleDateString("en-IN", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    setPausedUntilDate(formattedDate);
    setIsPaused(true);
    toast.success(`Subscription paused for ${pauseDuration} days. Will automatically resume on ${formattedDate}.`, {
      duration: 5000,
    });
  };

  // Handle Phone Registration
  const handleRegisterPhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    localStorage.setItem("bakelette_subscribed_phone", phoneNumber);
    setIsRegistered(true);
    toast.success("Phone number registered! You can now place direct 1-tap orders.");
  };

  // Riddle check
  const handleGuessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanGuess = userGuess.trim().toLowerCase();
    const cleanAnswer = RIDDLES[riddleIndex].answer.toLowerCase();
    
    if (cleanGuess.length < 3) {
      toast.error("Please type a longer guess!");
      return;
    }

    if (cleanAnswer.includes(cleanGuess) || cleanGuess.includes("cookie") && cleanAnswer.includes("cookie")) {
      setRiddleFeedback("🎉 Spot on! That's correct!");
      setRiddleRevealed(true);
      toast.success("You solved it! 🍪");
    } else {
      setRiddleFeedback("❌ Close! Try again or reveal the hint.");
    }
  };

  // Load registered phone if exists
  useEffect(() => {
    const saved = localStorage.getItem("bakelette_subscribed_phone");
    if (saved) {
      setPhoneNumber(saved);
      setIsRegistered(true);
    }
  }, []);

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <main className="min-h-screen bg-background flex flex-col font-sans">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Banner image */}
        <img
          src={subscribeHero}
          alt="Artisanal baked goods spread — cookies, jaggery loaf, pistachio sticks and a gift box"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Subtle teal glow bottom-right */}
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl float-anim" />

        <div className="container relative z-10 py-32 md:py-40 mx-auto px-4">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10">
              <Sparkles className="w-4 h-4 text-primary-glow animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary-foreground">The Bakelette Society</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] font-bold text-balance">
              Your Daily Dose of{" "}
              <em className="font-script text-primary-glow not-italic">Bliss</em>,{" "}
              Curated.
            </h1>

            <p className="mt-6 text-base md:text-xl text-primary-foreground/85 max-w-xl leading-relaxed font-light">
              No binding contracts. Zero worries. Select a plan tailored to your lifestyle and indulge in healthy, premium artisanal bakes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="rounded-full bg-gradient-primary text-primary-foreground px-8 py-4 font-semibold shadow-glow hover:shadow-3d hover:-translate-y-1 transition-all"
              >
                Explore Society Plans
              </a>
              <a
                href="#calculator"
                className="rounded-full border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 font-semibold backdrop-blur-md hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all"
              >
                Delivery Zones
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-xs uppercase tracking-widest animate-bounce">
          Scroll
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 bg-background relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-primary">Choose Your Membership</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Find the subscription that fits your rhythm. Whether you crave daily healthy options or exclusive weekend treats, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* PLAN 1: Regular Daily Consumer */}
            <div className="bg-gradient-card rounded-[2.5rem] p-8 md:p-10 border border-border shadow-soft hover:shadow-elegant transition-all duration-500 flex flex-col justify-between relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-x-8 -translate-y-8" />
              
              <div>
                {/* Plan Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full">
                      Regular Daily Consumer
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display text-primary-deep mt-3">Daily Bliss Ritual</h3>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end">
                      <span className="text-3xl font-bold font-display text-primary">₹999</span>
                      <span className="text-xs text-muted-foreground ml-1">/month</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest block mt-0.5">Cancel Anytime</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Perfect for your daily health routine. Get our premium, wholesome bakes delivered straight to your door throughout the week. Stores your number directly for lightning-fast checkout.
                </p>

                {/* Key Perks */}
                <h4 className="font-semibold text-xs uppercase tracking-widest text-primary-deep mb-4">What's Included:</h4>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      <strong>Direct Ordering:</strong> Skip the queues and checkout in 1 tap.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      <strong>Direct Phone Registry:</strong> Your phone number is saved securely to manage future orders independently.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      <strong>Complimentary Monthly Item:</strong> Enjoy a chef-special free item on any weekend of the month.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      <strong>Flexible Pause:</strong> Pause your plan for up to 15 days or resume immediately whenever you wish.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Direct Ordering Simulator */}
              <div className="mt-auto border-t border-border/80 pt-6">
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-border/50 text-left">
                  <p className="text-xs font-semibold text-primary-deep flex items-center gap-1.5 mb-3">
                    <Smartphone className="w-4 h-4 text-primary" />
                    Simulated Instant Ordering Registry
                  </p>
                  
                  {isRegistered ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 p-2.5 rounded-xl text-xs text-primary-deep">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <p className="font-bold">Number Registered: {phoneNumber}</p>
                          <p className="text-[10px] opacity-80">1-Tap ordering is active for this browser.</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          localStorage.removeItem("bakelette_subscribed_phone");
                          setIsRegistered(false);
                          setPhoneNumber("");
                          toast.info("Phone number cleared.");
                        }}
                        className="text-[10px] text-destructive hover:underline block"
                      >
                        Reset / Register another number
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleRegisterPhone} className="flex gap-2">
                      <input 
                        type="tel"
                        placeholder="Enter 10-digit mobile"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="bg-white border border-border focus:border-primary px-3 py-2 text-xs rounded-xl focus:outline-none flex-1 font-medium"
                      />
                      <button 
                        type="submit"
                        className="bg-primary text-white text-xs px-4 py-2 rounded-xl font-bold hover:bg-primary-deep transition-all shrink-0"
                      >
                        Register
                      </button>
                    </form>
                  )}
                </div>

                <a 
                  href={waLink("Hi Bakelette! I'd like to subscribe to the Daily Bliss Ritual (₹999/mo). Here is my number: " + (phoneNumber || "[Not Registered]"))}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full bg-primary-deep hover:bg-primary text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm text-center flex items-center justify-center gap-2 cursor-pointer shadow-soft group"
                >
                  <span>Subscribe Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* PLAN 2: Weekend Exclusive Consumers */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-primary/20 shadow-glow hover:shadow-elegant transition-all duration-500 flex flex-col justify-between relative group overflow-hidden ring-1 ring-primary/10">
              <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
                ★ Exclusive Community
              </div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-x-8 -translate-y-8" />
              
              <div>
                {/* Plan Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="bg-accent/10 text-accent text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full">
                      Exclusive Weekend Consumer
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display text-primary-deep mt-3">Weekend Sanctuary</h3>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end">
                      <span className="text-3xl font-bold font-display text-primary">₹1299</span>
                      <span className="text-xs text-muted-foreground ml-1">/month</span>
                    </div>
                    <span className="text-[10px] text-accent uppercase tracking-widest block mt-0.5">WhatsApp Premium</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  For those who make weekends a celebration. Join an exclusive inner circle of baking enthusiasts. Fully community-driven with mid-week riddle reveals and strict premium slots.
                </p>

                {/* Key Perks */}
                <h4 className="font-semibold text-xs uppercase tracking-widest text-primary-deep mb-4">What's Included:</h4>
                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      <strong>WhatsApp Community:</strong> Direct access to the exclusive group for menu items & orders.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      <strong>Exclusive Rules:</strong> Dedicated ordering window between <strong>Friday 9:00 AM - Saturday 6:00 PM</strong> only.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      <strong>Wednesday Riddles:</strong> Mid-week interactive hints about the upcoming weekend bake.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      <strong>Complimentary Monthly Item:</strong> Free curated premium bake delivered on any weekend of the month.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">
                      <strong>Flexible Pause:</strong> Pause anytime for up to 15 days, with instant resumption options.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Ordering Window Countdown Live Indicator */}
              <div className="mt-auto border-t border-border pt-6">
                <div className="bg-accent/5 p-4 rounded-2xl border border-accent/20 text-left mb-4">
                  <p className="text-xs font-semibold text-accent flex items-center gap-1.5 mb-2">
                    <Clock className="w-4 h-4 text-accent" />
                    Ordering Window: Friday 9 AM - Saturday 6 PM
                  </p>
                  
                  {/* Visual Status Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-accent/15 text-[10px] text-accent font-bold">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                    Mid-Week Mode (Wednesday Riddles Active)
                  </div>
                </div>

                <a 
                  href={waLink("Hi Bakelette! I'd like to subscribe to the Weekend Sanctuary (₹1299/mo) and join the exclusive WhatsApp community group.")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-accent hover:bg-accent-foreground text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 text-sm text-center flex items-center justify-center gap-2 cursor-pointer shadow-soft group"
                >
                  <span>Request WhatsApp Group Invite</span>
                  <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mid-week Wednesday Riddle Interactive Game */}
      <section className="py-20 bg-ink text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-accent uppercase tracking-widest text-[11px] font-bold">Wednesday Mid-Week Engagement</span>
            <h2 className="text-3xl md:text-5xl font-display mt-3">The Wednesday Bake Riddle</h2>
            <p className="text-primary-foreground/70 mt-3 text-sm md:text-base max-w-xl mx-auto">
              For Weekend Exclusive members, Wednesday brings a delicious mystery. Read the riddle below to guess what's baking this coming weekend!
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 md:p-10 max-w-2xl mx-auto shadow-elegant">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Riddle #{riddleIndex + 1}
              </span>
              <button 
                onClick={() => {
                  setRiddleIndex((prev) => (prev + 1) % RIDDLES.length);
                  setUserGuess("");
                  setShowRiddleHint(false);
                  setRiddleRevealed(false);
                  setRiddleFeedback("");
                }}
                className="text-xs text-primary-glow hover:underline hover:text-white transition-colors"
              >
                Next Riddle →
              </button>
            </div>

            <p className="text-base md:text-lg italic font-display text-white/90 leading-relaxed mb-8">
              "{RIDDLES[riddleIndex].riddle}"
            </p>

            <form onSubmit={handleGuessSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text"
                  placeholder="Type your guess here..."
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  disabled={riddleRevealed}
                  className="bg-white/10 border border-white/20 focus:border-primary-glow px-4 py-3 rounded-xl focus:outline-none text-white placeholder:text-white/40 flex-1 font-medium disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={riddleRevealed}
                  className="bg-primary hover:bg-primary-glow disabled:bg-primary/40 text-white px-6 py-3 rounded-xl font-bold transition-all shrink-0 text-sm"
                >
                  Submit Guess
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                <button
                  type="button"
                  onClick={() => setShowRiddleHint(true)}
                  className="text-primary-glow hover:underline hover:text-white transition-colors"
                >
                  💡 Need a hint?
                </button>
                <span className="text-white/20">|</span>
                <button
                  type="button"
                  onClick={() => {
                    setRiddleRevealed(true);
                    setRiddleFeedback(`The correct answer is: ${RIDDLES[riddleIndex].answer}`);
                  }}
                  className="text-accent hover:underline hover:text-white transition-colors"
                >
                  👁️ Reveal Secret Bake
                </button>
              </div>
            </form>

            {showRiddleHint && !riddleRevealed && (
              <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-white/80 animate-in fade-in slide-in-from-top-2">
                <strong>Hint:</strong> {RIDDLES[riddleIndex].hint}
              </div>
            )}

            {riddleFeedback && (
              <div className={`mt-6 p-4 rounded-xl text-sm font-semibold text-center border animate-in zoom-in-95 ${
                riddleFeedback.includes("correct") || riddleFeedback.includes("correct")
                  ? "bg-primary/20 border-primary/40 text-primary-glow"
                  : "bg-destructive/20 border-destructive/40 text-destructive-foreground"
              }`}>
                {riddleFeedback}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pause Simulation Dashboard */}
      <section className="py-24 bg-background border-t border-border/50 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display text-primary">Pause Subscription Simulation</h2>
            <p className="text-muted-foreground mt-4 text-sm md:text-base max-w-xl mx-auto">
              We believe in giving you absolute control. Pause your subscription instantly for up to 15 days or resume it on your own terms. Try it below!
            </p>
          </div>

          <div className="bg-gradient-card rounded-[2rem] p-6 md:p-10 border border-border shadow-soft max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6 bg-primary/10 border border-primary/20 p-4 rounded-2xl">
              <Info className="w-5 h-5 text-primary shrink-0" />
              <p className="text-xs text-primary-deep leading-relaxed">
                <strong>Pause Policy:</strong> Valid for a maximum of 15 days at a time. The subscription resumes automatically after the chosen period, or you can click resume earlier at any point.
              </p>
            </div>

            <form onSubmit={handlePause} className="space-y-6">
              {/* Select subscription to simulate */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary-deep mb-2">
                  Select Subscription to Pause:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlanToPause("regular")}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      selectedPlanToPause === "regular" 
                        ? "bg-primary border-primary text-white shadow-soft" 
                        : "bg-white border-border text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    Daily Bliss (₹999)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPlanToPause("weekend")}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      selectedPlanToPause === "weekend" 
                        ? "bg-accent border-accent text-white shadow-soft" 
                        : "bg-white border-border text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    Weekend Sanctuary (₹1299)
                  </button>
                </div>
              </div>

              {/* Pause Duration Slider */}
              {!isPaused && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary-deep">
                      Pause Duration:
                    </label>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                      {pauseDuration} Days
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="15" 
                    value={pauseDuration}
                    onChange={(e) => setPauseDuration(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                    <span>1 Day</span>
                    <span>7 Days</span>
                    <span>15 Days (Max)</span>
                  </div>
                </div>
              )}

              {/* Simulated Status */}
              {isPaused && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <Pause className="w-4 h-4 text-yellow-600 animate-pulse" />
                    Subscription Paused
                  </div>
                  <p className="text-xs">
                    Your {selectedPlanToPause === "regular" ? "Daily Bliss" : "Weekend Sanctuary"} is paused. 
                    No deliveries will be dispatched. Resuming automatically on: <strong>{pausedUntilDate}</strong>.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit"
                className={`w-full font-bold py-3.5 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2 ${
                  isPaused 
                    ? "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-soft" 
                    : "bg-primary hover:bg-primary-deep text-white shadow-soft"
                }`}
              >
                {isPaused ? (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Resume Subscription Instantly</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pause Subscription ({pauseDuration} Days)</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Interactive Delivery Zone & Fee Calculator */}
      <section id="calculator" className="py-24 bg-gradient-warm relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-20 translate-y-20" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-[11px] font-bold">Delivery Zone Fee Estimator</span>
            <h2 className="text-3xl md:text-5xl font-display mt-3">Calculate Delivery Charges</h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base max-w-xl mx-auto">
              Check delivery rates based on your distance from our kitchen. Transparency is our core recipe.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 border border-border shadow-soft max-w-2xl mx-auto">
            <div className="space-y-6">
              
              {/* Distance Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary-deep">
                    Distance from Bakery Kitchen:
                  </label>
                  <span className="text-base font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                    {distance} Km
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="25" 
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                  <span>1 Km</span>
                  <span>10 Km (Flat ₹75)</span>
                  <span>15 Km (Flat ₹125)</span>
                  <span>25 Km+ (Custom Quote)</span>
                </div>
              </div>

              {/* Interactive Zone Progress bar */}
              <div className="relative pt-6 pb-2">
                <div className="h-2 bg-muted rounded-full w-full relative">
                  {/* Active highlight */}
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (distance / 25) * 100)}%` }}
                  />
                  {/* Flag indicators */}
                  <div className="absolute left-[40%] -top-1 w-3 h-3 bg-white border-2 border-primary rounded-full cursor-help" title="Zone 1 (10 Km)" />
                  <div className="absolute left-[60%] -top-1 w-3 h-3 bg-white border-2 border-primary rounded-full cursor-help" title="Zone 2 (15 Km)" />
                </div>
              </div>

              {/* Delivery Fee Calculation display Card */}
              <div className="bg-muted/40 rounded-2xl p-6 border border-border/50 text-center transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Estimated Delivery Charge</span>
                </div>
                
                {deliveryFee > 0 ? (
                  <div>
                    <p className="text-4xl md:text-5xl font-display font-bold text-primary-deep mt-1">
                      ₹{deliveryFee} <span className="text-sm font-normal text-muted-foreground">flat rate</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">
                      {distance <= 10 ? "Zone A Delivery: Within 10 Km" : "Zone B Delivery: 10 to 15 Km"}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-2xl md:text-3xl font-display font-bold text-accent mt-1">
                      Subject to Distance
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">
                      Beyond 15 Kms. We'll contact you for special dispatch options!
                    </p>
                    <a 
                      href={waLink(`Hi Bakelette! I'm located ${distance} km away and want to subscribe. Can I get a delivery fee quote?`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs bg-accent text-white px-4 py-2 rounded-xl font-bold hover:brightness-105 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Inquire Custom Delivery on WhatsApp
                    </a>
                  </div>
                )}
              </div>

              {/* Delivery Zone Details table */}
              <div className="border-t border-border pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary-deep mb-3">Delivery Tier Breakdown</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-2 border-b border-border/40">
                    <span className="text-muted-foreground font-medium">Up to 10 Km Zone</span>
                    <span className="font-bold text-primary-deep">₹75 flat fee</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/40">
                    <span className="text-muted-foreground font-medium">10 Km to 15 Km Zone</span>
                    <span className="font-bold text-primary-deep">₹125 flat fee</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground font-medium">Beyond 15 Km Zone</span>
                    <span className="font-bold text-accent">Subject to Distance (Contact Us)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Subscription FAQ / Rules Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-primary">Rules & FAQs</h2>
            <p className="text-muted-foreground mt-4 text-sm md:text-base">
              Learn more about how the Bakelette Society works and our subscription guidelines.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-soft transition-all duration-300">
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full flex justify-between items-center p-6 text-left font-display text-base md:text-lg text-primary-deep font-bold cursor-pointer hover:bg-muted/10"
              >
                <span>How does the flexible pause feature work?</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${faqOpen[0] ? "rotate-180" : ""}`} />
              </button>
              {faqOpen[0] && (
                <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1">
                  Both subscription tiers offer complete flexibility. You can pause your subscription for up to 15 days or resume it earlier whenever you want. Deliveries will be suspended immediately during this period, and no credits will go to waste. Simply use the online simulator here or send us a quick note on WhatsApp!
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-soft transition-all duration-300">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full flex justify-between items-center p-6 text-left font-display text-base md:text-lg text-primary-deep font-bold cursor-pointer hover:bg-muted/10"
              >
                <span>What are the rules for the Weekend Exclusive subscription?</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${faqOpen[1] ? "rotate-180" : ""}`} />
              </button>
              {faqOpen[1] && (
                <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1">
                  The Weekend Exclusive tier is specifically created for weekend lovers. Rules include:
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li>Strict ordering placement windows: Orders must be placed between <strong>Friday 9:00 AM and Saturday 6:00 PM</strong>.</li>
                    <li>Access to a private premium WhatsApp Community group for menu notifications and direct engagement.</li>
                    <li>Mid-week Wednesday riddle reveals about the chef's weekend recipes.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-soft transition-all duration-300">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full flex justify-between items-center p-6 text-left font-display text-base md:text-lg text-primary-deep font-bold cursor-pointer hover:bg-muted/10"
              >
                <span>How do I redeem my complimentary monthly item?</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${faqOpen[2] ? "rotate-180" : ""}`} />
              </button>
              {faqOpen[2] && (
                <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1">
                  Every subscription model includes a small complimentary monthly artisanal item curated by our head baker. You can request it on any weekend dispatch of the month. When placing your weekend order, just tick the complimentary checkbox or mention it to our concierge on WhatsApp!
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-soft transition-all duration-300">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full flex justify-between items-center p-6 text-left font-display text-base md:text-lg text-primary-deep font-bold cursor-pointer hover:bg-muted/10"
              >
                <span>How are delivery charges handled?</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${faqOpen[3] ? "rotate-180" : ""}`} />
              </button>
              {faqOpen[3] && (
                <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1">
                  Delivery charges are flat depending on zones:
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li>Within 10 km from our kitchen: ₹75 flat per delivery.</li>
                    <li>Between 10 km and 15 km: ₹125 flat per delivery.</li>
                    <li>Beyond 15 km: Subject to actual distance. Contact us for custom dispatch quotes!</li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPopup />
    </main>
  );
};

export default Subscribe;
