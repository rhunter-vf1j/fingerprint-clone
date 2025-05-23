import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    title: 'Products',
    href: '#products',
    dropdown: [
      {
        title: 'Fingerprinting',
        description: 'Identify visitors across sessions and browsers',
        href: '#fingerprinting',
        icon: 'fingerprint'
      },
      {
        title: 'Bot Detection',
        description: 'Protect your site from bots and automated threats',
        href: '#bot-detection',
        icon: 'shield'
      },
      {
        title: 'Fraud Prevention',
        description: 'Stop fraud before it happens',
        href: '#fraud-prevention',
        icon: 'shield-alert'
      }
    ]
  },
  {
    title: 'Solutions',
    href: '#solutions',
    dropdown: [
      {
        title: 'For E-commerce',
        description: 'Prevent account takeovers and payment fraud',
        href: '#ecommerce',
        icon: 'shopping-cart'
      },
      {
        title: 'For Finance',
        description: 'Secure transactions and prevent account fraud',
        href: '#finance',
        icon: 'landmark'
      },
      {
        title: 'For Gaming',
        description: 'Prevent cheating and secure in-game economies',
        href: '#gaming',
        icon: 'gamepad-2'
      }
    ]
  },
  {
    title: 'Pricing',
    href: '#pricing',
  },
  {
    title: 'Developers',
    href: '#developers',
    dropdown: [
      {
        title: 'Documentation',
        description: 'Integration guides and API reference',
        href: '#docs',
        icon: 'file-text'
      },
      {
        title: 'SDKs',
        description: 'Libraries for all major platforms',
        href: '#sdks',
        icon: 'code'
      },
      {
        title: 'API Reference',
        description: 'Detailed API documentation',
        href: '#api',
        icon: 'brackets'
      }
    ]
  },
  {
    title: 'Company',
    href: '#company',
    dropdown: [
      {
        title: 'About Us',
        description: 'Our mission and values',
        href: '#about',
        icon: 'users'
      },
      {
        title: 'Blog',
        description: 'Latest news and insights',
        href: '#blog',
        icon: 'newspaper'
      },
      {
        title: 'Careers',
        description: 'Join our growing team',
        href: '#careers',
        icon: 'briefcase'
      }
    ]
  }
];