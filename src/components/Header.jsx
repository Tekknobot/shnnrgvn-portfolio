import React from 'react'

export default function Header(){
  return (
    <header className="site">
      <div className="container nav">
        <a href="#" className="brand">
          <span className="brand-mark" aria-hidden="true"></span>
          <span>Shanna Ragavan</span>
        </a>
        <nav>
          <a className="link" href="#case">Geo Dashboard</a>
          <a className="link" href="#projects">Projects</a>
          <a className="link" href="#contact">Contact</a>
          <a className="link" href="https://geopol-dashboard.vercel.app" target="_blank" rel="noreferrer">Live Geo App ↗</a>
        </nav>
      </div>
    </header>
  )
}
