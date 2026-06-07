import { useState } from "react";
import { Sparkles, X } from "lucide-react";

const LoyaltyCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckStamps = () => {
    // Open WhatsApp link to check stamps
    const message = encodeURIComponent("Hi Bakelette! I'd like to check my loyalty stamps.");
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
          <div className="fixed inset-0 md:inset-auto md:left-4 md:bottom-20 md:w-[420px] md:max-h-[85vh] md:rounded-3xl bg-background overflow-y-auto animate-fade-in z-50 rounded-none md:shadow-2xl md:border md:border-border flex flex-col">
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
              {/* Digital Stamp Card */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl md:rounded-3xl border-2 border-teal-200/50 p-5 md:p-6 text-center">
                <p className="text-xs md:text-sm font-bold text-teal-600 uppercase tracking-wider mb-2">
                  Your Loyalty Stamp Card
                </p>
                <p className="text-xs md:text-xs text-teal-500 mb-4 italic">
                  (Earn stamps with every purchase)
                </p>
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="text-2xl md:text-4xl text-teal-500 drop-shadow-lg"
                    >
                      ✦
                    </div>
                  ))}
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 md:border-3 border-teal-300 bg-white/50" />
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
                      <p className="text-xs md:text-sm text-gray-600 leading-snug">
                        Earn 1 stamp for every signature box or loaf added to your delivery orders.
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
                      <p className="text-xs md:text-sm text-gray-600 leading-snug">
                        Collect 5 stamps to unlock a premium surprise bake on your 6th order.
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
                Check My Stamps
              </button>

              {/* Purpose explanation */}
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                <p className="text-xs text-teal-700 leading-snug">
                  <span className="font-semibold">What does "Check My Stamps" do?</span> Opens WhatsApp to connect with us and verify your loyalty stamp count. We'll help you track your rewards!
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
