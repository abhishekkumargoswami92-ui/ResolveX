import { useState, useRef, useEffect } from "react";
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
  Filter,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

/* COLORS — UNCHANGED */
const categoryColors = {
  Plumbing: "#38bdf8",
  Electrical: "#facc15",
  Internet: "#a78bfa",
  Furniture: "#2dd4bf",
  Maintenance: "#fb923c",
  Other: "#cbd5f5",
};

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

/* MOCK ISSUES — UNCHANGED */
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

const MyIssues = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilters, setStatusFilters] = useState([]);
  const [visibilityFilters, setVisibilityFilters] = useState([]);

  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredIssues = issues.filter((issue) => {
    const statusOk =
      statusFilters.length === 0 || statusFilters.includes(issue.status);
    const visibilityOk =
      visibilityFilters.length === 0 ||
      visibilityFilters.includes(issue.visibility);
    return statusOk && visibilityOk;
  });

  const toggleFilter = (value, list, setter) => {
    setter(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    );
  };

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                margin: 0,
              }}
            >
              <BackButton />
              My Issues
            </h1>

            {/* FILTER */}
            <div style={{ position: "relative" }} ref={filterRef}>
              <button
                onClick={() => setShowFilters((v) => !v)}
                style={{
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "10px",
                  padding: "8px",
                  cursor: "pointer",
                  color: "#e5e7eb",
                }}
              >
                <Filter size={18} />
              </button>

              {showFilters && (
                <div
                  className="glass"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "48px",
                    minWidth: "220px",
                    padding: "14px",
                    zIndex: 10,
                  }}
                >
                  <strong>Status</strong>
                  {Object.keys(statusColors).map((status) => (
                    <label
                      key={status}
                      style={{
                        display: "flex",
                        gap: "8px",
                        fontSize: "14px",
                        marginTop: "6px",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={statusFilters.includes(status)}
                        onChange={() =>
                          toggleFilter(status, statusFilters, setStatusFilters)
                        }
                      />
                      {status}
                    </label>
                  ))}

                  <hr style={{ margin: "12px 0", opacity: 0.25 }} />

                  <strong>Visibility</strong>
                  {["public", "private"].map((v) => (
                    <label
                      key={v}
                      style={{
                        display: "flex",
                        gap: "8px",
                        fontSize: "14px",
                        marginTop: "6px",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={visibilityFilters.includes(v)}
                        onChange={() =>
                          toggleFilter(
                            v,
                            visibilityFilters,
                            setVisibilityFilters
                          )
                        }
                      />
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          <p style={{ marginBottom: "28px" }}>
            Track the status of issues you have reported.
          </p>

          {/* LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {filteredIssues.map((issue) => {
              const Icon = iconMap[issue.category];

              return (
                <Link
                  key={issue.id}
                  to={`/student/issues/${issue.id}`}
                  style={{ textDecoration: "none", color: "inherit" }} // ✅ FIX
                >
                  <div
                    className="glass"
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "16px 18px",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                    }}
                  >
                    <div
                      style={{
                        background: `${categoryColors[issue.category]}22`,
                        borderRadius: "10px",
                        padding: "8px",
                        height: "fit-content",
                      }}
                    >
                      <Icon
                        size={18}
                        color={categoryColors[issue.category]}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: "16px" }}>
                        {issue.category}
                      </div>

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

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "8px",
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
