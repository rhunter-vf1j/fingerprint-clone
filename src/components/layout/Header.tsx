import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navigationItems } from '../../constants/navigation';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header 
      className={`
        fixed w-full top-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className={`
                    flex items-center text-gray-700 hover:text-blue-600 font-medium
                    ${activeDropdown === item.title ? 'text-blue-600' : ''}
                  `}
                  onClick={() => item.dropdown && toggleDropdown(item.title)}
                >
                  <span>{item.title}</span>
                  {item.dropdown && (
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                    />
                  )}
                </button>
                
                {item.dropdown && (
                  <div 
                    className={`
                      absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                      transition-all duration-200 origin-top-left
                      ${activeDropdown === item.title ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                    `}
                  >
                    <div className="p-4 grid gap-3">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="flex items-start p-3 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-shrink-0">
                            {/* Icon placeholder - you would use Lucide icons here */}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{dropdownItem.title}</p>
                            {dropdownItem.description && (
                              <p className="mt-1 text-xs text-gray-500">{dropdownItem.description}</p>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-4 px-4 space-y-1 bg-white shadow-lg">
          {navigationItems.map((item) => (
            <div key={item.title}>
              <button
                className="w-full text-left py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => item.dropdown && toggleDropdown(item.title)}
              >
                <div className="flex justify-between items-center">
                  <span>{item.title}</span>
                  {item.dropdown && (
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                    />
                  )}
                </div>
              </button>
              
              {item.dropdown && activeDropdown === item.title && (
                <div className="mt-2 space-y-2 pl-6">
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.title}
                      href={dropdownItem.href}
                      className="block py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      {dropdownItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 space-y-2">
            <Button className="w-full" variant="outline">Sign In</Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;