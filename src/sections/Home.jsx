import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Hi, I’m <span className="text-brand-600">Shanna.</span>
          </motion.h1>
          <p className="mt-4 text-slate-600 max-w-prose">
            Frontend programmer focused on delightful, accessible experiences. I build
            performant interfaces with React, TypeScript, and a keen eye for mobile.
            <br /><br />
            I prototype quickly, iterate fast, and love turning rough concepts into
            polished interactions. My work blends design, engineering, and a bit of
            creative experimentation—from sports tools to geopolitical dashboards to
            game-driven UI ideas.
            <br /><br />
            I especially enjoy projects that sit at the intersection of data,
            storytelling, and interactive design.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a href="#projects" className="card text-center py-3 font-semibold hover:shadow-md">View Work</a>
            <a href="#contact" className="card text-center py-3 font-semibold hover:shadow-md">Contact</a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-600">
            <span className="inline-flex items-center gap-2"><MapPin size={16}/>Toronto, Canada</span>
            <a className="inline-flex items-center gap-2 hover:text-slate-900" href="tel:+123456789"><Phone size={16}/>+1 416 275 0743</a>
            <a className="inline-flex items-center gap-2 hover:text-slate-900" href="mailto:you@example.com"><Mail size={16}/>shanna.ragavan@gmail.com</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5, delay: .15 }}
          className="card aspect-square md:aspect-[4/3]"
        >
          <div className="card-pad h-full grid place-items-center">
            <img
            src="/pizzza-icon.png"
            alt="Shanna Ragavan profile"
            className="h-40 w-40 rounded-full object-cover ring-4 ring-brand-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
