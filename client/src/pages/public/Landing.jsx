import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* Top Section */}
      <section className="section">
        <div className="container">
          <span className="badge">Campus Infrastructure Platform</span>

          <h1 style={{ marginTop: "16px", maxWidth: "720px" }}>
            A transparent system for reporting and resolving campus issues
          </h1>

          <p style={{ maxWidth: "640px" }}>
            ResolveX helps students report infrastructure issues and enables
            campus management to track, prioritize, and resolve them with clear
            accountability and timelines.
          </p>

          <div style={{ marginTop: "32px" }}>
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
            <span style={{ marginLeft: "12px" }} />
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Why ResolveX */}
      <section className="section section-light section-bordered">
        <div className="container">
          <h2>Why ResolveX</h2>

          <p style={{ maxWidth: "720px" }}>
            In many campuses, infrastructure issues are reported through informal
            channels, leading to delays, duplicate complaints, and lack of
            accountability. ResolveX introduces a structured workflow where every
            issue is recorded, tracked, and resolved transparently.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginTop: "32px",
            }}
          >
            <div>
              <h3>Clear Ownership</h3>
              <p>
                Each issue is assigned and tracked through defined responsibility
                stages.
              </p>
            </div>

            <div>
              <h3>Status Transparency</h3>
              <p>
                Students can view progress updates and resolution timelines.
              </p>
            </div>

            <div>
              <h3>Data-Driven Oversight</h3>
              <p>
                Management gains insights into recurring issues and response
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-bordered">
        <div className="container">
          <h2>How It Works</h2>

          <ol style={{ marginTop: "24px", paddingLeft: "20px" }}>
            <li>
              <strong>Report:</strong> Students submit issues with category,
              priority, and location.
            </li>
            <li>
              <strong>Assign:</strong> Management reviews and assigns issues to
              responsible staff.
            </li>
            <li>
              <strong>Resolve:</strong> Progress updates and remarks are recorded.
            </li>
            <li>
              <strong>Close:</strong> Issues are resolved and archived for
              analysis.
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{ color: "#ffffff", maxWidth: "640px" }}>
            Built for real campuses, not just complaints
          </h2>

          <p style={{ color: "#e5e7eb", maxWidth: "640px" }}>
            ResolveX focuses on accountability, timelines, and resolution — not
            just issue submission.
          </p>

          <div style={{ marginTop: "32px" }}>
            <Link to="/register" className="btn-primary">
              Access the Platform
            </Link>
          </div>
        </div>
      </section>

      <footer>© ResolveX</footer>
    </div>
  );
};

export default Landing;
