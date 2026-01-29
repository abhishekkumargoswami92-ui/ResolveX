import {
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  MapPin,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import BackButton from "../../components/common/BackButton";

const Analytics = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
          {/* HEADER */}
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "8px",
              }}
            >
              <BackButton />
              Analytics Overview
            </h1>

            <p style={{ opacity: 0.8 }}>
              Monitor issue trends, resolution performance, and campus health.
            </p>
          </div>

          {/* KPI CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "36px",
            }}
          >
            <div
              className="glass"
              style={{
                borderLeft: "4px solid #38bdf8",
                background:
                  "linear-gradient(180deg, rgba(56,189,248,0.18), rgba(255,255,255,0.04))",
              }}
            >
              <TrendingUp size={22} color="#38bdf8" />
              <h3 style={{ marginTop: "10px" }}>Total Issues</h3>
              <p style={{ fontSize: "28px", fontWeight: 600 }}>128</p>
              <p style={{ fontSize: "13px", opacity: 0.75 }}>
                Last 30 days
              </p>
            </div>

            <div
              className="glass"
              style={{
                borderLeft: "4px solid #22c55e",
                background:
                  "linear-gradient(180deg, rgba(34,197,94,0.18), rgba(255,255,255,0.04))",
              }}
            >
              <CheckCircle2 size={22} color="#22c55e" />
              <h3 style={{ marginTop: "10px" }}>Resolved</h3>
              <p style={{ fontSize: "28px", fontWeight: 600 }}>96</p>
              <p style={{ fontSize: "13px", opacity: 0.75 }}>
                75% resolution rate
              </p>
            </div>

            <div
              className="glass"
              style={{
                borderLeft: "4px solid #3b82f6",
                background:
                  "linear-gradient(180deg, rgba(59,130,246,0.18), rgba(255,255,255,0.04))",
              }}
            >
              <Clock size={22} color="#3b82f6" />
              <h3 style={{ marginTop: "10px" }}>Avg. Resolution Time</h3>
              <p style={{ fontSize: "28px", fontWeight: 600 }}>18 hrs</p>
              <p style={{ fontSize: "13px", opacity: 0.75 }}>
                From report to closure
              </p>
            </div>

            <div
              className="glass"
              style={{
                borderLeft: "4px solid #ef4444",
                background:
                  "linear-gradient(180deg, rgba(239,68,68,0.18), rgba(255,255,255,0.04))",
              }}
            >
              <AlertTriangle size={22} color="#ef4444" />
              <h3 style={{ marginTop: "10px" }}>Emergency Issues</h3>
              <p style={{ fontSize: "28px", fontWeight: 600, color: "#ef4444" }}>
                6
              </p>
              <p style={{ fontSize: "13px", opacity: 0.75 }}>
                Requires immediate attention
              </p>
            </div>
          </div>

          {/* INSIGHTS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {/* CATEGORY BREAKDOWN */}
            <div className="glass">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <BarChart3 size={20} color="#38bdf8" />
                <h3 style={{ margin: 0 }}>Top Issue Categories</h3>
              </div>

              <ul style={{ lineHeight: "1.9", opacity: 0.9 }}>
                <li>Plumbing — 34%</li>
                <li>Electrical — 26%</li>
                <li>Internet — 18%</li>
                <li>Furniture — 12%</li>
                <li>Others — 10%</li>
              </ul>
            </div>

            {/* LOCATION HEAT */}
            <div className="glass">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <MapPin size={20} color="#f59e0b" />
                <h3 style={{ margin: 0 }}>Issue Density by Area</h3>
              </div>

              <ul style={{ lineHeight: "1.9", opacity: 0.9 }}>
                <li>Hostel A — High</li>
                <li>Hostel B — Medium</li>
                <li>Hostel C — Medium</li>
                <li>Academic Block — Low</li>
              </ul>
            </div>

            {/* PERFORMANCE */}
            <div
              className="glass"
              style={{
                background:
                  "linear-gradient(180deg, rgba(34,211,238,0.12), rgba(255,255,255,0.04))",
              }}
            >
              <h3>Operational Performance</h3>

              <p style={{ marginTop: "12px", opacity: 0.85 }}>
                • 82% of issues are assigned within 2 hours  
                <br />
                • Emergency issues are addressed within 30 minutes  
                <br />
                • Recurring issues reduced by 18% this month
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;
