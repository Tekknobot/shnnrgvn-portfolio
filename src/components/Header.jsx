import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-slate-950 text-slate-100 shadow-[0_1px_0_0_rgba(0,0,0,0.6)]">
      <div className="container mx-auto max-w-4xl py-3 flex items-center gap-3 justify-between">
        <a href="#home" className="font-bold text-lg md:text-xl tracking-tight text-slate-100">
          shnnrgvn<span className="text-slate-400">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#apps" className="text-slate-200 hover:text-white">Apps</a>
          <a href="#games" className="text-slate-200 hover:text-white">Games</a>
        </nav>
      </div>
    </header>
  );
}
