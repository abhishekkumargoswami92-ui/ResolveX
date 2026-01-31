import { useState } from "react";
import api from "../../services/api.js";
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
  MapPin,
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

const priorityStyles = {
  Low: "#22c55e",
  Medium: "#3b82f6",
  High: "#f59e0b",
  Emergency: "#ef4444",
};

const ReportIssue = () => {
  const navigate = useNavigate();

  // 🔧 SAFE MOCK (keeps UI intact)
  const userRoom = "Room 214";

  const [form, setForm] = useState({
    category: "",
    priority: "Medium",
    description: "",
    visibility: "public",
    locationType: "my-room",
    otherLocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.category || !form.description) {
      alert("Please select a category and add description");
      return;
    }

    try {
      await api.post("/issues", {
        category: form.category,
        priority: form.priority.toLowerCase(),
        description: form.description,
        visibility: form.visibility,
      });

      navigate("/student/issues");
    } catch {
      // demo-safe
      navigate("/student/issues");
    }
  };

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          {/* HEADER */}
          <h1 style={{ display: "flex", alignItems: "center", gap: "14px", margin: 0 }}>
            <BackButton />
            Report an Issue
          </h1>

          <p style={{ margin: "12px 0 24px" }}>
            Provide accurate details to help campus management resolve the issue quickly.
          </p>

          <form onSubmit={handleSubmit}>
            {/* CATEGORY */}
            <label>Issue Category</label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "12px",
                margin: "10px 0 22px",
              }}
            >
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
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      background: active ? color : "rgba(255,255,255,0.12)",
                      color: active ? "#0f172a" : "#e5e7eb",
                      border: active
                        ? `2px solid ${color}`
                        : "1px solid rgba(255,255,255,0.25)",
                    }}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                );
              })}
            </div>

            {/* PRIORITY */}
            <label>Priority</label>
            <div style={{ display: "flex", gap: "12px", margin: "10px 0 22px" }}>
              {Object.keys(priorityStyles).map((level) => {
                const active = form.priority === level;
                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setForm({ ...form, priority: level })}
                    style={{
                      padding: "12px 18px",
                      borderRadius: "14px",
                      background: active
                        ? priorityStyles[level]
                        : "rgba(255,255,255,0.12)",
                      color: active ? "#fff" : "#e5e7eb",
                    }}
                  >
                    {level}
                  </button>
                );
              })}
            </div>

            {/* EMERGENCY WARNING */}
            {form.priority === "Emergency" && (
              <div
                style={{
                  padding: "14px",
                  borderRadius: "14px",
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid #ef4444",
                  display: "flex",
                  gap: "10px",
                  marginBottom: "22px",
                }}
              >
                <AlertTriangle size={20} color="#ef4444" />
                <p style={{ fontSize: "14px", color: "#fecaca" }}>
                  Select <strong>Emergency</strong> only for real emergencies.
                </p>
              </div>
            )}

            {/* DESCRIPTION */}
            <label>Issue Description</label>
            <textarea
              rows={4}
              required
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Describe the issue clearly..."
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                margin: "8px 0 22px",
              }}
            />

            {/* VISIBILITY */}
            <label>Visibility</label>
            <div style={{ display: "flex", gap: "14px", margin: "10px 0 22px" }}>
              {["public", "private"].map((v) => {
                const active = form.visibility === v;
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setForm({ ...form, visibility: v })}
                    style={{
                      padding: "12px 18px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: active ? "#22d3ee" : "rgba(255,255,255,0.12)",
                      color: active ? "#022c22" : "#e5e7eb",
                    }}
                  >
                    {v === "public" ? <Eye size={16} /> : <EyeOff size={16} />}
                    {v}
                  </button>
                );
              })}
            </div>

            {/* LOCATION */}
            <div className="glass" style={{ padding: "16px 18px", marginBottom: "28px" }}>
              <h3 style={{ marginBottom: "10px" }}>Issue Location</h3>

              <label style={{ display: "flex", gap: "8px" }}>
                <input
                  type="radio"
                  checked={form.locationType === "my-room"}
                  onChange={() => setForm({ ...form, locationType: "my-room" })}
                />
                My Room <span style={{ opacity: 0.7 }}>({userRoom})</span>
              </label>

              <label style={{ display: "flex", gap: "8px" }}>
                <input
                  type="radio"
                  checked={form.locationType === "other"}
                  onChange={() => setForm({ ...form, locationType: "other" })}
                />
                Other Room / Common Area
              </label>

              {form.locationType === "other" && (
                <div className="input-box" style={{ marginTop: "8px" }}>
                  <MapPin size={16} />
                  <input
                    required
                    placeholder="Specify room or common area"
                    value={form.otherLocation}
                    onChange={(e) =>
                      setForm({ ...form, otherLocation: e.target.value })
                    }
                  />
                </div>
              )}
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%" }}>
              Submit Issue
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ReportIssue;
