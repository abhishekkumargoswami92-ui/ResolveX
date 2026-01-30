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

const IssueDetail = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const issueRes = await api.get(`/issues/${id}`);
        setIssue(issueRes.data);

        if (issueRes.data.visibility === "public") {
          const commentsRes = await api.get(`/issues/${id}/comments`);
          setComments(commentsRes.data);
        }
      } catch (err) {
        console.error("Failed to fetch issue");
      }
    };

    fetchIssue();
  }, [id]);

  if (!issue) {
    return (
      <>
        <Navbar />
        <section className="section">
          <div className="container">
            <p>Loading issue…</p>
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
          <div style={{ display: "flex", gap: "14px", marginBottom: "24px" }}>
            <BackButton />
            <h1>Issue Details</h1>
          </div>

          <div className="glass" style={{ padding: "22px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <Icon size={22} color={accent} />
              <div style={{ flex: 1 }}>
                <h2>{issue.category}</h2>
                <p>{issue.description}</p>
              </div>

              <div style={{ textAlign: "right" }}>
                <span className="badge">{issue.priority}</span>
                <span className="badge secondary">{issue.status}</span>
                {issue.visibility === "public" ? <Eye /> : <EyeOff />}
              </div>
            </div>

            <hr />

            {issue.statusHistory.map((step, idx) => (
              <div key={idx} style={{ display: "flex", gap: "12px" }}>
                {step.status === issue.status ? (
                  <CheckCircle2 color="#22c55e" />
                ) : (
                  <Clock />
                )}
                <div>
                  <strong>{step.status}</strong>
                  <div>
                    {new Date(step.timestamp).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}

            {issue.visibility === "public" && (
              <>
                <hr />
                <strong>
                  <MessageSquare size={16} /> Comments
                </strong>

                {comments.map((c) => (
                  <div key={c._id}>
                    <p>{c.text}</p>
                    <small>
                      {new Date(c.createdAt).toLocaleString()}
                    </small>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default IssueDetail;
