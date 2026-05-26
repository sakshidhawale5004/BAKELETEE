import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Copy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface SubscriptionFormProps {
  plan: any;
  triggerClassName?: string;
  triggerText?: string;
}

export function SubscriptionForm({ plan, triggerClassName, triggerText }: SubscriptionFormProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    location: "",
    transactionId: ""
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // You can replace this with the actual UPI ID
  const upiId = "padvani0203-2@okaxis"; 

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.transactionId.trim() === "") return;
    
    if (!/[a-zA-Z]/.test(formData.fullName.trim()) || formData.fullName.trim().length < 3) {
      toast.error("Please enter a valid Name (must contain letters).");
      return;
    }
    if (!/[a-zA-Z]/.test(formData.location.trim()) || formData.location.trim().length < 3) {
      toast.error("Please enter a valid Location (must contain letters).");
      return;
    }
    if (formData.transactionId.trim().length < 6 || !/[a-zA-Z0-9]/.test(formData.transactionId)) {
      toast.error("Please enter a valid Transaction ID / UTR Number (at least 6 alphanumeric characters).");
      return;
    }

    const message = `Hi Bakelette! I've just subscribed to the ${plan.name} plan.\n\n*My Details:*\nName: ${formData.fullName}\nPhone: ${formData.mobileNumber}\nEmail: ${formData.email}\nLocation: ${formData.location}\nTransaction ID/UTR: ${formData.transactionId}`;
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      window.open(`https://wa.me/918369424099?text=${encodeURIComponent(message)}`, "_blank");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      if (!newOpen) {
        setTimeout(() => setIsSubmitted(false), 300); // reset on close
        setFormData({ fullName: "", mobileNumber: "", email: "", location: "", transactionId: "" });
      }
      setOpen(newOpen);
    }}>
      <DialogTrigger asChild>
        <button
          className={triggerClassName || `mt-10 w-full py-4 rounded-full font-bold text-sm text-center transition-all block ${
            plan.popular 
              ? "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-elegant hover:scale-[1.02]" 
              : "bg-primary-deep text-primary-foreground hover:bg-primary transition-colors"
          }`}
        >
          {triggerText || "Join the Society"}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[2rem] p-6 md:p-8 bg-white/95 backdrop-blur-md border-primary/20">
        {!isSubmitted ? (
          <>
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl font-display text-primary-deep text-center">Subscribe to {plan.name}</DialogTitle>
              <DialogDescription className="text-center text-muted-foreground mt-2">
                {plan.name === "The Daily Regular" && (
                  <>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      🎉 10% off on current price!
                    </span>
                    <br/>
                    <a href="/the-daily-regular" className="text-primary-deep text-sm font-medium hover:underline inline-block mb-4">
                      View all 10% off eligible products →
                    </a>
                    <br/>
                  </>
                )}
                Fill in your details below to complete your subscription.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-primary-deep font-semibold">Full Name *</Label>
                  <Input 
                    id="fullName" 
                    required 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="rounded-xl border-primary/20 focus-visible:ring-primary/30 h-12"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="text-primary-deep font-semibold">Mobile Number *</Label>
                  <Input 
                    id="mobileNumber" 
                    required 
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                    className="rounded-xl border-primary/20 focus-visible:ring-primary/30 h-12"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-deep font-semibold">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="rounded-xl border-primary/20 focus-visible:ring-primary/30 h-12"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-primary-deep font-semibold">Location *</Label>
                  <Input 
                    id="location" 
                    required 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="rounded-xl border-primary/20 focus-visible:ring-primary/30 h-12"
                    placeholder="Enter location"
                  />
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h4 className="text-lg font-display text-center mb-4 text-primary-deep">Payment Details</h4>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-40 h-40 bg-white p-2 rounded-xl border border-primary/20 shadow-sm overflow-hidden flex items-center justify-center">
                    <img src="/qrcode.jpeg" alt="Payment QR Code" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-primary/20">
                    <span className="text-sm font-medium text-muted-foreground">UPI ID:</span>
                    <span className="text-sm font-bold text-primary-deep select-all">{upiId}</span>
                    <button 
                      type="button" 
                      onClick={handleCopyUpi}
                      className="ml-2 text-primary hover:text-primary-deep transition-colors"
                      title="Copy UPI ID"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transactionId" className="text-primary-deep font-semibold">Transaction ID / UTR Number *</Label>
                <Input 
                  id="transactionId" 
                  required 
                  value={formData.transactionId}
                  onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
                  className="rounded-xl border-primary/20 focus-visible:ring-primary/30 h-12"
                  placeholder="Enter transaction ID"
                />
                <p className="text-xs text-muted-foreground mt-1 px-1">
                  Please complete the payment above and enter the transaction ID to submit.
                </p>
              </div>

              <Button 
                type="submit" 
                disabled={!formData.transactionId.trim()}
                className="w-full rounded-full h-14 text-lg font-bold shadow-glow hover:shadow-elegant bg-gradient-primary hover:scale-[1.02] transition-all"
              >
                Complete Subscription
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-display text-primary-deep">Subscription Successful!</h3>
            <p className="text-muted-foreground text-lg max-w-sm">
              Thank you for joining the Bakelette Society. We are redirecting you to WhatsApp to send your details. If it doesn't open automatically, please message us your details manually.
            </p>
            <Button 
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full px-8 py-6 font-bold shadow-soft hover:shadow-md transition-all border-primary text-primary hover:bg-primary/5"
              variant="outline"
            >
              Back to Home
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
