
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'pink';
}

const Logo: React.FC<LogoProps> = ({ className = "w-24 h-24", variant = 'pink' }) => {
  const color = variant === 'pink' ? '#D65C8A' : variant === 'light' ? '#FFFFFF' : '#1A1A1A';
  
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Círculo de Texto Rotativo */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="transparent"
        />
        <text className="text-[9.5px] font-bold tracking-[0.2em]" fill={color}>
          <textPath xlinkHref="#circlePath">
            CAFÉ Y NATURALEZA • CAFÉ Y NATURALEZA •
          </textPath>
        </text>
      </svg>
      
      {/* Estrella Central (Logo del PDF) */}
      <svg viewBox="0 0 24 24" className="w-1/2 h-1/2" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill={color} />
        <path d="M7 7L17 17M17 7L7 17" stroke={color} strokeWidth="1" />
      </svg>
    </div>
  );
};

export default Logo;
