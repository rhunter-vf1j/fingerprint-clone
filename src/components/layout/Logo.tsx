import React from 'react';
import { Fingerprint } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-2">
      <Fingerprint className="h-8 w-8 text-blue-600" />
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Fingerprint
      </span>
    </a>
  );
};

export default Logo;