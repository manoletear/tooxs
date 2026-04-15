import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface HaloCircle {
  id: number;
  initialX: number;
  initialY: number;
  x: number;
  y: number;
  color: string;
}

interface HaloEffectProps {
  count1?: number;
  count2?: number;
  count3?: number;
  size?: number;
  speed?: number;
  blur?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  className?: string;
}

export function HaloEffect({
  count1 = 4,
  count2 = 3,
  count3 = 3,
  size = 280,
  speed = 5,
  blur = 80,
  color1 = "#177FC6",
  color2 = "#20B2AA",
  color3 = "#0A2647",
  className = "",
}: HaloEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [circles, setCircles] = useState<HaloCircle[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.offsetWidth;
    const h = container.offsetHeight;

    const makeCircles = (count: number, color: string): HaloCircle[] =>
      Array.from({ length: count }, (_, i) => ({
        id: Math.random() + i,
        initialX: Math.random() * (w - size),
        initialY: Math.random() * (h - size),
        x: Math.random() * (w - size),
        y: Math.random() * (h - size),
        color,
      }));

    setCircles([
      ...makeCircles(count1, color1),
      ...makeCircles(count2, color2),
      ...makeCircles(count3, color3),
    ]);

    const interval = setInterval(() => {
      const cw = container.offsetWidth;
      const ch = container.offsetHeight;
      setCircles((prev) =>
        prev.map((c) => ({
          ...c,
          x: Math.random() * (cw - size),
          y: Math.random() * (ch - size),
        }))
      );
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [size, speed, count1, count2, count3, color1, color2, color3]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          animate={{ x: circle.x, y: circle.y }}
          initial={{ x: circle.initialX, y: circle.initialY }}
          transition={{ duration: speed, ease: "easeInOut" }}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: circle.color,
            position: "absolute",
            filter: `blur(${blur}px)`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}
