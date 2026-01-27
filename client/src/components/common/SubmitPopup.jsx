const SubmitPopup = ({ open, onClose, variant }) => {
  if (!open) return null;

  const config = {
    lost: {
      title: "Lost Item Reported",
      message:
        "Your lost item has been reported successfully. Other students can now help you recover it.",
      accent: "linear-gradient(135deg, #38bdf8, #6366f1)",
    },
    found: {
      title: "Found Item Submitted",
      message:
        "Thank you for reporting a found item. The rightful owner will be notified.",
      accent: "linear-gradient(135deg, #22c55e, #16a34a)",
    },
  };

  const data = config[variant];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <div
        className="glass"
        style={{
          width: "420px",
          padding: "28px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            height: "6px",
            borderRadius: "999px",
            marginBottom: "18px",
            background: data.accent,
          }}
        />

        <h2 style={{ marginBottom: "10px" }}>{data.title}</h2>
        <p style={{ opacity: 0.85, marginBottom: "22px" }}>
          {data.message}
        </p>

        <button className="btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SubmitPopup;
