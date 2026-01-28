import {
  Package,
  CheckCircle2,
  XCircle,
  Clock,
  Hand,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

/* Mock data */
const items = [
  {
    id: 1,
    type: "Found",
    name: "Bluetooth Earbuds",
    location: "Central Library",
    date: "11 Sep 2025",
    status: "Claim Requested",
    claimant: "Rahul Sharma · Hostel A, Room 214",
  },
  {
    id: 2,
    type: "Lost",
    name: "Black Wallet",
    location: "Hostel B · Common Room",
    date: "12 Sep 2025",
    status: "Open",
  },
  {
    id: 3,
    type: "Found",
    name: "Laptop Charger",
    location: "Hostel C · Study Area",
    date: "14 Sep 2025",
    status: "Resolved",
  },
];

const statusBadge = {
  Open: { bg: "#38bdf8", text: "Open" },
  "Claim Requested": { bg: "#f59e0b", text: "Claim Requested" },
  Resolved: { bg: "#22c55e", text: "Resolved" },
};

const LostAndFoundAdmin = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
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
              Lost & Found Moderation
            </h1>

            <p style={{ opacity: 0.8 }}>
              Review reports, verify claims, and resolve lost & found cases.
            </p>
          </div>

          {/* LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="glass"
                style={{ padding: "20px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
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
                      <Package size={18} />
                      <strong>{item.name}</strong>

                      <span
                        style={{
                          padding: "4px 10px",
                          borderRadius: "999px",
                          fontSize: "11px",
                          background:
                            item.type === "Lost"
                              ? "rgba(239,68,68,0.25)"
                              : "rgba(34,211,238,0.25)",
                        }}
                      >
                        {item.type}
                      </span>
                    </div>

                    <p style={{ fontSize: "14px", opacity: 0.9 }}>
                      {item.location}
                    </p>

                    <p
                      style={{
                        fontSize: "12px",
                        opacity: 0.65,
                        marginTop: "4px",
                      }}
                    >
                      Reported on {item.date}
                    </p>

                    {item.claimant && (
                      <p
                        style={{
                          fontSize: "13px",
                          marginTop: "10px",
                          opacity: 0.85,
                        }}
                      >
                        <Hand size={14} style={{ marginRight: "6px" }} />
                        Claim by {item.claimant}
                      </p>
                    )}
                  </div>

                  {/* RIGHT */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "10px",
                      minWidth: "180px",
                    }}
                  >
                    <span
                      style={{
                        background: statusBadge[item.status].bg,
                        color: "#fff",
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontSize: "12px",
                      }}
                    >
                      {statusBadge[item.status].text}
                    </span>

                    {/* ACTIONS */}
                    {item.status === "Claim Requested" && (
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            background: "#22c55e",
                            color: "#022c22",
                            border: "none",
                            padding: "6px 12px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "13px",
                          }}
                        >
                          <CheckCircle2 size={14} />
                          Approve
                        </button>

                        <button
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            background: "rgba(239,68,68,0.25)",
                            color: "#fecaca",
                            border: "1px solid #ef4444",
                            padding: "6px 12px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "13px",
                          }}
                        >
                          <XCircle size={14} />
                          Reject
                        </button>
                      </div>
                    )}

                    {item.status === "Open" && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          opacity: 0.75,
                        }}
                      >
                        <Clock size={14} />
                        Awaiting action
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LostAndFoundAdmin;
