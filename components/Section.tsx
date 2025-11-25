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
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-800 dark:text-slate-100">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-20 bg-amber-400 mt-6 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
