import { useEffect, useRef, useState, useMemo } from "react";

interface KineticTypographyProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function KineticTypography({ text, className = "", style }: KineticTypographyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const letters = useMemo(() => {
    return text.split("").map((char, i) => ({
      char,
      index: i,
      isSpace: char === " ",
      // Random scatter positions
      offsetX: (Math.random() - 0.5) * 300,
      offsetY: (Math.random() - 0.5) * 200,
      rotation: (Math.random() - 0.5) * 360,
      scale: Math.random() * 0.5 + 0.3,
    }));
  }, [text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {letters.map((l, i) => {
        if (l.isSpace) {
          return <span key={i} className="inline-block" style={{ width: "0.3em" }} />;
        }

        return (
          <span
            key={i}
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translate(0, 0) rotate(0deg) scale(1)"
                : `translate(${l.offsetX}px, ${l.offsetY}px) rotate(${l.rotation}deg) scale(${l.scale})`,
              transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.04}s`,
              display: "inline-block",
            }}
          >
            {l.char}
          </span>
        );
      })}
    </div>
  );
}
