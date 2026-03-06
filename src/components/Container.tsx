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
        width: '100%',
        maxWidth: narrow ? '768px' : '1060px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '40px',
        paddingRight: '40px',
        boxSizing: 'border-box' as const,
      }}
    >
      {children}
    </div>
  );
}
