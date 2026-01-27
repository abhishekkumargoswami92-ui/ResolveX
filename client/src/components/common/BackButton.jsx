import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      aria-label="Go back"
      style={{
        /* Glass styling */
        background: "rgba(255,255,255,0.14)",
        border: "1px solid rgba(255,255,255,0.25)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",

        /* Size */
        padding: "6px",

        /* Reset */
        margin: 0,
        cursor: "pointer",

        /* Alignment */
        display: "inline-flex",
        alignItems: "center",
        verticalAlign: "baseline",

        /* Optical correction */
        transform: "translateY(4px)",

        /* Visual tone */
        color: "rgba(255,255,255,0.85)",
      }}
    >
      <ArrowLeft size={16} strokeWidth={2} />
    </button>
  );
};

export default BackButton;
