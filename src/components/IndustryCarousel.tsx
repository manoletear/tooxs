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
    if (!isAutoPlaying || !isVisible) return;
    const id = setInterval(() => setActiveIndex(prev => (prev + 1) % n), 2500);
    return () => clearInterval(id);
  }, [isAutoPlaying, isVisible, n]);

  const goTo = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  }, []);

  const handleCardClick = useCallback((index: number) => {
    if (index !== activeIndex) { goTo(index); }
  }, [activeIndex, goTo]);

  const next = useCallback(() => { setIsAutoPlaying(false); setActiveIndex(prev => (prev + 1) % n); }, [n]);
  const prev = useCallback(() => { setIsAutoPlaying(false); setActiveIndex(prev => (prev - 1 + n) % n); }, [n]);

  /* Touch swipe */
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = useCallback((e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    touchStartX.current = null;
  }, [next, prev]);

  // Card dimensions
  const CARD_W = 280;
  const CARD_H = 400;
  const ACTIVE_CARD_W = 340;
  const ACTIVE_CARD_H = 480;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Card fan spread */}
      <div className="relative mx-auto overflow-hidden" style={{ height: ACTIVE_CARD_H + 40, maxWidth: 1200 }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {cards.map((card, i) => {
          let offset = i - activeIndex;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;

          const isActive = offset === 0;
          const absOffset = Math.abs(offset);

          if (absOffset > 3) return null;

          // Fan spread: cards distributed horizontally with rotation
          const spacing = 190;
          const translateX = offset * spacing;
          const translateY = isActive ? -20 : absOffset * 15 + 10;
          const rotateZ = offset * -5;
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
              }}
              onClick={() => handleCardClick(i)}
            >
              <div
                className="absolute inset-0 overflow-hidden shadow-2xl"
                style={{
                  borderRadius: isActive ? 24 : 18,
                  border: isActive ? "3px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* Subtle metallic sheen — no dark overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 mix-blend-overlay" />
                <div className={`absolute bottom-0 left-0 right-0 ${isActive ? "p-6" : "p-4"}`}>
                  {/* Local gradient behind text for legibility, only on the text band */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent -z-0" />
                  <div className="relative">
                  <div className="flex items-start gap-3 mb-1">
                    <div className={`shrink-0 ${isActive ? "w-14 h-14" : "w-11 h-11"} rounded-full bg-mint/20 backdrop-blur-sm flex items-center justify-center`}>
                      <card.icon className="text-mint" size={isActive ? 28 : 22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className={`text-white font-bold leading-tight ${isActive ? "text-[20px]" : "text-[16px]"} line-clamp-2`}>
                        {card.title}
                      </h3>
                      <p className={`text-mint font-medium italic mt-0.5 ${isActive ? "text-[15px]" : "text-[13px]"} line-clamp-1`}>
                        {card.subtitle}
                      </p>
                    </div>
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
