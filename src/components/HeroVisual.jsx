import React, { useEffect, useMemo, useRef } from "react";

function ellipsePoint(rx, ry, thetaRad) {
  return {
    x: rx * Math.cos(thetaRad),
    y: ry * Math.sin(thetaRad),
    rotDeg: (thetaRad * 180) / Math.PI,
  };
}

const PLANETS = [
  { key: "mercury", rx: 50,  ry: 16, r: 2.8, color: "#9CA3AF", dur:  6.0 },
  { key: "venus",   rx: 80,  ry: 25, r: 4.2, color: "#F4B942", dur: 10.0 },
  { key: "earth",   rx: 110, ry: 33, r: 4.6, color: "#60A5FA", stroke: "#93C5FD", dur: 12.5,
    moon: { dist: 10, r: 1.2, dur: 3.0, color:"#E5E7EB" } },
  { key: "mars",    rx: 145, ry: 44, r: 3.4, color: "#F87171", dur: 20.0 },
  { key: "jupiter", rx: 190, ry: 58, r: 9.0, color: "#FBBF24", dur: 38.0 },
  { key: "saturn",  rx: 235, ry: 73, r: 7.4, color: "#F59E0B", dur: 55.0, ring: { rx: 10, ry: 3.6 } },
  { key: "uranus",  rx: 275, ry: 86, r: 6.0, color: "#34D399", dur: 70.0 },
  { key: "neptune", rx: 315, ry: 98, r: 5.8, color: "#3B82F6", dur: 90.0 },
];

export default function HeroVisual() {
  const carriers = useRef({});
  const moonNodes = useRef({});
  const raf = useRef(0);
  const t0 = useRef(0);

  const prefersReduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Precompute “orbit” outlines as SVG paths (for the faint orbit strokes only)
  const orbitPaths = useMemo(() => {
    return PLANETS.map(p => {
      const d = `M ${p.rx} 0 A ${p.rx} ${p.ry} 0 1 1 ${-p.rx} 0 A ${p.rx} ${p.ry} 0 1 1 ${p.rx} 0`;
      return { key: p.key, d };
    });
  }, []);

  useEffect(() => {
    if (prefersReduce) return; // honor reduced motion

    const step = (ts) => {
      if (!t0.current) t0.current = ts;
      const elapsed = (ts - t0.current) / 1000; // seconds

      PLANETS.forEach((p) => {
        const g = carriers.current[p.key];
        if (!g) return;

        // Angle based on duration (full orbit per dur seconds)
        const theta = ((elapsed / p.dur) * 2 * Math.PI) % (2 * Math.PI);
        const { x, y, rotDeg } = ellipsePoint(p.rx, p.ry, theta);

        // Position planet on its ellipse; rotate to face tangent
        g.setAttribute("transform", `translate(${x},${y}) rotate(${rotDeg})`);

        // Moon (around Earth) – local orbit around the carrier
        if (p.moon && moonNodes.current[p.key]) {
          const mTheta = ((elapsed / p.moon.dur) * 2 * Math.PI) % (2 * Math.PI);
          const mx = p.moon.dist * Math.cos(mTheta);
          const my = p.moon.dist * Math.sin(mTheta);
          moonNodes.current[p.key].setAttribute("transform", `translate(${mx},${my})`);
        }
      });

      raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [prefersReduce]);

  return (
    <div
      className="relative mx-auto mb-8 h-48 w-full max-w-4xl sm:h-64 md:h-80"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {/* soft glows */}
      <div className="absolute -top-8 left-10 h-28 w-28 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute top-8 right-6 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 300" fill="none">
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD166" stopOpacity="1" />
            <stop offset="60%" stopColor="#FCA311" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.35" />
          </linearGradient>
          <filter id="orbitBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
          <radialGradient id="star" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E5E7EB" stopOpacity="1" />
            <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* center solar system */}
        <g transform="translate(400,150)">
          {/* Sun */}
          <g>
            <circle r="22" fill="url(#sunGlow)" />
            {!prefersReduce && (
              <circle r="34" fill="#F59E0B" opacity="0.15">
                <animate attributeName="r" values="30;36;30" dur="6s" repeatCount="indefinite" />
              </circle>
            )}
          </g>

          {/* Visible orbit strokes */}
          {orbitPaths.map(o => (
            <path
              key={o.key}
              d={o.d}
              stroke="url(#orbitStroke)"
              strokeWidth="1"
              filter="url(#orbitBlur)"
            />
          ))}

          {/* Planets (carriers moved by JS) */}
          {PLANETS.map((p) => (
            <g key={p.key} ref={(el) => (carriers.current[p.key] = el || undefined)}>
              {p.ring ? (
                <ellipse rx={p.ring.rx} ry={p.ring.ry} fill="none" stroke="#E5E7EB" strokeOpacity="0.6" />
              ) : null}
              <circle
                r={p.r}
                fill={p.color}
                {...(p.stroke ? { stroke: p.stroke, strokeWidth: 0.6 } : {})}
              />
              {p.moon ? (
                <g ref={(el) => (moonNodes.current[p.key] = el || undefined)}>
                  <circle r={p.moon.r} fill={p.moon.color} />
                </g>
              ) : null}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
