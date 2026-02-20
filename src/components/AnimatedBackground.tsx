const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Subtle top-left blue aurora */}
      <div
        className="absolute -top-[20%] -left-[10%] h-[600px] w-[800px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(225 80% 50% / 0.08) 0%, hsl(220 70% 40% / 0.04) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      {/* Subtle top-right darker blue */}
      <div
        className="absolute -top-[10%] right-0 h-[500px] w-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(230 60% 30% / 0.06) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
