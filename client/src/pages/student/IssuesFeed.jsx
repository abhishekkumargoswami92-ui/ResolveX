import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";

import {
  Droplets,
  Zap,
  Wifi,
  Armchair,
  Wrench,
  AlertCircle,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";


const [issues, setIssues] = useState([]);
useEffect(() => {
  const fetchIssues = async () => {
    try {
      const res = await api.get("/issues/public");
      setIssues(res.data);
    } catch (err) {
      console.error("Failed to fetch public issues");
    }
  };

  fetchIssues();
}, []);



/* ---------------- CONFIG ---------------- */

const categoryIcon = {
  Plumbing: Droplets,
  Electrical: Zap,
  Internet: Wifi,
  Furniture: Armchair,
  Maintenance: Wrench,
  Other: AlertCircle,
};

const categoryColor = {
  Plumbing: "#38bdf8",
  Electrical: "#facc15",
  Internet: "#a78bfa",
  Furniture: "#2dd4bf",
  Maintenance: "#fb923c",
  Other: "#cbd5f5",
};

const priorityColor = {
  Low: "#22c55e",
  Medium: "#3b82f6",
  High: "#f59e0b",
  Emergency: "#ef4444",
};

const statusColor = {
  Reported: "#64748b",
  "In Progress": "#f59e0b",
  Resolved: "#22c55e",
  Closed: "#94a3b8",
};

/* ---------------- COMPONENT ---------------- */

const IssuesFeed = () => {
  const [openIssue, setOpenIssue] = useState(null);

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "10px",
              }}
            >
              <BackButton />
              Campus Issues
            </h1>

            <p
              style={{
                opacity: 0.8,
                maxWidth: "680px",
                marginLeft: "42px",
              }}
            >
              Publicly reported infrastructure issues across the campus.
            </p>
          </div>

          {/* FEED */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {issues.map((issue) => {
              const Icon = categoryIcon[issue.category];
              const isOpen = openIssue === issue.id;

              return (
                <div
                  key={issue.id}
                  className="glass"
                  style={{
                    padding: "20px",
                    background: "rgba(0,0,0,0.38)",
                  }}
                >
                  {/* ISSUE HEADER */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "12px" }}>
                      <Icon
                        size={20}
                        color={categoryColor[issue.category]}
                        style={{ marginTop: "4px" }}
                      />

                      <div>
                        <strong>{issue.category}</strong>
                        <p style={{ marginTop: "4px", opacity: 0.9 }}>
                          {issue.description}
                        </p>

                        <p style={{ fontSize: "12px", opacity: 0.7 }}>
                          Reported on {issue.date}
                        </p>

                        <p style={{ fontSize: "12px", opacity: 0.75 }}>
                          Reported by {issue.reporter}
                          {issue.room && (
                            <span style={{ opacity: 0.6 }}>
                              {" "}
                              · Room {issue.room}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* BADGES */}
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
                          background: priorityColor[issue.priority],
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
                          background: statusColor[issue.status],
                          color: "#fff",
                          padding: "6px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                        }}
                      >
                        {issue.status}
                      </span>
                    </div>
                  </div>

                  {/* COMMENTS TOGGLE */}
                  <div
                    style={{
                      marginTop: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      fontSize: "14px",
                      opacity: 0.85,
                    }}
                    onClick={() =>
                      setOpenIssue(isOpen ? null : issue.id)
                    }
                  >
                    <MessageSquare size={16} />
                    View comments ({issue.comments.length})
                    <ChevronDown size={16} />
                  </div>

                  {/* COMMENTS */}
                  {isOpen && (
                    <div
                      style={{
                        marginTop: "16px",
                        paddingTop: "14px",
                        borderTop: "1px solid rgba(255,255,255,0.15)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      {issue.comments.length === 0 ? (
                        <p style={{ opacity: 0.7 }}>
                          No comments yet. Add information if you’ve experienced
                          this issue.
                        </p>
                      ) : (
                        issue.comments.map((c) => (
                          <div key={c.id}>
                            <p style={{ fontSize: "14px" }}>
                              <strong>{c.name}</strong>
                              {c.room && (
                                <span style={{ opacity: 0.6 }}>
                                  {" "}
                                  · Room {c.room}
                                </span>
                              )}
                            </p>
                            <p style={{ opacity: 0.85 }}>{c.text}</p>
                            <p style={{ fontSize: "12px", opacity: 0.6 }}>
                              {c.time}
                            </p>
                          </div>
                        ))
                      )}

                      {/* ADD COMMENT */}
                      <div style={{ marginTop: "8px" }}>
                        <input
                          type="text"
                          placeholder="Add relevant information or context…"
                          style={{
                            width: "100%",
                            height: "46px",
                            borderRadius: "10px",
                            fontSize: "14px",
                            paddingLeft: "12px"
                          }}
                        />
                        <p style={{ fontSize: "12px", opacity: 0.6 }}>
                          Please keep comments factual and constructive.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default IssuesFeed;
