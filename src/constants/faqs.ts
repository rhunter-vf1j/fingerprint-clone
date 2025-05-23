import { FaqItem } from '../types';

export const faqItems: FaqItem[] = [
  {
    question: "How does Fingerprint identify users without cookies?",
    answer: "Fingerprint uses a combination of browser, device, and network attributes to create a unique identifier for each visitor. This works even when cookies are cleared or disabled, providing persistent identification across sessions."
  },
  {
    question: "Is Fingerprint compliant with privacy regulations like GDPR and CCPA?",
    answer: "Yes, Fingerprint is designed to be privacy-compliant. We do not collect or store personal information, and our identification methods are transparent and can be disclosed to users. We provide tools to help you maintain compliance with all major privacy regulations."
  },
  {
    question: "How accurate is your bot detection?",
    answer: "Our bot detection has a 99.5% accuracy rate, with extremely low false positive rates. We use machine learning algorithms that continuously adapt to new bot patterns and behaviors, ensuring you stay protected against evolving threats."
  },
  {
    question: "How easy is it to integrate Fingerprint?",
    answer: "Integration is simple and typically takes less than 30 minutes. We provide SDKs for all major platforms and comprehensive documentation to guide you through the process. Most customers can implement Fingerprint with just a few lines of code."
  },
  {
    question: "Can Fingerprint help with account takeover prevention?",
    answer: "Absolutely. By identifying users across sessions and devices, Fingerprint can detect suspicious login attempts, even when credentials are valid. This helps prevent account takeovers and unauthorized access to user accounts."
  }
];