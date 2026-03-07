'use client';
import { useInView } from '@/hooks/useInView';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ label, title, subtitle, centered = true, className = '' }: SectionHeaderProps) {
  const { ref, isVisible } = useInView();

  return (
    <div ref={ref} className={`${centered ? 'text-center' : ''} mb-20 lg:mb-24 ${className}`}>
      {label && (
        <span className={`section-label in-view ${isVisible ? 'visible' : ''}`}>
          {label}
        </span>
      )}
      <h2 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-white leading-[1.1] mb-6 in-view ${isVisible ? 'visible' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-400 text-lg sm:text-xl max-w-2xl ${centered ? 'mx-auto' : ''} font-light leading-relaxed in-view in-view-delay-1 ${isVisible ? 'visible' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
