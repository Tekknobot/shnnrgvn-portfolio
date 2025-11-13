const projects = [
  {
    title: "Geopolitical Dashboard",
    description:
      "This dashboard applies a geopolitics lens: we surface local events and immediately frame them against regional and global context. Scan what’s happening now, then open the context panel for deeper comparisons. Audiences: Analysts & researchers, Security & risk teams, NGOs / humanitarian ops, Journalists / editors.",
    tags: ["Next.js", "TypeScript", "Vercel", "Maps", "News"],
    links: [
      { href: "https://geopol-dashboard.vercel.app/", label: "Live", icon: "external" }
    ]
  },
  {
    title: "NBA/NFL Calendar & Matchup Helper",
    description:
      "Browse the NBA or NFL schedule month by month, tap any game to see recent form, a light win probability estimate (“Model edge”), and quick matchup notes. Clean, mobile-friendly, and fun to explore.",
    tags: ["React", "Vite", "Sports", "PWA", "Mobile"],
    links: [
      { href: "https://pivt.vercel.app/all", label: "NBA", icon: "external" },
      { href: "https://snappcount.vercel.app/weeks", label: "NFL", icon: "external" }
    ]
  },
  {
    title: "Indie Game Development (Unity C# & Godot)",
    description:
      "Crafting games and apps with a love for retro 2D pixel-art aesthetics and audio-driven experiences.",
    tags: ["Unity", "C#", "Godot", "2D", "Pixel Art", "Audio"],
    links: [
      { href: "https://zillatronics.itch.io", label: "itch.io", icon: "external" }
    ]
  }
];

export default projects;
