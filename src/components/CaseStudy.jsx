import React from 'react'

export default function CaseStudy({id}){
  return (
    <section id={id} className="card" aria-labelledby="case-title" style={{marginTop:28}}>
      <div className="hd">
        <h3 id="case-title" style={{margin:0}}>Case Study — Geopolitical Dashboard</h3>
        <a className="badge" href="https://geopol-dashboard.vercel.app" target="_blank" rel="noreferrer">Open live ↗</a>
      </div>
      <div className="bd">
        <div className="case-hero">
          <div className="panel">
            <h3>Overview</h3>
            <p>
              A map-first, React-based dashboard that aggregates humanitarian and geopolitical signals from open APIs
              (ReliefWeb, NASA EONET, World Bank). Built for analysts who need fast situational awareness without vendor lock-in.
            </p>
            <div className="tags">
              <span className="tag">React (Vite)</span>
              <span className="tag">Leaflet</span>
              <span className="tag">REST APIs</span>
              <span className="tag">Performance & caching</span>
            </div>
          </div>
          <div className="panel">
            <h3>My Role</h3>
            <ul className="list">
              <li><span className="dot"></span><span>Architecture & integration across data sources</span></li>
              <li><span className="dot"></span><span>Map-first UX, accessible UI patterns</span></li>
              <li><span className="dot"></span><span>Error handling, retries, and local caching</span></li>
              <li><span className="dot"></span><span>Deployment and CI on Vercel</span></li>
            </ul>
          </div>
        </div>

        <div className="grid cols-3" style={{marginTop:22}}>
          <div className="panel">
            <h3>Problem</h3>
            <p>
              Analysts track events scattered across multiple websites and PDFs. They need a single surface that’s
              low-friction, credible, and shareable.
            </p>
          </div>
          <div className="panel">
            <h3>Solution</h3>
            <p>
              A lightweight, no-auth web app that normalizes country data, consolidates signals, and presents
              actionable context. No proprietary datasets required.
            </p>
          </div>
          <div className="panel">
            <h3>Outcome</h3>
            <ul className="list">
              <li><span className="dot"></span><span>Near real-time event awareness from trusted sources</span></li>
              <li><span className="dot"></span><span>Shareable views with clean UX</span></li>
              <li><span className="dot"></span><span>Foundation for alerts, comparisons, and reporting</span></li>
            </ul>
          </div>
        </div>

        <div className="panel" style={{marginTop:22}}>
          <h3>Technical Notes</h3>
          <ul className="list">
            <li><span className="dot"></span><span>Custom fetch layer with timeouts, retries, and structured errors</span></li>
            <li><span className="dot"></span><span>LocalStorage caching for faster repeat loads</span></li>
            <li><span className="dot"></span><span>ISO country normalization utilities to unify lookups</span></li>
            <li><span className="dot"></span><span>Modular services for ReliefWeb, EONET, and World Bank</span></li>
          </ul>
        </div>

        <div className="panel" style={{marginTop:22}}>
          <h3>Next Steps</h3>
          <ul className="list">
            <li><span className="dot"></span><span>Permalinked state for shareable filters</span></li>
            <li><span className="dot"></span><span>Country comparisons and indicator deltas</span></li>
            <li><span className="dot"></span><span>Alerts and exportable snapshot reports</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
