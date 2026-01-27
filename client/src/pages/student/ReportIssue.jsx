import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        border: "none",
        color: "#cbd5f5",
        cursor: "pointer",
        padding: 0,
      }}
      aria-label="Go back"
    >
      <ArrowLeft size={18} />
    </button>
  );
};

export default BackButton;
