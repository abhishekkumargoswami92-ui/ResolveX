import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      style={{
        background: "none",
        border: "none",
        padding: 0,
        margin: 0,
        cursor: "pointer",
        fontSize: "1em",
        fontWeight: 500,
        lineHeight: "1",
        color: "inherit",
      }}
    >
      ←
    </button>
  );
};

export default BackButton;
