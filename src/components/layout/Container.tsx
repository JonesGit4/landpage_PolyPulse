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
        maxWidth: narrow ? '768px' : '1080px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}
