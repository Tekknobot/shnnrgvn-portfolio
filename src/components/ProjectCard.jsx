import React from "react";
import { Github, ExternalLink } from "lucide-react";

/**
 * Props:
 * - title, description, tags: string[]
 * - EITHER:
 *    links: [{ href: string, label?: string, icon?: 'external' | 'github' }]
 *   OR the legacy:
 *    liveUrl?: string, codeUrl?: string
 */
export default function ProjectCard({ title, description, tags = [], links, liveUrl, codeUrl }) {
  const finalLinks =
    Array.isArray(links) && links.length > 0
      ? links
      : [
          liveUrl ? { href: liveUrl, label: "Live", icon: "external" } : null,
          codeUrl ? { href: codeUrl, label: "Code", icon: "github" } : null,
        ].filter(Boolean);

  return (
    <article className="card">
      <div className="card-pad">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>

          {finalLinks.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {finalLinks.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-slate-50 text-sm"
                  aria-label={l.label || "Open link"}
                  title={l.label || "Open"}
                >
                  {l.icon === "github" ? <Github size={16} /> : <ExternalLink size={16} />}
                  <span>{l.label || "Open"}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <p className="mt-3 text-slate-600 whitespace-pre-line">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs rounded-full bg-slate-100 text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
