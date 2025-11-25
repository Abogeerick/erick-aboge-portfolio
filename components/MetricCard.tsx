import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, icon, description }) => {
  return (
    <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {icon}
      </div>
      <div className="relative z-10">
        <div className="mb-4 text-teal-700 dark:text-teal-400">{icon}</div>
        <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          {value}
        </div>
        <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
          {label}
        </div>
        {description && (
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
