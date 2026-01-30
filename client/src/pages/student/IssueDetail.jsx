import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  Clock,
  CheckCircle2,
  MessageSquare,
  Eye,
  EyeOff,
  Droplets,
  Zap,
  Wifi,
  Armchair,
  Wrench,
  AlertCircle,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

/* SAME SYSTEM AS MyIssues */
const categoryColors = {
  Plumbing: "#38bdf8",
  Electrical: "#facc15",
  Internet: "#a78bfa",
  Furniture: "#2dd4bf",
  Maintenance: "#fb923c",
  Other: "#cbd5f5",
};

const iconMap = {
  Plumbing: Droplets,
  Electrical: Zap,
  Internet: Wifi,
  Furniture: Armchair,
  Maintenance: Wrench,
  Other: AlertCircle,
};

/* MOCK DATA */
const ISSUES = {
  "1": {
    id: "1",
    title: "Water leakage in bathroom",
    category: "Plumbing",
    description:
      "There is continuous water leakage from the tap in the bathroom, causing water accumulation.",
    priority: "High",
    visibility: "public",
    status: "In Progress",
    reportedOn: "12 Sep 2025, 10:45 AM",
    location: "Hostel A · Room 204",
    remarks:
      "Plumber assigned. Replacement part expected by tomorrow.",
    timeline: [
      { label: "Reported", time: "12 Sep 2025, 10:45 AM", done: true },
      { label: "Assigned", time: "12 Sep 2025, 01:10 PM", done: true },
      { label: "In Progress", time: "13 Sep 2025, 09:30 AM", done: true },
      { label: "Resolved", time: null, done: false },
      { label: "Closed", time: null, done: false },
    ],
    comments: [
      {
        id: 1,
        text: "Facing the same issue in the adjacent room.",
        time: "12 Sep 2025, 02:20 PM",
      },
    ],
  },
};

const IssueDetail = () => {
  const { id } = useParams();
  const issue = ISSUES[id];

  if (!issue) {
    return (
      <>
        <Navbar />
        <section className="section">
          <div className="container">
            <p>Issue not found.</p>
          </div>
        </section>
      </>
    );
  }

  const Icon = iconMap[issue.category] || AlertCircle;
  const accent = categoryColors[issue.category];

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "24px",
            }}
          >
            <BackButton />
            <h1 style={{ margin: 0 }}>Issue Details</h1>
          </div>

          {/* ONE CONTINUOUS CARD */}
          <div
            className="glass"
            style={{
              padding: "22px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
            }}
          >
            {/* MAIN SUMMARY ROW */}
            <div style={{ display: "flex", gap: "16px" }}>
              <div
                style={{
                  background: `${accent}22`,
                  borderRadius: "12px",
                  padding: "10px",
                  height: "fit-content",
                }}
              >
                <Icon size={22} color={accent} />
              </div>

              <div style={{ flex: 1 }}>
                <h2 style={{ margin: "0 0 6px" }}>{issue.title}</h2>
                <p style={{ opacity: 0.9 }}>{issue.description}</p>

                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    opacity: 0.8,
                  }}
                >
                  <div>
                    <strong>Location:</strong> {issue.location}
                  </div>
                  <div>
                    <strong>Reported:</strong> {issue.reportedOn}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "8px",
                }}
              >
                <span className="badge">{issue.priority}</span>
                <span className="badge secondary">{issue.status}</span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    opacity: 0.85,
                  }}
                >
                  {issue.visibility === "public" ? (
                    <>
                      <Eye size={14} /> Public
                    </>
                  ) : (
                    <>
                      <EyeOff size={14} /> Private
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* DIVIDER */}
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.12)",
                margin: "22px 0",
              }}
            />

            {/* TIMELINE — SAME CARD STYLE */}
            {issue.timeline.map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "12px",
                  opacity: step.done ? 1 : 0.45,
                }}
              >
                {step.done ? (
                  <CheckCircle2 size={18} color="#22c55e" />
                ) : (
                  <Clock size={18} />
                )}

                <div>
                  <strong>{step.label}</strong>
                  {step.time && (
                    <div style={{ fontSize: "13px", opacity: 0.7 }}>
                      {step.time}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* DIVIDER */}
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.12)",
                margin: "22px 0",
              }}
            />

            {/* REMARKS */}
            <div>
              <strong>Management Remarks</strong>
              <p style={{ marginTop: "6px", opacity: 0.9 }}>
                {issue.remarks || "No remarks added yet."}
              </p>
            </div>

            {/* COMMENTS */}
            {issue.visibility === "public" && (
              <>
                <div
                  style={{
                    height: "1px",
                    background: "rgba(255,255,255,0.12)",
                    margin: "22px 0",
                  }}
                />

                <div>
                  <strong
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <MessageSquare size={16} />
                    Community Comments
                  </strong>

                  {issue.comments.length === 0 ? (
                    <p style={{ opacity: 0.6, marginTop: "8px" }}>
                      No comments yet.
                    </p>
                  ) : (
                    issue.comments.map((c) => (
                      <div
                        key={c.id}
                        style={{
                          marginTop: "12px",
                          paddingTop: "10px",
                          borderTop:
                            "1px solid rgba(255,255,255,0.12)",
                        }}
                      >
                        <p style={{ marginBottom: "4px" }}>{c.text}</p>
                        <small style={{ opacity: 0.6 }}>{c.time}</small>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default IssueDetail;
