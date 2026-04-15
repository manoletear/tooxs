import { useState, useEffect, useRef, useCallback } from "react";

interface IndustryCard {
  image: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface IndustryCarouselProps {
  cards: IndustryCard[];
  className?: string;
}

export default function IndustryCarousel({ cards, className = "" }: IndustryCarouselProps) {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartAngle = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const n = cards.length;
  const angleStep = 360 / n;

  // Intersection observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;
    const id = setInterval(() => setCurrentAngle(a => a - angleStep), 3000);
    return () => clearInterval(id);
  }, [isAutoPlaying, isVisible, angleStep]);

  const goTo = useCallback((dir: number) => {
    setIsAutoPlaying(false);
    setCurrentAngle(a => a + dir * angleStep);
  }, [angleStep]);

  // Drag handlers
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    dragStartX.current = e.clientX;
    dragStartAngle.current = currentAngle;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [currentAngle]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX.current;
    setCurrentAngle(dragStartAngle.current + dx * 0.3);
  }, [isDragging]);

  const onPointerUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap to nearest card
    setCurrentAngle(a => Math.round(a / angleStep) * angleStep);
  }, [isDragging, angleStep]);

  // Responsive radius
  const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 220 : 380;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* 3D Scene */}
      <div
        className="relative mx-auto select-none"
        style={{ width: "100%", height: 420, perspective: 1200 }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${currentAngle}deg)`,
            transition: isDragging ? "none" : "transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)",
          }}
        >
          {cards.map((card, i) => {
            const angle = i * angleStep;
            // Determine if this card is roughly facing front
            const normalizedAngle = ((currentAngle + angle) % 360 + 360) % 360;
            const isFront = normalizedAngle < 30 || normalizedAngle > 330;

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  width: 260,
                  height: 370,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-all duration-500"
                  style={{
                    background: "#fff",
                    outline: isFront ? "2px solid var(--mint)" : "none",
                    outlineOffset: 2,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-[55%] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,38,71,0.95)] via-[rgba(10,38,71,0.4)] to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="flex items-center gap-2 mb-1">
                        <card.icon className="text-mint" size={18} />
                        <span className="text-white font-bold text-base leading-tight">{card.title}</span>
                      </div>
                      <span className="text-mint text-xs font-medium italic">{card.subtitle}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 h-[45%] flex flex-col justify-between text-xs">
                    <div className="space-y-2">
                      <div>
                        <span className="font-bold text-navy text-[11px] uppercase tracking-wider">Problema</span>
                        <p className="text-muted-foreground leading-snug mt-0.5 line-clamp-2">{card.problem}</p>
                      </div>
                      <div>
                        <span className="font-bold text-navy text-[11px] uppercase tracking-wider">Solución</span>
                        <p className="text-muted-foreground leading-snug mt-0.5 line-clamp-2">{card.solution}</p>
                      </div>
                    </div>
                    <div className="bg-mint/10 rounded-lg px-3 py-1.5 mt-1">
                      <span className="font-bold text-mint text-[11px]">Impacto: </span>
                      <span className="text-navy text-[11px] font-medium">{card.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => goTo(1)}
          className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-mint transition-colors"
          aria-label="Anterior"
        >
          ‹
        </button>
        <div className="flex gap-1.5">
          {cards.map((_, i) => {
            const normalizedAngle = ((-currentAngle % 360) + 360) % 360;
            const cardAngle = i * angleStep;
            const isActive = Math.abs(normalizedAngle - cardAngle) < angleStep / 2 ||
                             Math.abs(normalizedAngle - cardAngle - 360) < angleStep / 2 ||
                             Math.abs(normalizedAngle - cardAngle + 360) < angleStep / 2;
            return (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? "bg-mint w-6" : "bg-navy/30"}`}
                onClick={() => { setIsAutoPlaying(false); setCurrentAngle(-i * angleStep); }}
                aria-label={`Ir a ${cards[i].title}`}
              />
            );
          })}
        </div>
        <button
          onClick={() => goTo(-1)}
          className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-mint transition-colors"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </div>
  );
}
