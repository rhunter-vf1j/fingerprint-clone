import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to secure your platform against fraud?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required. Cancel anytime.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Started for Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-blue-500"
            >
              Talk to Sales
            </Button>
          </div>
          
          <p className="mt-8 text-blue-100 text-sm">
            Join 10,000+ businesses that trust Fingerprint for their security needs.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;