import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import SubmitPopup from "../../components/common/SubmitPopup";

const field = { display: "flex", flexDirection: "column", gap: "10px" };

const inputWrap = {
  position: "relative",
};

const icon = {
  position: "absolute",
  left: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  opacity: 0.8,
};

const input = {
  height: "54px",
  fontSize: "16px",
  paddingLeft: "56px",
};

const ReportLost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <SubmitPopup open={open} onClose={() => setOpen(false)} variant="lost" />

      <section className="section">
        <div className="container" style={{ maxWidth: "880px" }}>
          <div style={{ marginBottom: "40px" }}>
            <h1 style={{ display: "flex", gap: "14px", marginBottom: "12px" }}>
              <BackButton />
              Report Lost Item
            </h1>
            <p style={{ opacity: 0.8 }}>
              Provide accurate details to help others identify your lost item.
            </p>
          </div>

          <div className="glass" style={{ padding: "44px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "38px" }}>
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

              {/* DATE / TIME */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "260px 1fr 260px",
                  gap: "64px",
                }}
              >
                <div style={field}>
                  <label className="label">Date lost</label>
                  <div style={inputWrap}>
                    <Calendar size={24} style={icon} />
                    <input type="text" placeholder="DD / MM / YYYY" style={input} />
                  </div>
                </div>

                <div />

                <div style={field}>
                  <label className="label">
                    Time lost <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <div style={inputWrap}>
                    <Clock size={24} style={icon} />
                    <input type="text" placeholder="HH : MM" style={input} />
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
