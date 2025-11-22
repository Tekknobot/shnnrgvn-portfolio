const skillsColumns = [
  [
    "JavaScript",
    "TypeScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "Responsive & mobile-first UI",
    "Framer Motion (animations)",
    "Design systems & component-driven UI",
    "Accessible, content-focused layouts"
  ],
  [
    "Godot (GDScript)",
    "Unity (C#)",
    "2D pixel-art aesthetics",
    "Gameplay & interaction prototyping",
    "Git & GitHub",
    "Vercel deployment",
    "Rapid prototyping & iteration",
    "Graphic Design (layout & branding)",
    "Ableton Live (music production)"
  ]
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2 className="section-kicker">Skills</h2>
        <p className="section-title">Tools &amp; technologies</p>
      </div>

      <div className="skills-grid">
        {skillsColumns.map((col, index) => (
          <ul key={index} className="skills-column">
            {col.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
