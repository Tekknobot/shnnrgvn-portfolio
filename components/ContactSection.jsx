import { IconMail } from "./icons/IconMail";
import { IconArrowUpRight } from "./icons/IconArrowUpRight";
import { IconLocation } from "./icons/IconLocation";

export default function ContactSection() {
  return (
    <section id="contact" className="section section-contact">
      <div className="section-header">
        <h2 className="section-kicker">Contact</h2>
        <p className="section-title">Let&apos;s work together</p>
      </div>

      <div className="section-body section-body-split">
        <div className="section-body-main">
          <p>
            I&apos;m open to freelance/contract roles and full-time opportunities.
            If you&apos;d like to collaborate or just say hi, reach out below.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:shanna.ragavan@gmail.com"
              className="button button-primary"
            >
              <IconMail className="icon-inline" aria-hidden="true" />
              <span>Email me</span>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="button button-ghost"
            >
              <span>LinkedIn</span>
              <IconArrowUpRight className="icon-inline" aria-hidden="true" />
            </a>
          </div>

          <div className="contact-meta">
            <div className="contact-meta-item">
              <IconLocation className="icon-inline" aria-hidden="true" />
              <span>Toronto, Canada</span>
            </div>
            <div className="contact-meta-item">
              <span className="contact-meta-label">Email</span>
              <a href="mailto:shanna.ragavan@gmail.com">
                shanna.ragavan@gmail.com
              </a>
            </div>
            <div className="contact-meta-item">
              <span className="contact-meta-label">Phone</span>
              <span>+1 416 275 0743</span>
            </div>
          </div>
        </div>

        <div className="section-body-side">
          <h3 className="subheading">Things I&apos;m especially excited about</h3>
          <ul className="pill-list">
            <li>Interfaces around data, sports, or geopolitics</li>
            <li>Game feel, 2D pixel-art aesthetics &amp; audio-driven UI</li>
            <li>Fast prototypes to explore new product ideas</li>
          </ul>
          <p className="contact-closing">
            If your project sits somewhere between interaction, data, and sound,
            I&apos;d love to hear about it.
          </p>
        </div>
      </div>
    </section>
  );
}
