import React from "react";

export default function SectionHeader({ id, eyebrow, title, description }) {
  return (
    <header id={id} className="container section">
      <p className="text-brand-600 text-xs font-semibold tracking-widest uppercase">
        {eyebrow}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mt-2">{title}</h2>
      {description && (
        <p className="mt-2 text-slate-600 max-w-prose">{description}</p>
      )}
    </header>
  );
}
