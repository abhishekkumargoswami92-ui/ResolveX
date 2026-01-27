import { useState } from "react";
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

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";


const categoryColors = {
  Plumbing: "#38bdf8",
  Electrical: "#facc15",
  Internet: "#a78bfa",
  Furniture: "#2dd4bf",
  Maintenance: "#fb923c",
  Other: "#cbd5f5",
};

const categories = [
  { label: "Plumbing", icon: Droplets },
  { label: "Electrical", icon: Zap },
  { label: "Internet", icon: Wifi },
  { label: "Furniture", icon: Armchair },
  { label: "Maintenance", icon: Wrench },
  { label: "Other", icon: AlertCircle },
];

const priorityStyles = {
  Low: { bg: "#22c55e", text: "#052e16" },
  Medium: { bg: "#3b82f6", text: "#eff6ff" },
  High: { bg: "#f59e0b", text: "#451a03" },
  Emergency: { bg: "#ef4444", text: "#fff1f2" },
};

const ReportIssue = () => {
  const [form, setForm] = useState({
    category: "",
    priority: "Medium",
    description: "",
    visibility: "public",
    locationType: "my-room",
    otherLocation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue reported successfully (mock)");
  };

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          <BackButton />
          <h1>Report an Issue</h1>
          <p style={{ marginTop: "6px", marginBottom: "24px" }}>
            Provide accurate details to help resolve the issue quickly.
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
              {categories.map(({ label, icon: Icon }) => {
                const active = form.category === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() =>
                      setForm({ ...form, category: label })
                    }
                    style={{
                      padding: "14px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      background: active
                        ? categoryColors[label]
                        : "rgba(255,255,255,0.12)",
                      color: active ? "#0f172a" : "#e5e7eb",
                      border: active
                        ? `2px solid ${categoryColors[label]}`
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
                    onClick={() =>
                      setForm({ ...form, priority: level })
                    }
                    style={{
                      padding: "12px 18px",
                      borderRadius: "14px",
                      border: "none",
                      cursor: "pointer",
                      background: active
                        ? priorityStyles[level].bg
                        : "rgba(255,255,255,0.12)",
                      color: active
                        ? priorityStyles[level].text
                        : "#e5e7eb",
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
                  marginBottom: "22px",
                  padding: "14px",
                  borderRadius: "14px",
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid #ef4444",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <AlertTriangle size={20} color="#ef4444" />
                <p style={{ fontSize: "14px", color: "#fecaca" }}>
                  Select <strong>Emergency</strong> only for actual medical
                  emergencies or safety hazards. False alerts may lead to
                  disciplinary action.
                </p>
              </div>
            )}

            {/* DESCRIPTION */}
            <label>Issue Description</label>
            <textarea
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Describe the issue clearly..."
              style={{
                width: "100%",
                margin: "8px 0 22px",
                padding: "12px",
                borderRadius: "12px",
              }}
            />

            {/* IMAGE */}
            <label>Attach Image (optional)</label>
            <button
              type="button"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                background: "#ffffff",
                color: "#0f172a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "none",
                margin: "8px 0 22px",
              }}
            >
              <Upload size={18} />
              Upload an image
            </button>

            {/* VISIBILITY */}
            <label>Visibility</label>
            <div style={{ display: "flex", gap: "14px", margin: "10px 0 22px" }}>
              {["public", "private"].map((v) => {
                const active = form.visibility === v;
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() =>
                      setForm({ ...form, visibility: v })
                    }
                    style={{
                      padding: "12px 18px",
                      borderRadius: "14px",
                      background: active
                        ? "#22d3ee"
                        : "rgba(255,255,255,0.12)",
                      color: active ? "#022c22" : "#e5e7eb",
                      border: active
                        ? "2px solid #22d3ee"
                        : "1px solid rgba(255,255,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {v === "public" ? <Eye size={16} /> : <EyeOff size={16} />}
                    {v === "public" ? "Public" : "Private"}
                  </button>
                );
              })}
            </div>

            {/* LOCATION */}
            <div className="glass" style={{ marginBottom: "28px" }}>
              <h3>Issue Location</h3>

              <label>
                <input
                  type="radio"
                  checked={form.locationType === "my-room"}
                  onChange={() =>
                    setForm({ ...form, locationType: "my-room" })
                  }
                />{" "}
                My Room (Hostel A · Room 204)
              </label>

              <br />

              <label>
                <input
                  type="radio"
                  checked={form.locationType === "other"}
                  onChange={() =>
                    setForm({ ...form, locationType: "other" })
                  }
                />{" "}
                Other Area
              </label>

              {form.locationType === "other" && (
                <div className="input-box" style={{ marginTop: "10px" }}>
                  <MapPin size={18} />
                  <input
                    placeholder="Specify room or common area"
                    value={form.otherLocation}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        otherLocation: e.target.value,
                      })
                    }
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%" }}
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
