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
            <div className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] md:w-96 max-h-[70vh] md:max-h-[75vh] bg-white rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col animate-fade-in">
              {/* Teal Header with Close Button */}
              <div className="bg-gradient-primary p-3 md:p-4 relative text-primary-foreground flex-shrink-0 rounded-t-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors z-50"
                  aria-label="Close loyalty card"
                >
                  <X className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
                </button>

                {/* Header Content */}
                <div className="pr-10">
                  <h3 className="text-lg font-bold leading-tight">Bakelette Loyalty</h3>
                  <p className="text-xs font-medium text-primary-foreground/80 mt-0.5">
                    Earn rewards on every order
                  </p>
                </div>
              </div>

              {/* Main Content - Compact */}
              <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-white">
                {/* Info Box */}
                <div className="bg-primary/5 rounded-lg border border-primary/20 p-3">
                  <div className="space-y-1 text-center">
                    <p className="text-sm font-bold text-primary">
                      1 ORDER = 1 STAMP
                    </p>
                    <p className="text-base font-bold text-primary">
                      4 STAMPS = REWARD
                    </p>
                    <p className="text-xs text-primary/70 mt-1">
                      Physical card with 1st order
                    </p>
                  </div>
                </div>

                {/* How it works - Compact */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground">How it works:</h4>
                  <div className="space-y-1.5 text-xs">
                    {/* Step 1 */}
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0">1</span>
                      <span className="text-foreground leading-tight"><span className="font-semibold">Place stamp</span> on circle with every order</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0">2</span>
                      <span className="text-foreground leading-tight"><span className="font-semibold">Complete 4</span> stamps on card</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0">3</span>
                      <span className="text-foreground leading-tight"><span className="font-semibold">WhatsApp</span> photo to redeem</span>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground font-bold text-xs flex-shrink-0">✓</span>
                      <span className="text-foreground leading-tight"><span className="font-semibold">Unlock</span> premium surprise or discount</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleRedeemReward}
                  className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground font-bold py-2 px-3 rounded-lg transition-all active:scale-95 text-sm"
                >
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
