import { useEffect, useRef, useState, type ReactNode } from "react";

interface FluidCardData {
  title: string;
  description: string;
  icon?: ReactNode;
  color?: string;
  accentColor?: string;
}

interface FluidCardStackProps {
  cards: FluidCardData[];
  className?: string;
}

export default function FluidCardStack({ cards, className = "" }: FluidCardStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollStart = viewportHeight * 0.3;
      const totalScroll = rect.height - viewportHeight * 0.4;
      const currentScroll = scrollStart - rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));

      setScrollProgress(progress);
      const newIndex = Math.min(Math.floor(progress * cards.length), cards.length - 1);
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ height: `${Math.max(cards.length * 50, 150)}vh`, position: "relative" }}
    >
      <div className="sticky top-[20vh] flex items-start justify-center" style={{ height: "60vh" }}>
        <div className="relative w-full max-w-3xl mx-auto" style={{ perspective: "1200px" }}>
          {cards.map((card, i) => {
            const cardProgress = scrollProgress * cards.length;
            const relativeProgress = cardProgress - i;
            const isActive = i === activeIndex;
            const isPassed = i < activeIndex;

            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let rotateX = 0;

            if (isPassed) {
              const passedOffset = activeIndex - i;
              translateY = -passedOffset * 20;
              scale = 1 - passedOffset * 0.04;
              opacity = Math.max(0.3, 1 - passedOffset * 0.25);
            } else if (isActive) {
              const activeProgress = Math.max(0, Math.min(1, relativeProgress));
              translateY = (1 - activeProgress) * 60;
              scale = 0.95 + activeProgress * 0.05;
              opacity = 0.6 + activeProgress * 0.4;
              rotateX = (1 - activeProgress) * 5;
            } else {
              const upcomingOffset = i - activeIndex;
              translateY = 60 + upcomingOffset * 30;
              scale = 0.9 - upcomingOffset * 0.03;
              opacity = Math.max(0, 0.4 - upcomingOffset * 0.15);
              rotateX = 5;
            }

            const zIndex = cards.length - Math.abs(activeIndex - i) + (isActive ? 10 : 0);

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex,
                  transform: `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
                  opacity,
                  transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.5s ease",
                  transformOrigin: "center top",
                  willChange: "transform, opacity",
                }}
              >
                <div
                  className="rounded-2xl p-8 md:p-10 shadow-2xl border border-white/10"
                  style={{ background: card.color || "rgba(10, 38, 71, 0.95)", minHeight: "220px" }}
                >
                  <div className="flex items-start gap-5">
                    {card.icon && (
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: card.accentColor ? `${card.accentColor}26` : "rgba(32,178,170,0.15)" }}
                      >
                        {card.icon}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: card.accentColor || "var(--mint)" }}>
                          Paso {i + 1}
                        </span>
                        <div className="h-px flex-1" style={{ background: card.accentColor || "var(--mint)", opacity: 0.3 }} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{card.title}</h3>
                      <p className="text-white/70 text-base md:text-lg leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          {cards.map((_, i) => (
            <div
              key={i}
              className="w-2 rounded-full transition-all duration-500"
              style={{
                height: i === activeIndex ? 32 : 8,
                background: i === activeIndex ? "var(--mint)" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
