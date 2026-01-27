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
        /* Button reset */
        background: "rgba(255,255,255,0.14)",
        border: "1px solid rgba(255,255,255,0.25)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",

        /* Size + spacing */
        padding: "6px",
        margin: 0,

        /* Alignment magic */
        display: "inline-flex",
        alignItems: "center",

        /* Visual tone */
        color: "rgba(255,255,255,0.85)",
        cursor: "pointer",

        /* IMPORTANT */
        verticalAlign: "baseline",
      }}
    >
      <ArrowLeft size={16} strokeWidth={2} />
    </button>
  );
};

export default BackButton;
