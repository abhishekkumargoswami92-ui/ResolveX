import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <h1 style={{ maxWidth: "600px" }}>
            Track campus issues.
            <br />
            See them resolved.
          </h1>

          <p style={{ maxWidth: "520px", marginTop: "16px" }}>
            A transparent issue resolution platform for campuses and institutions.
          </p>

          <div style={{ marginTop: "32px" }}>
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          <div className="card">
            <h2>Transparent Tracking</h2>
            <p>Status, timelines, and remarks visible end-to-end.</p>
          </div>

          <div className="card">
            <h2>Clear Accountability</h2>
            <p>Every issue moves through a defined resolution workflow.</p>
          </div>

          <div className="card">
            <h2>Operational Insight</h2>
            <p>Management sees trends, delays, and priorities clearly.</p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="section"
        style={{ backgroundColor: "#1E3A8A", color: "white" }}
      >
        <div className="container">
          <h2 style={{ color: "white", maxWidth: "520px" }}>
            Built for real campuses, not complaint boxes
          </h2>

          <div style={{ marginTop: "24px" }}>
            <Link to="/register" className="btn-primary">
              Access ResolveX
            </Link>
          </div>
        </div>
      </section>

      <footer>© ResolveX</footer>
    </div>
  );
};

export default Landing;
