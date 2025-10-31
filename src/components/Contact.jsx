import React, { useState } from 'react'

export default function Contact({id}){
  const [status, setStatus] = useState('')
  const LINKEDIN_URL = 'https://www.linkedin.com/in/shnnrgvn/' // ← replace with your handle

  function onSubmit(e){
    e.preventDefault()
    window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')
    setStatus('Opening LinkedIn…')
  }

  return (
    <section id={id} className="card" style={{marginTop:28}} aria-labelledby="contact-title">
      <div className="hd">
        <h3 id="contact-title" style={{margin:0}}>Contact</h3>
        <span className="badge">Connect on LinkedIn</span>
      </div>
      <div className="bd">
        <form onSubmit={onSubmit}>
          <p style={{marginTop:0, color:'var(--muted)'}}>
            I prefer LinkedIn for messages and project inquiries.
          </p>
          <div style={{display:'flex', gap:12}}>
            <button className="btn" type="submit">Message on LinkedIn</button>
            <a className="btn secondary" href={LINKEDIN_URL} target="_blank" rel="noreferrer">Open Profile ↗</a>
          </div>
          {status && <p style={{color:'var(--muted)', marginTop:10}}>{status}</p>}
        </form>
      </div>
    </section>
  )
}
