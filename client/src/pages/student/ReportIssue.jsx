import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Wrench,
  Zap,
  Droplets,
  Wifi,
  Armchair,
  AlertCircle,
  Upload,
  Eye,
  EyeOff,
  AlertTriangle,
} from "lucide-react";

import Navbar from "../../components/common/Navbar.jsx";
import BackButton from "../../components/common/BackButton.jsx";

const categories = [
  { label: "Plumbing", icon: Droplets, color: "#38bdf8" },
  { label: "Electrical", icon: Zap, color: "#facc15" },
  { label: "Internet", icon: Wifi, color: "#a78bfa" },
  { label: "Furniture", icon: Armchair, color: "#2dd4bf" },
  { label: "Maintenance", icon: Wrench, color: "#fb923c" },
  { label: "Other", icon: AlertCircle, color: "#cbd5f5" },
];

const ReportIssue = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    category: "",
    priority: "Medium",
    description: "",
    visibility: "public",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.category || !form.description) {
      alert("Please fill all required fields");
      return;
    }

    // MOCK SUBMIT
    navigate("/student/issues");
  };

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          <h1 style={{ display: "flex", gap: "14px" }}>
            <BackButton />
            Report an Issue
          </h1>

          <form onSubmit={handleSubmit}>
            <label>Issue Category</label>

            <div style={{ display: "grid", gap: "12px", margin: "14px 0" }}>
              {categories.map(({ label, icon: Icon, color }) => {
                const active = form.category === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setForm({ ...form, category: label })}
                    style={{
                      padding: "14px",
                      borderRadius: "14px",
                      background: active ? color : "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      color: active ? "#0f172a" : "#e5e7eb",
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                );
              })}
            </div>

            <label>Description</label>
            <textarea
              rows={4}
              required
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              style={{ width: "100%", borderRadius: "12px", padding: "12px" }}
            />

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", marginTop: "24px" }}
            >
              Submit Issue
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ReportIssue;
