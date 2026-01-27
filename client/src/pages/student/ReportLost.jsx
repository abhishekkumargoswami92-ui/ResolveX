import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import SubmitPopup from "../../components/common/SubmitPopup";

const field = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const input = {
  height: "52px",
  fontSize: "16px",
};

const iconWrap = {
  position: "relative",
};

const icon = {
  position: "absolute",
  left: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  opacity: 0.7,
  pointerEvents: "none",
};

const paddedInput = {
  ...input,
  paddingLeft: "44px",
};

const ReportLost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <SubmitPopup open={open} onClose={() => setOpen(false)} variant="lost" />

      <section className="section">
        <div className="container" style={{ maxWidth: "860px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "36px" }}>
            <h1 style={{ display: "flex", gap: "14px", marginBottom: "12px" }}>
              <BackButton />
              Report Lost Item
            </h1>
            <p style={{ opacity: 0.8 }}>
              Provide accurate details to help others identify your lost item.
            </p>
          </div>

          {/* FORM */}
          <div className="glass" style={{ padding: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
              
              <div style={field}>
                <label className="label">Item name</label>
                <input style={input} placeholder="Wallet, ID card, earphones" />
              </div>

              <div style={field}>
                <label className="label">Description</label>
                <textarea rows="4" style={{ fontSize: "16px" }} />
              </div>

              <div style={field}>
                <label className="label">Last seen location</label>
                <input style={input} placeholder="Hostel A, Room 204" />
              </div>

              {/* DATE & TIME */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "240px 1fr 240px",
                  gap: "48px",
                }}
              >
                {/* DATE */}
                <div style={field}>
                  <label className="label">Date lost</label>
                  <div style={iconWrap}>
                    <Calendar size={20} style={icon} />
                    <input type="date" style={paddedInput} />
                  </div>
                </div>

                <div />

                {/* TIME */}
                <div style={field}>
                  <label className="label">
                    Time lost <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <div style={iconWrap}>
                    <Clock size={20} style={icon} />
                    <input type="time" style={paddedInput} />
                  </div>
                </div>
              </div>

              <div style={field}>
                <label className="label">Upload image (optional)</label>
                <input type="file" />
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn-primary"
                  style={{ fontSize: "18px", padding: "14px 36px" }}
                  onClick={() => setOpen(true)}
                >
                  Submit lost report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportLost;
