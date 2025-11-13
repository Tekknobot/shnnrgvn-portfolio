import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeader eyebrow="Contact" title="Let’s work together" />
      <div className="container grid md:grid-cols-2 gap-6">
        <form className="card">
          <div className="card-pad space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input type="text" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="jane@doe.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full bg-brand-600 text-white font-semibold rounded-xl py-2.5 hover:bg-brand-700">Send</button>
          </div>
        </form>

        <div className="card">
          <div className="card-pad space-y-3 text-slate-700">
            <p>
              I’m open to freelance/contract roles and interesting full-time opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
