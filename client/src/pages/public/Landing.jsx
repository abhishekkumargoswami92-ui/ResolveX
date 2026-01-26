import { Link } from "react-router-dom";
import logoPrimary from "../../assets/images/logo-primary.svg";


const Landing = () => {
  return (
    <div>
      {/* Background Sprinkles */}
      <div className="background-sprinkles">
        {Array.from({ length: 48 }).map((_, i) => (
          <span
            key={i}
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">
          <img
            src={logoPrimary}
            alt="ResolveX"
            style={{
            height: "100px", width: "auto",
          }}
          />
        </div>


        <Link to="/login" className="signin-btn">
          Sign in
        </Link>
      </div>

      {/* HERO */}
      <section className="section">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="glass" style={{ maxWidth: "800px", width: "100%" }}>
            <h1>
              A clearer way to report,
              <br />
              track, and resolve campus issues
            </h1>

            <p style={{ marginTop: "22px", textAlign: "center" }}>
              ResolveX provides a structured system where infrastructure issues
              are reported once, tracked transparently, and resolved with clear
              accountability.
            </p>

            {/* Hero Meta */}
            <div className="hero-meta">
              <div>
                <span>5 stages</span>
                <small>Defined issue lifecycle</small>
              </div>
              <div>
                <span>Public / Private</span>
                <small>Controlled visibility</small>
              </div>
              <div>
                <span>Time-bound</span>
                <small>Resolution tracking</small>
              </div>
            </div>

            <div style={{ marginTop: "52px", textAlign: "center" }}>
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
            <h2>Transparent resolution</h2>
            <p>
              Issue status, remarks, and ownership remain visible from the moment
              an issue is reported until it is closed.
            </p>
          </div>

          <div className="glass">
            <h2>Reduced duplication</h2>
            <p>
              Similar issues are consolidated, ensuring faster resolution and
              avoiding repeated reporting.
            </p>
          </div>

          <div className="glass">
            <h2>Administrative insight</h2>
            <p>
              Management gains a clear view of recurring issues, response times,
              and infrastructure health.
            </p>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="glass" style={{ maxWidth: "800px" }}>
            <h2>Built for real campuses</h2>
            <p style={{ marginTop: "14px" }}>
              ResolveX is designed to support accountability, transparency, and
              data-driven decision making across campus infrastructure.
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
