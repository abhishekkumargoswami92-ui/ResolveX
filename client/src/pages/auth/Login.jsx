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

          {/* Google */}
          <button
            type="button"
            className="glass"
            style={{ width: "100%", marginTop: 16, padding: 12 }}
          >
            Sign in with Google
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
