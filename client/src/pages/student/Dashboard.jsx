import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ClipboardList,
  Megaphone,
  PlusCircle,
  Search,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";

const StudentDashboard = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "36px" }}>
            <h1 style={{ marginBottom: "8px" }}>Student Dashboard</h1>
            <p
              style={{
                maxWidth: "520px",
                opacity: 0.85,
              }}
            >
              Track issues, stay informed, and take action across the campus.
            </p>
          </div>

          {/* PRIMARY ACTION — COMPACT */}
          <div
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              padding: "18px 22px",
              marginBottom: "40px",

              /* subtle 3D depth */
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <div>
              <h2 style={{ marginBottom: "4px", fontSize: "18px" }}>
                Report an Issue
              </h2>
              <p style={{ opacity: 0.85, fontSize: "14px" }}>
                Submit an infrastructure issue for resolution.
              </p>
            </div>

            <Link
              to="/student/report"
              className="btn-primary"
              style={{
                padding: "10px 16px",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <PlusCircle size={16} />
              Report Issue
            </Link>
          </div>

          {/* SECONDARY ACTIONS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {/* My Issues */}
            <div
              className="glass"
              style={{
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <ClipboardList size={26} />
              <h3 style={{ marginTop: "12px" }}>My Issues</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Track the progress of issues you have reported.
              </p>
              <Link
                to="/student/issues"
                className="btn-secondary"
                style={{ marginTop: "14px", display: "inline-block" }}
              >
                View My Issues
              </Link>
            </div>

            {/* Announcements */}
            <div
              className="glass"
              style={{
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <Megaphone size={26} />
              <h3 style={{ marginTop: "12px" }}>Announcements</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Official notices from campus management.
              </p>
              <Link
                to="/student/announcements"
                className="btn-secondary"
                style={{ marginTop: "14px", display: "inline-block" }}
              >
                View Announcements
              </Link>
            </div>

            {/* Lost & Found */}
            <div
              className="glass"
              style={{
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <Search size={26} />
              <h3 style={{ marginTop: "12px" }}>Lost & Found</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Report lost items or claim items found on campus.
              </p>
              <Link
                to="/student/lost-found"
                className="btn-secondary"
                style={{ marginTop: "14px", display: "inline-block" }}
              >
                Open Lost & Found
              </Link>
            </div>
          </div>

          {/* OVERVIEW */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Issue Overview */}
            <div
              className="glass"
              style={{
                boxShadow:
                  "0 6px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <h3>Issue Overview</h3>
              <ul style={{ marginTop: "14px", lineHeight: "1.8", opacity: 0.9 }}>
                <li>
                  <strong>2</strong> issues currently in progress
                </li>
                <li>
                  <strong>1</strong> issue awaiting assignment
                </li>
                <li>
                  <strong>5</strong> issues resolved
                </li>
              </ul>
            </div>

            {/* Alerts */}
            <div
              className="glass"
              style={{
                boxShadow:
                  "0 6px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <AlertTriangle size={22} />
                <h3>Recent Alerts</h3>
              </div>

              <p style={{ marginTop: "12px", opacity: 0.9 }}>
                Water maintenance scheduled tomorrow in Hostel B.
              </p>

              <p
                style={{
                  marginTop: "8px",
                  fontSize: "14px",
                  opacity: 0.75,
                }}
              >
                Posted by Management · 3 hours ago
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
