import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import SubmitPopup from "../../components/common/SubmitPopup";

const field = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputBase = {
  height: "52px",
  fontSize: "16px",
  borderRadius: "12px",
};

const ReportLost = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar />

      <SubmitPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        variant="lost"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "36px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "12px",
              }}
            >
              <BackButton />
              Report Lost Item
            </h1>

            <p
              style={{
                opacity: 0.8,
                maxWidth: "640px",
                marginLeft: "42px",
              }}
            >
              Use this form to report an item you have lost. Accurate details help
              others identify and recover it.
            </p>
          </div>

          {/* FORM */}
          <div className="glass" style={{ padding: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={field}>
                <label className="label">Item name</label>
                <input
                  type="text"
                  placeholder="  Wallet, ID card, earphones"
                  style={inputBase}
                  required
                />
              </div>

              <div style={field}>
                <label className="label">Description</label>
                <textarea
                  rows="4"
                  placeholder=" Color, brand, identifying marks, contents"
                  style={{
                    fontSize: "16px",
                    borderRadius: "12px",
                    resize: "none",
                    paddingTop: "4px",
                  }}
                  required
                />
              </div>

              <div style={field}>
                <label className="label">Last seen location</label>
                <input
                  type="text"
                  placeholder="  Hostel A, Room 204, common area"
                  style={inputBase}
                  required
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 200px",
                  gap: "48px",
                }}
              >
                <div style={field}>
                  <label className="label">Date lost</label>
                  <input
                    type="date"
                    style={{
                      ...inputBase,
                      width: "150px",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                    }}
                    required
                  />
                </div>

                <div style={field}>
                  <label className="label">
                    Time lost <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <input
                    type="time"
                    style={{
                      ...inputBase,
                      width: "150px",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                    }}
                  />
                </div>
              </div>

              <div style={field}>
                <label className="label">Upload image (optional)</label>
                <input type="file" accept="image/*" />
                <span style={{ fontSize: "12px", opacity: 0.6 }}>
                  Supported formats: JPG, PNG
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                <button
                  className="btn-primary"
                  style={{
                    minWidth: "260px",
                    fontSize: "18px",
                    padding: "14px 0",
                  }}
                  onClick={() => setShowPopup(true)}
                >
                  Submit lost report
                </button>
              </div>
            </div>
          </div>

          <p style={{ marginTop: "20px", fontSize: "13px", opacity: 0.7 }}>
            Submitting false or misleading information may lead to disciplinary
            action.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportLost;
