import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import logoPrimary from "../../assets/images/logo-primary.svg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Invalid email or password");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email or password");
      return;
    }

    setLoading(true);

    // 🔒 FRONTEND-ONLY MOCK LOGIN
    setTimeout(() => {
      setLoading(false);

      // Mock role detection
      const role = email.includes("admin") ? "management" : "student";

      if (role === "student") {
        navigate("/student/dashboard");
      } else {
        navigate("/admin/dashboard");
      }
    }, 1200);
  };

  return (
    <section className="section">
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <div className="glass" style={{ maxWidth: 440, width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <img src={logoPrimary} alt="ResolveX" style={{ height: 48 }} />
          </div>

          <h2 style={{ textAlign: "center" }}>Sign in</h2>
          <p style={{ textAlign: "center", marginTop: 6 }}>
            Access your ResolveX account
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: 32 }}>
            {/* Email */}
            <div style={{ marginBottom: 18 }}>
              <label>Email</label>
              <div className="input-box">
                <Mail size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: 24 }}>
              <label>Password</label>
              <div className="input-box">
                <Lock size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                />
              </div>
            </div>

            {error && (
              <p style={{ color: "#fca5a5", fontSize: 14, marginBottom: 14 }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{ width: "100%" }}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <button type="button" className="gsi-material-button">
          <div className="gsi-material-button-content-wrapper">
            <div className="gsi-material-button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                style={{ display: "block" }}
              >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
            <span className="gsi-material-button-contents">
              Sign in with Google
            </span>
          </div>
        </button>


          <p style={{ textAlign: "center", marginTop: 20 }}>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
