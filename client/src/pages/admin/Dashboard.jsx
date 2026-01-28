import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ClipboardList,
  BarChart3,
  Megaphone,
  Clock,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "36px" }}>
            <h1 style={{ marginBottom: "8px" }}>Management Dashboard</h1>
            <p style={{ opacity: 0.85 }}>
              Monitor campus issues, announcements, and operational health.
            </p>
          </div>

          {/* ALERT STRIP */}
          <div
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 22px",
              marginBottom: "40px",
              borderLeft: "4px solid #ef4444",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <AlertTriangle size={22} color="#ef4444" />
              <div>
                <strong>Emergency Issues Pending</strong>
                <p style={{ fontSize: "14px", opacity: 0.85 }}>
                  2 emergency issues require immediate action.
                </p>
              </div>
            </div>

            <Link
              to="/admin/issues"
              className="btn-primary"
              style={{
                padding: "10px 16px",
                fontSize: "14px",
              }}
            >
              Review Now
            </Link>
          </div>

          {/* QUICK ACTIONS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div className="glass">
              <ClipboardList size={26} />
              <h3 style={{ marginTop: "12px" }}>Manage Issues</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Assign, update, and close reported issues.
              </p>
              <Link
                to="/admin/issues"
                style={{
                  marginTop: "14px",
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Open Issue Queue
              </Link>
            </div>

            <div className="glass">
              <Megaphone size={26} />
              <h3 style={{ marginTop: "12px" }}>Announcements</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Post and manage student announcements.
              </p>
              <Link
                to="/admin/announcements"
                style={{
                  marginTop: "14px",
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Manage Announcements
              </Link>
            </div>

            <div className="glass">
              <BarChart3 size={26} />
              <h3 style={{ marginTop: "12px" }}>Analytics</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                View trends, response times, and performance metrics.
              </p>
              <Link
                to="/admin/analytics"
                style={{
                  marginTop: "14px",
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                View Analytics
              </Link>
            </div>
          </div>

          {/* SUMMARY */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            <div className="glass">
              <h3>Issue Summary</h3>
              <ul style={{ marginTop: "14px", lineHeight: "1.9", opacity: 0.9 }}>
                <li>
                  <strong>14</strong> new issues today
                </li>
                <li>
                  <strong>6</strong> issues currently in progress
                </li>
                <li>
                  <strong>82%</strong> issues resolved within SLA
                </li>
              </ul>
            </div>

            <div className="glass">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Clock size={20} />
                <h3>Operational Notes</h3>
              </div>

              <p style={{ marginTop: "12px", opacity: 0.9 }}>
                Peak issue reporting observed between 7 PM – 10 PM.
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
