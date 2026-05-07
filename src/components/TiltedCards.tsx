import { useState, useRef, useEffect, useCallback } from "react";

interface TiltedCard {
  title: string;
  description: string;
  image: string;
  time?: string;
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

  // Base tilts for each card
  const baseTilts = cards.length === 4
    ? [
        { rotate: -10, translateY: 10, zIndex: 1 },
        { rotate: -3, translateY: -15, zIndex: 2 },
        { rotate: 3, translateY: -15, zIndex: 2 },
        { rotate: 10, translateY: 10, zIndex: 1 },
      ]
    : [
        { rotate: -8, translateY: 0, zIndex: 1 },
        { rotate: 0, translateY: -20, zIndex: 2 },
        { rotate: 8, translateY: 0, zIndex: 1 },
      ];

  const getCardTransform = (i: number) => {
    const tilt = baseTilts[i] || baseTilts[0];
    if (!isVisible) return `rotate(0deg) translateY(60px) scale(0.8)`;

    const isHovered = hoveredIndex === i;

    if (isHovered) {
      // Hovered card: swings like hanging, slight rotation oscillation via CSS animation
      return `rotate(${tilt.rotate}deg) translateY(${tilt.translateY - 18}px) scale(1.06)`;
    }

    if (hoveredIndex !== null) {
      // Push neighbors away from hovered card
      const diff = i - hoveredIndex;
      const pushX = diff * 8;
      const pushRotate = diff * 3;
      return `rotate(${tilt.rotate + pushRotate}deg) translateY(${tilt.translateY + 5}px) translateX(${pushX}px) scale(0.97)`;
    }

    return `rotate(${tilt.rotate}deg) translateY(${tilt.translateY}px) scale(1)`;
  };

  /* Mobile swipe */
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = useCallback((e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setMobileIndex(prev => diff > 0 ? Math.min(prev + 1, cards.length - 1) : Math.max(prev - 1, 0));
    }
    touchStartX.current = null;
  }, [cards.length]);

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center py-12 ${className}`}
    >
      <style>{`
        @keyframes hanging-swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          75% { transform: rotate(-2deg); }
        }
      `}</style>

      {/* Mobile: swipeable single card */}
      <div className="md:hidden w-full overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${mobileIndex * 100}%)` }}>
          {cards.map((card, i) => (
            <div key={i} className="w-full shrink-0 px-4 flex justify-center">
              <div className="relative w-[280px]" style={{ height: 380 }}>
                <CardSurface card={card} index={i} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, i) => (
            <button key={i} className={`h-2 rounded-full transition-all duration-300 ${i === mobileIndex ? "bg-mint w-6" : "bg-white/30 w-2"}`} onClick={() => setMobileIndex(i)} />
          ))}
        </div>
      </div>

      {/* Desktop: tilted cards */}
      <div className="hidden md:flex items-center justify-center gap-6">
        {cards.map((card, i) => {
          const tilt = baseTilts[i] || baseTilts[0];
          const isHovered = hoveredIndex === i;
          const isElectric = /ejecutar/i.test(card.title);

          return (
            <div
              key={i}
              className="relative cursor-pointer"
              style={{
                width: cards.length === 4 ? 270 : 320,
                height: cards.length === 4 ? 380 : 420,
                transform: getCardTransform(i),
                opacity: isVisible ? 1 : 0,
                zIndex: isHovered ? 10 : tilt.zIndex,
                transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
                transformOrigin: "top center",
                animation: isHovered ? "hanging-swing 2s ease-in-out infinite" : "none",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardSurface card={card} index={i} hovered={isHovered} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CardSurface({ card, index, hovered = false }: { card: TiltedCard; index: number; hovered?: boolean }) {
  return (
    <div
      className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
      style={{
        border: hovered ? "2px solid rgba(23,127,198,0.5)" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered
          ? "0 25px 60px -12px rgba(23,127,198,0.35), 0 10px 30px -10px rgba(0,0,0,0.5)"
          : "0 15px 40px -10px rgba(0,0,0,0.4)",
      }}
    >
      {/* Background image — fills the entire card, zoomed in */}
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.18)" : "scale(1.1)",
          transition: "transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
        loading="lazy"
        draggable={false}
      />

      {/* Blue overlay */}
      {/* Soft bottom gradient — only to keep text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(10,30,60,0.65) 100%)",
        }}
      />

      {/* Number — overflowing top-right corner as a design gesture */}
      <span
        className="absolute font-black leading-none select-none pointer-events-none"
        style={{
          top: "-1.6rem",
          right: "-0.6rem",
          fontFamily: "var(--font-heading)",
          fontSize: "6.5rem",
          color: "rgba(255,255,255,0.85)",
          letterSpacing: "-0.05em",
          mixBlendMode: "overlay",
          textShadow: "0 2px 18px rgba(0,0,0,0.25)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Text — bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
        <h3
          className="text-2xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-heading)", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          {card.title}
        </h3>
        {card.time && (
          <span
            className="inline-block self-start text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(4px)",
            }}
          >
            ⏱ {card.time}
          </span>
        )}
        <p className="text-xs leading-relaxed text-white/85" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
          {card.description}
        </p>
      </div>
    </div>
  );
}
