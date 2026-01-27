import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      style={{
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: "10px",
        color: "#e5e7eb",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <ArrowLeft size={18} />
    </button>
  );
};

export default BackButton;
