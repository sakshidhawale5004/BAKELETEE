import { useState } from "react";
import { Gift, X } from "lucide-react";

const LoyaltyCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed left-4 bottom-20 z-40 md:left-6">
      {/* Collapsed Icon Button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-xl border-2 border-orange-300 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:shadow-2xl"
          aria-label="Open loyalty card"
        >
          <Gift className="w-7 h-7" />
        </button>
      )}

      {/* Expanded Card */}
      {isExpanded && (
        <>
          {/* Mobile Overlay Background */}
          <button
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/40 md:hidden z-40"
            aria-label="Close loyalty card"
          />

          {/* Card Container */}
          <div className="fixed inset-0 md:fixed md:left-6 md:bottom-20 md:w-80 md:max-h-[70vh] md:rounded-3xl bg-background overflow-y-auto animate-fade-in z-50 md:z-40 rounded-none md:shadow-2xl md:border md:border-border flex flex-col">
            {/* Orange Header with Close Button */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 relative text-white md:rounded-t-3xl flex-shrink-0">
              {/* Close Button - More Prominent */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors backdrop-blur-sm md:top-6 md:right-6"
                aria-label="Close loyalty card"
              >
                <X className="w-6 h-6 text-white" strokeWidth={3} />
              </button>

              {/* Header Content */}
              <div className="flex items-center gap-4 pr-12">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 flex-shrink-0">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl md:text-3xl font-bold leading-tight">Bakelette Rewards</h3>
                  <p className="text-xs md:text-base font-medium text-orange-100">
                    Savor more, earn free treats
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-6 bg-background">
              {/* Digital Stamp Card */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border-2 border-orange-200/50 p-5 md:p-6 text-center">
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-4">
                  Your Digital Stamp Card
                </p>
                <div className="flex justify-center items-center gap-1.5 md:gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="text-2xl md:text-3xl text-orange-400 drop-shadow-lg"
                    >
                      ✦
                    </div>
                  ))}
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-gray-300 bg-white/50" />
                </div>
              </div>

              {/* How it works */}
              <div className="space-y-4">
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  How it works:
                </h4>
                <div className="space-y-3">
                  {/* Step 1 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-400 text-white font-bold text-sm">
                        1
                      </span>
                    </div>
                    <div className="pt-0.5">
                      <p className="text-xs md:text-sm text-gray-600 leading-snug">
                        Earn 1 stamp for every signature box or loaf added to your delivery orders.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-400 text-white font-bold text-sm">
                        2
                      </span>
                    </div>
                    <div className="pt-0.5">
                      <p className="text-xs md:text-sm text-gray-600 leading-snug">
                        Collect 5 stamps to unlock a premium surprise bake on your 6th order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-2.5 md:py-3 px-6 rounded-full hover:shadow-xl transition-all active:scale-95 text-sm md:text-base">
                Check My Stamps
              </button>

              {/* Extra spacing for mobile scrolling */}
              <div className="h-4" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoyaltyCard;
