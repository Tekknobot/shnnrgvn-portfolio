import React from 'react'

export default function Header(){
  return (
    <header className="site">
      <div className="container nav">
        <a href="#" className="brand">
          <span className="brand-mark" aria-hidden="true"></span>
          <span>Portfolio</span>
        </a>
        <nav>
          <a className="link" href="#case">Case Study</a>
          <a className="link" href="#contact">Contact</a>
          <a className="link" href="https://geopol-dashboard.vercel.app" target="_blank" rel="noreferrer">Live Dashboard ↗</a>
        </nav>
      </div>
    </header>
  )
}
