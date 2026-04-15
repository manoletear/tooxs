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

  // Intersection observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle
  useEffect(() => {
    if (!isAutoPlaying || !isVisible || flippedIndex !== null) return;
    const id = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % n);
    }, 3500);
    return () => clearInterval(id);
  }, [isAutoPlaying, isVisible, n, flippedIndex]);

  const goTo = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setFlippedIndex(null);
    setActiveIndex(index);
  }, []);

  const handleCardClick = useCallback((index: number) => {
    if (index !== activeIndex) {
      goTo(index);
      return;
    }
    // Toggle flip on active card
    setIsAutoPlaying(false);
    setFlippedIndex(prev => prev === index ? null : index);
  }, [activeIndex, goTo]);

  const next = useCallback(() => {
    setIsAutoPlaying(false);
    setFlippedIndex(null);
    setActiveIndex(prev => (prev + 1) % n);
  }, [n]);

  const prev = useCallback(() => {
    setIsAutoPlaying(false);
    setFlippedIndex(null);
    setActiveIndex(prev => (prev - 1 + n) % n);
  }, [n]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Card Stack */}
      <div className="relative mx-auto" style={{ height: 480, maxWidth: 700 }}>
        {cards.map((card, i) => {
          // Calculate position relative to active
          let offset = i - activeIndex;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;

          const isActive = offset === 0;
          const isFlipped = flippedIndex === i && isActive;
          const absOffset = Math.abs(offset);

          // Only render nearby cards
          if (absOffset > 3) return null;

          // Stack positioning: cards behind shift up and scale down
          const translateY = isActive ? 0 : -absOffset * 28;
          const translateX = offset * 12;
          const scale = isActive ? 1 : 1 - absOffset * 0.06;
          const zIndex = n - absOffset;
          const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.15;
          const rotate = offset * 2;

          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 cursor-pointer"
              style={{
                width: 300,
                height: 420,
                marginLeft: -150,
                marginTop: -210,
                zIndex,
                transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                opacity,
                transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                perspective: 1000,
              }}
              onClick={() => handleCardClick(i)}
            >
              {/* Flip container */}
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                }}
              >
                {/* FRONT - Image in B&W */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-border"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    style={{ filter: isActive && !isFlipped ? "grayscale(70%)" : "grayscale(100%)" }}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-9 h-9 rounded-full bg-mint/20 backdrop-blur-sm flex items-center justify-center">
                        <card.icon className="text-mint" size={18} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight">{card.title}</h3>
                        <p className="text-mint text-xs font-medium italic mt-0.5">{card.subtitle}</p>
                      </div>
                    </div>
                    {isActive && (
                      <p className="text-white/60 text-xs mt-3 animate-fade-up">Toca para ver detalles →</p>
                    )}
                  </div>
                </div>

                {/* BACK - Content */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-mint/30"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "linear-gradient(135deg, #1D1D1B 0%, #2A2A28 100%)",
                  }}
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center">
                        <card.icon className="text-mint" size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base">{card.title}</h3>
                        <p className="text-mint text-xs italic">{card.subtitle}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 flex-1">
                      <div>
                        <span className="text-mint text-xs font-bold uppercase tracking-wider">Problema</span>
                        <p className="text-white/80 text-sm leading-relaxed mt-1">{card.problem}</p>
                      </div>
                      <div>
                        <span className="text-mint text-xs font-bold uppercase tracking-wider">Solución</span>
                        <p className="text-white/80 text-sm leading-relaxed mt-1">{card.solution}</p>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="bg-mint/10 rounded-xl px-4 py-3 mt-3 border border-mint/20">
                      <span className="text-mint text-xs font-bold">Impacto: </span>
                      <span className="text-white text-xs font-medium">{card.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-mint transition-colors"
          aria-label="Anterior"
        >
          ‹
        </button>
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
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-mint transition-colors"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </div>
  );
}
