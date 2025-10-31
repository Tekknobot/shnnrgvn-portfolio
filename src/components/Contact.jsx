import React, { useState } from 'react'

export default function Contact({id}){
  const [status, setStatus] = useState('')
  function onSubmit(e){
    e.preventDefault()
    setStatus('Thanks — your message is ready to send. Replace the form action with your endpoint.')
  }
  return (
    <section id={id} className="card" style={{marginTop:28}} aria-labelledby="contact-title">
      <div className="hd">
        <h3 id="contact-title" style={{margin:0}}>Contact</h3>
        <span className="badge">Remote-friendly</span>
      </div>
      <div className="bd">
        <form onSubmit={onSubmit}>
          <div style={{display:'grid', gap:12, gridTemplateColumns:'1fr 1fr'}}>
            <label> Name <input required name="name" placeholder="Your name" /></label>
            <label> Email <input required type="email" name="email" placeholder="you@domain.com" /></label>
          </div>
          <label style={{display:'block', marginTop:12}}> Message <textarea required name="message" rows="6" placeholder="Tell me about your project"/></label>
          <div style={{display:'flex', gap:12, marginTop:12}}>
            <button className="btn" type="submit">Send</button>
            <a className="btn secondary" href="mailto:hello@example.com">Email instead</a>
          </div>
          {status && <p style={{color:'var(--muted)', marginTop:10}}>{status}</p>}
        </form>
      </div>
    </section>
  )
}
