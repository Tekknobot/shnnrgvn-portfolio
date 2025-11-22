import { IconArrowUpRight } from "./icons/IconArrowUpRight";

const projects = [
  {
    title: "Geopolitical Dashboard",
    badge: "Live",
    description:
      "A real-time geopolitical dashboard that surfaces local events and immediately frames them against regional and global context. Scan what’s happening now, then open the context panel for deeper comparisons.",
    audience:
      "Built for: Analysts & researchers, security & risk teams, NGOs / humanitarian ops, journalists / editors",
    tags: ["Next.js", "TypeScript", "Vercel", "Maps", "News"]
  },
  {
    title: "NBA/NFL Calendar & Matchup Helpers",
    badge: "NBA / NFL",
    description:
      "Browse NBA or NFL schedules month-by-month, tap any game, and instantly see recent form, a light win-probability estimate, and matchup notes.",
    audience: "Clean, mobile-friendly, and fun to explore.",
    tags: ["React", "Vite", "Sports", "PWA", "Mobile"]
  },
  {
    title: "Indie Game Development (Unity C# & Godot)",
    badge: "itch.io",
    description:
      "Crafting small games and interactive experiences with a focus on retro 2D pixel-art aesthetics and audio-driven mechanics.",
    audience:
      "Experimental projects and builds are available on itch.io.",
    tags: ["Unity", "C#", "Godot", "2D", "Pixel Art", "Audio"]
  },
  {
    title: "WebDesk – Browser Desktop",
    badge: "Live",
    description:
      "A minimal browser-based workspace that turns your bookmarks into a desktop-style home screen. Create panels, group your daily links, pick a theme, and set a wallpaper.",
    audience:
      "Designed to feel like a personal launchpad you see every time you open a new tab.",
    tags: ["HTML", "CSS", "JavaScript", "UI", "Productivity"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-kicker">Projects</h2>
        <p className="section-title">Selected work</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <header className="project-card-header">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-badge">{project.badge}</span>
              </div>
            </header>

            <p className="project-description">{project.description}</p>
            <p className="project-audience">{project.audience}</p>

            <div className="project-footer">
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag-pill">
                    {tag}
                  </li>
                ))}
              </ul>
              <button className="icon-button" type="button" aria-label="Open project details">
                <IconArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
