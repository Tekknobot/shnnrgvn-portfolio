import { IconLogoMark } from "./icons/IconLogoMark";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-left">
        <IconLogoMark className="logo-mark" aria-hidden="true" />
        <div className="site-title">
          <span className="site-title-name">Shanna Ragavan</span>
          <span className="site-title-role">Frontend / Game Dev</span>
        </div>
      </div>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="site-nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
