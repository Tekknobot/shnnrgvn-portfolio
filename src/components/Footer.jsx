import React from 'react'
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} • Built with React & Vite • No trackers.
      </div>
    </footer>
  )
}
