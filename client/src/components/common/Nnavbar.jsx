import { Link } from "react-router-dom";
import { LogOut, UserCircle } from "lucide-react";
import logoPrimary from "../../assets/images/logo-primary.svg";

const Navbar = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        background: "rgba(15, 23, 42, 0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link
          to="/student/dashboard"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#f8fafc",
          }}
        >
          <img
            src={logoPrimary}
            alt="ResolveX"
            style={{ height: "36px" }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.3px",
            }}
          >
            ResolveX
          </span>
        </Link>

        {/* Right Actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {/* My Account */}
          <Link
            to="/student/account"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#cbd5f5",
              textDecoration: "none",
            }}
            title="My Account"
          >
            <UserCircle size={22} />
          </Link>

          {/* Logout */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              border: "none",
              color: "#cbd5f5",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
