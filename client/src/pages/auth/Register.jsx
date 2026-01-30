import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Building2, DoorOpen } from "lucide-react";
import logoPrimary from "../../assets/images/logo-primary.svg";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth.service";


const navigate = useNavigate();


const hostelOptions = [
  "Hostel A",
  "Hostel B",
  "Hostel C",
  "Hostel D",
  "Block 1",
  "Block 2",
];

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    hostel: "",
    roomNo: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isPasswordValid = (pwd) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pwd);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  for (const key in form) {
    if (!form[key]) {
      setError("All fields are required");
      return;
    }
  }

  if (!isPasswordValid(form.password)) {
    setError(
      "Password must be at least 8 characters and include uppercase, lowercase, and a number"
    );
    return;
  }

  if (form.password !== form.confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    const payload = {
      name: form.fullName,
      email: form.email,
      password: form.password,
      collegeName: "Your College Name", // you can make this dynamic later
      location: {
        campus: "Main Campus", // or derive later
        block: form.hostel,
        room: form.roomNo,
      },
    };

    const data = await registerUser(payload);

    // store auth
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/student/dashboard");
  } catch (err) {
    setError(err.response?.data?.message || "Registration failed");
  }
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
        <div className="glass" style={{ maxWidth: "520px", width: "100%" }}>
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <img src={logoPrimary} alt="ResolveX" style={{ height: "48px" }} />
          </div>

          <h2 style={{ textAlign: "center" }}>Student Registration</h2>
          <p style={{ textAlign: "center", marginTop: "6px" }}>
            Create an account to report and track hostel issues.
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

            {/* Hostel / Block (Dropdown + Search) */}
            <div style={{ marginBottom: "16px" }}>
              <label>Hostel Name / Block</label>
              <div className="input-box">
                <Building2 size={18} />
                <input
                  list="hostel-options"
                  name="hostel"
                  value={form.hostel}
                  onChange={handleChange}
                  placeholder="Select or search hostel"
                />
                <datalist id="hostel-options">
                  {hostelOptions.map((hostel) => (
                    <option key={hostel} value={hostel} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Room No */}
            <div style={{ marginBottom: "16px" }}>
              <label>Room No.</label>
              <div className="input-box">
                <DoorOpen size={18} />
                <input
                  name="roomNo"
                  value={form.roomNo}
                  onChange={handleChange}
                  placeholder="e.g. 204, A-12"
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
              <p
                style={{
                  color: "#fca5a5",
                  fontSize: "14px",
                  marginBottom: "14px",
                }}
              >
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
