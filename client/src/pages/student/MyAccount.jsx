import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";
import { Pencil } from "lucide-react";

const field = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const valueRow = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const valueText = {
  fontSize: "15px",
  opacity: 0.9,
};

const inputStyle = {
  height: "42px",
  fontSize: "15px",
  borderRadius: "8px",
  width: "100%",
  maxWidth: "360px",
};

const editIconStyle = {
  cursor: "pointer",
  opacity: 0.65,
};

const MyAccount = () => {
  const [edit, setEdit] = useState({
    email: false,
    phone: false,
    emergency: false,
    hostel: false,
    room: false,
    blood: false,
  });

  const toggle = (k) => setEdit((p) => ({ ...p, [k]: !p[k] }));

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
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
              My Account
            </h1>

            <p style={{ opacity: 0.8, marginLeft: "42px" }}>
              Manage your account details and campus information.
            </p>
          </div>

          {/* PROFILE */}
          <div className="glass" style={{ padding: "32px", marginBottom: "24px" }}>
            <h3 style={{ marginBottom: "18px" }}>Profile Information</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {/* Name (non-editable) */}
              <div style={field}>
                <label className="label">Full name</label>
                <span style={valueText}>Rahul Sharma</span>
              </div>

              {/* Email */}
              <div style={field}>
                <label className="label">Email address</label>
                <div style={valueRow}>
                  {edit.email ? (
                    <input
                      defaultValue="rahul@example.com"
                      style={inputStyle}
                    />
                  ) : (
                    <span style={valueText}>rahul@example.com</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("email")}
                  />
                </div>
                <span style={{ fontSize: "12px", opacity: 0.65 }}>
                  Changing this will affect future logins.
                </span>
              </div>

              {/* Phone */}
              <div style={field}>
                <label className="label">Phone number</label>
                <div style={valueRow}>
                  {edit.phone ? (
                    <input
                      defaultValue="+91 98765 43210"
                      style={inputStyle}
                    />
                  ) : (
                    <span style={valueText}>+91 98765 43210</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("phone")}
                  />
                </div>
              </div>

              {/* Emergency */}
              <div style={field}>
                <label className="label">Emergency contact (optional)</label>
                <div style={valueRow}>
                  {edit.emergency ? (
                    <input
                      placeholder="+91 XXXXX XXXXX"
                      style={inputStyle}
                    />
                  ) : (
                    <span style={{ ...valueText, opacity: 0.6 }}>
                      Not provided
                    </span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("emergency")}
                  />
                </div>
              </div>

              {/* Blood Group */}
              <div style={field}>
                <label className="label">Blood group</label>
                <div style={valueRow}>
                  {edit.blood ? (
                    <input defaultValue="B+" style={inputStyle} />
                  ) : (
                    <span style={valueText}>B+</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("blood")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CAMPUS */}
          <div className="glass" style={{ padding: "32px", marginBottom: "24px" }}>
            <h3 style={{ marginBottom: "18px" }}>Campus Details</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={field}>
                <label className="label">Hostel / Block</label>
                <div style={valueRow}>
                  {edit.hostel ? (
                    <input defaultValue="Hostel A" style={inputStyle} />
                  ) : (
                    <span style={valueText}>Hostel A</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("hostel")}
                  />
                </div>
              </div>

              <div style={field}>
                <label className="label">Room number</label>
                <div style={valueRow}>
                  {edit.room ? (
                    <input defaultValue="214" style={inputStyle} />
                  ) : (
                    <span style={valueText}>214</span>
                  )}
                  <Pencil
                    size={16}
                    style={editIconStyle}
                    onClick={() => toggle("room")}
                  />
                </div>
                <span style={{ fontSize: "12px", opacity: 0.65 }}>
                  Update this if your room changes after reallocation.
                </span>
              </div>
            </div>
          </div>

          {/* SECURITY */}
          <div className="glass" style={{ padding: "32px" }}>
            <h3 style={{ marginBottom: "18px" }}>Account Security</h3>

          <button type="button" className="gsi-material-button">
          <div className="gsi-material-button-content-wrapper">
            <div className="gsi-material-button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                style={{ display: "block" }}
              >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
            <span className="gsi-material-button-contents">
              Link your Google Account
            </span>
          </div>
        </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
