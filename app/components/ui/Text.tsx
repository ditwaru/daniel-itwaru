import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  color?: 'default' | 'muted' | 'white';
  className?: string;
  centered?: boolean;
}

export default function Text({ 
  children, 
  size = 'base',
  color = 'default',
  className = '',
  centered = false
}: TextProps) {
  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };
  
  const colors = {
    default: 'text-gray-900',
    muted: 'text-gray-600',
    white: 'text-white'
  };
  
  const baseClasses = 'leading-relaxed';
  const sizeClasses = sizes[size];
  const colorClasses = colors[color];
  const alignmentClasses = centered ? 'text-center' : '';
  const classes = `${baseClasses} ${sizeClasses} ${colorClasses} ${alignmentClasses} ${className}`;
  
  return <p className={classes}>{children}</p>;
}
