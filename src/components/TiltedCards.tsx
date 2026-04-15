import { useState, useRef, useEffect } from "react";

interface TiltedCard {
  title: string;
  description: string;
  image: string;
}

interface TiltedCardsProps {
  cards: TiltedCard[];
  className?: string;
}

export default function TiltedCards({ cards, className = "" }: TiltedCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Tilted card configurations matching the Framer reference
  const tilts = [
    { rotate: -8, translateY: 0, zIndex: 1 },
    { rotate: 0, translateY: -20, zIndex: 2 },
    { rotate: 8, translateY: 0, zIndex: 1 },
  ];

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center gap-[-20px] py-12 ${className}`}
    >
      <div className="flex items-center justify-center" style={{ gap: "-10px" }}>
        {cards.map((card, i) => {
          const tilt = tilts[i] || tilts[0];
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={i}
              className="relative cursor-pointer"
              style={{
                width: 320,
                height: 420,
                transform: isVisible
                  ? `rotate(${tilt.rotate}deg) translateY(${isHovered ? tilt.translateY - 15 : tilt.translateY}px) scale(${isHovered ? 1.05 : 1})`
                  : `rotate(0deg) translateY(60px) scale(0.8)`,
                opacity: isVisible ? 1 : 0,
                zIndex: isHovered ? 10 : tilt.zIndex,
                transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                marginLeft: i > 0 ? -30 : 0,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, rgba(23,127,198,0.15) 0%, rgba(29,29,27,0.97) 40%)",
                  border: isHovered
                    ? "2px solid rgba(23,127,198,0.5)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isHovered
                    ? "0 25px 60px -12px rgba(23,127,198,0.3), 0 10px 30px -10px rgba(0,0,0,0.5)"
                    : "0 15px 40px -10px rgba(0,0,0,0.4)",
                }}
              >
                {/* Monkey image */}
                <div className="flex items-center justify-center pt-8 pb-4">
                  <div
                    className="w-40 h-40 rounded-2xl overflow-hidden"
                    style={{
                      transition: "transform 0.4s ease",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="px-7 pb-2">
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-7 pb-8">
                  <p className="text-sm leading-relaxed text-white/70">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
