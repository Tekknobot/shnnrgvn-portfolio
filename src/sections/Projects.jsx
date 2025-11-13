import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader eyebrow="Projects" title="Selected work" />
      <div className="container grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
