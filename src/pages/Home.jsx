import React from "react";

export default function Home({ profile }) {
  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="section-title">{profile.name}</h1>
          <p className="subtitle mt-1">{profile.headline}</p>
          <p className="mt-3 text-slate-300">{profile.summary}</p>

          {profile.services?.length ? (
            <>
              <h3 className="mt-4 font-semibold text-slate-200">Services</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-300/90">
                {profile.services.map((s) => (
                  <li key={s} className="mt-1">{s}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {profile.skills?.map((s) => (
            <span
              key={s}
              className="inline-block text-xs font-medium px-2 py-1 rounded-lg bg-slate-800 border border-slate-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
