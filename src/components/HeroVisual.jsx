import React from "react";

export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto mb-8 h-40 w-full max-w-4xl sm:h-56 md:h-64"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {/* Soft glows */}
      <div className="absolute -top-6 left-1/4 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-6 right-6 h-20 w-20 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-4 left-6 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 200" fill="none">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="ringDim" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.35" />
          </linearGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Center group at (300,100) */}
        <g transform="translate(300,100)">

          {/* === RINGS (with ids so we can bind motion paths) === */}
          {/* Outer ring */}
          <g>
            <ellipse
              id="orbit-outer"
              rx="240"
              ry="70"
              stroke="url(#ringDim)"
              strokeWidth="2"
              strokeDasharray="14 10"
              filter="url(#soft)"
            />
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="38s" repeatCount="indefinite" />
          </g>

          {/* Middle ring */}
          <g>
            <ellipse
              id="orbit-mid"
              rx="200"
              ry="58"
              stroke="url(#ring)"
              strokeWidth="2.5"
              strokeDasharray="6 12"
            />
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="26s" repeatCount="indefinite" />
          </g>

          {/* Inner ring */}
          <g>
            <ellipse
              id="orbit-inner"
              rx="160"
              ry="46"
              stroke="url(#ring)"
              strokeWidth="2"
              strokeDasharray="4 10"
              opacity="0.9"
            />
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="18s" repeatCount="indefinite" />
          </g>

          {/* === ORBITING NODES (move along the rings) === */}
          {/* On the outer ring */}
          <g>
            <circle r="5.5" fill="#A78BFA" />
            <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
              {/* Use an mpath to bind to the ellipse path */}
              <mpath href="#orbit-outer" />
            </animateMotion>
          </g>

          {/* Second node on the outer ring with phase offset */}
          <g>
            <circle r="4.5" fill="#22D3EE" />
            <animateMotion dur="16s" begin="8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#orbit-outer" />
            </animateMotion>
          </g>

          {/* On the middle ring */}
          <g>
            <circle r="5" fill="#60A5FA" />
            <animateMotion dur="11.5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#orbit-mid" />
            </animateMotion>
          </g>

          {/* On the inner ring */}
          <g>
            <circle r="4" fill="#7DD3FC" />
            <animateMotion dur="8.5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#orbit-inner" />
            </animateMotion>
          </g>

        </g>
      </svg>
    </div>
  );
}
