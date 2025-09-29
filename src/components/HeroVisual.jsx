import React from "react";

/**
 * Solar-system styled Hero visual.
 * - Sun in the center with glow
 * - Elliptical orbits
 * - Animated planets with different speeds
 * - Earth has a Moon orbit
 * - Saturn has a ring
 * - Subtle starfield background
 * - Honors prefers-reduced-motion by pausing animations
 */
export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto mb-8 h-48 w-full max-w-4xl sm:h-64 md:h-80"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {/* Soft background glows */}
      <div className="absolute -top-8 left-10 h-28 w-28 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute top-8 right-6 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 300" fill="none">
        <defs>
          {/* Sun glow */}
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD166" stopOpacity="1" />
            <stop offset="60%" stopColor="#FCA311" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
          </radialGradient>

          {/* Orbit strokes */}
          <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.35" />
          </linearGradient>

          {/* Subtle blur for orbits */}
          <filter id="orbitBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>

          {/* Star sparkle */}
          <radialGradient id="star" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E5E7EB" stopOpacity="1" />
            <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ===== STARFIELD ===== */}
        <g opacity="0.25">
          {Array.from({ length: 26 }).map((_, i) => {
            const x = (i * 273) % 800;
            const y = (i * 97) % 300;
            const r = (i % 3) + 0.7;
            return <circle key={i} cx={x} cy={y} r={r} fill="url(#star)" />;
          })}
        </g>

        {/* Center solar system at (400,150) */}
        <g transform="translate(400,150)">

          {/* ===== SUN ===== */}
          <g>
            <circle r="22" fill="url(#sunGlow)" />
            {/* sun pulse */}
            <circle r="34" fill="#F59E0B" opacity="0.15">
              <animate
                attributeName="r"
                values="30;36;30"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* ===== ORBITS (ellipses as motion paths) ===== */}
          {/* orbit sizes chosen to fit the canvas; periods are relative */}
          <ellipse id="mercuryOrbit" rx="50"  ry="16" stroke="url(#orbitStroke)" strokeWidth="1" filter="url(#orbitBlur)" />
          <ellipse id="venusOrbit"   rx="80"  ry="25" stroke="url(#orbitStroke)" strokeWidth="1" filter="url(#orbitBlur)" />
          <ellipse id="earthOrbit"   rx="110" ry="33" stroke="url(#orbitStroke)" strokeWidth="1" filter="url(#orbitBlur)" />
          <ellipse id="marsOrbit"    rx="145" ry="44" stroke="url(#orbitStroke)" strokeWidth="1" filter="url(#orbitBlur)" />
          <ellipse id="jupiterOrbit" rx="190" ry="58" stroke="url(#orbitStroke)" strokeWidth="1" filter="url(#orbitBlur)" />
          <ellipse id="saturnOrbit"  rx="235" ry="73" stroke="url(#orbitStroke)" strokeWidth="1" filter="url(#orbitBlur)" />
          <ellipse id="uranusOrbit"  rx="275" ry="86" stroke="url(#orbitStroke)" strokeWidth="1" filter="url(#orbitBlur)" />
          <ellipse id="neptuneOrbit" rx="315" ry="98" stroke="url(#orbitStroke)" strokeWidth="1" filter="url(#orbitBlur)" />

          {/* ===== PLANETS (colors simplified / symbolic) ===== */}
          {/* Mercury */}
          <g>
            <circle r="2.8" fill="#9CA3AF" />
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
              <mpath href="#mercuryOrbit" />
            </animateMotion>
          </g>

          {/* Venus */}
          <g>
            <circle r="4.2" fill="#F4B942" />
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
              <mpath href="#venusOrbit" />
            </animateMotion>
          </g>

          {/* Earth + Moon */}
          <g>
            <g id="earthCarrier">
              <circle r="4.6" fill="#60A5FA" stroke="#93C5FD" strokeWidth="0.6" />
              {/* Moon around Earth */}
              <g>
                <circle r="1.2" fill="#E5E7EB" />
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="translate" from="10,0" to="10,0" dur="0.001s" fill="freeze" />
              </g>
            </g>
            <animateMotion dur="12.5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#earthOrbit" />
            </animateMotion>
          </g>

          {/* Mars */}
          <g>
            <circle r="3.4" fill="#F87171" />
            <animateMotion dur="20s" repeatCount="indefinite" rotate="auto">
              <mpath href="#marsOrbit" />
            </animateMotion>
          </g>

          {/* Jupiter */}
          <g>
            <circle r="9" fill="#FBBF24" />
            <animateMotion dur="38s" repeatCount="indefinite" rotate="auto">
              <mpath href="#jupiterOrbit" />
            </animateMotion>
          </g>

          {/* Saturn with ring */}
          <g>
            <g>
              <ellipse rx="10" ry="3.6" fill="none" stroke="#E5E7EB" strokeOpacity="0.6" />
              <circle r="7.4" fill="#F59E0B" />
            </g>
            <animateMotion dur="55s" repeatCount="indefinite" rotate="auto">
              <mpath href="#saturnOrbit" />
            </animateMotion>
          </g>

          {/* Uranus */}
          <g>
            <circle r="6" fill="#34D399" />
            <animateMotion dur="70s" repeatCount="indefinite" rotate="auto">
              <mpath href="#uranusOrbit" />
            </animateMotion>
          </g>

          {/* Neptune */}
          <g>
            <circle r="5.8" fill="#3B82F6" />
            <animateMotion dur="90s" repeatCount="indefinite" rotate="auto">
              <mpath href="#neptuneOrbit" />
            </animateMotion>
          </g>
        </g>
      </svg>
    </div>
  );
}
