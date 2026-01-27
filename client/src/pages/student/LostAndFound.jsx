import { useState } from "react";
import {
  Search,
  Package,
  PlusCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

/* Mock data (API later) */
const items = [
  {
    id: 1,
    type: "Lost",
    name: "Black Wallet",
    description: "Leather wallet with ID cards inside.",
    location: "Hostel A · Common Room",
    date: "12 Sep 2025",
    status: "Open",
  },
  {
    id: 2,
    type: "Found",
    name: "Bluetooth Earbuds",
    description: "Found near the library entrance.",
    location: "Central Library",
    date: "11 Sep 2025",
    status: "Claim Requested",
  },
  {
    id: 3,
    type: "Found",
    name: "Water Bottle",
    description: "Blue steel bottle left in corridor.",
    location: "Hostel B · Floor 2",
    date: "08 Sep 2025",
    status: "Claim Approved",
  },
];

const LostAndFound = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) => item.type === filter);

  const pillStyle = (active) => ({
    padding: "10px 16px",
    borderRadius: "999px",
    fontSize: "14px",
    cursor: "pointer",
    background: active
      ? "rgba(34,211,238,0.45)"
      : "rgba(255,255,255,0.15)",
    border: active
      ? "1px solid rgba(34,211,238,0.7)"
      : "1px solid rgba(255,255,255,0.25)",
  });

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "22px",
            }}
          >
            <div>
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  margin: 0,
                  marginBottom: "6px",
                }}
              >
                <BackButton />
                Lost & Found
              </h1>
              <p style={{ opacity: 0.8 }}>
                Report lost items or claim items found on campus.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="btn-primary" style={{ padding: "8px 12px" }}>
                <Search size={14} />
                Report Lost
              </button>

              <button className="btn-primary" style={{ padding: "8px 12px" }}>
                <PlusCircle size={14} />
                Report Found
              </button>
            </div>
          </div>

          {/* FILTER PILLS */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "26px" }}>
            {["All", "Lost", "Found"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={pillStyle(filter === f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* ITEMS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass"
                style={{
                  padding: "16px",
                  background: "rgba(0,0,0,0.38)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                  }}
                >
                  {/* IMAGE */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Package size={28} />
                  </div>

                  {/* INFO */}
                  <div style={{ flex: 1 }}>
                    <strong>{item.name}</strong>
                    <p style={{ fontSize: "14px", opacity: 0.9 }}>
                      {item.description}
                    </p>
                    <p style={{ fontSize: "12px", opacity: 0.75 }}>
                      {item.location} · {item.date}
                    </p>
                  </div>

                  {/* STATUS / ACTION */}
                  <div>
                    {item.status === "Open" && (
                      <button
                        style={{
                          padding: "8px 14px",
                          borderRadius: "8px",
                          background: "#22c55e",
                          color: "#022c22",
                          fontWeight: 600,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Request Claim
                      </button>
                    )}

                    {item.status === "Claim Requested" && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          opacity: 0.9,
                        }}
                      >
                        <Clock size={16} />
                        Claim Requested
                      </span>
                    )}

                    {item.status === "Claim Approved" && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontWeight: 500,
                        }}
                      >
                        <CheckCircle2 size={16} />
                        Claim Approved
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DISCLAIMER */}
          <p
            style={{
              marginTop: "26px",
              fontSize: "13px",
              opacity: 0.75,
            }}
          >
            Any wrongful claim or false information may lead to disciplinary
            action as per campus policies.
          </p>
        </div>
      </section>
    </>
  );
};

export default LostAndFound;
