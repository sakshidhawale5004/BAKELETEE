import { useState } from "react";
import { Sparkles, X } from "lucide-react";

const LoyaltyCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckStamps = () => {
    // Open WhatsApp link to redeem rewards
    const message = encodeURIComponent("Hi Bakelette! I've completed my loyalty card and would like to redeem my reward!");
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <div className="fixed left-4 bottom-20 z-40 md:left-4">
      {/* Collapsed Icon Button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full shadow-xl border-2 border-teal-300 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-2xl"
          aria-label="Open loyalty card"
          title="Loyalty Rewards Program"
        >
          <Sparkles className="w-7 h-7" />
        </button>
      )}

      {/* Expanded Card */}
      {isExpanded && (
        <>
          {/* Mobile Overlay Background */}
          <button
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            aria-label="Close loyalty card"
          />

          {/* Card Container - Left Positioned and Properly Sized */}
          <div className="fixed inset-0 md:inset-auto md:left-4 md:bottom-20 md:w-[420px] md:max-h-[90vh] md:rounded-3xl bg-background overflow-y-auto animate-fade-in z-50 rounded-none md:shadow-2xl md:border md:border-border flex flex-col">
            {/* Teal Header with Close Button */}
            <div className="bg-gradient-to-r from-teal-400 to-teal-500 p-5 md:p-6 relative text-white md:rounded-t-3xl flex-shrink-0">
              {/* Close Button - Clearly Visible */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/25 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-sm border border-white/30"
                aria-label="Close loyalty card"
              >
                <X className="w-6 h-6 text-white" strokeWidth={3} />
              </button>

              {/* Header Content */}
              <div className="flex items-center gap-3 pr-12">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold leading-tight">Bakelette Loyalty Card</h3>
                  <p className="text-sm font-medium text-teal-100">
                    Earn rewards with every purchase
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-5 md:space-y-6 bg-background">
              {/* Loyalty Card Info Box */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl md:rounded-3xl border-2 border-teal-200/50 p-5 md:p-6">
                <div className="space-y-3 text-center">
                  <p className="text-sm font-bold text-teal-700">
                    📋 1 ORDER = 1 TICK
                  </p>
                  <p className="text-lg font-bold text-teal-600">
                    4 TICKS = 1 REWARD
                  </p>
                  <p className="text-xs text-teal-600 italic">
                    (Physical loyalty card provided with your first order)
                  </p>
                </div>
              </div>

              {/* How it works */}
              <div className="space-y-4">
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  How it works:
                </h4>
                <div className="space-y-3 md:space-y-4">
                  {/* Step 1 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 pt-0.5">
                      <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-500 text-white font-bold text-sm md:text-base">
                        1
                      </span>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 leading-snug font-medium">
                        <span className="font-bold">First time customer?</span> A physical loyalty card will be provided with your first order.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 pt-0.5">
                      <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-500 text-white font-bold text-sm md:text-base">
                        2
                      </span>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 leading-snug font-medium">
                        <span className="font-bold">Place a tick</span> on one of the circles on your loyalty card with every purchase.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 pt-0.5">
                      <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-500 text-white font-bold text-sm md:text-base">
                        3
                      </span>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 leading-snug font-medium">
                        <span className="font-bold">Complete 4 circles</span> by placing ticks on your loyalty card.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 pt-0.5">
                      <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-500 text-white font-bold text-sm md:text-base">
                        4
                      </span>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 leading-snug font-medium">
                        <span className="font-bold">Take a photo</span> of your completed loyalty card and WhatsApp it to us.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 pt-0.5">
                      <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-500 text-white font-bold text-sm md:text-base">
                        🎉
                      </span>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 leading-snug font-medium">
                        <span className="font-bold">Unlock your reward!</span> Get a premium surprise bake or special discount on your 5th order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleCheckStamps}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 md:py-3.5 px-6 rounded-full hover:shadow-lg transition-all active:scale-95 text-sm md:text-base"
              >
                Redeem My Reward
              </button>

              {/* Info Note */}
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                <p className="text-xs text-teal-700 leading-snug">
                  <span className="font-semibold">📸 How to redeem:</span> Click "Redeem My Reward" or WhatsApp us a photo of your completed loyalty card to claim your premium bake or discount!
                </p>
              </div>

              {/* Extra spacing for mobile scrolling */}
              <div className="h-2" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoyaltyCard;
