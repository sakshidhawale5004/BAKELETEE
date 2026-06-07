import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Sparkles } from "lucide-react";

const LoyaltyCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [stampCount, setStampCount] = useState(0); // Track stamps (0-5)

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
            <div className="w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] md:w-96 max-h-[90vh] md:max-h-[90vh] bg-white rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col animate-fade-in">
              {/* Warm Orange Header with Tagline */}
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 md:p-5 relative text-white flex-shrink-0 rounded-t-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors z-50"
                  aria-label="Close loyalty card"
                >
                  <X className="w-5 h-5 text-white" strokeWidth={3} />
                </button>

                {/* Header Content with Gift Icon */}
                <div className="flex items-start gap-3 pr-10">
                  <div className="text-2xl mt-0.5">🎁</div>
                  <div>
                    <h3 className="text-xl font-bold leading-tight">Bakelette Rewards</h3>
                    <p className="text-xs font-medium text-orange-100 mt-1">
                      Savor more, earn free treats
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 md:space-y-5 bg-white">
                
                {/* Digital Stamp Card Display */}
                <div className="relative">
                  {/* Blue Decorative Border with Skew */}
                  <div className="absolute inset-0 border-4 border-blue-600 rounded-2xl transform -skew-y-2 pointer-events-none"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-orange-50 rounded-xl p-4 border-2 border-orange-100">
                    {/* Card Title */}
                    <div className="text-center mb-5">
                      <div className="inline-block relative">
                        <div className="absolute inset-0 bg-blue-600 h-1 transform -skew-x-12 top-2"></div>
                        <h4 className="text-orange-600 font-black text-sm tracking-wider relative z-10">
                          YOUR DIGITAL STAMP CARD
                        </h4>
                      </div>
                    </div>

                    {/* Stamps Display - 6 positions */}
                    <div className="flex justify-center items-center gap-3 md:gap-4 px-2">
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="flex flex-col items-center">
                          {index <= 4 ? (
                            // Filled stamps (orange stars)
                            <div className="text-3xl md:text-4xl transform transition-transform hover:scale-110 cursor-pointer" onClick={() => setStampCount(index)}>
                              ✦
                            </div>
                          ) : index === 5 ? (
                            // 5th stamp (empty circle)
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-3 border-gray-300 flex items-center justify-center">
                              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                            </div>
                          ) : (
                            // 6th stamp (empty)
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-3 border-gray-200"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* How it works section */}
                <div className="relative">
                  <div className="absolute left-0 top-0 w-32 h-8 bg-blue-600 rounded-r-full transform -skew-y-3"></div>
                  <div className="relative pt-2">
                    <h4 className="text-white font-bold text-sm ml-2 relative z-10">How it works:</h4>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200 p-3 md:p-4">
                  <div className="space-y-2 text-center">
                    <p className="text-base font-bold text-blue-700">
                      1 ORDER = 1 STAMP ✦
                    </p>
                    <p className="text-lg font-bold text-blue-600">
                      4 STAMPS = REWARD 🎉
                    </p>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-2.5">
                  {/* Step 1 */}
                  <div className="flex gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white font-bold text-xs flex-shrink-0">1</span>
                    <span className="text-foreground leading-tight text-xs md:text-sm"><span className="font-semibold">Place stamp</span> on circle with every order</span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white font-bold text-xs flex-shrink-0">2</span>
                    <span className="text-foreground leading-tight text-xs md:text-sm"><span className="font-semibold">Complete 4</span> stamps on card</span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white font-bold text-xs flex-shrink-0">3</span>
                    <span className="text-foreground leading-tight text-xs md:text-sm"><span className="font-semibold">WhatsApp</span> photo to redeem</span>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white font-bold text-xs flex-shrink-0">✓</span>
                    <span className="text-foreground leading-tight text-xs md:text-sm"><span className="font-semibold">Unlock</span> premium surprise or discount</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleRedeemReward}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg text-white font-bold py-2.5 px-3 rounded-lg transition-all active:scale-95 text-sm mt-2"
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
