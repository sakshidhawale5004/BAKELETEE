// Global search index — aggregates all searchable content across the site

export interface SearchResult {
  title: string;
  subtitle: string;
  section: "Signature Bakes" | "Gift Hampers" | "Blog" | "Pages";
  action: { type: "scroll"; target: string } | { type: "navigate"; url: string };
}

// Section pages that are always available
const pages: SearchResult[] = [
  {
    title: "Founder's Letter",
    subtitle: "Our story, values, and why we bake with love.",
    section: "Pages",
    action: { type: "scroll", target: "promise" },
  },
  {
    title: "Signature Bakes",
    subtitle: "Our full handcrafted collection of cookies, loaves, bites and more.",
    section: "Pages",
    action: { type: "scroll", target: "products" },
  },
  {
    title: "Categories",
    subtitle: "Browse by Cookies, Loaves, Bites, Brownies & Bundles.",
    section: "Pages",
    action: { type: "scroll", target: "categories" },
  },
  {
    title: "Artisanal Curations — Gift Hampers",
    subtitle: "Premium curated hampers for every celebration.",
    section: "Pages",
    action: { type: "scroll", target: "gifting" },
  },
  {
    title: "How It Works",
    subtitle: "Browse, order on WhatsApp, and enjoy doorstep delivery.",
    section: "Pages",
    action: { type: "scroll", target: "how-it-works" },
  },
  {
    title: "Follow the Crumbs",
    subtitle: "Our Instagram feed and community highlights.",
    section: "Pages",
    action: { type: "scroll", target: "follow" },
  },
  {
    title: "Terms & Conditions",
    subtitle: "Delivery, refund, and ordering policies.",
    section: "Pages",
    action: { type: "navigate", url: "/terms" },
  },
];

// Products — imported dynamically to avoid circular deps
import { products } from "@/components/Products";

const productResults: SearchResult[] = products.map((p) => ({
  title: p.name,
  subtitle: p.tagline,
  section: "Signature Bakes" as const,
  action: { type: "scroll" as const, target: "products" },
}));

// Gift Hampers
const hamperResults: SearchResult[] = [
  {
    title: "The Muse",
    subtitle: "A gentle whisper of affection. Starting at ₹999.",
    section: "Gift Hampers",
    action: { type: "scroll", target: "gifting" },
  },
  {
    title: "The Darling",
    subtitle: "A warm embrace in a box. Starting at ₹1499.",
    section: "Gift Hampers",
    action: { type: "scroll", target: "gifting" },
  },
  {
    title: "The Icon",
    subtitle: "The ultimate expression of artisanal love. Starting at ₹1999.",
    section: "Gift Hampers",
    action: { type: "scroll", target: "gifting" },
  },
];

// Blog posts
const blogResults: SearchResult[] = [
  {
    title: "The Magic of Brown Butter",
    subtitle: "Discover why we brown our butter and how it transforms a simple cookie.",
    section: "Blog",
    action: { type: "navigate", url: "/blog/brown-butter" },
  },
  {
    title: "Baking with Jaggery vs Refined Sugar",
    subtitle: "Why we chose jaggery for its earthy sweetness and health benefits.",
    section: "Blog",
    action: { type: "navigate", url: "/blog/jaggery" },
  },
  {
    title: "Our Favorite Chai Pairings",
    subtitle: "Discover our favorite tea-time combinations with our bakes.",
    section: "Blog",
    action: { type: "navigate", url: "/blog/chai-pairings" },
  },
];

export const allSearchItems: SearchResult[] = [
  ...productResults,
  ...hamperResults,
  ...blogResults,
  ...pages,
];

export function searchAll(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return allSearchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.section.toLowerCase().includes(q)
  );
}
