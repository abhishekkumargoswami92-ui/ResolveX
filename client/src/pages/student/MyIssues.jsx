import { Link } from "react-router-dom";
import {
  Droplets,
  Zap,
  Wifi,
  Armchair,
  Wrench,
  AlertCircle,
  Eye,
  EyeOff,
  MessageSquare,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

const issues = [
  {
    id: 1,
    category: "Plumbing",
    description: "Water leakage from the washroom tap.",
    priority: "High",
    status: "In Progress",
    visibility: "public",
    comments: 3,
    date: "12 Sep 2025",
  },
  {
    id: 2,
    category: "Electrical",
    description: "Tube light not working in the corridor.",
    priority: "Medium",
    status: "Assigned",
    visibility: "public",
    comments: 1,
    date: "10 Sep 2025",
  },
  {
    id: 3,
    category: "Internet",
    description: "WiFi disconnects frequently during night hours.",
    priority: "Low",
    status: "Resolved",
    visibility: "private",
    comments: 0,
    date: "05 Sep 2025",
  },
];

const categoryIcons = {
  Plumbing: <Droplets size={18} color="#e5e7eb" />,
  Electrical: <Zap size={18} color="#e5e7eb" />,
  Internet: <Wifi size={18} color="#e5e7eb" />,
  Furniture: <Armchair size={18} color="#e5e7eb" />,
  Maintenance: <Wrench size={18} color="#e5e7eb" />,
  Other: <AlertCircle size={18} color="#e5e7eb" />,
};

const priorityStyles = {
  Low: "#22c55e",
  Medium: "#3b82f6",
  High: "#f59e0b",
  Emergency: "#ef4444",
};

const statusStyles = {
  Reported: "#64748b",
  Assigned: "#38bdf8",
  "In Progress": "#f59e0b",
  Resolved: "#22c55e",
  Closed: "#94a3b8",
};

const MyIssues = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* Header */}
          <div style={{ marginBottom: "28px" }}>
            <h1>My Issues</h1>
            <p style={{ marginTop: "6px" }}>
              Track the status of issues you have reported.
            </p>
          </div>

          {/* Issues List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {issues.map((issue) => (
              <Link
                key={issue.id}
                to={`/student/issues/${issue.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="glass"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  {/* Left */}
                  <div style={{ display: "flex", gap: "14px", flex: 1 }}>
                    <div>{categoryIcons[issue.category]}</div>

                    <div>
                      <h3 style={{ marginBottom: "4px" }}>
                        {issue.category}
                      </h3>

                      <p style={{ fontSize: "14px", opacity: 0.9 }}>
                        {issue.description}
                      </p>

                      <p
                        style={{
                          fontSize: "12px",
                          opacity: 0.7,
                          marginTop: "6px",
                        }}
                      >
                        Reported on {issue.date}
                      </p>

                      {/* Comments */}
                      {issue.visibility === "public" && (
                        <div
                          style={{
                            marginTop: "8px",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "13px",
                            color: "#cbd5f5",
                          }}
                        >
                          <MessageSquare size={14} />
                          {issue.comments} comment
                          {issue.comments !== 1 ? "s" : ""}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "8px",
                      minWidth: "170px",
                    }}
                  >
                    {/* Priority */}
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 600,
                        background: priorityStyles[issue.priority],
                        color: "#ffffff",
                      }}
                    >
                      {issue.priority}
                    </span>

                    {/* Status */}
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 500,
                        background: statusStyles[issue.status],
                        color: "#ffffff",
                      }}
                    >
                      {issue.status}
                    </span>

                    {/* Visibility */}
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        color: "#cbd5f5",
                      }}
                    >
                      {issue.visibility === "public" ? (
                        <Eye size={14} />
                      ) : (
                        <EyeOff size={14} />
                      )}
                      {issue.visibility === "public" ? "Public" : "Private"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyIssues;
