import { useState, useEffect, useMemo, useRef, type ReactNode } from "react";

interface CardData {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  backgroundPosition?: string;
  onClick?: () => void;
}

interface CardDeckSpreadProps {
  cards: CardData[];
  cardWidth?: number;
  cardHeight?: number;
  overlap?: number;
  cardRadius?: number;
  shadowIntensity?: number;
  blurIntensity?: number;
  hoverBorderColor?: string;
  animationIntensity?: number;
  titleBackgroundColor?: string;
  titleTextColor?: string;
  className?: string;
  /** Render custom overlay content on each card */
  renderOverlay?: (card: CardData, index: number, isHovered: boolean) => ReactNode;
}

export default function CardDeckSpread({
  cards,
  cardWidth = 210,
  cardHeight = 290,
  overlap = 60,
  cardRadius = 20,
  shadowIntensity = 0.12,
  blurIntensity = 2,
  hoverBorderColor = "var(--mint)",
  animationIntensity = 1,
  titleBackgroundColor = "rgba(0,0,0,0.48)",
  titleTextColor = "#FFFFFF",
  className = "",
  renderOverlay,
}: CardDeckSpreadProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [entered, setEntered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered animation
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldAnimate(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Entrance animation: cards slide in one by one
  useEffect(() => {
    if (!shouldAnimate) {
      setEntered(false);
      return;
    }
    setEntered(false);
    const intensity = Math.max(animationIntensity, 0.3);
    const step = 120 / intensity;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < cards.length; i++) {
      timeouts.push(
        setTimeout(() => {
          if (i === cards.length - 1) {
            setEntered(true);
          }
        }, i * step)
      );
    }
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [shouldAnimate, cards.length, animationIntensity]);

  const layout = useMemo(() => {
    const numCards = cards.length;
    const totalWidth = cardWidth + (numCards - 1) * overlap;
    const initialStackLeft = (totalWidth - cardWidth) / 2;
    return { numCards, totalWidth, initialStackLeft };
  }, [cards.length, cardWidth, overlap]);

  const animationTiming = useMemo(() => {
    const intensity = Math.max(animationIntensity, 0.3);
    return { duration: 0.7 / intensity, delayStep: 0.09 / intensity };
  }, [animationIntensity]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "relative",
          width: layout.totalWidth,
          height: cardHeight,
          overflow: "visible",
          paddingBottom: 32,
        }}
      >
        {cards.map((card, i) => {
          const isHovered = hovered === i;
          const z = layout.numCards - i + (isHovered ? 100 : 0);
          const left = entered ? i * overlap : layout.initialStackLeft;
          const blur = hovered !== null && !isHovered ? blurIntensity : 0;
          const top = entered ? 0 : i * 2;
          const horizontalOffset = entered ? 0 : i * 2;
          const transitionDelay = i * animationTiming.delayStep;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: left + horizontalOffset,
                top,
                width: cardWidth,
                height: cardHeight,
                borderRadius: cardRadius,
                boxShadow: `0 4px 24px rgba(0,0,0,${shadowIntensity})`,
                background: "#fff",
                cursor: card.onClick ? "pointer" : "default",
                zIndex: z,
                willChange: "transform, opacity",
                transition: `left ${animationTiming.duration}s cubic-bezier(0.25, 0.8, 0.25, 1) ${transitionDelay}s, top ${animationTiming.duration}s cubic-bezier(0.25, 0.8, 0.25, 1) ${transitionDelay}s, opacity ${animationTiming.duration}s cubic-bezier(0.25, 0.8, 0.25, 1) ${transitionDelay}s, transform ${isHovered ? "0.3s" : "0.4s"} cubic-bezier(0.25, 0.8, 0.25, 1), filter ${isHovered ? "0.3s" : "0.4s"} cubic-bezier(0.25, 0.8, 0.25, 1)`,
                opacity: 1,
                filter: blur ? `blur(${blur}px)` : "none",
                transform: isHovered ? "scale(1.08) translateY(-12px)" : "scale(1) translateY(0)",
                outline: isHovered ? `2px solid ${hoverBorderColor}` : "none",
                overflow: "hidden",
                userSelect: "none" as const,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={card.onClick}
            >
              <img
                src={card.image}
                alt={card.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: card.backgroundPosition || "center",
                  borderRadius: cardRadius,
                  userSelect: "none" as const,
                }}
              />
              {/* Custom overlay or default title */}
              {renderOverlay ? (
                renderOverlay(card, i, isHovered)
              ) : (
                card.title && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: titleBackgroundColor,
                      color: titleTextColor,
                      padding: "8px 12px 6px 12px",
                      borderBottomLeftRadius: cardRadius,
                      borderBottomRightRadius: cardRadius,
                      textAlign: "center",
                      pointerEvents: "none",
                      userSelect: "none" as const,
                      opacity: isHovered ? 1 : 0,
                      transition: "opacity 0.4s ease-in-out",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {card.title}
                    {card.subtitle && (
                      <div style={{ fontSize: "12px", fontWeight: 400, opacity: 0.8, marginTop: 2 }}>
                        {card.subtitle}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
