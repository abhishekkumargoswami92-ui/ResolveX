import { useState } from "react";
import { Megaphone } from "lucide-react";

import Navbar from "../../components/common/Navbar.jsx";
import BackButton from "../../components/common/BackButton.jsx";

const field = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputStyle = {
  height: "48px",
  fontSize: "15px",
  borderRadius: "10px",
  padding: "0 14px",
};

const AddAnnouncement = () => {
  const [form, setForm] = useState({
    title: "",
    message: "",
    audience: "All",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Announcement created:", form);
    alert("Announcement published (mock)");
  };

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "36px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "8px",
              }}
            >
              <BackButton />
              Create Announcement
            </h1>

            <p style={{ opacity: 0.85, maxWidth: "560px" }}>
              Publish an official notice for students or specific campus areas.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <div
              className="glass"
              style={{
                padding: "40px",
                borderLeft: "4px solid #22d3ee",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "26px",
                }}
              >
                {/* TITLE */}
                <div style={field}>
                  <label className="label">Announcement title</label>
                  <input
                    type="text"
                    required
                    placeholder="Water maintenance notice"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    style={inputStyle}
                  />
                </div>

                {/* MESSAGE */}
                <div style={field}>
                  <label className="label">Announcement message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide clear details about the announcement..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{
                      fontSize: "15px",
                      borderRadius: "10px",
                      resize: "none",
                      padding: "14px",
                    }}
                  />
                </div>

                {/* AUDIENCE */}
                <div style={field}>
                  <label className="label">Target audience</label>
                  <div style={{ display: "flex", gap: "12px" }}>
                    {["All", "Students"].map((a) => {
                      const active = form.audience === a;
                      return (
                        <button
                          key={a}
                          type="button"
                          onClick={() =>
                            setForm({ ...form, audience: a })
                          }
                          style={{
                            padding: "10px 20px",
                            borderRadius: "999px",
                            fontSize: "14px",
                            cursor: "pointer",
                            background: active
                              ? "linear-gradient(135deg, #22d3ee, #38bdf8)"
                              : "rgba(255,255,255,0.12)",
                            color: active ? "#022c22" : "#e5e7eb",
                            border: active
                              ? "2px solid #22d3ee"
                              : "1px solid rgba(255,255,255,0.25)",
                          }}
                        >
                          {a}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* LOCATION */}
                <div style={field}>
                  <label className="label">
                    Target location{" "}
                    <span style={{ opacity: 0.6 }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Hostel A, Hostel B, Entire Campus"
                    value={form.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                    style={inputStyle}
                  />
                </div>

                {/* SUBMIT */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      minWidth: "260px",
                      fontSize: "17px",
                      padding: "14px 0",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <Megaphone size={18} />
                    Publish Announcement
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddAnnouncement;
