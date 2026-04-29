export const PHONE_DISPLAY = "+91 99201 44632";
export const PHONE_INTL = "919920144632";
export const INSTAGRAM_URL = "https://instagram.com/bakelette.official";

export const waLink = (msg = "Hi Bakelette! I'd like to place an order.") =>
  `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:+${PHONE_INTL}`;
