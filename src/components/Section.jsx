import React from 'react'

export default function Section({title, items}){
  return (
    <section className="card">
      <div className="hd">
        <h3 style={{margin:0}}>{title}</h3>
        <span className="badge">Available for remote work</span>
      </div>
      <div className="bd">
        <ul className="list">
          {items.map((t,i)=>(
            <li key={i}>
              <span className="dot" aria-hidden="true"></span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
