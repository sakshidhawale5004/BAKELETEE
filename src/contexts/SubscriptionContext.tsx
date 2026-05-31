import React, { createContext, useContext, useState, useEffect } from 'react';

interface SubscriptionContextType {
  isSubscribed: boolean;
  setIsSubscribed: (value: boolean) => void;
  subscriberPhone: string | null;
  setSubscriberPhone: (phone: string | null) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriberPhone, setSubscriberPhone] = useState<string | null>(null);

  // Load subscription status from localStorage on mount
  useEffect(() => {
    const savedStatus = localStorage.getItem('isSubscribed');
    const savedPhone = localStorage.getItem('subscriberPhone');
    
    if (savedStatus === 'true') {
      setIsSubscribed(true);
    }
    if (savedPhone) {
      setSubscriberPhone(savedPhone);
    }
  }, []);

  // Save subscription status to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isSubscribed', String(isSubscribed));
  }, [isSubscribed]);

  useEffect(() => {
    if (subscriberPhone) {
      localStorage.setItem('subscriberPhone', subscriberPhone);
    } else {
      localStorage.removeItem('subscriberPhone');
    }
  }, [subscriberPhone]);

  return (
    <SubscriptionContext.Provider value={{ isSubscribed, setIsSubscribed, subscriberPhone, setSubscriberPhone }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within SubscriptionProvider');
  }
  return context;
};
