import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const ReportFound = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          {/* HEADER */}
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <BackButton />
            Report Found Item
          </h1>

          <p style={{ opacity: 0.8, marginBottom: "36px" }}>
            Report an item you have found so the rightful owner can claim it.
          </p>

          {/* FORM */}
          <div className="glass" style={{ padding: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              
              {/* ITEM DETAILS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label className="label">Item Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Bottle, Charger, Watch"
                    required
                  />
                </div>

                <div>
                  <label className="label">Description</label>
                  <textarea
                    rows="4"
                    placeholder="Describe the item and where it was found"
                    required
                  />
                </div>
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

              {/* DATE & TIME */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div>
                  <label className="label">Date Found</label>
                  <input type="date" required />
                </div>

                <div>
                  <label className="label">
                    Time Found <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <input type="time" />
                </div>
              </div>

              {/* IMAGE */}
              <div>
                <label className="label">
                  Upload Image <span style={{ opacity: 0.6 }}>(optional)</span>
                </label>
                <input type="file" accept="image/*" />
              </div>

              {/* ACTION */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "10px",
                }}
              >
                <button className="btn-primary">
                  Submit Found Report
                </button>
              </div>
            </div>
          </div>

          {/* NOTE */}
          <p style={{ marginTop: "20px", fontSize: "13px", opacity: 0.7 }}>
            Found items must be reported honestly. Any misuse may lead to
            penalties.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportFound;
