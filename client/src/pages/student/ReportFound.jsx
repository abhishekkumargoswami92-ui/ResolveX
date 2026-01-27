import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import SubmitPopup from "../../components/common/SubmitPopup";

const field = { display: "flex", flexDirection: "column", gap: "10px" };
const input = { height: "52px", fontSize: "16px", paddingLeft: "56px" };
const icon = { position: "absolute", top: "44px", left: "18px", opacity: 0.75 };

const ReportFound = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <SubmitPopup open={open} onClose={() => setOpen(false)} variant="found" />

      <section className="section">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ marginBottom: "40px" }}>
            <h1 style={{ display: "flex", gap: "14px", marginBottom: "12px" }}>
              <BackButton />
              Report Found Item
            </h1>
            <p style={{ opacity: 0.8 }}>
              Submit details of an item you found so it can be returned.
            </p>
          </div>

          <div className="glass" style={{ padding: "42px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              <div style={field}>
                <label className="label">Item name</label>
                <input placeholder="Bottle, charger, watch" style={input} />
              </div>

              <div style={field}>
                <label className="label">Description</label>
                <textarea rows="4" style={{ fontSize: "16px" }} />
              </div>

              <div style={field}>
                <label className="label">Found location</label>
                <input placeholder="Library, study room" style={input} />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "240px 1fr 240px",
                  gap: "48px",
                }}
              >
                <div style={{ ...field, position: "relative" }}>
                  <label className="label">Date found</label>
                  <Calendar size={22} style={icon} />
                  <input type="date" style={input} />
                </div>

                <div />

                <div style={{ ...field, position: "relative" }}>
                  <label className="label">
                    Time found <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <Clock size={22} style={icon} />
                  <input type="time" style={input} />
                </div>
              </div>

              <div style={field}>
                <label className="label">Upload image (optional)</label>
                <input type="file" />
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn-primary"
                  style={{ fontSize: "17px", padding: "14px 32px" }}
                  onClick={() => setOpen(true)}
                >
                  Submit found report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportFound;
