import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const ReportFound = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          {/* HEADER */}
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "6px",
            }}
          >
            <BackButton />
            Report Found Item
          </h1>

          <p style={{ opacity: 0.8, marginBottom: "28px" }}>
            Report an item you have found so the rightful owner can claim it.
          </p>

          {/* FORM CARD */}
          <div className="glass" style={{ padding: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              
              {/* ITEM NAME */}
              <div>
                <label className="label">Item Name</label>
                <input
                  type="text"
                  placeholder="e.g. Water Bottle, Charger, Watch"
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="label">Description</label>
                <textarea
                  rows="4"
                  placeholder="Describe the item and where it was found"
                  required
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="label">Found Location</label>
                <input
                  type="text"
                  placeholder="e.g. Library, Study Room, Corridor"
                  required
                />
              </div>

              {/* DATE */}
              <div>
                <label className="label">Date Found</label>
                <input type="date" required />
              </div>

              {/* IMAGE */}
              <div>
                <label className="label">Upload Image (optional)</label>
                <input type="file" accept="image/*" />
              </div>

              {/* ACTION */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                }}
              >
                <button className="btn-primary">
                  Submit Found Report
                </button>
              </div>
            </div>
          </div>

          {/* NOTE */}
          <p style={{ marginTop: "16px", fontSize: "13px", opacity: 0.7 }}>
            Found items must be reported honestly. Any misuse may lead to
            penalties.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportFound;
