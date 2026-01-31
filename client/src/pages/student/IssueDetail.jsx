import { useParams } from "react-router-dom";
import { useState } from "react";

import {
  Clock,
  CheckCircle2,
  MessageSquare,
  Eye,
  Droplets,
  Zap,
  Wifi,
  Armchair,
  Wrench,
  AlertCircle,
} from "lucide-react";

import Navbar from "../../components/common/Navbar.jsx";
import BackButton from "../../components/common/BackButton.jsx";

/* MOCK ISSUE */
const MOCK_ISSUE = {
  id: "1",
  category: "Plumbing",
  description: "Water leakage near bathroom sink.",
  priority: "High",
  status: "In Progress",
  visibility: "public",
  statusHistory: [
    { status: "Reported", timestamp: Date.now() - 86400000 },
    { status: "In Progress", timestamp: Date.now() - 3600000 },
  ],
};

const MOCK_COMMENTS = [
  {
    _id: "c1",
    text: "Same issue in Room 203.",
    createdAt: Date.now() - 7200000,
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

const IssueDetail = () => {
  const { id } = useParams();
  const [issue] = useState(MOCK_ISSUE);
  const [comments, setComments] = useState(MOCK_COMMENTS);
  const [newComment, setNewComment] = useState("");

  const Icon = iconMap[issue.category] || AlertCircle;

  const addComment = () => {
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      { _id: Date.now(), text: newComment, createdAt: Date.now() },
    ]);
    setNewComment("");
  };

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ display: "flex", gap: "14px", marginBottom: "24px" }}>
            <BackButton />
            <h1>Issue Details</h1>
          </div>

          <div className="glass" style={{ padding: "22px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <Icon size={22} />
              <div style={{ flex: 1 }}>
                <h2>{issue.category}</h2>
                <p>{issue.description}</p>
              </div>

              <div style={{ textAlign: "right" }}>
                <span className="badge">{issue.priority}</span>
                <span className="badge secondary">{issue.status}</span>
                <Eye />
              </div>
            </div>

            <hr />

            {issue.statusHistory.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "12px" }}>
                {s.status === issue.status ? (
                  <CheckCircle2 color="#22c55e" />
                ) : (
                  <Clock />
                )}
                <div>
                  <strong>{s.status}</strong>
                  <div>{new Date(s.timestamp).toLocaleString()}</div>
                </div>
              </div>
            ))}

            <hr />
            <strong>
              <MessageSquare size={16} /> Comments
            </strong>

            {comments.map((c) => (
              <div key={c._id}>
                <p>{c.text}</p>
                <small>{new Date(c.createdAt).toLocaleString()}</small>
              </div>
            ))}

            <div style={{ marginTop: "14px" }}>
              <input
                type="text"
                placeholder="Add relevant information…"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                style={{
                  width: "100%",
                  height: "42px",
                  borderRadius: "10px",
                  paddingLeft: "12px",
                }}
              />
              <button
                onClick={addComment}
                className="btn-primary"
                style={{ marginTop: "8px" }}
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IssueDetail;
