const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Aurora gradient at the top */}
      <div
        className="absolute -top-[30%] left-1/2 h-[700px] w-[1200px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(265 90% 50% / 0.12) 0%, hsl(230 80% 40% / 0.08) 35%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Secondary glow */}
      <div
        className="absolute -top-[10%] left-[20%] h-[400px] w-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(220 90% 50% / 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
