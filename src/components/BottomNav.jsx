import React from "react";
import { Home, User, Briefcase, Code2, Mail } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Work", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail }
];

export function BottomNav() {
  return (
    <nav className="card m-3">
      <ul className="grid grid-cols-5">
        {items.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="flex flex-col items-center justify-center gap-1 card-pad py-3 hover:bg-slate-50 rounded-2xl"
              aria-label={label}
            >
              <Icon size={22} />
              <span className="text-[11px] font-medium">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
