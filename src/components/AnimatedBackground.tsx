import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = -1000;
    let mouseY = -1000;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      baseAlpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    const count = Math.min(100, Math.floor(window.innerWidth / 16));
    for (let i = 0; i < count; i++) {
      const baseAlpha = Math.random() * 0.25 + 0.03;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.5 + 0.5,
        alpha: baseAlpha,
        baseAlpha,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse interaction — particles glow brighter near cursor
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 200);
        p.alpha = p.baseAlpha + influence * 0.4;

        // Slight push away from cursor
        if (dist < 150 && dist > 0) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }

        // Dampen velocity
        p.vx *= 0.999;
        p.vy *= 0.999;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + influence * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < 120) {
            const lineAlpha = 0.06 * (1 - cdist / 120);
            // Lines near cursor glow brighter
            const midX = (p.x + p2.x) / 2;
            const midY = (p.y + p2.y) / 2;
            const mDist = Math.sqrt((midX - mouseX) ** 2 + (midY - mouseY) ** 2);
            const mInfluence = Math.max(0, 1 - mDist / 200);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha + mInfluence * 0.12})`;
            ctx.lineWidth = 0.5 + mInfluence * 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <>
      {/* Aurora gradient */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-[30%] left-1/2 h-[700px] w-[1200px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(265 90% 50% / 0.1) 0%, hsl(230 80% 40% / 0.06) 35%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -top-[10%] left-[20%] h-[400px] w-[600px]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(220 90% 50% / 0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[1]"
      />
    </>
  );
};

export default AnimatedBackground;
