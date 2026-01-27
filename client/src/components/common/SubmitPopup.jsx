const SubmitPopup = ({ open, onClose, variant }) => {
  if (!open) return null;

  const config = {
    lost: {
      title: "Lost Item Reported",
      message:
        "Your report has been published. If someone finds your item, you’ll be notified immediately.",
      gradient: "linear-gradient(135deg, #38bdf8, #6366f1)",
    },
    found: {
      title: "Found Item Submitted",
      message:
        "Great job! The owner can now claim this item after verification.",
      gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    },
  };

  const data = config[variant];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "460px",
          borderRadius: "20px",
          background: data.gradient,
          padding: "3px",
        }}
      >
        <div
          className="glass"
          style={{
            padding: "32px",
            textAlign: "center",
            background: "rgba(0,0,0,0.75)",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>{data.title}</h2>
          <p style={{ opacity: 0.9, fontSize: "15px", marginBottom: "24px" }}>
            {data.message}
          </p>

          <button
            className="btn-primary"
            style={{ fontSize: "16px", padding: "12px 28px" }}
            onClick={onClose}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPopup;
