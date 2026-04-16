import { useEffect, useRef } from "react";

/**
 * NeuralActivationBackground
 * Symbolizes "Activar IA" — a living neural network awakening.
 * Nodes pulse, synapses fire along connections, signals travel,
 * conveying intelligence, connection, and emergent activation.
 */
export function NeuralActivationBackground({ className = "" }: { className?: string }) {
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

    type Node = {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      r: number;
      phase: number;
      speed: number;
      activation: number; // 0..1 pulse strength
      driftX: number;
      driftY: number;
    };

    type Signal = {
      from: number;
      to: number;
      t: number; // 0..1
      speed: number;
      hue: number;
    };

    let nodes: Node[] = [];
    let edges: Array<[number, number, number]> = []; // a, b, distance
    let signals: Signal[] = [];

    const NODE_DENSITY = 0.000055; // nodes per px²
    const MAX_LINK_DIST = 170;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const build = () => {
      const count = Math.max(28, Math.floor(w * h * NODE_DENSITY));
      nodes = Array.from({ length: count }, () => {
        const x = rand(0, w);
        const y = rand(0, h);
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          r: rand(1.2, 2.4),
          phase: rand(0, Math.PI * 2),
          speed: rand(0.4, 1.1),
          activation: 0,
          driftX: rand(8, 22),
          driftY: rand(8, 22),
        };
      });

      // Build edges by proximity (k-nearest-ish)
      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].baseX - nodes[j].baseX;
          const dy = nodes[i].baseY - nodes[j].baseY;
          const d = Math.hypot(dx, dy);
          if (d < MAX_LINK_DIST) edges.push([i, j, d]);
        }
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    let last = performance.now();
    let signalAccumulator = 0;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now * 0.001;

      // Background gradient — deep navy to indigo, evoking "awakening"
      const bg = ctx.createRadialGradient(w * 0.5, h * 0.55, 0, w * 0.5, h * 0.55, Math.max(w, h) * 0.85);
      bg.addColorStop(0, "#0d2a52");
      bg.addColorStop(0.55, "#0a1f3f");
      bg.addColorStop(1, "#050d1f");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Soft aurora glow behind the network — sense of energy
      const aurora = ctx.createRadialGradient(
        w * (0.3 + 0.05 * Math.sin(t * 0.3)),
        h * (0.4 + 0.05 * Math.cos(t * 0.25)),
        0,
        w * 0.3,
        h * 0.4,
        Math.max(w, h) * 0.6
      );
      aurora.addColorStop(0, "rgba(32,178,170,0.18)");
      aurora.addColorStop(0.4, "rgba(23,127,198,0.10)");
      aurora.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = aurora;
      ctx.fillRect(0, 0, w, h);

      const aurora2 = ctx.createRadialGradient(
        w * (0.75 + 0.05 * Math.cos(t * 0.22)),
        h * (0.65 + 0.05 * Math.sin(t * 0.28)),
        0,
        w * 0.75,
        h * 0.65,
        Math.max(w, h) * 0.55
      );
      aurora2.addColorStop(0, "rgba(99,102,241,0.16)");
      aurora2.addColorStop(0.5, "rgba(23,127,198,0.06)");
      aurora2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = aurora2;
      ctx.fillRect(0, 0, w, h);

      // Update node positions with gentle drift
      for (const n of nodes) {
        n.x = n.baseX + Math.sin(t * 0.4 * n.speed + n.phase) * n.driftX;
        n.y = n.baseY + Math.cos(t * 0.35 * n.speed + n.phase) * n.driftY;
        n.activation *= 0.94; // decay pulse
      }

      // Spawn new signals along edges (synapse firing)
      signalAccumulator += dt;
      const spawnRate = 0.05; // every X seconds
      while (signalAccumulator > spawnRate) {
        signalAccumulator -= spawnRate;
        if (edges.length > 0) {
          const e = edges[Math.floor(Math.random() * edges.length)];
          signals.push({
            from: e[0],
            to: e[1],
            t: 0,
            speed: rand(0.4, 1.1),
            hue: Math.random() < 0.5 ? 174 : 200, // mint or blue
          });
        }
        if (signals.length > 80) signals.shift();
      }

      // Draw edges — soft, electric web
      ctx.lineWidth = 0.6;
      for (const [i, j, d] of edges) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist > MAX_LINK_DIST * 1.2) continue;
        const alpha = (1 - dist / (MAX_LINK_DIST * 1.2)) * 0.18;
        ctx.strokeStyle = `rgba(120,180,230,${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Update + draw signals (pulses traveling along synapses)
      ctx.globalCompositeOperation = "lighter";
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.t += dt * sig.speed;
        if (sig.t >= 1) {
          // Activate destination node on arrival
          nodes[sig.to].activation = 1;
          signals.splice(s, 1);
          continue;
        }
        const a = nodes[sig.from];
        const b = nodes[sig.to];
        const x = a.x + (b.x - a.x) * sig.t;
        const y = a.y + (b.y - a.y) * sig.t;
        const color = sig.hue === 174 ? "32,178,170" : "100,170,240";

        // Glow head
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 14);
        grd.addColorStop(0, `rgba(${color},0.95)`);
        grd.addColorStop(1, `rgba(${color},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.fillStyle = `rgba(255,255,255,0.9)`;
        ctx.beginPath();
        ctx.arc(x, y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        // Trail
        const tailX = a.x + (b.x - a.x) * Math.max(0, sig.t - 0.18);
        const tailY = a.y + (b.y - a.y) * Math.max(0, sig.t - 0.18);
        const lg = ctx.createLinearGradient(tailX, tailY, x, y);
        lg.addColorStop(0, `rgba(${color},0)`);
        lg.addColorStop(1, `rgba(${color},0.7)`);
        ctx.strokeStyle = lg;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";

      // Draw nodes (neurons) with halo on activation
      for (const n of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.2 * n.speed + n.phase);
        const halo = 6 + n.activation * 18 + pulse * 1.2;

        // Halo
        const haloGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, halo);
        const intensity = 0.18 + n.activation * 0.55;
        haloGrad.addColorStop(0, `rgba(160,220,255,${intensity})`);
        haloGrad.addColorStop(1, "rgba(160,220,255,0)");
        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, halo, 0, Math.PI * 2);
        ctx.fill();

        // Core
        const coreColor = n.activation > 0.4 ? "rgba(220,250,255,1)" : "rgba(180,220,250,0.95)";
        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + n.activation * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Subtle vignette for depth
      const vg = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.4, w / 2, h / 2, Math.max(w, h) * 0.75);
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
