import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";

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
    </section>
  );
}
