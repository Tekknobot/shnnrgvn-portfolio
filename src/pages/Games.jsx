import React from "react";

export default function Games({ games }) {
  if (!games?.length) return null;

  return (
    <section className="container mx-auto max-w-4xl py-8 md:py-14" id="games">
      <div className="card">
        <h2 className="text-xl md:text-2xl font-bold text-slate-100">Games & Tools</h2>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {games.map((g) => (
            <li key={g.href}>
              <a
                href={g.href}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-soft
                           hover:bg-slate-900 hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/40 transition"
              >
                <div className="flex items-center justify-between">
                  {g.tag ? (
                    <span className="inline-flex items-center rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-300">
                      {g.tag}
                    </span>
                  ) : <span />}
                  <span className="text-slate-500 group-hover:text-slate-300" aria-hidden>↗</span>
                </div>

                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-100">
                  {g.label}
                </h3>

                {g.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {g.description}
                  </p>
                ) : null}

                <span className="mt-4 inline-flex items-center text-sm font-medium text-slate-100">
                  Open <span className="ml-1" aria-hidden>↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
