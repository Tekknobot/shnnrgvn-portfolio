import React, { useEffect, useMemo, useRef } from "react";

/**
 * Scales & constants
 * - AU scale keeps everything on-screen. Tweak PX_PER_AU for bigger/smaller system.
 * - PERIOD_SCALE compresses real orbital periods (days) into seconds for animation.
 */
const PX_PER_AU = 70;        // pixels per astronomical unit (try 60–90)
const PERIOD_SCALE = 45;     // lower = faster; 45 means 365d ~ 8.1s

/**
 * Planet data (approx):
 * aAU = semi-major axis in AU
 * e   = eccentricity (0..1)
 * P   = orbital period in days
 * r   = visual radius in pixels (not to scale)
 * color = fill color
 * ring? = optional saturn ring drawing
 */
const PLANETS = [
  { key: "mercury", aAU: 0.387, e: 0.2056, P: 87.97,    r: 2.6, color: "#9CA3AF" },
  { key: "venus",   aAU: 0.723, e: 0.0068, P: 224.70,   r: 4.0, color: "#F4B942" },
  { key: "earth",   aAU: 1.000, e: 0.0167, P: 365.25,   r: 4.6, color: "#60A5FA", stroke: "#93C5FD",
    moon: { r: 1.2, color:"#E5E7EB", dist: 0.03 * PX_PER_AU, days: 27.32 } },
  { key: "mars",    aAU: 1.524, e: 0.0934, P: 686.98,   r: 3.2, color: "#F87171" },
  { key: "jupiter", aAU: 5.203, e: 0.0489, P: 4332.59,  r: 8.0, color: "#FBBF24" },
  { key: "saturn",  aAU: 9.537, e: 0.0565, P: 10759.22, r: 7.0, color: "#F59E0B", ring: { rx: 12, ry: 4.5 } },
  { key: "uranus",  aAU: 19.191, e: 0.0463, P: 30688.5, r: 5.8, color: "#34D399" },
  { key: "neptune", aAU: 30.068, e: 0.0086, P: 60182,   r: 5.6, color: "#3B82F6" },
];

/** Solve Kepler's equation M = E - e sin E for E (eccentric anomaly) */
function solveKepler(M, e, tol = 1e-6, maxIter = 12) {
  // normalize M to [−π, π] for better convergence
  M = ((M + Math.PI) % (2 * Math.PI)) - Math.PI;
  let E = e < 0.8 ? M : Math.PI; // initial guess
  for (let i = 0; i < maxIter; i++) {
    const f = E - e * Math.sin(E) - M;
    const f1 = 1 - e * Math.cos(E);
    const d = f / f1;
    E -= d;
    if (Math.abs(d) < tol) break;
  }
  return E;
}

/** True anomaly ν and radius r from E (eccentric anomaly) */
function trueAnomalyAndRadius(E, e, aPx) {
  const cosE = Math.cos(E);
  const sinE = Math.sin(E);
  const sqrt = Math.sqrt((1 + e) / (1 - e));
  const tanHalfNu = sqrt * Math.tan(E / 2);
  const nu = 2 * Math.atan(tanHalfNu); // true anomaly
  const r = aPx * (1 - e * cosE);      // distance to focus (sun)
  return { nu, r };
}

/** Build path string for an ellipse with sun at focus (offset center by a*e) */
function ellipsePathFocus(aPx, e) {
  const b = aPx * Math.sqrt(1 - e * e);
  const f = aPx * e; // focus distance from center
  // center at (-f, 0) so the rightmost point is (a - f, 0), leftmost is (-(a+f), 0)
  return `M ${aPx - f} 0 A ${aPx} ${b} 0 1 1 ${-(aPx + f)} 0 A ${aPx} ${b} 0 1 1 ${aPx - f} 0`;
}

export default function HeroVisual() {
  const carriers = useRef({});
  const moonNodes = useRef({});
  const raf = useRef(0);
  const t0 = useRef(0);

  const prefersReduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /** Precompute drawing parameters per planet */
  const system = useMemo(() => {
    return PLANETS.map((p) => {
      const aPx = p.aAU * PX_PER_AU;                     // semi-major in px
      const bPx = aPx * Math.sqrt(1 - p.e * p.e);        // semi-minor in px
      const focusShift = aPx * p.e;                      // center offset
      // seconds per orbit (scaled)
      const T = (p.P / PERIOD_SCALE);                    // seconds per full revolution
      // path for the visible orbit (sun at focus)
      const d = ellipsePathFocus(aPx, p.e);
      // moon travel time in seconds
      const moonT = p.moon ? (p.moon.days / PERIOD_SCALE) : 0;
      return { ...p, aPx, bPx, focusShift, T, d, moonT };
    });
  }, []);

  useEffect(() => {
    if (prefersReduce) return;

    const step = (ts) => {
      if (!t0.current) t0.current = ts;
      const elapsed = (ts - t0.current) / 1000; // seconds since start

      system.forEach((p) => {
        const g = carriers.current[p.key];
        if (!g) return;

        // Mean anomaly M = 2π * t / T
        const M = (2 * Math.PI * (elapsed % p.T)) / p.T;
        const E = solveKepler(M, p.e);
        const { nu, r } = trueAnomalyAndRadius(E, p.e, p.aPx);

        // Convert polar (focus at origin) to cartesian
        const x = r * Math.cos(nu);
        const y = r * Math.sin(nu);

        // Position the carrier at (x,y); rotate to face along tangent (≈ ν in this frame)
        g.setAttribute("transform", `translate(${x},${y}) rotate(${(nu * 180) / Math.PI})`);

        // Earth moon (local, circular)
        if (p.moon && moonNodes.current[p.key]) {
          const mTheta = (2 * Math.PI * (elapsed % p.moonT)) / p.moonT;
          const mx = p.moon.dist * Math.cos(mTheta);
          const my = p.moon.dist * Math.sin(mTheta);
          moonNodes.current[p.key].setAttribute("transform", `translate(${mx},${my})`);
        }
      });

      raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [prefersReduce, system]);

  return (
    <div
      className="relative mx-auto mb-8 h-48 w-full max-w-4xl sm:h-64 md:h-80"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {/* soft glows */}
      <div className="absolute -top-8 left-10 h-28 w-28 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute top-8 right-6 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 340" fill="none">
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

        {/* starfield */}
        <g opacity="0.25">
          {Array.from({ length: 30 }).map((_, i) => {
            const x = (i * 263) % 900;
            const y = (i * 101) % 340;
            const r = (i % 3) + 0.7;
            return <circle key={i} cx={x} cy={y} r={r} fill="url(#star)" />;
          })}
        </g>

        {/* center system at (450,170) */}
        <g transform="translate(450,170)">

          {/* Sun at focus (origin) */}
          <g>
            <circle r="22" fill="url(#sunGlow)" />
            {!prefersReduce && (
              <circle r="34" fill="#F59E0B" opacity="0.15">
                <animate attributeName="r" values="30;36;30" dur="6s" repeatCount="indefinite" />
              </circle>
            )}
          </g>

          {/* Orbits with focus at origin (offset centers) */}
          {system.map((p) => (
            <path
              key={p.key}
              d={p.d}
              stroke="url(#orbitStroke)"
              strokeWidth="1"
              filter="url(#orbitBlur)"
              fill="none"
            />
          ))}

          {/* Planets (positions updated by rAF) */}
          {system.map((p) => (
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
