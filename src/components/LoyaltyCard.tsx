import { useState } from "react";
import { Gift, X } from "lucide-react";

const LoyaltyCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed left-4 bottom-20 z-40 md:left-6">
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-xl border-2 border-orange-300 p-5 w-64 text-white animate-fade-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
          aria-label="Close loyalty card"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Gift className="w-6 h-6" />
          <h3 className="text-lg font-bold">Bakelette Rewards</h3>
        </div>

        <p className="text-sm font-medium text-orange-50 mb-4">
          Savor more, earn free treats
        </p>

        {/* Digital Stamp Card */}
        <div className="bg-white/20 rounded-lg p-3 mb-4 backdrop-blur-sm">
          <p className="text-xs font-semibold text-orange-100 uppercase tracking-wider mb-2">
            Your Digital Stamp Card
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center text-xs font-bold text-white shadow-md"
              >
                ✦
              </div>
            ))}
            <div className="w-6 h-6 rounded-full bg-white/30 border-2 border-white/50" />
          </div>
        </div>

        {/* How it works */}
        <div className="space-y-2 mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wide mb-2">
            How it works:
          </h4>
          <div className="space-y-1.5 text-xs">
            <div className="flex gap-2">
              <span className="font-bold text-orange-200 min-w-fit">1.</span>
              <span className="text-orange-50">
                Earn 1 stamp for every signature box or loaf added to your delivery orders.
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-orange-200 min-w-fit">2.</span>
              <span className="text-orange-50">
                Collect 5 stamps to unlock a premium surprise bake on your 6th order.
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-white text-orange-500 font-bold py-2.5 rounded-full hover:bg-orange-50 transition-colors shadow-lg">
          Check My Stamps
        </button>
      </div>
    </div>
  );
};

export default LoyaltyCard;
