import { Link } from "react-router-dom";
import {
  Droplets,
  Zap,
  Wifi,
  Armchair,
  Wrench,
  AlertTriangle,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

/* Mock issues */
const issues = [
  {
    id: 1,
    category: "Plumbing",
    description: "Water leakage near washbasin in Room 204.",
    location: "Hostel A · Room 204",
    priority: "High",
    status: "In Progress",
    date: "12 Sep 2025",
  },
  {
    id: 2,
    category: "Electrical",
    description: "Corridor lights not functioning.",
    location: "Hostel B · Floor 1",
    priority: "Emergency",
    status: "Reported",
    date: "13 Sep 2025",
  },
  {
    id: 3,
    category: "Internet",
    description: "WiFi disconnects frequently at night.",
    location: "Hostel C",
    priority: "Medium",
    status: "Assigned",
    date: "10 Sep 2025",
  },
];

const categoryIcon = {
  Plumbing: Droplets,
  Electrical: Zap,
  Internet: Wifi,
  Furniture: Armchair,
  Maintenance: Wrench,
};

const priorityColor = {
  Low: "#22c55e",
  Medium: "#3b82f6",
  High: "#f59e0b",
  Emergency: "#ef4444",
};

const statusColor = {
  Reported: "#64748b",
  Assigned: "#38bdf8",
  "In Progress": "#f59e0b",
  Resolved: "#22c55e",
  Closed: "#94a3b8",
};

const ManageIssues = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
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
              Manage Issues
            </h1>

            <p style={{ opacity: 0.8 }}>
              Review, assign, and track all reported campus issues.
            </p>
          </div>

          {/* ISSUE LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {issues.map((issue) => {
              const Icon = categoryIcon[issue.category] || AlertTriangle;

              return (
                <Link
                  key={issue.id}
                  to={`/admin/manage-issues/${issue.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="glass"
                    style={{
                      padding: "20px",
                      borderLeft: `4px solid ${priorityColor[issue.priority]}`,
                      cursor: "pointer",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                      transition: "transform 0.15s ease, box-shadow 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "18px",
                      }}
                    >
                      {/* LEFT */}
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "6px",
                          }}
                        >
                          <Icon size={18} />
                          <strong style={{ fontSize: "15px" }}>
                            {issue.category}
                          </strong>

                          {issue.priority === "Emergency" && (
                            <span
                              style={{
                                background:
                                  "linear-gradient(135deg,#ef4444,#dc2626)",
                                color: "#fff",
                                padding: "4px 10px",
                                borderRadius: "999px",
                                fontSize: "11px",
                                fontWeight: 700,
                                letterSpacing: "0.3px",
                              }}
                            >
                              EMERGENCY
                            </span>
                          )}
                        </div>

                        <p style={{ fontSize: "14px", opacity: 0.92 }}>
                          {issue.description}
                        </p>

                        <p
                          style={{
                            fontSize: "13px",
                            opacity: 0.7,
                            marginTop: "6px",
                          }}
                        >
                          {issue.location} · Reported on {issue.date}
                        </p>
                      </div>

                      {/* RIGHT */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "10px",
                          minWidth: "160px",
                        }}
                      >
                        <span
                          style={{
                            background: priorityColor[issue.priority],
                            color: "#fff",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          {issue.priority}
                        </span>

                        <span
                          style={{
                            background: statusColor[issue.status],
                            color: "#fff",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "12px",
                          }}
                        >
                          {issue.status}
                        </span>

                        <span
                          style={{
                            fontSize: "13px",
                            opacity: 0.85,
                            marginTop: "6px",
                            fontWeight: 500,
                          }}
                        >
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageIssues;
