import React from 'react'

export default function ProjectCard({ title, href, desc, points = [], meta = [] }){
  return (
    <section className="card" role="article">
      <div className="hd">
        <h4 style={{margin:0}}>{title}</h4>
        <a className="badge" href={href} target="_blank" rel="noreferrer">Open ↗</a>
      </div>
      <div className="bd">
        {desc && <p style={{marginTop:0}}>{desc}</p>}
        {points.length > 0 && (
          <ul className="list" style={{marginTop:12}}>
            {points.map((p, i) => (
              <li key={i}>
                <span className="dot" aria-hidden="true"></span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
        {meta?.length > 0 && (
          <div className="tags" style={{marginTop:12}}>
            {meta.map((m, i) => <span key={i} className="tag">{m}</span>)}
          </div>
        )}
      </div>
    </section>
  )
}
