
import React from "react";

export default function About({ profile }) {
  return (
    <div className="card prose prose-invert max-w-none">
      <h2 className="section-title">About</h2>
      <p className="subtitle">{profile.summary}</p>
      <h3 className="mt-6 font-semibold">Skills</h3>
      <ul className="list-disc pl-6">
        {profile.skills?.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </div>
  );
}
