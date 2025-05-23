import React from 'react';
import { features } from '../../constants/features';
import Container from '../ui/Container';
import { Fingerprint, Shield, ShieldAlert, Monitor, Lock, Code } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  fingerprint: <Fingerprint className="h-8 w-8 text-blue-600" />,
  shield: <Shield className="h-8 w-8 text-blue-600" />,
  'shield-alert': <ShieldAlert className="h-8 w-8 text-blue-600" />,
  monitor: <Monitor className="h-8 w-8 text-blue-600" />,
  lock: <Lock className="h-8 w-8 text-blue-600" />,
  code: <Code className="h-8 w-8 text-blue-600" />
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Unparalleled Security
          </h2>
          <p className="text-xl text-gray-600">
            Our platform provides comprehensive protection against fraud and bots while maintaining a seamless user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;