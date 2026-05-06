import Header from "@/components/Header";
import Footer from "@/components/Footer";
import founder from "@/assets/founders.jpeg";

const FoundersLetter = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="container mx-auto py-32 px-4 max-w-5xl flex-1 mt-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <div className="sticky top-32">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant border border-border">
                <img 
                  src={founder} 
                  alt="Bakelette Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-script text-3xl text-primary mt-6 text-center">— Founders</p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-8">Founder's Letter</h1>
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              <p className="mb-6">Dear You,</p>
              <p className="mb-6">Bakelette didn't begin as a business idea. It began as a shared frustration — a love for sweet indulgences, but not for what they were made of.</p>
              <p className="mb-6">When health challenges pushed us away from the treats we grew up loving, we found ourselves in our kitchen, experimenting, failing, and trying again. We weren't chasing perfection. We were searching for something that felt right — lighter, cleaner, but still full of joy.</p>
              <p className="mb-6">Somewhere between burnt batches and small wins, Bakelette was born.</p>
              <p className="mb-6">Today, every product we create carries that same intention — to never make you choose between indulgence and trust.</p>
              <p className="mb-6">Because you deserve both.</p>
              <p className="mb-6">Guilt-free, not joy-free.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};


export default FoundersLetter;
