import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const ReportFound = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "40px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "8px",
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

          <div className="glass" style={{ padding: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "42px" }}>
              
              <div>
                <h3 style={{ marginBottom: "20px" }}>Item Details</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  <div>
                    <label className="label">Item Name</label>
                    <input
                      type="text"
                      placeholder="Bottle, Charger, Watch"
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
              </div>

              <div>
                <h3 style={{ marginBottom: "20px" }}>Found Location</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  <div>
                    <label className="label">Location</label>
                    <input
                      type="text"
                      placeholder="Library · Study Room · Corridor"
                      required
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "24px",
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
                </div>
              </div>

              <div>
                <h3 style={{ marginBottom: "20px" }}>Supporting Evidence</h3>

                <div>
                  <label className="label">
                    Upload Image <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <input type="file" accept="image/*" />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <button className="btn-primary">
                  Submit Found Report
                </button>
              </div>
            </div>
          </div>

          <p style={{ marginTop: "18px", fontSize: "13px", opacity: 0.7 }}>
            Found items must be reported honestly. Any misuse may lead to
            penalties.
          </p>
        </div>
      </section>
    </>
  );
};

export default ReportFound;
