import {
  Droplets,
  Zap,
  Wifi,
  Armchair,
  Wrench,
  AlertCircle,
  AlertTriangle,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

const categoryIcon = {
  Plumbing: Droplets,
  Electrical: Zap,
  Internet: Wifi,
  Furniture: Armchair,
  Maintenance: Wrench,
  Other: AlertCircle,
};

const priorityColor = {
  Low: "#22c55e",
  Medium: "#3b82f6",
  High: "#f59e0b",
  Emergency: "#ef4444",
};

const issues = [
  {
    id: 1,
    title: "Water leakage in Hostel A",
    category: "Plumbing",
    priority: "High",
    location: "Hostel A · Room 204",
    student: "Rahul Sharma",
    status: "In Progress",
    time: "15 mins ago",
  },
  {
    id: 2,
    title: "Power outage in Block C",
    category: "Electrical",
    priority: "Emergency",
    location: "Block C · Floor 1",
    student: "Ankit Verma",
    status: "Reported",
    time: "32 mins ago",
  },
  {
    id: 3,
    title: "WiFi slow in Library",
    category: "Internet",
    priority: "Medium",
    location: "Central Library",
    student: "Neha Gupta",
    status: "Assigned",
    time: "1 hour ago",
  },
];

const ManageIssues = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "32px" }}>
            <h1 style={{ marginBottom: "6px" }}>Manage Issues</h1>
            <p style={{ opacity: 0.85 }}>
              Review, prioritize, and take action on reported campus issues.
            </p>
          </div>

          {/* ISSUE LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {issues.map((issue) => {
              const Icon = categoryIcon[issue.category];

              return (
                <div
                  key={issue.id}
                  className="glass"
                  style={{
                    padding: "18px 20px",
                    border:
                      issue.priority === "Emergency"
                        ? "1px solid rgba(239,68,68,0.45)"
                        : "1px solid rgba(255,255,255,0.15)",
                    background:
                      issue.priority === "Emergency"
                        ? "rgba(239,68,68,0.12)"
                        : "rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    {/* LEFT */}
                    <div style={{ display: "flex", gap: "14px" }}>
                      <Icon size={22} />

                      <div>
                        <strong style={{ fontSize: "15px" }}>
                          {issue.title}
                        </strong>

                        <p
                          style={{
                            fontSize: "13px",
                            opacity: 0.8,
                            marginTop: "2px",
                          }}
                        >
                          {issue.location}
                        </p>

                        <p
                          style={{
                            fontSize: "12px",
                            opacity: 0.65,
                            marginTop: "4px",
                          }}
                        >
                          Reported by {issue.student} · {issue.time}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                      }}
                    >
                      {/* PRIORITY */}
                      <span
                        style={{
                          padding: "6px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          background: priorityColor[issue.priority],
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        {issue.priority === "Emergency" && (
                          <AlertTriangle size={14} />
                        )}
                        {issue.priority}
                      </span>

                      {/* STATUS */}
                      <select
                        defaultValue={issue.status}
                        style={{
                          padding: "8px 10px",
                          borderRadius: "10px",
                          fontSize: "13px",
                        }}
                      >
                        <option>Reported</option>
                        <option>Assigned</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                        <option>Closed</option>
                      </select>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageIssues;
