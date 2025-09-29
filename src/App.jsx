import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Apps from "./pages/Apps.jsx";
import Games from "./pages/Games.jsx";
import profile from "./data/profile.json";
import HeroVisual from "./components/HeroVisual.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <main className="flex-1">
          {/* visual sits above the Home card */}
          <section className="container mx-auto max-w-4xl pt-6 md:pt-10">
            <HeroVisual />
          </section>

          <section id="home" className="container mx-auto max-w-4xl py-6 md:py-10">
            <Home profile={profile} />
          </section>

          <Apps apps={profile.apps} />
          <Games games={profile.games} />
        </main>
      <Footer profile={profile} />
    </div>
  );
}
