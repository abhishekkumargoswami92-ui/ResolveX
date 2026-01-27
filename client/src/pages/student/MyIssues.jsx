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

const categoryColors = {
  Plumbing: "#38bdf8",
  Electrical: "#facc15",
  Internet: "#a78bfa",
  Furniture: "#2dd4bf",
  Maintenance: "#fb923c",
  Other: "#cbd5f5",
};

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

const priorityColors = {
  Low: "#22c55e",
  Medium: "#3b82f6",
  High: "#f59e0b",
  Emergency: "#ef4444",
};

const statusColors = {
  Reported: "#64748b",
  Assigned: "#38bdf8",
  "In Progress": "#f59e0b",
  Resolved: "#22c55e",
  Closed: "#94a3b8",
};

const iconMap = {
  Plumbing: Droplets,
  Electrical: Zap,
  Internet: Wifi,
  Furniture: Armchair,
  Maintenance: Wrench,
  Other: AlertCircle,
};

const MyIssues = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1>My Issues</h1>
          <p style={{ margin: "6px 0 28px" }}>
            Track the status of issues you have reported.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {issues.map((issue) => {
              const Icon = iconMap[issue.category];
              return (
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
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    {/* LEFT */}
                    <div style={{ display: "flex", gap: "14px", flex: 1 }}>
                      <Icon
                        size={18}
                        color={categoryColors[issue.category]}
                      />
                      <div>
                        <h3>{issue.category}</h3>
                        <p style={{ fontSize: "14px", opacity: 0.9 }}>
                          {issue.description}
                        </p>
                        <p style={{ fontSize: "12px", opacity: 0.7 }}>
                          Reported on {issue.date}
                        </p>

                        {issue.visibility === "public" && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              fontSize: "13px",
                              color: "#cbd5f5",
                              marginTop: "6px",
                            }}
                          >
                            <MessageSquare size={14} />
                            {issue.comments} comment
                            {issue.comments !== 1 ? "s" : ""}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "8px",
                        minWidth: "170px",
                      }}
                    >
                      <span
                        style={{
                          background: priorityColors[issue.priority],
                          color: "#fff",
                          padding: "6px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        {issue.priority}
                      </span>

                      <span
                        style={{
                          background: statusColors[issue.status],
                          color: "#fff",
                          padding: "6px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                        }}
                      >
                        {issue.status}
                      </span>

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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyIssues;
