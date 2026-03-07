interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div className={`w-full mx-auto px-5 sm:px-8 lg:px-10 ${narrow ? 'max-w-3xl' : 'max-w-6xl'} ${className}`}>
      {children}
    </div>
  );
}
