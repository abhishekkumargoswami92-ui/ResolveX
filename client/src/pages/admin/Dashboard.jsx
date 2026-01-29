import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ClipboardList,
  BarChart3,
  Megaphone,
  Clock,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

const cardButton = {
  marginTop: "18px",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "10px 16px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.15)",
  border: "1px solid rgba(255,255,255,0.3)",
  textDecoration: "none",
  color: "#f8fafc",
  fontSize: "14px",
};

const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>

          {/* HEADER */}
          <div style={{ marginBottom: "42px" }}>
            <h1 style={{ marginBottom: "10px", fontSize: "28px" }}>
              Management Dashboard
            </h1>
            <p
  style={{
                opacity: 0.85,
                maxWidth: "700px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              Central control panel to monitor campus issues, announcements,
              and operational performance.
            </p>
          </div>

          {/* EMERGENCY STRIP */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "22px 26px",
              marginBottom: "48px",
              borderRadius: "18px",
              background:
                "linear-gradient(90deg, rgba(239,68,68,0.35), rgba(239,68,68,0.12))",
              border: "1px solid rgba(239,68,68,0.6)",
              boxShadow: "0 0 18px rgba(239,68,68,0.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <AlertTriangle size={28} color="#fecaca" />
              <div>
                <strong style={{ fontSize: "16px" }}>
                  Emergency Issues Pending
                </strong>
                <p style={{ fontSize: "14px", opacity: 0.9 }}>
                  2 emergency issues require immediate action.
                </p>
              </div>
            </div>

            <Link
              to="/admin/manage-issues"
              className="btn-primary"
              style={{ padding: "12px 20px", fontSize: "15px" }}
            >
              Review Now
            </Link>
          </div>

          {/* ACTION CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "26px",
              marginBottom: "52px",
            }}
          >
            <div
              className="glass"
              style={{
                borderTop: "4px solid #38bdf8",
                background:
                  "linear-gradient(180deg, rgba(56,189,248,0.15), rgba(255,255,255,0.04))",
              }}
            >
              <ClipboardList size={30} color="#38bdf8" />
              <h3 style={{ marginTop: "14px" }}>Manage Issues</h3>
              <p style={{ marginTop: "6px", opacity: 0.9 }}>
                Assign, update, and close reported campus issues.
              </p>
              <Link to="/admin/manage-issues" style={cardButton}>
                Open Issue Queue →
              </Link>
            </div>

            <div
              className="glass"
              style={{
                borderTop: "4px solid #a78bfa",
                background:
                  "linear-gradient(180deg, rgba(167,139,250,0.18), rgba(255,255,255,0.04))",
              }}
            >
              <Megaphone size={30} color="#c4b5fd" />
              <h3 style={{ marginTop: "14px" }}>Announcements</h3>
              <p style={{ marginTop: "6px", opacity: 0.9 }}>
                Publish and manage official campus announcements.
              </p>
              <Link to="/admin/announcements" style={cardButton}>
                Manage Announcements →
              </Link>
            </div>

            <div
              className="glass"
              style={{
                borderTop: "4px solid #22c55e",
                background:
                  "linear-gradient(180deg, rgba(34,197,94,0.18), rgba(255,255,255,0.04))",
              }}
            >
              <BarChart3 size={30} color="#86efac" />
              <h3 style={{ marginTop: "14px" }}>Analytics</h3>
              <p style={{ marginTop: "6px", opacity: 0.9 }}>
                Track trends, SLA performance, and response times.
              </p>
              <Link to="/admin/analytics" style={cardButton}>
                View Analytics →
              </Link>
            </div>
          </div>

          {/* SUMMARY */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "26px",
            }}
          >
            <div
              className="glass"
              style={{
                background:
                  "linear-gradient(180deg, rgba(59,130,246,0.18), rgba(255,255,255,0.04))",
              }}
            >
              <h3>Issue Summary</h3>
              <ul style={{ marginTop: "16px", lineHeight: "1.9", opacity: 0.95 }}>
                <li>
                  <strong style={{ color: "#38bdf8" }}>14</strong> new issues today
                </li>
                <li>
                  <strong style={{ color: "#f59e0b" }}>6</strong> issues in progress
                </li>
                <li>
                  <strong style={{ color: "#22c55e" }}>82%</strong> resolved within SLA
                </li>
              </ul>
            </div>

            <div
              className="glass"
              style={{
                background:
                  "linear-gradient(180deg, rgba(250,204,21,0.18), rgba(255,255,255,0.04))",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Clock size={22} color="#fde68a" />
                <h3>Operational Notes</h3>
              </div>

              <p style={{ marginTop: "14px", opacity: 0.95 }}>
                Peak issue reporting observed between <strong>7 PM – 10 PM</strong>.
                <br />
                Consider increasing night maintenance staff.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
