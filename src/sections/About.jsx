import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";

function PizzaCloud() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Each icon gets a size, opacity, rotation and "strength" for parallax
  const icons = [
    { size: "w-8",  opacity: "opacity-80", strength: 100,  rotate: -12 },
    { size: "w-10", opacity: "opacity-90", strength: 180,  rotate: 6 },
    { size: "w-12", opacity: "opacity-100", strength: 240, rotate: -4 },
    { size: "w-9",  opacity: "opacity-70", strength: 140, rotate: 10 },
    { size: "w-14", opacity: "opacity-100", strength: 280, rotate: -8 },
    { size: "w-11", opacity: "opacity-80", strength: 200, rotate: 3 },
    { size: "w-8",  opacity: "opacity-70", strength: 120, rotate: -2 },
    { size: "w-10", opacity: "opacity-90", strength: 160, rotate: 5 },
    { size: "w-9",  opacity: "opacity-80", strength: 130, rotate: -6 },
    { size: "w-8",  opacity: "opacity-80", strength: 90,  rotate: 4 },
    { size: "w-10", opacity: "opacity-90", strength: 190, rotate: -10 },
    { size: "w-11", opacity: "opacity-75", strength: 220, rotate: 8 },
    { size: "w-9",  opacity: "opacity-85", strength: 150, rotate: -5 },
    { size: "w-8",  opacity: "opacity-70", strength: 110, rotate: 2 },
    { size: "w-12", opacity: "opacity-95", strength: 260, rotate: -7 },
  ];

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
    setMousePos({ x: 0, y: 0 });
  }

  return (
    <div
      className="relative h-52 sm:h-56 md:h-64"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-amber-50 border border-slate-100 shadow-soft overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#fee4a1,_transparent_55%),_radial-gradient(circle_at_bottom,_#e0e7ff,_transparent_55%)]" />
        <div className="relative h-full flex flex-wrap items-center justify-center gap-4 px-4">
          {icons.map((icon, i) => {
            const tx = (hovered ? mousePos.x : 0) * icon.strength;
            const ty = (hovered ? mousePos.y : 0) * icon.strength;
            const transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${icon.rotate}deg)`;

            return (
              <img
                key={i}
                src="/pizzza-icon.png"
                alt="Pizza icon"
                className={`${icon.size} ${icon.opacity} drop-shadow-md transition-transform duration-300`}
                style={{ transform }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-slate-50/60">
      <SectionHeader
        id="about"
        eyebrow="About"
        title="A little about me"
        description="I’m a versatile technologist, creative, and producer who builds interactive applications with Godot, C#, React, and a wide range of supporting technologies."
      />

      <div className="container space-y-6">
        {/* Pizza cloud stacked on top */}
        <div className="card">
          <div className="card-pad space-y-3">
            <h3 className="font-semibold text-slate-800">Pizza Cloud</h3>
            <p className="text-sm text-slate-600">
              A small visual nod to my personal branding. Move your cursor over this
              card to wake up the pizza cloud.
            </p>
            <PizzaCloud />
          </div>
        </div>

        {/* Original two panels below */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card md:col-span-2">
            <div className="card-pad space-y-3 text-slate-700 leading-relaxed">
              <p>
                As a programmer, I translate complex design specifications into
                polished, functional solutions. I studied Graphic Design, and my
                programming foundation comes from two years of high-school Computer
                Science—skills I deepened starting in 2014.
              </p>
              <p>
                Beyond software, I’m a Music Producer and Graphic Designer / Creative
                Director—composing, arranging, and recording original tracks in Ableton.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-pad">
              <h3 className="font-semibold">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Godot & C# gameplay and tooling</li>
                <li>• React UI engineering & performance</li>
                <li>• Graphic Design background (brand & layout)</li>
                <li>• Music production in Ableton (composition & recording)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
