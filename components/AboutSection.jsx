export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2 className="section-kicker">About</h2>
        <p className="section-title">A little about me</p>
      </div>

      <div className="section-body section-body-split">
        <div className="section-body-main">
          <p>
            I&apos;m a versatile technologist and creative who enjoys moving
            between frontend engineering, game development, and design.
            I&apos;m comfortable in both rapid prototypes and more polished
            production work.
          </p>
          <p>
            I work mainly with React, TypeScript, and modern tooling, but I also
            build gameplay and tools with engines like Godot and Unity. I care a
            lot about feel, readability, and making complex things feel
            approachable.
          </p>
          <p>
            I enjoy projects that live at the intersection of design,
            engineering, and experimentation—sports tools, geopolitical
            dashboards, playful UIs, and prototypes that explore new interaction
            patterns.
          </p>
        </div>

        <div className="section-body-side">
          <h3 className="subheading">Highlights</h3>
          <ul className="pill-list">
            <li>Godot &amp; C# gameplay and tooling</li>
            <li>React UI engineering &amp; performance</li>
            <li>Graphic design background (brand &amp; layout)</li>
            <li>Music production in Ableton (composition &amp; recording)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
