import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-14 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white font-display">
                {title}
                <span className="text-amber-400">.</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-teal-600 mt-6 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
