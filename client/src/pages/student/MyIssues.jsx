import { useState } from "react";
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
  Filter,
} from "lucide-react";

import Navbar from "../../components/common/Navbar.jsx";
import BackButton from "../../components/common/BackButton.jsx";

/* MOCK DATA */
const MOCK_ISSUES = [
  {
    _id: "1",
    category: "Plumbing",
    description: "Water leakage near washroom",
    priority: "High",
    status: "in-progress",
    visibility: "public",
    createdAt: Date.now(),
  },
];

const iconMap = {
  Plumbing: Droplets,
  Electrical: Zap,
  Internet: Wifi,
  Furniture: Armchair,
  Maintenance: Wrench,
  Other: AlertCircle,
};

const MyIssues = () => {
  const [issues] = useState(MOCK_ISSUES);

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1 style={{ display: "flex", gap: "14px" }}>
            <BackButton />
            My Issues
          </h1>

          <p style={{ marginBottom: "28px" }}>
            Track the status of issues you have reported.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {issues.map((issue) => {
              const Icon = iconMap[issue.category] || AlertCircle;

              return (
                <Link
                  key={issue._id}
                  to={`/student/issues/${issue._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="glass" style={{ padding: "16px 18px" }}>
                    <div style={{ display: "flex", gap: "16px" }}>
                      <Icon size={18} />

                      <div style={{ flex: 1 }}>
                        <strong>{issue.category}</strong>
                        <p>{issue.description}</p>
                        <small>
                          {new Date(issue.createdAt).toLocaleDateString()}
                        </small>
                      </div>

                      <div style={{ textAlign: "right" }}>
                        <span className="badge">{issue.priority}</span>
                        <div className="badge secondary">{issue.status}</div>
                        {issue.visibility === "public" ? (
                          <Eye size={14} />
                        ) : (
                          <EyeOff size={14} />
                        )}
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
