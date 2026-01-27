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

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          {/* HEADER */}
         <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "10px",
          }}
        >
          <BackButton />
          <h1 style={{ margin: 0 }}>Report an Issue</h1>
        </div>


          <p style={{ marginBottom: "24px" }}>
            Provide accurate details to help resolve the issue quickly.
          </p>

          <form>
            {/* Category */}
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
                    onClick={() => setForm({ ...form, category: label })}
                    style={{
                      padding: "14px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      background: active
                        ? categoryColors[label]
                        : "rgba(255,255,255,0.12)",
                      color: active ? "#0f172a" : "#e5e7eb",
                      border: active
                        ? `2px solid ${categoryColors[label]}`
                        : "1px solid rgba(255,255,255,0.25)",
                      cursor: "pointer",
                    }}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Priority */}
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
                        ? priorityStyles[level].bg
                        : "rgba(255,255,255,0.12)",
                      color: active
                        ? priorityStyles[level].text
                        : "#e5e7eb",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {level}
                  </button>
                );
              })}
            </div>

            {/* Emergency Warning */}
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
                  False alerts may lead to disciplinary action.
                </p>
              </div>
            )}

            {/* Description */}
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
                padding: "12px",
                borderRadius: "12px",
                margin: "8px 0 22px",
              }}
            />

            {/* Image */}
            <label>Attach Image (optional)</label>
            <button
              type="button"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                background: "#ffffff",
                color: "#0f172a",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                margin: "8px 0 22px",
              }}
            >
              <Upload size={18} />
              Upload an image
            </button>

            {/* Submit */}
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
