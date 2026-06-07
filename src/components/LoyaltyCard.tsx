import { useState } from "react";
import { MessageCircle, X, CheckCircle2 } from "lucide-react";

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
          <div className="fixed inset-0 md:inset-auto md:left-4 md:bottom-20 z-50 flex items-center justify-center md:items-end md:justify-start p-2 md:p-0">
            <div className="w-full sm:w-96 md:w-80 max-h-[95vh] md:max-h-auto bg-white rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col animate-fade-in mx-2 sm:mx-0">
              
              {/* Compact Teal Header */}
              <div className="bg-gradient-primary p-2.5 md:p-4 relative text-primary-foreground flex-shrink-0 rounded-t-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors z-50"
                  aria-label="Close loyalty card"
                >
                  <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-foreground" strokeWidth={3} />
                </button>

                {/* Header Content - Centered */}
                <div className="text-center pr-6">
                  <h3 className="text-base md:text-lg font-bold leading-tight">Bakelette Loyalty Card</h3>
                </div>
              </div>

              {/* Main Content - Compact */}
              <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-2.5 md:space-y-3 bg-white">
                
                {/* Important Note - Compact */}
                <div className="bg-primary/5 rounded-lg border border-primary/20 p-2.5">
                  <p className="text-xs text-primary font-semibold leading-snug">
                    📍 <strong>First-time customers</strong> receive a physical loyalty card with their first order
                  </p>
                </div>

                {/* Loyalty Progress Display - Compact */}
                <div className="bg-gradient-warm rounded-xl p-3 md:p-4 border-2 border-primary/20">
                  {/* Stamps Title with Icons */}
                  <div className="text-center mb-3">
                    <h4 className="text-primary font-bold text-xs md:text-sm tracking-wider uppercase">
                      Stamps Earned
                    </h4>
                  </div>

                  {/* Stamps Display - 4 + 1 */}
                  <div className="flex justify-center items-center gap-2 md:gap-3 px-2 mb-3">
                    {[1, 2, 3, 4].map((index) => (
                      <div key={index} className="flex flex-col items-center">
                        {/* Filled stamps with checkmark */}
                        <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary fill-primary text-primary-foreground" />
                      </div>
                    ))}
                    {/* 5th stamp - Empty/Next */}
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-primary/40 flex items-center justify-center bg-primary/5">
                      <span className="text-xs text-primary/60 font-bold">5</span>
                    </div>
                  </div>

                  {/* Progress Text */}
                  <div className="text-center bg-primary/10 rounded-lg p-2">
                    <p className="text-xs md:text-sm font-bold text-primary">
                      4 Stamps Completed → Ready to Redeem! 🎉
                    </p>
                  </div>
                </div>

                {/* Quick Info - Compact */}
                <div className="bg-primary/5 rounded-lg p-2.5 border border-primary/15">
                  <div className="space-y-1.5 text-center">
                    <p className="text-xs font-bold text-primary">
                      Per Piece: ₹120
                    </p>
                    <p className="text-xs font-semibold text-primary/80">
                      2 Pieces: ₹240
                    </p>
                  </div>
                </div>

                {/* How it works - Compact */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">How it works:</h4>
                  
                  <div className="space-y-1.5 text-xs">
                    {/* Step 1 */}
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0 text-white">1</span>
                      <span className="text-foreground leading-snug"><span className="font-semibold">Place tick</span> on circles with every order</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0 text-white">2</span>
                      <span className="text-foreground leading-snug"><span className="font-semibold">Complete 4 stamps</span> on your card</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0 text-white">3</span>
                      <span className="text-foreground leading-snug"><span className="font-semibold">WhatsApp</span> your loyalty card image</span>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0 text-white">✓</span>
                      <span className="text-foreground leading-snug"><span className="font-semibold">Unlock</span> reward on 5th order</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons - Compact */}
                <div className="space-y-2 mt-2">
                  <button
                    onClick={handleRedeemReward}
                    className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground font-bold py-2 px-3 rounded-lg transition-all active:scale-95 text-xs md:text-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Check My Stamps
                  </button>
                  
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="w-full border-2 border-primary text-primary font-bold py-1.5 px-3 rounded-lg transition-all hover:bg-primary/5 text-xs md:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoyaltyCard;
