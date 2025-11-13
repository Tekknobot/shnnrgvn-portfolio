import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";

export default function About() {
  return (
    <section id="about" className="bg-slate-50/60">
      <SectionHeader
        id="about"
        eyebrow="About"
        title="A little about me"
        description="I turn complex problems into simple, intuitive interfaces. I love systems, velocity, and polish."
      />
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="card md:col-span-2">
          <div className="card-pad space-y-3 text-slate-700 leading-relaxed">
            <p>
              Over the past X years, I’ve shipped production React apps across
              ecommerce, SaaS, and internal tooling. I care about accessibility,
              performance budgets, and maintainable design systems.
            </p>
            <p>
              Recently, I’ve been exploring server components, app routers, and
              micro-frontend boundaries to help teams iterate faster.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-pad">
            <h3 className="font-semibold">Highlights</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Cut page weight by 42% with code-splitting</li>
              <li>• Built CI preview flows for PR-based QA</li>
              <li>• Led mobile UX revamp (+18% conv.)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
