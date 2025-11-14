const projects = [
  {
    title: "Geopolitical Dashboard",
    description:
      "A real-time geopolitical dashboard that surfaces local events and immediately frames them "
      + "against regional and global context.\n\n"
      + "Scan what’s happening now, then open the context panel for deeper comparisons.\n\n"
      + "Built for:\n"
      + "• Analysts & researchers\n"
      + "• Security & risk teams\n"
      + "• NGOs / humanitarian ops\n"
      + "• Journalists / editors",
    tags: ["Next.js", "TypeScript", "Vercel", "Maps", "News"],
    links: [
      { href: "https://geopol-dashboard.vercel.app/", label: "Live", icon: "external" }
    ]
  },

  {
    title: "NBA/NFL Calendar & Matchup Helpers",
    description:
      "Browse NBA or NFL schedules month-by-month, tap any game, and instantly see:\n\n"
      + "• Recent form (last 10 games)\n"
      + "• Light win-probability estimate (“Model edge”)\n"
      + "• Matchup notes and quick comparisons\n\n"
      + "Clean, mobile-friendly, and fun to explore.",
    tags: ["React", "Vite", "Sports", "PWA", "Mobile"],
    links: [
      { href: "https://pivt.vercel.app/all", label: "NBA", icon: "external" },
      { href: "https://snappcount.vercel.app/weeks", label: "NFL", icon: "external" }
    ]
  },

  {
    title: "Indie Game Development (Unity C# & Godot)",
    description:
      "Crafting small games and interactive experiences with a focus on:\n\n"
      + "• Retro 2D pixel-art aesthetics\n"
      + "• Audio-driven mechanics\n"
      + "• Gameplay prototyping and iteration\n\n"
      + "Experimental projects and builds are available on itch.io.",
    tags: ["Unity", "C#", "Godot", "2D", "Pixel Art", "Audio"],
    links: [
      { href: "https://zillatronics.itch.io", label: "itch.io", icon: "external" }
    ]
  }
];

export default projects;
