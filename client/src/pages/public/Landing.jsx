import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <div className="glass" style={{ maxWidth: "720px" }}>
            <h1>
              Campus issues,
              <br />
              resolved with clarity.
            </h1>

            <p style={{ maxWidth: "560px", marginTop: "16px" }}>
              ResolveX is an institution-grade platform for reporting and resolving
              campus infrastructure issues with transparency and accountability.
            </p>

            <div style={{ marginTop: "32px" }}>
              <Link to="/register" className="btn-primary">
                Access ResolveX
              </Link>
              <Link to="/login" className="btn-secondary">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE GRID */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          <div className="glass">
            <h2>Transparent Lifecycle</h2>
            <p>
              Every issue moves through a clearly defined resolution workflow
              with visible status and timestamps.
            </p>
          </div>

          <div className="glass">
            <h2>Defined Accountability</h2>
            <p>
              Ownership, assignment, and responsibility are explicitly recorded
              at every stage.
            </p>
          </div>

          <div className="glass">
            <h2>Operational Insight</h2>
            <p>
              Management gains real-time visibility into trends, delays, and
              recurring infrastructure challenges.
            </p>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section">
        <div className="container">
          <div className="glass" style={{ maxWidth: "720px" }}>
            <h2>Designed for institutions, not complaint boxes</h2>
            <p style={{ marginTop: "14px" }}>
              ResolveX replaces informal reporting with a structured,
              auditable, and accountable issue resolution system.
            </p>

            <div style={{ marginTop: "28px" }}>
              <Link to="/register" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} ResolveX · Campus Issue Resolution Platform
      </footer>
    </div>
  );
};

export default Landing;
