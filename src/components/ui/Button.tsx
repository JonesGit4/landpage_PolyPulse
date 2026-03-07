import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'telegram';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: 'bg-gradient-to-r from-primary to-sky-400 text-dark-950 font-bold hover:shadow-[0_0_24px_rgba(56,189,248,0.25)] hover:scale-[1.03]',
  secondary: 'bg-gradient-to-r from-accent to-purple-400 text-white font-bold hover:shadow-[0_0_24px_rgba(167,139,250,0.25)] hover:scale-[1.03]',
  outline: 'border border-primary/30 text-primary font-semibold hover:bg-primary/[0.06] hover:border-primary/50',
  ghost: 'border border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20',
  telegram: 'bg-[#0088cc] text-white font-semibold hover:bg-[#006daa] hover:shadow-[0_0_20px_rgba(0,136,204,0.25)]',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-2xl',
};

export default function Button({ children, variant = 'primary', size = 'md', href, className = '' }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }

  return <button className={cls}>{children}</button>;
}
