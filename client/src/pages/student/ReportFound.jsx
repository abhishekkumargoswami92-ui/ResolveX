import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputStyle = {
  height: "44px",
};

const ReportFound = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "10px",
              }}
            >
              <BackButton />
              Report Found Item
            </h1>

            <p style={{ opacity: 0.8, maxWidth: "620px" }}>
              Provide details of an item you have found so it can be returned to its owner.
            </p>
          </div>

          {/* FORM */}
          <div className="glass" style={{ padding: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              
              {/* ITEM NAME */}
              <div style={fieldStyle}>
                <label className="label">Item name</label>
                <input
                  type="text"
                  placeholder="Bottle, charger, watch"
                  style={inputStyle}
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div style={fieldStyle}>
                <label className="label">Description</label>
                <textarea
                  rows="4"
                  placeholder="Describe the item and where you found it"
                  style={{ resize: "none" }}
                  required
                />
              </div>

              {/* LOCATION */}
              <div style={fieldStyle}>
                <label className="label">Found location</label>
                <input
                  type="text"
                  placeholder="Library, study room, corridor"
                  style={inputStyle}
                  required
                />
              </div>

              {/* DATE & TIME */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                }}
              >
                <div style={fieldStyle}>
                  <label className="label">Date found</label>
                  <input type="date" style={inputStyle} required />
                </div>

                <div style={fieldStyle}>
                  <label className="label">
                    Time found <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <input type="time" style={inputStyle} />
                </div>
              </div>

              {/* IMAGE */}
              <div style={fieldStyle}>
                <label className="label">Upload image (optional)</label>
                <input type="file" accept="image/*" />
                <span style={{ fontSize: "12px", opacity: 0.6 }}>
                  Supported formats: JPG, PNG
                </span>
              </div>

              {/* SUBMIT */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
                <button className="btn-primary" style={{ minWidth: "220px" }}>
                  Submit found report
                </button>
              </div>
            </div>
          </div>

          <p style={{ marginTop: "18px", fontSize: "13px", opacity: 0.7 }}>
            Any misuse of this feature may result in penalties.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportFound;
