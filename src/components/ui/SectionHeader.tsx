'use client';
import { useInView } from '@/hooks/useInView';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: { text: string; live?: boolean };
  className?: string;
}

export default function SectionHeader({ title, subtitle, badge, className = '' }: SectionHeaderProps) {
  const { ref, isVisible } = useInView();

  return (
    <div ref={ref} className={`text-center mb-14 lg:mb-16 ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-5 in-view ${isVisible ? 'visible' : ''}`}>
          {badge.live && <div className="live-dot" />}
          <span className="text-sm text-secondary font-mono font-medium tracking-wide">{badge.text}</span>
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-white mb-4 in-view ${isVisible ? 'visible' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed in-view in-view-delay-1 ${isVisible ? 'visible' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
