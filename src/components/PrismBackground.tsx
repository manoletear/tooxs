import { useEffect, useRef } from "react";

export function PrismBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const blobs = [
      { x: 0.3, y: 0.4, r: 0.35, color: "rgba(37,99,235,0.35)", sx: 0.7, sy: 0.5 },
      { x: 0.7, y: 0.3, r: 0.3, color: "rgba(23,127,198,0.30)", sx: -0.5, sy: 0.8 },
      { x: 0.5, y: 0.7, r: 0.28, color: "rgba(99,60,200,0.25)", sx: 0.6, sy: -0.4 },
      { x: 0.2, y: 0.6, r: 0.22, color: "rgba(20,184,166,0.20)", sx: -0.8, sy: 0.6 },
    ];

    const draw = () => {
      t += 0.003;
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);

      for (const b of blobs) {
        const cx = w * (b.x + 0.08 * Math.sin(t * b.sx + b.y * 10));
        const cy = h * (b.y + 0.06 * Math.cos(t * b.sy + b.x * 10));
        const r = Math.min(w, h) * b.r;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, b.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className ?? ""}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
}
