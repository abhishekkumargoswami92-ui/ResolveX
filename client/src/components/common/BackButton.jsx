import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      style={{
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        borderRadius: "14px",
        color: "#e5e7eb",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      {/* 🔑 OPTICAL ALIGNMENT (REAL-WORLD FIX) */}
      <ArrowLeft
        size={20}
        style={{
          transform: "translateY(3px)",
        }}
      />
    </button>
  );
};

export default BackButton;
