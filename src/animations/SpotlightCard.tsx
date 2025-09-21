import React, { useRef, useState } from "react";

interface Position { x: number; y: number; }

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  backgroundColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  // a touch stronger than before so it’s not too faint on light BGs
  spotlightColor = "rgba(99, 102, 241, 0.45)",   // indigo-ish glow
  backgroundColor = "#f1f5f9",                   // slate-100-ish
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus   = () => { setIsFocused(true);  setOpacity(0.75); };
  const handleBlur    = () => { setIsFocused(false); setOpacity(0);    };
  const handleEnter   = () => { setOpacity(0.75); };
  const handleLeave   = () => { setOpacity(0);    };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`
        relative rounded-3xl overflow-hidden p-8
        transition-transform duration-300 will-change-transform
        shadow-sm hover:shadow-xl hover:-translate-y-1 focus:shadow-xl
        ${className}
      `}
      style={{ backgroundColor }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          // slightly larger/softer spotlight for light backgrounds
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
