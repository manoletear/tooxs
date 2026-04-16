import { useEffect, useRef, useState } from "react";

interface BokehProps {
  colors?: string[];
  particleCount?: number;
  className?: string;
}

export function BokehBackground({
  colors = ["#177FC6", "#20B2AA", "#0A2647"],
  particleCount = 40,
  className = "",
}: BokehProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setReady(false);
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      alphaDir: number;
      baseAlpha: number;
    }

    let particles: Particle[] = [];
    let raf: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const baseAlpha = 0.08 + Math.random() * 0.18;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 20 + Math.random() * 80,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: baseAlpha,
          alphaDir: (Math.random() > 0.5 ? 1 : -1) * (0.0005 + Math.random() * 0.001),
          baseAlpha,
        });
      }
    };

    const hexToRgb = (hex: string) => {
      const v = parseInt(hex.slice(1), 16);
      return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;
        if (p.alpha > p.baseAlpha + 0.1 || p.alpha < p.baseAlpha - 0.05) {
          p.alphaDir *= -1;
        }
        if (p.x < -p.r) p.x = w + p.r;
        if (p.x > w + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = h + p.r;
        if (p.y > h + p.r) p.y = -p.r;

        const [r, g, b] = hexToRgb(p.color);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0, `rgba(${r},${g},${b},${Math.max(0, p.alpha)})`);
        grad.addColorStop(0.5, `rgba(${r},${g},${b},${Math.max(0, p.alpha * 0.4)})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    init();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [colors, particleCount]);

  if (!ready) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
}
