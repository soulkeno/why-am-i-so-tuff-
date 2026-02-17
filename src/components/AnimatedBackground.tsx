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
    const gridSize = 40;
    const radius = 200;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };
    const handleScroll = () => {
      // Update mouse Y relative to scroll
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;
      const adjustedMouseY = mouseY;

      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      // Draw grid lines that reveal near cursor
      for (let i = 0; i <= cols; i++) {
        const x = i * gridSize;
        for (let j = 0; j < rows; j++) {
          const y1 = j * gridSize;
          const y2 = y1 + gridSize;
          const midY = (y1 + y2) / 2;
          const dist = Math.sqrt((x - mouseX) ** 2 + (midY - adjustedMouseY) ** 2);
          if (dist < radius) {
            const alpha = (1 - dist / radius) * 0.2;
            ctx.beginPath();
            ctx.moveTo(x, y1);
            ctx.lineTo(x, y2);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (let j = 0; j <= rows; j++) {
        const y = j * gridSize;
        for (let i = 0; i < cols; i++) {
          const x1 = i * gridSize;
          const x2 = x1 + gridSize;
          const midX = (x1 + x2) / 2;
          const dist = Math.sqrt((midX - mouseX) ** 2 + (y - adjustedMouseY) ** 2);
          if (dist < radius) {
            const alpha = (1 - dist / radius) * 0.2;
            ctx.beginPath();
            ctx.moveTo(x1, y);
            ctx.lineTo(x2, y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw brighter dots at intersections near cursor
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          const dist = Math.sqrt((x - mouseX) ** 2 + (y - adjustedMouseY) ** 2);
          if (dist < radius) {
            const alpha = (1 - dist / radius) * 0.5;
            const size = (1 - dist / radius) * 1.8;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
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
      </div>
      {/* Grid canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[1]"
      />
    </>
  );
};

export default AnimatedBackground;
