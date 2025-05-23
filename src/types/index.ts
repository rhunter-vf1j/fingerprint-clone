export interface NavItem {
  title: string;
  href: string;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  title: string;
  description?: string;
  href: string;
  icon?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  logoUrl: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}