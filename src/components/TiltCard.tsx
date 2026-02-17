import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const TiltCard = ({ children, className, onClick }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setIsHovering(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card transition-all duration-300 ease-out",
        isHovering ? "border-primary/50" : "border-border/60",
        onClick && "cursor-pointer",
        className
      )}
      style={{
        transform,
        boxShadow: isHovering
          ? `0 0 15px -3px hsl(265 90% 60% / 0.2), inset 0 0 15px -8px hsl(265 90% 60% / 0.05)`
          : "none",
      }}
    >
      {/* Cursor glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(350px circle at ${glowPos.x}% ${glowPos.y}%, hsl(265 90% 60% / 0.08), transparent 60%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default TiltCard;
