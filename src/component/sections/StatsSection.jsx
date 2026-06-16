import { forwardRef } from "react";
import { STATS } from "../portfolioData";
import { StatCard } from "../portfolioComponents";

const StatsSection = forwardRef(function StatsSection({ run }, ref) {
  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(135deg,rgba(0,229,255,0.05),rgba(168,85,247,0.08),rgba(255,107,53,0.05))",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1rem" }}>
        {STATS.map((stat, index) => (
          <StatCard key={stat.label} {...stat} run={run} style={{ animationDelay: `${index * 0.15}s` }} />
        ))}
      </div>
    </div>
  );
});

export default StatsSection;
