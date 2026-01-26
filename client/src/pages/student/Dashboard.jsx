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
      {/* Global Navbar (Logo + App Name) */}
      <Navbar />

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Page Header */}
          <div style={{ marginBottom: "32px" }}>
            <h1>Student Dashboard</h1>
            <p style={{ marginTop: "6px" }}>
              Track reported issues, view announcements, and take action.
            </p>
          </div>

          {/* Quick Actions */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "36px",
            }}
          >
            {/* Report Issue */}
            <div className="glass">
              <PlusCircle size={28} />
              <h3 style={{ marginTop: "12px" }}>Report an Issue</h3>
              <p style={{ marginTop: "6px" }}>
                Quickly report a new infrastructure issue.
              </p>
              <Link
                to="/student/report"
                className="btn-primary"
                style={{ marginTop: "16px", display: "inline-block" }}
              >
                Report Issue
              </Link>
            </div>

            {/* My Issues */}
            <div className="glass">
              <ClipboardList size={28} />
              <h3 style={{ marginTop: "12px" }}>My Issues</h3>
              <p style={{ marginTop: "6px" }}>
                View status updates on issues you’ve reported.
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
              <Megaphone size={28} />
              <h3 style={{ marginTop: "12px" }}>Announcements</h3>
              <p style={{ marginTop: "6px" }}>
                Important notices from campus management.
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

          {/* Overview Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Issue Summary */}
            <div className="glass">
              <h3>Issue Overview</h3>

              <ul style={{ marginTop: "14px", lineHeight: "1.8" }}>
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

              <p style={{ marginTop: "12px" }}>
                Water maintenance scheduled tomorrow in Hostel B.
              </p>

              <p
                style={{
                  marginTop: "8px",
                  fontSize: "14px",
                  opacity: 0.8,
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