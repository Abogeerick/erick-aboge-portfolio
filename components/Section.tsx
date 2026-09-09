import React from 'react';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, eyebrow, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-32 px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle || eyebrow) && (
          <div className="mb-14 md:mb-20 max-w-3xl">
            {eyebrow && (
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-teal-400/60" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-teal-400">{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white font-display text-balance leading-[1.1]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed text-pretty">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
