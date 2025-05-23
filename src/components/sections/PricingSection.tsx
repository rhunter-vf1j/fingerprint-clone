import React from 'react';
import { pricingTiers } from '../../constants/pricing';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${tier.highlighted ? 'md:-mt-8 md:mb-8' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <Card 
                className="flex flex-col flex-1 p-8"
                highlightBorder={tier.highlighted}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <p className="text-gray-600 mt-2">{tier.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="ml-2 text-gray-600">/month</span>}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={tier.highlighted ? 'primary' : 'outline'}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          <p>All plans include 24/7 support, 99.9% uptime SLA, and API access.</p>
          <p className="mt-2">Need a custom solution? <a href="#" className="text-blue-600 hover:underline">Contact our sales team</a>.</p>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;