interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        maxWidth: narrow ? '768px' : '1100px',
        margin: '0 auto',
        paddingLeft: '48px',
        paddingRight: '48px',
      }}
    >
      {children}
    </div>
  );
}
