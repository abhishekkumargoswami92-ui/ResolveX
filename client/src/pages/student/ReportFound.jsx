import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import { Calendar, Clock } from "lucide-react";

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  height: "48px",
  paddingLeft: "50px",
  fontSize: "15px",
};

const iconStyle = {
  position: "absolute",
  top: "42px",
  left: "14px",
  opacity: 0.7,
};

const ReportFound = () => {
  return (
    <>
      <Navbar />

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
              Report Found Item
            </h1>

            <p style={{ opacity: 0.8, maxWidth: "640px" }}>
              Use this form to report an item you have found so it can be claimed
              by its rightful owner.
            </p>
          </div>

          {/* FORM */}
          <div className="glass" style={{ padding: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
              
              {/* ITEM NAME */}
              <div style={fieldStyle}>
                <label className="label">Item name</label>
                <input
                  type="text"
                  placeholder="Bottle, charger, watch"
                  style={{ height: "48px", fontSize: "15px" }}
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div style={fieldStyle}>
                <label className="label">Description</label>
                <textarea
                  rows="4"
                  placeholder="Describe the item and where you found it"
                  style={{ resize: "none", fontSize: "15px" }}
                  required
                />
              </div>

              {/* LOCATION */}
              <div style={fieldStyle}>
                <label className="label">Found location</label>
                <input
                  type="text"
                  placeholder="Library, study room, corridor"
                  style={{ height: "48px", fontSize: "15px" }}
                  required
                />
              </div>

              {/* DATE & TIME */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "220px 1fr 220px",
                  gap: "36px",
                }}
              >
                {/* DATE */}
                <div style={{ ...fieldStyle, position: "relative" }}>
                  <label className="label">Date found</label>
                  <Calendar size={20} style={iconStyle} />
                  <input type="date" style={inputStyle} required />
                </div>

                {/* spacer */}

                {/* TIME */}
                <div style={{ ...fieldStyle, position: "relative" }}>
                  <label className="label">
                    Time found <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <Clock size={20} style={iconStyle} />
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
              <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button
                  className="btn-primary"
                  style={{
                    minWidth: "260px",
                    fontSize: "17px",
                    padding: "14px 0",
                  }}
                >
                  Submit found report
                </button>
              </div>
            </div>
          </div>

          <p style={{ marginTop: "20px", fontSize: "13px", opacity: 0.7 }}>
            Any misuse of this feature may result in penalties.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportFound;
