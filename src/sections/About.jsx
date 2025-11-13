import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";

function PizzaCloud() {
  const icons = [
    { size: "w-8",  rotate: "-rotate-6",  opacity: "opacity-80" },
    { size: "w-10", rotate: "rotate-3",   opacity: "opacity-90" },
    { size: "w-12", rotate: "-rotate-2",  opacity: "opacity-100" },
    { size: "w-9",  rotate: "rotate-6",   opacity: "opacity-70" },
    { size: "w-14", rotate: "-rotate-3",  opacity: "opacity-100" },
    { size: "w-11", rotate: "rotate-2",   opacity: "opacity-80" },
    { size: "w-8",  rotate: "-rotate-1",  opacity: "opacity-70" },
    { size: "w-10", rotate: "rotate-1",   opacity: "opacity-90" },
    { size: "w-9",  rotate: "-rotate-4",  opacity: "opacity-80" },
  ];

  return (
    <div className="relative h-52 sm:h-56 md:h-64">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-amber-50 border border-slate-100 shadow-soft overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#fee4a1,_transparent_55%),_radial-gradient(circle_at_bottom,_#e0e7ff,_transparent_55%)]" />
        <div className="relative h-full flex flex-wrap items-center justify-center gap-4 px-4">
          {icons.map((icon, i) => (
            <img
              key={i}
              src="/pizzza-icon.png"
              alt="Pizza icon"
              className={`${icon.size} ${icon.rotate} ${icon.opacity} drop-shadow-md`}
            />
          ))}
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
      <div className="container grid md:grid-cols-3 gap-6">
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

        {/* Pizza cloud card */}
        <div className="card">
          <div className="card-pad space-y-3">
            <h3 className="font-semibold text-slate-800">Pizza Cloud</h3>
            <p className="text-sm text-slate-600">
              A little visual nod to my personal branding. The pizza icon shows up
              everywhere—from the favicon to this playful cloud.
            </p>
            <PizzaCloud />
          </div>
        </div>
      </div>
    </section>
  );
}
