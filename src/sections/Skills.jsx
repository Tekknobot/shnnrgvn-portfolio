import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import skills from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50/60">
      <SectionHeader eyebrow="Skills" title="Tools & technologies" />
      <div className="container">
        <div className="card">
          <div className="card-pad">
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="px-3 py-1.5 text-sm rounded-full bg-slate-100">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
