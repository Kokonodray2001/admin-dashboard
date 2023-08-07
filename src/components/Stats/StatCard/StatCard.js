import React from "react";
import "./StatCard.css";
export default function StatCard({ color, text, amount, ic }) {
  return (
    <div className="stat-card" style={{ backgroundColor: `${color}` }}>
      <div className="stat-text">
        <span className="card-name">{text}</span>
        <span className="card-amount">{amount}</span>
      </div>
      <div className="stat-icon">{ic}</div>
    </div>
  );
}
