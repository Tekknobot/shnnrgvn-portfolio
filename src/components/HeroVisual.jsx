import React, { useEffect, useMemo, useRef } from "react";

function ellipsePath(rx, ry) {
  // Ellipse centered at 0,0 as a path (two arcs)
  return `M ${rx} 0 A ${rx} ${ry} 0 1 1 ${-rx} 0 A ${rx} ${ry} 0 1 1 ${rx} 0`;
}

const PLANETS = [
  { key: "mercury", rx: 50,  ry: 16, r: 2.8, color: "#9CA3AF", dur:  6.0 },
  { key: "venus",   rx: 80,  ry: 25, r: 4.2, color: "#F4B942", dur: 10.0 },
  // Earth has a moon—rendered separately
  { key: "earth",   rx: 110, ry: 33, r: 4.6, color: "#60A5FA", stroke: "#93C5FD", dur: 12.5, moon: { dist: 10, r: 1.2, dur: 3.0 } },
  { key: "mars",    rx: 145, ry: 44, r: 3.4, color: "#F87171", dur: 20.0 },
  { key: "jupiter", rx: 190, ry: 58, r: 9.0, color: "#FBBF24", dur: 38.0 },
  { key: "saturn",  rx: 235, ry: 73, r: 7.4, color: "#F59E0B", dur: 55.0, ring: { rx: 10, ry: 3.6 } },
  { key: "uranus",  rx: 275, ry: 86, r: 6.0, color: "#34D399", dur: 70.0 },
  { key: "neptune", rx: 315, ry: 98, r: 5.8, color: "#3B82F6", dur: 90.0 },
];

export default function HeroVisual() {
  const prefersReduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Build path defs for motion + visible orbit strokes
  const orbits = useMemo(
    () =>
      PLANETS.map((p) => ({
        id: `${p.key}Path`,
        path: ellipsePath(p.rx, p.ry),
        rx: p.rx,
        ry: p.ry,
      })),
    []
  );

  // ==== JS fallback: animate with rAF if SMIL isn't supported ====
  const carrierRefs = useRef({});
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (prefersReduce) return; // honor reduced motion

    const smilSupported =
      typeof SVGElement !== "undefined" &&
      "animateMotion" in document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");

    if (smilSupported) return; // native <animateMotion> will handle it

    // Fallback: JS orbit via transforms
    startRef.current = performance.now();

    const step = (t) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = (t - startRef.current) / 1000; // seconds
      PLANETS.forEach((p) => {
        const g = carrierRefs.current[p.key];
        if (!g) return;
        const theta = ((elapsed / p.dur) * 2 * Math.PI) % (2 * Math.PI);
        const x = p.rx * Math.cos(theta);
        const y = p.ry * Math.sin(theta);
        g.setAttribute("transform", `translate(${x},${y}) rotate(${(theta * 180) / Math.PI})`);

        // Moon around earth
        if (p.moon) {
          const moon = g.querySelector(`[data-moon="${p.key}"]`);
          if (moon) {
            const mTheta = ((elapsed / p.moon.dur) * 2 * Math.PI) % (2 * Math.PI);
            const mx = p.moon.dist * Math.cos(mTheta);
            const my = p.moon.dist * Math.sin(mTheta);
            moon.setAttribute("transform", `translate(${mx},${my})`);
          }
        }
      });
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
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

        {/* starfield */}
        <g opacity="0.25">
          {Array.from({ length: 26 }).map((_, i) => {
            const x = (i * 273) % 800;
            const y = (i * 97) % 300;
            const r = (i % 3) + 0.7;
            return <circle key={i} cx={x} cy={y} r={r} fill="url(#star)" />;
          })}
        </g>

        {/* center system */}
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

          {/* Orbit strokes + motion paths */}
          {orbits.map((o) => (
            <g key={o.id}>
              <path id={o.id} d={o.path} stroke="url(#orbitStroke)" strokeWidth="1" filter="url(#orbitBlur)" fill="none" />
            </g>
          ))}

          {/* Planets: SMIL if available; else JS fallback moves carrier <g> */}
          {PLANETS.map((p) => (
            <g
              key={p.key}
              ref={(el) => (carrierRefs.current[p.key] = el || undefined)}
            >
              {/* carrier starts at (0,0); SMIL/JS will move it */}
              <g>
                {/* Special visuals (rings) */}
                {p.ring ? (
                  <ellipse rx={p.ring.rx} ry={p.ring.ry} fill="none" stroke="#E5E7EB" strokeOpacity="0.6" />
                ) : null}

                <circle
                  r={p.r}
                  fill={p.color}
                  {...(p.stroke ? { stroke: p.stroke, strokeWidth: 0.6 } : {})}
                />

                {/* Moon for Earth (rotates around the carrier) */}
                {p.moon ? (
                  <g data-moon={p.key}>
                    <circle r={p.moon.r} fill="#E5E7EB" />
                    {!prefersReduce && (
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0"
                        to="360"
                        dur={`${p.moon.dur}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </g>
                ) : null}
              </g>

              {/* SMIL motion along path (works on most mobile with xlinkHref) */}
              {!prefersReduce && (
                <animateMotion dur={`${p.dur}s`} repeatCount="indefinite" rotate="auto">
                  {/* Both for Safari compatibility */}
                  <mpath href={`#${p.key}Path`} xlinkHref={`#${p.key}Path`} />
                </animateMotion>
              )}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
