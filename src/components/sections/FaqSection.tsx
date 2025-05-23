import React, { useState } from 'react';
import { faqItems } from '../../constants/faqs';
import Container from '../ui/Container';
import { ChevronDown } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our platform.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden"
            >
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                      openItem === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 pt-0 text-gray-600">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Contact our support team
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;