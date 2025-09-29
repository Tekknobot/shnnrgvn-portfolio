import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Apps from "./pages/Apps.jsx";
import Games from "./pages/Games.jsx";
import profile from "./data/profile.json";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="home" className="container mx-auto max-w-4xl py-8 md:py-14">
          <Home profile={profile} />
        </section>

        <Apps apps={profile.apps} />
        <Games games={profile.games} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
