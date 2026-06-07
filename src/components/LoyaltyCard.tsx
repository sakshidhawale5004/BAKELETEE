import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const LoyaltyCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRedeemReward = () => {
    // Open WhatsApp link to redeem rewards
    const message = encodeURIComponent("Hi Bakelette! I've completed my loyalty card with 4 stamps and would like to redeem my reward!");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="fixed left-4 bottom-20 z-40 md:left-4">
      {/* Collapsed Icon Button - WhatsApp Style */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-14 h-14 bg-gradient-primary rounded-full shadow-xl flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform duration-300 hover:shadow-glow"
          aria-label="Open loyalty card"
          title="Bakelette Loyalty Card"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Expanded Card */}
      {isExpanded && (
        <>
          {/* Mobile & Desktop Overlay Background */}
          <button
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/40 z-40"
            aria-label="Close loyalty card"
          />

          {/* Card Container - Compact Modal */}
          <div className="fixed inset-0 md:inset-auto md:left-4 md:bottom-20 z-50 flex items-center justify-center md:items-end md:justify-start p-3 md:p-0">
            <div className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] md:w-96 max-h-[85vh] md:max-h-[85vh] bg-white rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col animate-fade-in">
              {/* Teal Header */}
              <div className="bg-gradient-primary p-4 md:p-5 relative text-primary-foreground flex-shrink-0 rounded-t-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors z-50"
                  aria-label="Close loyalty card"
                >
                  <X className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
                </button>

                {/* Header Content with aligned gift emoji */}
                <div className="flex items-center gap-3 pr-10">
                  <span className="text-2xl leading-none">🎁</span>
                  <h3 className="text-xl font-bold leading-tight">Bakelette Rewards</h3>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 md:space-y-5 bg-white">
                
                {/* Important Note */}
                <div className="bg-primary/5 rounded-lg border border-primary/20 p-3">
                  <p className="text-xs text-primary font-semibold leading-snug">
                    🎯 <strong>First-time customers</strong> receive a physical loyalty card with their first order
                  </p>
                </div>

                {/* Digital Stamp Card Display */}
                <div className="relative">
                  {/* Card Content with subtle border */}
                  <div className="relative bg-gradient-warm rounded-2xl p-5 border-2 border-primary/20">
                    {/* Card Title */}
                    <div className="text-center mb-5">
                      <h4 className="text-primary font-bold text-sm tracking-wider uppercase">
                        Your Loyalty Stamps
                      </h4>
                    </div>

                    {/* Stamps Display - 5 positions */}
                    <div className="flex justify-center items-center gap-4 px-2">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <div key={index} className="flex flex-col items-center">
                          {index <= 4 ? (
                            // Filled stamps (teal stars)
                            <span className="text-4xl text-primary transform transition-transform hover:scale-110">✦</span>
                          ) : (
                            // 5th stamp (empty circle - next reward)
                            <div className="w-8 h-8 rounded-full border-3 border-primary/40 flex items-center justify-center bg-primary/5">
                              <span className="text-xs text-primary/40">+</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-primary/10 rounded-xl border-2 border-primary/20 p-4">
                  <div className="space-y-2 text-center">
                    <p className="text-sm font-bold text-primary">
                      1 ORDER = 1 STAMP
                    </p>
                    <p className="text-lg font-bold text-primary">
                      4 STAMPS = REWARD
                    </p>
                  </div>
                </div>

                {/* How it works section */}
                <div className="space-y-2.5">
                  <h4 className="text-sm font-bold text-foreground">How it works:</h4>
                  
                  {/* Step 1 */}
                  <div className="flex gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0">1</span>
                    <span className="text-foreground leading-tight text-xs md:text-sm"><span className="font-semibold">Place tick</span> on one of the circles with every order</span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0">2</span>
                    <span className="text-foreground leading-tight text-xs md:text-sm"><span className="font-semibold">Complete 4 circles</span> on your card</span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0">3</span>
                    <span className="text-foreground leading-tight text-xs md:text-sm"><span className="font-semibold">WhatsApp</span> the image of your loyalty card</span>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0">✓</span>
                    <span className="text-foreground leading-tight text-xs md:text-sm"><span className="font-semibold">Unlock</span> premium surprise bake or discount on your 5th order</span>
                  </div>
                </div>

                {/* CTA Button - aligned with WhatsApp */}
                <button
                  onClick={handleRedeemReward}
                  className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground font-bold py-2.5 px-3 rounded-xl transition-all active:scale-95 text-sm mt-2 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Redeem Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoyaltyCard;
