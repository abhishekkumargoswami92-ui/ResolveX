import { useState } from "react";
import {
  Droplets,
  AlertTriangle,
  MessageSquare,
  Send,
} from "lucide-react";

import Navbar from "../../components/common/Navbar.jsx";
import BackButton from "../../components/common/BackButton.jsx";

const timeline = [
  { label: "Reported", time: "12 Sep · 10:12 AM" },
  { label: "Assigned", time: "12 Sep · 10:25 AM" },
  { label: "In Progress", time: "12 Sep · 11:00 AM" },
];

const commentsData = [
  {
    author: "Rahul Sharma (Student)",
    text: "Water leakage has increased since morning.",
    time: "15 mins ago",
  },
  {
    author: "Maintenance Team",
    text: "Plumber assigned and inspection ongoing.",
    time: "5 mins ago",
  },
];

const IssueDetail = () => {
  const [comment, setComment] = useState("");

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "28px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "8px",
              }}
            >
              <BackButton />
              Issue Details
            </h1>

            <p style={{ opacity: 0.8 }}>
              View complete issue information and resolution history.
            </p>
          </div>

          {/* ISSUE SUMMARY */}
          <div className="glass" style={{ padding: "24px", marginBottom: "24px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <Droplets size={26} />

              <div>
                <h3 style={{ marginBottom: "6px" }}>
                  Water leakage in Hostel A
                </h3>

                <p style={{ fontSize: "14px", opacity: 0.85 }}>
                  Location: Hostel A · Room 204
                </p>

                <p style={{ fontSize: "13px", opacity: 0.7, marginTop: "6px" }}>
                  Reported by Rahul Sharma · 12 Sep, 10:12 AM
                </p>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "10px",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "#f59e0b",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                >
                  High Priority
                </span>
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="glass" style={{ padding: "24px", marginBottom: "24px" }}>
            <h3 style={{ marginBottom: "14px" }}>Resolution Timeline</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {timeline.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  <span>{step.label}</span>
                  <span style={{ opacity: 0.7 }}>{step.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COMMENTS */}
          <div className="glass" style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "14px",
              }}
            >
              <MessageSquare size={18} />
              <h3>Remarks & Comments</h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginBottom: "18px",
              }}
            >
              {commentsData.map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "12px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  <strong style={{ fontSize: "13px" }}>{c.author}</strong>
                  <p style={{ fontSize: "14px", marginTop: "4px" }}>
                    {c.text}
                  </p>
                  <span style={{ fontSize: "12px", opacity: 0.6 }}>
                    {c.time}
                  </span>
                </div>
              ))}
            </div>

            {/* ADD COMMENT */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                placeholder="Add a remark or update..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "12px",
                }}
              />

              <button className="btn-primary" style={{ padding: "10px 14px" }}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IssueDetail;
