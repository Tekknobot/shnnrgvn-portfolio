import { IconLocation } from "./icons/IconLocation";
import { IconMail } from "./icons/IconMail";
import { IconArrowUpRight } from "./icons/IconArrowUpRight";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-top">
        <h1 id="hero-title" className="hero-title">
          Hi, I&apos;m Shanna.
        </h1>
        <p className="hero-lead">
          Frontend programmer focused on delightful, accessible experiences.
          I build performant interfaces with React, TypeScript, and a keen eye
          for mobile, and I also love game development.
        </p>
        <p className="hero-lead hero-lead-secondary">
          I prototype quickly, iterate fast, and enjoy turning rough concepts
          into polished interactions—especially where data, storytelling, and
          interactivity overlap.
        </p>
      </div>

      <div className="hero-actions">
        <a href="#projects" className="button button-primary">
          <span>View Work</span>
          <IconArrowUpRight className="icon-inline" aria-hidden="true" />
        </a>
        <a href="#contact" className="button button-ghost">
          <span>Contact</span>
        </a>
      </div>

      <div className="hero-meta">
        <div className="hero-meta-item">
          <IconLocation className="icon-inline" aria-hidden="true" />
          <span>Toronto, Canada</span>
        </div>
        <div className="hero-meta-item">
          <IconMail className="icon-inline" aria-hidden="true" />
          <a href="mailto:shanna.ragavan@gmail.com">
            shanna.ragavan@gmail.com
          </a>
        </div>
        <div className="hero-meta-item hero-meta-phone">
          <span className="hero-meta-label">Phone</span>
          <span className="hero-meta-value">+1 416 275 0743</span>
        </div>
      </div>
    </section>
  );
}
