import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, tags = [], liveUrl, codeUrl }) {
  return (
    <article className="card">
      <div className="card-pad">
        <div className="flex items-start justify-between gap-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            {liveUrl && (
              <a aria-label="Live" href={liveUrl} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-50">
                <ExternalLink size={18} />
              </a>
            )}
            {codeUrl && (
              <a aria-label="Code" href={codeUrl} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-50">
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 text-slate-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-slate-100 text-slate-700">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
