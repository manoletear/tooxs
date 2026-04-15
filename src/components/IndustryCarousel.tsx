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
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const n = cards.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !isVisible || flippedIndex !== null) return;
    const id = setInterval(() => setActiveIndex(prev => (prev + 1) % n), 3500);
    return () => clearInterval(id);
  }, [isAutoPlaying, isVisible, n, flippedIndex]);

  const goTo = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setFlippedIndex(null);
    setActiveIndex(index);
  }, []);

  const handleCardClick = useCallback((index: number) => {
    if (index !== activeIndex) { goTo(index); return; }
    setIsAutoPlaying(false);
    setFlippedIndex(prev => prev === index ? null : index);
  }, [activeIndex, goTo]);

  const next = useCallback(() => { setIsAutoPlaying(false); setFlippedIndex(null); setActiveIndex(prev => (prev + 1) % n); }, [n]);
  const prev = useCallback(() => { setIsAutoPlaying(false); setFlippedIndex(null); setActiveIndex(prev => (prev - 1 + n) % n); }, [n]);

  // Card dimensions
  const CARD_W = 280;
  const CARD_H = 400;
  const ACTIVE_CARD_W = 340;
  const ACTIVE_CARD_H = 480;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Card fan spread */}
      <div className="relative mx-auto overflow-hidden" style={{ height: ACTIVE_CARD_H + 40, maxWidth: 1200 }}>
        {cards.map((card, i) => {
          let offset = i - activeIndex;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;

          const isActive = offset === 0;
          const isFlipped = flippedIndex === i && isActive;
          const absOffset = Math.abs(offset);

          if (absOffset > 3) return null;

          // Fan spread: cards distributed horizontally with rotation
          const spacing = 190; // horizontal gap between cards
          const translateX = offset * spacing;
          const translateY = isActive ? -20 : absOffset * 15 + 10;
          const rotateZ = offset * -5; // tilt outward
          const scale = isActive ? 1 : 0.85 - absOffset * 0.03;
          const zIndex = 10 - absOffset;
          const opacity = absOffset > 3 ? 0 : 1;
          const w = isActive ? ACTIVE_CARD_W : CARD_W;
          const h = isActive ? ACTIVE_CARD_H : CARD_H;

          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 cursor-pointer"
              style={{
                width: w,
                height: h,
                marginLeft: -w / 2,
                marginTop: -h / 2,
                zIndex,
                transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotateZ}deg) scale(${scale})`,
                opacity,
                transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                perspective: 1000,
              }}
              onClick={() => handleCardClick(i)}
            >
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 overflow-hidden shadow-2xl"
                  style={{
                    backfaceVisibility: "hidden",
                    borderRadius: isActive ? 24 : 18,
                    border: isActive ? "3px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    style={{ filter: isActive ? "grayscale(60%)" : "grayscale(100%) brightness(0.8)" }}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-8 h-8 rounded-full bg-mint/20 backdrop-blur-sm flex items-center justify-center">
                        <card.icon className="text-mint" size={16} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm leading-tight">{card.title}</h3>
                        <p className="text-mint text-[11px] font-medium italic">{card.subtitle}</p>
                      </div>
                    </div>
                    {isActive && (
                      <p className="text-white/50 text-[11px] mt-2 animate-fade-up">Clic para ver detalles →</p>
                    )}
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 overflow-hidden shadow-2xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: 24,
                    border: "2px solid rgba(23,127,198,0.3)",
                    background: "linear-gradient(135deg, #1D1D1B 0%, #2A2A28 100%)",
                  }}
                >
                  <div className="p-5 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-full bg-mint/20 flex items-center justify-center">
                        <card.icon className="text-mint" size={18} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm">{card.title}</h3>
                        <p className="text-mint text-[11px] italic">{card.subtitle}</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div>
                        <span className="text-mint text-[11px] font-bold uppercase tracking-wider">Problema</span>
                        <p className="text-white/80 text-xs leading-relaxed mt-1">{card.problem}</p>
                      </div>
                      <div>
                        <span className="text-mint text-[11px] font-bold uppercase tracking-wider">Solución</span>
                        <p className="text-white/80 text-xs leading-relaxed mt-1">{card.solution}</p>
                      </div>
                    </div>
                    <div className="bg-mint/10 rounded-xl px-3 py-2.5 mt-2 border border-mint/20">
                      <span className="text-mint text-[11px] font-bold">Impacto: </span>
                      <span className="text-white text-[11px] font-medium">{card.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button onClick={prev} className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-mint transition-colors" aria-label="Anterior">‹</button>
        <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-mint w-8" : "bg-navy/30 w-2"}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a ${cards[i].title}`}
            />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-mint transition-colors" aria-label="Siguiente">›</button>
      </div>
    </div>
  );
}
