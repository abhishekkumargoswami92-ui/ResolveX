import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, MapPin } from "lucide-react";
import logoPrimary from "../../assets/images/logo-primary.svg";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    campus: "",
    block: "",
    room: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isPasswordValid = (pwd) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pwd);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // All fields required
    for (const key in form) {
      if (!form[key]) {
        setError("All fields are required");
        return;
      }
    }

    // Password rules
    if (!isPasswordValid(form.password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, and a number"
      );
      return;
    }

    // Password match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // FRONTEND ONLY (mock)
    alert("Student registered successfully (mock)");
  };

  return (
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
        <div className="glass" style={{ maxWidth: "560px", width: "100%" }}>
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <img src={logoPrimary} alt="ResolveX" style={{ height: "48px" }} />
          </div>

          <h2 style={{ textAlign: "center" }}>Student Registration</h2>
          <p style={{ textAlign: "center", marginTop: "6px" }}>
            Create an account to report and track campus issues.
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: "28px" }}>
            {/* Full Name */}
            <div style={{ marginBottom: "16px" }}>
              <label>Full Name</label>
              <div className="input-box">
                <User size={18} />
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label>Email Address</label>
              <div className="input-box">
                <Mail size={18} />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@university.edu"
                />
              </div>
            </div>

            {/* College */}
            <div style={{ marginBottom: "16px" }}>
              <label>College / Institute Name</label>
              <div className="input-box">
                <MapPin size={18} />
                <input
                  name="college"
                  value={form.college}
                  onChange={handleChange}
                  placeholder="Your college or institute"
                />
              </div>
            </div>

            {/* Campus */}
            <div style={{ marginBottom: "16px" }}>
              <label>Campus</label>
              <div className="input-box">
                <MapPin size={18} />
                <input
                  name="campus"
                  value={form.campus}
                  onChange={handleChange}
                  placeholder="Campus name"
                />
              </div>
            </div>

            {/* Block */}
            <div style={{ marginBottom: "16px" }}>
              <label>Block / Area</label>
              <div className="input-box">
                <MapPin size={18} />
                <input
                  name="block"
                  value={form.block}
                  onChange={handleChange}
                  placeholder="Block or area"
                />
              </div>
            </div>

            {/* Room */}
            <div style={{ marginBottom: "16px" }}>
              <label>Room / Location ID</label>
              <div className="input-box">
                <MapPin size={18} />
                <input
                  name="room"
                  value={form.room}
                  onChange={handleChange}
                  placeholder="Room or location identifier"
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: "16px" }}>
              <label>Password</label>
              <div className="input-box">
                <Lock size={18} />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: "20px" }}>
              <label>Confirm Password</label>
              <div className="input-box">
                <Lock size={18} />
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p style={{ color: "#fca5a5", fontSize: "14px", marginBottom: "14px" }}>
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Create Account
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#5eead4" }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
