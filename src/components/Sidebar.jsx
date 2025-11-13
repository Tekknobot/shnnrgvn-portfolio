import React from "react";
import { Home, User, Briefcase, Code2, Mail, Github, Linkedin } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail }
];

export function Sidebar() {
  return (
    <div className="h-full flex flex-col justify-between p-6">
      <div>
        <a href="#home" className="inline-flex items-center gap-2 mb-6">
            <img
            src="/pizzza-icon.png"
            alt="Site icon"
            className="h-10 w-10 rounded-xl object-cover"
            />
          <div>
            <div className="font-semibold leading-tight">Shanna Ragavan</div>
            <div className="text-xs text-slate-500">Frontend Engineer</div>
          </div>
        </a>

        <nav className="space-y-1">
          {items.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50"
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3 text-slate-500">
        <a href="https://linkedin.com/in/shnnrgvn" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-50 rounded-lg"><Linkedin size={18} /></a>
      </div>
    </div>
  );
}

//
