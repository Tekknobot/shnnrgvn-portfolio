import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeader eyebrow="Contact" title="Let’s work together" />
      <div className="container grid md:grid-cols-2 gap-6">
        {/* Email & LinkedIn CTAs */}
        <div className="card">
          <div className="card-pad space-y-4 text-slate-700">
            <p className="text-slate-600">
              I’m open to freelance/contract roles and full-time opportunities.
              If you’d like to collaborate or just say hi, reach out below.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="mailto:shanna.ragavan@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-brand-600 text-white font-semibold hover:bg-brand-700"
                aria-label="Email me"
              >
                <Mail size={18} />
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/your-handle-here"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-[#0A66C2] text-white font-semibold hover:opacity-90"
                aria-label="Message me on LinkedIn"
              >
                <Linkedin size={18} />
                Message on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Optional: additional info / availability */}
        <div className="card">
          <div className="card-pad space-y-3 text-slate-700">
            <h3 className="font-semibold">Availability</h3>
            <p className="text-sm">
              Typically available for discovery calls on weekdays. Send a quick
              note with your timeline and I’ll reply promptly.
            </p>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Frontend (React, TypeScript)</li>
              <li>Interactive apps (Godot, C#)</li>
              <li>Creative direction & music production</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
