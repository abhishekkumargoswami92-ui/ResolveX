import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* Top Right Sign In */}
      <div className="top-nav">
        <Link to="/login">Sign in</Link>
      </div>

      {/* HERO */}
      <section className="section">
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="glass"
            style={{
              maxWidth: "720px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h1>
              Campus issues,
              <br />
              resolved with clarity.
            </h1>

            <p style={{ marginTop: "18px" }}>
              A structured system for reporting and resolving
              campus infrastructure issues.
            </p>

            <div style={{ marginTop: "36px" }}>
              <Link to="/register" className="btn-primary">
                Access ResolveX
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
            <h2>Transparent lifecycle</h2>
            <p style={{ textAlign: "left" }}>
              Issue status and progress remain visible
              throughout the resolution process.
            </p>
          </div>

          <div className="glass">
            <h2>Clear accountability</h2>
            <p style={{ textAlign: "left" }}>
              Ownership and responsibility are
              defined at every stage.
            </p>
          </div>

          <div className="glass">
            <h2>Operational insight</h2>
            <p style={{ textAlign: "left" }}>
              Management gains visibility into trends
              and recurring infrastructure concerns.
            </p>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section">
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div className="glass" style={{ maxWidth: "720px" }}>
            <h2>Designed for institutions</h2>
            <p style={{ marginTop: "14px", textAlign: "left" }}>
              ResolveX replaces informal reporting with a
              structured, accountable resolution workflow.
            </p>
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
