import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Campus issues. Clearly reported. Transparently resolved.</h1>

          <p style={{ maxWidth: "700px", margin: "24px auto" }}>
            ResolveX is a centralized platform for reporting, tracking, and
            resolving campus infrastructure issues with accountability and
            visibility.
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

          <p style={{ marginTop: "24px", fontSize: "14px" }}>
            Designed for universities and institutional campuses.
          </p>
        </div>
      </section>

      {/* Why ResolveX */}
      <section className="section section-light">
        <div className="container">
          <h2>Why ResolveX Exists</h2>

          <p>
            Campus infrastructure issues often go unresolved due to fragmented
            reporting, lack of ownership, and limited visibility. ResolveX
            replaces informal complaint channels with a structured, transparent
            system where every issue is tracked from report to closure.
          </p>

          <ul>
            <li>No clear status updates after reporting</li>
            <li>Duplicate complaints without coordination</li>
            <li>Delayed resolutions with no accountability</li>
            <li>No data to identify recurring infrastructure issues</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer>© ResolveX</footer>
    </div>
  );
};

export default Landing;
