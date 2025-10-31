import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CaseStudy from './components/CaseStudy.jsx'
import Section from './components/Section.jsx'
import Contact from './components/Contact.jsx'
import ProjectCard from './components/ProjectCard.jsx'

export default function App(){
  return (
    <>
      <Header/>
      <main className="container">
        <section className="hero">
          <p className="kicker">Technologist • Programmer • Creative Producer</p>
          <h1 className="title">I’m <span className="mono">Shanna Ragavan</span> — I build interactive applications and tools that feel fast, clean, and human-centered.</h1>
          <p className="subtitle">
            Godot (C#), React, and creative coding. I translate design specs into polished, functional experiences.
            Below is a focused case study on my live Geopolitical Dashboard, plus two utility apps for NBA/NFL matchups.
          </p>
          <div className="cta">
            <a href="#case" className="btn">View Geo Case Study</a>
            <a href="#projects" className="btn secondary">See Projects</a>
            <a href="#contact" className="btn secondary">Get in touch</a>
          </div>
        </section>

        <div className="grid cols-3">
          <Section
            title="Services"
            items={[
              "Game design & development (Godot, Unity C#)",
              "Frontend development (React, responsive UI/UX)",
              "Interactive tools & creative coding (music, strategy, custom apps)",
              "Technical consulting & rapid prototyping"
            ]}
          />
          <Section
            title="Capabilities"
            items={[
              "API integration & data plumbing",
              "Geospatial UI and mapping",
              "UX polish, micro-interactions",
              "Performance & caching strategies"
            ]}
          />
          <Section
            title="Toolbox"
            items={[
              "Godot (C#), React, Vite",
              "Leaflet (when mapping is needed)",
              "Node / REST APIs",
              "GitHub, CI, Vercel/Netlify"
            ]}
          />
        </div>

        <CaseStudy id="case"/>

        {/* Projects */}
        <section id="projects" className="card" style={{marginTop:28}} aria-labelledby="projects-title">
          <div className="hd">
            <h3 id="projects-title" style={{margin:0}}>Projects</h3>
            <span className="badge">Selected utilities</span>
          </div>
          <div className="bd">
            <div className="grid cols-3">
              <ProjectCard
                title="PIVT — NBA Calendar & Matchup Helper"
                href="https://pivt.vercel.app/all"
                desc="Browse the NBA schedule month by month, tap on any game to see both teams’ recent form, a light win probability estimate (“Model edge”), and quick matchup notes. It’s built to be clean, mobile-friendly, and fun to explore."
                points={[
                  "Month-by-month browsing with quick tap targets.",
                  "Game details include recent form and a simple win-probability read.",
                  "Designed for speed and clarity on mobile."
                ]}
                meta={["React", "Vercel", "NBA schedule", "Mobile-first"]}
              />
              <ProjectCard
                title="SnappCount — NFL Calendar & Matchup Helper"
                href="https://snappcount.vercel.app/weeks"
                desc="Browse the NFL schedule week by week with quick day picks and a clean agenda of matchups. Tap any game to open details with kickoff info, live status and scores, and a simple win-probability read—all in a fast, mobile-friendly layout."
                points={[
                  "Week-by-week navigation with day shortcuts.",
                  "Game details: kickoff info, live status/scores, quick win-probability.",
                  "Fast, mobile-friendly agenda layout."
                ]}
                meta={["React", "Vercel", "NFL weekly slate", "Mobile-first"]}
              />
              <ProjectCard
                title="Geopolitical Dashboard (Live)"
                href="https://geopol-dashboard.vercel.app/"
                desc="Map-first humanitarian & geopolitical signals (ReliefWeb, NASA EONET, World Bank). Country normalization, caching, and resilient requests for reliable UX."
                points={[
                  "Near real-time event awareness from trusted open data sources.",
                  "No-auth, shareable views; performant fetch + caching.",
                  "Built for analysts who need quick situational awareness."
                ]}
                meta={["React", "Leaflet", "REST APIs", "Performance"]}
              />
            </div>
          </div>
        </section>

        <Contact id="contact"/>
      </main>
      <Footer/>
    </>
  )
}
