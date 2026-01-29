import { PlusCircle, Megaphone, Archive } from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

/* Mock data */
const announcements = [
  {
    id: 1,
    title: "Water Maintenance Schedule",
    body: "Water supply will be interrupted tomorrow from 9 AM to 1 PM.",
    date: "12 Sep 2025",
    status: "Active",
  },
  {
    id: 2,
    title: "Internet Downtime",
    body: "Internet services will be unavailable tonight after 12 AM.",
    date: "10 Sep 2025",
    status: "Archived",
  },
];

const AdminAnnouncements = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "28px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "8px",
              }}
            >
              <BackButton />
              Announcements
            </h1>

            <p style={{ opacity: 0.8 }}>
              Create and manage announcements visible to students.
            </p>
          </div>

          {/* CREATE ANNOUNCEMENT */}
          <div
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 24px",
              marginBottom: "32px",
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(255,255,255,0.05))",
              border: "1px solid rgba(34,211,238,0.35)",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "4px" }}>New Announcement</h3>
              <p style={{ fontSize: "14px", opacity: 0.85 }}>
                Notify students about important updates.
              </p>
            </div>

            <button
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                fontSize: "14px",
              }}
            >
              <PlusCircle size={16} />
              Create Announcement
            </button>
          </div>

          {/* ANNOUNCEMENT LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {announcements.map((a) => {
              const isActive = a.status === "Active";

              return (
                <div
                  key={a.id}
                  className="glass"
                  style={{
                    padding: "20px",
                    borderLeft: `4px solid ${
                      isActive ? "#22c55e" : "#64748b"
                    }`,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    {/* LEFT */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "6px",
                        }}
                      >
                        <Megaphone
                          size={18}
                          color={isActive ? "#22c55e" : "#cbd5f5"}
                        />
                        <h3 style={{ margin: 0 }}>{a.title}</h3>
                      </div>

                      <p style={{ fontSize: "14px", opacity: 0.9 }}>
                        {a.body}
                      </p>

                      <p
                        style={{
                          fontSize: "12px",
                          opacity: 0.65,
                          marginTop: "6px",
                        }}
                      >
                        Posted on {a.date}
                      </p>
                    </div>

                    {/* RIGHT */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "10px",
                        minWidth: "140px",
                      }}
                    >
                      <span
                        style={{
                          padding: "6px 14px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 600,
                          background: isActive
                            ? "#22c55e"
                            : "rgba(255,255,255,0.25)",
                          color: isActive ? "#022c22" : "#e5e7eb",
                        }}
                      >
                        {a.status}
                      </span>

                      {isActive && (
                        <button
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "13px",
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            borderRadius: "8px",
                            padding: "6px 12px",
                            cursor: "pointer",
                            color: "#e5e7eb",
                          }}
                        >
                          <Archive size={14} />
                          Archive
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminAnnouncements;
