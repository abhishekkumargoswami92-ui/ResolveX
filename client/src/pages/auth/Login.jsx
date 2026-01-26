import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import logoPrimary from "../../assets/images/logo-primary.svg";

const Login = () => {
  return (
    <div>
      {/* Background Sprinkles */}
      <div className="background-sprinkles">
        {Array.from({ length: 40 }).map((_, i) => (
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

      {/* Centered Login Card */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div
            className="glass"
            style={{
              maxWidth: "440px",
              width: "100%",
              padding: "56px 48px",
            }}
          >
            {/* Logo */}
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <img
                src={logoPrimary}
                alt="ResolveX"
                style={{ height: "48px" }}
              />
            </div>

            {/* Heading */}
            <h2 style={{ textAlign: "center" }}>Sign in to ResolveX</h2>

            <p style={{ textAlign: "center", marginTop: "8px" }}>
              Access the platform to track and manage campus issues.
            </p>

            {/* Form */}
            <form style={{ marginTop: "36px" }}>
              {/* Email */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "6px",
                    color: "#e5e7eb",
                  }}
                >
                  Email address
                </label>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Mail size={18} />
                  <input
                    type="email"
                    placeholder="you@university.edu"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#f9fafb",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom: "28px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "6px",
                    color: "#e5e7eb",
                  }}
                >
                  Password
                </label>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Lock size={18} />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#f9fafb",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="button"
                className="btn-primary"
                style={{
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Sign in
              </button>
            </form>

            {/* Footer links */}
            <div
              style={{
                marginTop: "28px",
                textAlign: "center",
                fontSize: "14px",
                color: "#cbd5e1",
              }}
            >
              Don’t have an account?{" "}
              <Link
                to="/register"
                style={{
                  color: "#5eead4",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Create one
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
