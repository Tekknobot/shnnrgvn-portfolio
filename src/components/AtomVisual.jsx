import React from "react";

export default function AtomVisual() {
  return (
    <div
      className="relative mx-auto mb-8 h-44 w-full max-w-4xl sm:h-56 md:h-64"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {/* soft glows */}
      <div className="absolute -top-8 left-12 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-6 right-10 h-20 w-20 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-4 left-8 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 240" fill="none">
        <defs>
          <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id="core" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="1" />
            <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.25" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>

        {/* center at (300,120) */}
        <g transform="translate(300,120)">

          {/* nucleus */}
          <g>
            <circle r="14" fill="url(#core)" />
            <circle r="24" fill="#8B5CF6" opacity="0.16">
              <animate attributeName="r" values="21;26;21" dur="6s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* ===== ORBIT 1 (horizontal ellipse) ===== */}
          {/* orbit outline */}
          <g className="rot-slow" style={{ transformOrigin: "center", transformBox: "fill-box" }}>
            {/* ellipse by squashing a circle via scaleY */}
            <g transform="scale(1,0.55)">
              <circle r="120" stroke="url(#orbitStroke)" strokeWidth="2" fill="none" filter="url(#soft)" />
              {/* electron positioned on +X, carried by rotation */}
              <circle cx="120" cy="0" r="5.5" fill="#93C5FD" />
            </g>
          </g>

          {/* ===== ORBIT 2 (tilted) ===== */}
          <g className="rot-mid" style={{ transformOrigin: "center", transformBox: "fill-box" }}>
            {/* tilt the plane */}
            <g transform="rotate(35) scale(1,0.6)">
              <circle r="90" stroke="url(#orbitStroke)" strokeWidth="2" fill="none" />
              {/* two electrons on opposite sides */}
              <circle cx="90" cy="0" r="5" fill="#22D3EE" />
              <circle cx="-90" cy="0" r="4.5" fill="#7DD3FC" />
            </g>
          </g>

          {/* ===== ORBIT 3 (counter-rotating) ===== */}
          <g className="rot-fast-rev" style={{ transformOrigin: "center", transformBox: "fill-box" }}>
            <g transform="rotate(-25) scale(1,0.7)">
              <circle r="60" stroke="url(#orbitStroke)" strokeWidth="2" fill="none" />
              <circle cx="60" cy="0" r="5" fill="#60A5FA" />
            </g>
          </g>

          {/* tiny sparkles near nucleus */}
          <g opacity="0.5">
            <circle r="2" cx="10" cy="-8" fill="#E5E7EB" />
            <circle r="1.6" cx="-12" cy="6" fill="#E5E7EB" />
          </g>
        </g>
      </svg>
    </div>
  );
}
