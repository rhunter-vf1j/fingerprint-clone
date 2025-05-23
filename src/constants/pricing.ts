import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for startups and small businesses",
    features: [
      "Up to 10,000 API calls per month",
      "Basic browser fingerprinting",
      "Standard bot detection",
      "Email support"
    ],
    cta: "Start for free"
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing businesses with advanced needs",
    features: [
      "Up to 100,000 API calls per month",
      "Advanced fingerprinting",
      "Enhanced bot detection",
      "Fraud prevention dashboard",
      "Priority email support"
    ],
    cta: "Get started",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific requirements",
    features: [
      "Unlimited API calls",
      "Premium fingerprinting and bot detection",
      "Custom integration options",
      "Advanced analytics",
      "Dedicated account manager",
      "24/7 phone support"
    ],
    cta: "Contact sales"
  }
];