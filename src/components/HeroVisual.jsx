import React from "react";

export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto mb-8 h-40 w-full max-w-4xl sm:h-56 md:h-64"
      aria-hidden="true"
    >
      {/* Glow blobs */}
      <div className="absolute -top-6 left-1/4 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-6 right-6 h-20 w-20 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-4 left-6 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />

      {/* Animated rings */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 200"
        fill="none"
      >
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

        {/* center line to anchor rings */}
        <g transform="translate(300,100)">
          {/* Outer ring */}
          <g className="spin-slower">
            <ellipse
              rx="240"
              ry="70"
              stroke="url(#ringDim)"
              strokeWidth="2"
              strokeDasharray="14 10"
              filter="url(#soft)"
            />
          </g>

          {/* Middle ring */}
          <g className="spin-slow">
            <ellipse
              rx="200"
              ry="58"
              stroke="url(#ring)"
              strokeWidth="2.5"
              strokeDasharray="6 12"
            />
          </g>

          {/* Inner ring */}
          <g className="spin-mid">
            <ellipse
              rx="160"
              ry="46"
              stroke="url(#ring)"
              strokeWidth="2"
              strokeDasharray="4 10"
              opacity="0.9"
            />
          </g>

          {/* Floating spheres */}
          <circle className="float-y" r="5" cx="-160" cy="-18" fill="#A78BFA" />
          <circle className="float-y2" r="6" cx="90" cy="10" fill="#22D3EE" />
          <circle className="float-y3" r="4" cx="180" cy="-8" fill="#60A5FA" />
        </g>
      </svg>
    </div>
  );
}
