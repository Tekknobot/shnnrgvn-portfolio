import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CaseStudy from './components/CaseStudy.jsx'
import Section from './components/Section.jsx'
import Contact from './components/Contact.jsx'

export default function App(){
  return (
    <>
      <Header/>
      <main className="container">
        <section className="hero">
          <p className="kicker">Technologist • Programmer • Creative Producer</p>
          <h1 className="title">I build interactive applications and tools — fast, clean, and human-centered.</h1>
          <p className="subtitle">Godot (C#), React, and creative coding. I translate design specs into polished, functional experiences. Below is a focused case study on a live Geopolitical Dashboard project.</p>
          <div className="cta">
            <a href="#case" className="btn">View Case Study</a>
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
              "Leaflet, Recharts (when needed)",
              "Node / REST APIs",
              "GitHub, CI, Vercel/Netlify"
            ]}
          />
        </div>

        <CaseStudy id="case"/>
        <Contact id="contact"/>
      </main>
      <Footer/>
    </>
  )
}
