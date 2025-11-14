import React from "react";
import { Sidebar } from "./components/Sidebar.jsx";
import { BottomNav } from "./components/BottomNav.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[280px_1fr]">
      <aside className="hidden lg:block border-r border-slate-100 sticky top-0 h-screen">
        <Sidebar />
      </aside>

      <main className="relative">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <div className="lg:hidden sticky bottom-0 z-50">
          <BottomNav />
        </div>
      </main>
    </div>
  );
}
