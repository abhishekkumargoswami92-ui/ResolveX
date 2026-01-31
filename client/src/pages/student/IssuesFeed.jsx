import { useState } from "react";
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

import Navbar from "../../components/common/Navbar.jsx";
import BackButton from "../../components/common/BackButton.jsx";

/* MOCK DATA */
const MOCK_ISSUES = [
  {
    id: 1,
    category: "Plumbing",
    description: "Water leakage near washroom.",
    date: "Today",
    reporter: "Student",
    room: "203",
    priority: "High",
    status: "In Progress",
    comments: [
      { id: 1, name: "Amit", room: "204", text: "Facing same issue", time: "2h ago" },
    ],
  },
];

const categoryIcon = {
  Plumbing: Droplets,
  Electrical: Zap,
  Internet: Wifi,
  Furniture: Armchair,
  Maintenance: Wrench,
  Other: AlertCircle,
};

const IssuesFeed = () => {
  const [openIssue, setOpenIssue] = useState(null);

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <h1 style={{ display: "flex", gap: "14px" }}>
            <BackButton />
            Campus Issues
          </h1>

          {MOCK_ISSUES.map((issue) => {
            const Icon = categoryIcon[issue.category];
            const isOpen = openIssue === issue.id;

            return (
              <div key={issue.id} className="glass" style={{ padding: "20px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <Icon size={20} />
                  <div>
                    <strong>{issue.category}</strong>
                    <p>{issue.description}</p>
                    <p style={{ fontSize: "12px" }}>
                      Reported by {issue.reporter} · Room {issue.room}
                    </p>
                  </div>
                </div>

                <div
                  style={{ marginTop: "14px", cursor: "pointer" }}
                  onClick={() =>
                    setOpenIssue(isOpen ? null : issue.id)
                  }
                >
                  <MessageSquare size={16} /> View comments ({issue.comments.length})
                  <ChevronDown size={16} />
                </div>

                {isOpen && (
                  <div style={{ marginTop: "14px" }}>
                    {issue.comments.map((c) => (
                      <div key={c.id}>
                        <strong>{c.name}</strong>
                        <p>{c.text}</p>
                        <small>{c.time}</small>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default IssuesFeed;
