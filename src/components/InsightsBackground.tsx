import { useEffect, useRef } from "react";

/**
 * InsightsBackground
 * Symbolizes "Newsletter / Insights" — knowledge in motion.
 * - Floating "text lines" drifting like scrolling articles
 * - Rising idea particles (sparks of insight)
 * - Occasional connecting beams between ideas
 * - Soft navy/mint gradient background
 */
export function InsightsBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    type Line = {
      x: number;
      y: number;
      width: number;
      speed: number;
      opacity: number;
      thickness: number;
      hue: "blue" | "mint" | "white";
    };

    type Spark = {
      x: number;
      y: number;
      vy: number;
      vx: number;
      r: number;
      life: number;
      maxLife: number;
      hue: "mint" | "blue" | "white";
    };

    type Beam = {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      life: number;
      maxLife: number;
    };

    let lines: Line[] = [];
    let sparks: Spark[] = [];
    let beams: Beam[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const buildLines = () => {
      // Density of "text lines" scales with area
      const count = Math.max(18, Math.floor((w * h) / 22000));
      lines = Array.from({ length: count }, () => ({
        x: rand(-w * 0.2, w),
        y: rand(0, h),
        width: rand(60, 260),
        speed: rand(8, 28),
        opacity: rand(0.05, 0.18),
        thickness: rand(1, 2.4),
        hue: Math.random() < 0.6 ? "blue" : Math.random() < 0.85 ? "white" : "mint",
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildLines();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    let last = performance.now();
    let sparkAcc = 0;
    let beamAcc = 0;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now * 0.001;

      // Background — deep navy with ambient warm glow (warm = "knowledge")
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "#06192f");
      bg.addColorStop(0.5, "#0a2647");
      bg.addColorStop(1, "#082039");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Ambient blobs — soft glows that breathe
      const blob1 = ctx.createRadialGradient(
        w * (0.2 + 0.04 * Math.sin(t * 0.3)),
        h * (0.3 + 0.04 * Math.cos(t * 0.25)),
        0,
        w * 0.2,
        h * 0.3,
        Math.max(w, h) * 0.55
      );
      blob1.addColorStop(0, "rgba(32,178,170,0.16)");
      blob1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = blob1;
      ctx.fillRect(0, 0, w, h);

      const blob2 = ctx.createRadialGradient(
        w * (0.8 + 0.04 * Math.cos(t * 0.22)),
        h * (0.7 + 0.04 * Math.sin(t * 0.28)),
        0,
        w * 0.8,
        h * 0.7,
        Math.max(w, h) * 0.5
      );
      blob2.addColorStop(0, "rgba(23,127,198,0.18)");
      blob2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = blob2;
      ctx.fillRect(0, 0, w, h);

      // Update + draw "text lines" — scrolling article fragments
      ctx.lineCap = "round";
      for (const ln of lines) {
        ln.x += ln.speed * dt;
        if (ln.x > w + 40) {
          ln.x = -ln.width - rand(20, 200);
          ln.y = rand(0, h);
          ln.width = rand(60, 260);
          ln.speed = rand(8, 28);
          ln.opacity = rand(0.05, 0.18);
        }
        const color =
          ln.hue === "mint"
            ? `rgba(32,178,170,${ln.opacity})`
            : ln.hue === "white"
            ? `rgba(220,235,255,${ln.opacity * 0.9})`
            : `rgba(120,170,220,${ln.opacity})`;
        ctx.strokeStyle = color;
        ctx.lineWidth = ln.thickness;
        ctx.beginPath();
        ctx.moveTo(ln.x, ln.y);
        ctx.lineTo(ln.x + ln.width, ln.y);
        ctx.stroke();
      }

      // Spawn rising idea sparks
      sparkAcc += dt;
      const sparkRate = 0.08;
      while (sparkAcc > sparkRate) {
        sparkAcc -= sparkRate;
        if (sparks.length < 60) {
          sparks.push({
            x: rand(0, w),
            y: h + rand(0, 30),
            vy: -rand(18, 42),
            vx: rand(-6, 6),
            r: rand(1.2, 2.6),
            life: 0,
            maxLife: rand(4, 8),
            hue: Math.random() < 0.55 ? "mint" : Math.random() < 0.85 ? "white" : "blue",
          });
        }
      }

      // Update + draw sparks
      ctx.globalCompositeOperation = "lighter";
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life += dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.life > s.maxLife || s.y < -20) {
          sparks.splice(i, 1);
          continue;
        }
        const lifeRatio = s.life / s.maxLife;
        const alpha = Math.sin(lifeRatio * Math.PI) * 0.9; // fade in/out
        const colorRgb =
          s.hue === "mint" ? "32,178,170" : s.hue === "white" ? "230,240,255" : "120,180,240";

        // Glow halo
        const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 10);
        halo.addColorStop(0, `rgba(${colorRgb},${alpha * 0.7})`);
        halo.addColorStop(1, `rgba(${colorRgb},0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 10, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      // Occasional connecting beams between two random sparks
      beamAcc += dt;
      if (beamAcc > 0.6 && sparks.length > 4) {
        beamAcc = 0;
        if (Math.random() < 0.55) {
          const a = sparks[Math.floor(Math.random() * sparks.length)];
          const b = sparks[Math.floor(Math.random() * sparks.length)];
          if (a !== b) {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 220) {
              beams.push({
                x1: a.x,
                y1: a.y,
                x2: b.x,
                y2: b.y,
                life: 0,
                maxLife: rand(0.6, 1.2),
              });
            }
          }
        }
      }

      // Draw beams
      ctx.globalCompositeOperation = "lighter";
      for (let i = beams.length - 1; i >= 0; i--) {
        const beam = beams[i];
        beam.life += dt;
        if (beam.life > beam.maxLife) {
          beams.splice(i, 1);
          continue;
        }
        const ratio = beam.life / beam.maxLife;
        const alpha = Math.sin(ratio * Math.PI) * 0.5;
        const grd = ctx.createLinearGradient(beam.x1, beam.y1, beam.x2, beam.y2);
        grd.addColorStop(0, `rgba(32,178,170,0)`);
        grd.addColorStop(0.5, `rgba(180,220,255,${alpha})`);
        grd.addColorStop(1, `rgba(32,178,170,0)`);
        ctx.strokeStyle = grd;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(beam.x1, beam.y1);
        ctx.lineTo(beam.x2, beam.y2);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";

      // Vignette for depth + legibility
      const vg = ctx.createRadialGradient(
        w / 2,
        h / 2,
        Math.min(w, h) * 0.35,
        w / 2,
        h / 2,
        Math.max(w, h) * 0.75
      );
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
