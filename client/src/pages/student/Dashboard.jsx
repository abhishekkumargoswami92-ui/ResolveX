import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ClipboardList,
  Megaphone,
  PlusCircle,
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
            <h1>Student Dashboard</h1>
            <p style={{ marginTop: "6px", opacity: 0.85 }}>
              Track issues, stay informed, and report problems across campus.
            </p>
          </div>

          {/* PRIMARY ACTION */}
          <div
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div>
              <h2 style={{ marginBottom: "6px" }}>Report an Issue</h2>
              <p style={{ opacity: 0.85 }}>
                Notice a problem? Submit an issue for quick resolution.
              </p>
            </div>

            <Link to="/student/report" className="btn-primary">
              <PlusCircle size={18} />
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
            <div className="glass">
              <ClipboardList size={26} />
              <h3 style={{ marginTop: "12px" }}>My Issues</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Track the status and progress of issues you’ve reported.
              </p>
              <Link
                to="/student/issues"
                className="btn-secondary"
                style={{ marginTop: "16px", display: "inline-block" }}
              >
                View My Issues
              </Link>
            </div>

            {/* Announcements */}
            <div className="glass">
              <Megaphone size={26} />
              <h3 style={{ marginTop: "12px" }}>Announcements</h3>
              <p style={{ marginTop: "6px", opacity: 0.85 }}>
                Official notices and updates from campus management.
              </p>
              <Link
                to="/student/announcements"
                className="btn-secondary"
                style={{ marginTop: "16px", display: "inline-block" }}
              >
                View Announcements
              </Link>
            </div>
          </div>

          {/* OVERVIEW SECTION */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Issue Overview */}
            <div className="glass">
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

            {/* Recent Alerts */}
            <div className="glass">
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
