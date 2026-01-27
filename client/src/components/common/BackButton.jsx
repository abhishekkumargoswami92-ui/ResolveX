import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "transparent",
        border: "none",
        color: "#cbd5f5",
        cursor: "pointer",
        fontSize: "14px",
        marginBottom: "18px",
      }}
    >
      <ArrowLeft size={16} />
      {label}
    </button>
  );
};

export default BackButton;
