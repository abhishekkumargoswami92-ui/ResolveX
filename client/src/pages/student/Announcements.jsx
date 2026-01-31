import { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar.jsx";
import BackButton from "../../components/common/BackButton.jsx";
import { Megaphone, Calendar } from "lucide-react";

const MOCK_ANNOUNCEMENTS = [
  {
    _id: "1",
    title: "Water Maintenance",
    message: "Water supply will be unavailable tomorrow from 10AM–2PM.",
    createdAt: new Date().toISOString(),
    target: "All Students",
  },
  {
    _id: "2",
    title: "Hostel Inspection",
    message: "Routine inspection scheduled this Friday.",
    createdAt: new Date().toISOString(),
    target: "Hostel A",
  },
];

const StudentAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnnouncements(MOCK_ANNOUNCEMENTS);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1 style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <BackButton />
            Announcements
          </h1>

          <p style={{ marginBottom: "28px", opacity: 0.85 }}>
            Official notices and updates from campus management.
          </p>

          {loading ? (
            <div className="glass">
              <p style={{ opacity: 0.7 }}>Loading announcements…</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {announcements.map((a) => (
                <div key={a._id} className="glass" style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Megaphone size={18} color="#22d3ee" />
                    <h3 style={{ margin: 0 }}>{a.title}</h3>
                  </div>

                  <p style={{ margin: "6px 0" }}>{a.message}</p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "12px",
                      fontSize: "13px",
                      opacity: 0.75,
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Calendar size={14} />
                      {new Date(a.createdAt).toLocaleString()}
                    </span>
                    <span>{a.target}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default StudentAnnouncements;
