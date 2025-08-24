import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
  padding?: 'sm' | 'md' | 'lg';
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'lg'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };
  
  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20'
  };
  
  const classes = `${backgrounds[background]} ${paddings[padding]} ${className}`;
  
  return (
    <section className={classes}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
