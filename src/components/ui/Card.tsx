import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlightBorder?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  highlightBorder = false
}) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl shadow-md overflow-hidden
        transition-all duration-300 hover:shadow-lg
        ${highlightBorder ? 'border-2 border-blue-500' : 'border border-gray-200'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;