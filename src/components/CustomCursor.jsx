import React, { useEffect, useState } from "react";

const TRAIL_LENGTH = 10;

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      // Ignore touch events (no custom cursor on mobile)
      if (e.pointerType === "touch") {
        setIsTouch(true);
        return;
      }

      setIsTouch(false);

      const x = e.clientX;
      const y = e.clientY;

      setPos({ x, y });

      setTrail((prev) => {
        const next = [...prev, { x, y, id: Date.now() }];
        return next.slice(-TRAIL_LENGTH);
      });

      setHidden(false);
    };

    const handleEnter = () => setHidden(false);
    const handleLeave = () => setHidden(true);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerenter", handleEnter);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerenter", handleEnter);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  // Don’t render on touch devices
  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Main cursor pizza */}
      {!hidden && (
        <img
          src="/pizzza-icon.png"
          alt=""
          className="absolute drop-shadow-md transition-transform duration-75"
          style={{
            width: 28,
            height: 28,
            transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          }}
        />
      )}

      {/* Trail pizzas */}
      {trail.map((t, index) => {
        const alpha = (index + 1) / TRAIL_LENGTH; // 0 → 1
        const scale = 0.5 + alpha * 0.5;

        return (
          <img
            key={t.id + index}
            src="/pizzza-icon.png"
            alt=""
            className="absolute transition-transform duration-300"
            style={{
              width: 22,
              height: 22,
              transform: `translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%) scale(${scale})`,
              opacity: alpha * 0.7,
            }}
          />
        );
      })}
    </div>
  );
}
