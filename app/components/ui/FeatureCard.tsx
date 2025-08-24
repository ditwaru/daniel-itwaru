import { ReactNode } from 'react';
import Card from './Card';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  iconBgColor = 'bg-blue-100',
  iconColor = 'text-blue-600'
}: FeatureCardProps) {
  return (
    <Card className="text-center">
      <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <div className={`w-8 h-8 ${iconColor}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}
