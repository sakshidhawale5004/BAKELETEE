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
    specialDate: "",
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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow letters and spaces
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({...formData, fullName: value});
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits and limit to 10
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({...formData, mobileNumber: value});
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow letters, spaces, and common location characters (comma, hyphen)
    const value = e.target.value.replace(/[^a-zA-Z\s,\-]/g, '');
    setFormData({...formData, location: value});
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only valid email characters: letters, numbers, @, ., _, -
    const value = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
    setFormData({...formData, email: value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Full Name
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      toast.error("Name should only contain letters and spaces.");
      return;
    }
    if (formData.fullName.trim().length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return;
    }
    
    // Validate Mobile Number
    if (!formData.mobileNumber.trim()) {
      toast.error("Please enter your mobile number.");
      return;
    }
    if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      toast.error("Mobile number must be exactly 10 digits.");
      return;
    }
    
    // Validate Email
    if (!formData.email.trim()) {
      toast.error("Please enter an email address.");
      return;
    }
    // More strict email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address (e.g., name@example.com).");
      return;
    }
    // Check for common typos and invalid patterns
    const email = formData.email.trim().toLowerCase();
    if (email.includes('..') || email.startsWith('.') || email.endsWith('.') || 
        email.includes('@.') || email.includes('.@') ||
        /^[^@]+@[^@]+\.[a-z]{1}$/.test(email)) {
      toast.error("Please enter a valid email address (e.g., name@example.com).");
      return;
    }
    // Check for suspicious patterns (all numbers or random characters)
    const [localPart, domainPart] = email.split('@');
    // Block if local part is all numbers
    if (/^\d+$/.test(localPart)) {
      toast.error("Please enter a valid email address with letters.");
      return;
    }
    // Block if domain is too short or suspicious
    const domainName = domainPart.split('.')[0];
    if (domainName.length < 3) {
      toast.error("Please enter a valid email domain.");
      return;
    }
    // Check for common valid TLDs
    const validTLDs = ['com', 'org', 'net', 'edu', 'gov', 'co', 'in', 'uk', 'us', 'ca', 'au', 'de', 'fr', 'jp', 'cn', 'br', 'ru', 'it', 'es', 'nl', 'se', 'no', 'dk', 'fi', 'pl', 'be', 'at', 'ch', 'ie', 'nz', 'sg', 'hk', 'za', 'mx', 'ar', 'cl', 'io', 'ai', 'app', 'dev', 'tech', 'info', 'biz', 'me', 'tv', 'cc'];
    const tld = domainPart.split('.').pop();
    if (!validTLDs.includes(tld || '')) {
      toast.error("Please enter a valid email address with a recognized domain.");
      return;
    }
    
    // Validate Location
    if (!formData.location.trim()) {
      toast.error("Please enter your location.");
      return;
    }
    if (!/^[a-zA-Z\s,\-]+$/.test(formData.location.trim())) {
      toast.error("Location should only contain letters, spaces, commas, and hyphens.");
      return;
    }
    if (formData.location.trim().length < 3) {
      toast.error("Location must be at least 3 characters long.");
      return;
    }
    
    // Validate Transaction ID
    if (!formData.transactionId.trim()) {
      toast.error("Please enter the transaction ID.");
      return;
    }
    if (formData.transactionId.trim().length < 6 || !/[a-zA-Z0-9]/.test(formData.transactionId)) {
      toast.error("Please enter a valid Transaction ID / UTR Number (at least 6 alphanumeric characters).");
      return;
    }

    const message = `Hi Bakelette! I've just subscribed to the ${plan.name} plan.\n\n*My Details:*\nName: ${formData.fullName}\nPhone: ${formData.mobileNumber}\nEmail: ${formData.email}\nLocation: ${formData.location}\nSpecial Date (Birthday/Anniversary): ${formData.specialDate || 'Not provided'}\nTransaction ID/UTR: ${formData.transactionId}`;
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      window.open(`https://wa.me/918369424099?text=${encodeURIComponent(message)}`, "_blank");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      if (!newOpen) {
        // Reset form state when dialog closes
        setIsSubmitted(false);
        setFormData({ fullName: "", mobileNumber: "", email: "", location: "", specialDate: "", transactionId: "" });
      }
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
                {plan.name === "The Daily Ritual" && (
                  <>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      🎉 10% off on current price!
                    </span>
                    <br/>
                  </>
                )}
                <span className="block mt-2">Fill in your details below to complete your subscription.</span>
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-primary-deep font-semibold">Full Name *</Label>
                  <Input 
                    id="fullName" 
                    required 
                    value={formData.fullName}
                    onChange={handleNameChange}
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
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.mobileNumber}
                    onChange={handlePhoneChange}
                    className="rounded-xl border-primary/20 focus-visible:ring-primary/30 h-12"
                    placeholder="Enter 10-digit mobile number"
                  />
                  {formData.mobileNumber && formData.mobileNumber.length < 10 && (
                    <p className="text-xs text-amber-600 mt-1 px-1">
                      {formData.mobileNumber.length}/10 digits entered
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-deep font-semibold">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={handleEmailChange}
                    className="rounded-xl border-primary/20 focus-visible:ring-primary/30 h-12"
                    placeholder="Enter email address"
                  />
                  {formData.email && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) && (
                    <p className="text-xs text-amber-600 mt-1 px-1">
                      Please enter a valid email format (e.g., name@example.com)
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-primary-deep font-semibold">Location *</Label>
                  <Input 
                    id="location" 
                    required 
                    value={formData.location}
                    onChange={handleLocationChange}
                    className="rounded-xl border-primary/20 focus-visible:ring-primary/30 h-12"
                    placeholder="Enter location"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialDate" className="text-primary-deep font-semibold">Birthday / Anniversary Date (Optional)</Label>
                <Input 
                  id="specialDate" 
                  type="date"
                  value={formData.specialDate}
                  onChange={(e) => setFormData({...formData, specialDate: e.target.value})}
                  className="rounded-xl border-primary/20 focus-visible:ring-primary/30 h-12"
                  placeholder="Select date"
                />
                <p className="text-xs text-muted-foreground mt-1 px-1">
                  Help us celebrate your special day with you!
                </p>
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

              <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary-deep">Note:</span> Bakelette will validate the transaction ID and activate your subscription within 24 hours from the time of payment received.
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
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ fullName: "", mobileNumber: "", email: "", location: "", specialDate: "", transactionId: "" });
                setOpen(false);
              }}
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
