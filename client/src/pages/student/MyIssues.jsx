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
import api from "../../services/api";

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
  reported: "#64748b",
  assigned: "#38bdf8",
  "in-progress": "#f59e0b",
  resolved: "#22c55e",
  closed: "#94a3b8",
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
  const [issues, setIssues] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilters, setStatusFilters] = useState([]);
  const [visibilityFilters, setVisibilityFilters] = useState([]);

  const filterRef = useRef(null);

  useEffect(() => {
    const fetchMyIssues = async () => {
      try {
        const res = await api.get("/issues/my");
        setIssues(res.data);
      } catch (err) {
        console.error("Failed to fetch my issues");
      }
    };

    fetchMyIssues();
  }, []);

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
                      {v}
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
                  key={issue._id}
                  to={`/student/issues/${issue._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="glass" style={{ padding: "16px 18px" }}>
                    <div style={{ display: "flex", gap: "16px" }}>
                      <Icon
                        size={18}
                        color={categoryColors[issue.category]}
                      />

                      <div style={{ flex: 1 }}>
                        <strong>{issue.category}</strong>
                        <p>{issue.description}</p>
                        <small>
                          {new Date(issue.createdAt).toLocaleDateString()}
                        </small>
                      </div>

                      <div style={{ textAlign: "right" }}>
                        <span
                          style={{
                            background: priorityColors[issue.priority],
                            padding: "4px 10px",
                            borderRadius: "999px",
                            color: "#fff",
                            fontSize: "12px",
                          }}
                        >
                          {issue.priority}
                        </span>

                        <div
                          style={{
                            marginTop: "6px",
                            background: statusColors[issue.status],
                            padding: "4px 10px",
                            borderRadius: "999px",
                            color: "#fff",
                            fontSize: "12px",
                          }}
                        >
                          {issue.status}
                        </div>

                        <div style={{ marginTop: "6px" }}>
                          {issue.visibility === "public" ? (
                            <Eye size={14} />
                          ) : (
                            <EyeOff size={14} />
                          )}
                        </div>
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

export default MyIssues;
