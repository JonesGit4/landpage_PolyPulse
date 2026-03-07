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
  primary: 'bg-primary text-dark-950 font-bold hover:bg-primary-soft hover:shadow-[0_0_30px_rgba(52,211,153,0.2)] hover:scale-[1.03]',
  secondary: 'bg-gradient-to-r from-accent to-purple-400 text-white font-bold hover:shadow-[0_0_24px_rgba(167,139,250,0.25)] hover:scale-[1.03]',
  outline: 'border border-primary/20 text-primary font-semibold hover:bg-primary/[0.06] hover:border-primary/40',
  ghost: 'border border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20',
  telegram: 'bg-[#0088cc] text-white font-semibold hover:bg-[#006daa] hover:shadow-[0_0_20px_rgba(0,136,204,0.25)]',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm rounded-xl',
  md: 'px-7 py-3.5 text-sm rounded-xl',
  lg: 'px-9 py-4 text-[15px] rounded-2xl',
};

export default function Button({ children, variant = 'primary', size = 'md', href, className = '' }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }

  return <button className={cls}>{children}</button>;
}
