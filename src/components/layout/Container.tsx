interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div className={`w-full mx-auto px-6 sm:px-10 lg:px-16 ${narrow ? 'max-w-3xl' : 'max-w-[1200px]'} ${className}`}>
      {children}
    </div>
  );
}
