import React from "react";

export default function Footer({ profile }) {
  return (
    <footer className="mt-10 border-t bg-slate-950 text-slate-300">
      <div className="container mx-auto max-w-4xl py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        {/* Links removed */}
      </div>
    </footer>
  );
}
