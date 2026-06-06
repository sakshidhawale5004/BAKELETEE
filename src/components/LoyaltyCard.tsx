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
        <div className="fixed inset-0 md:fixed md:left-6 md:bottom-20 md:w-96 md:max-h-screen md:rounded-3xl bg-background overflow-y-auto animate-fade-in z-50 md:z-40 rounded-none md:shadow-2xl border-0 md:border md:border-border">
          {/* Orange Header */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 relative text-white md:rounded-t-3xl">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-6 right-6 text-white/90 hover:text-white transition-colors"
              aria-label="Close loyalty card"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header Content */}
            <div className="flex items-center gap-4 pr-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Bakelette Rewards</h3>
                <p className="text-sm md:text-base font-medium text-orange-100">
                  Savor more, earn free treats
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8 space-y-8 bg-background">
            {/* Digital Stamp Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border-2 border-orange-200/50 p-8 text-center">
              <p className="text-xs md:text-sm font-bold text-orange-500 uppercase tracking-widest mb-6">
                Your Digital Stamp Card
              </p>
              <div className="flex justify-center items-center gap-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="text-4xl md:text-5xl text-orange-400 drop-shadow-lg"
                  >
                    ✦
                  </div>
                ))}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-3 border-gray-300 bg-white/50" />
              </div>
            </div>

            {/* How it works */}
            <div className="space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                How it works:
              </h4>
              <div className="space-y-5">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-400 text-white font-bold text-lg">
                      1
                    </span>
                  </div>
                  <div className="pt-1">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      Earn 1 stamp for every signature box or loaf added to your delivery orders.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-400 text-white font-bold text-lg">
                      2
                    </span>
                  </div>
                  <div className="pt-1">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      Collect 5 stamps to unlock a premium surprise bake on your 6th order.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-4 md:py-5 px-6 rounded-full hover:shadow-xl transition-all active:scale-95 text-lg md:text-xl">
              Check My Stamps
            </button>

            {/* Extra spacing for mobile scrolling */}
            <div className="h-4" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoyaltyCard;
