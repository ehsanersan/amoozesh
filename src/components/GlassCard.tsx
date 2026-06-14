import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'green' | 'yellow';
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, variant = 'default', className = '', hover = true }: GlassCardProps) {
  const variantClasses: Record<string, string> = {
    default: 'glass',
    purple: 'glass-purple',
    green: 'glass-green',
    yellow: 'glass-yellow',
  };

  return (
    <div
      className={`
        ${variantClasses[variant]}
        rounded-2xl p-6 
        shadow-lg shadow-black/5
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
