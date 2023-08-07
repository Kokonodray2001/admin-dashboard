import React from "react";
import "./Stats.css";
import StatCard from "./StatCard/StatCard";

export default function Stats() {
  return (
    <div className="stats-container">
      <StatCard
        color="rgb(174, 135, 251)"
        text="ORDER PENDING "
        amount="5"
        ic={
          <i
            class="fa-solid fa-clock-rotate-left fa-2xl"
            style={{ color: "#ffffff" }}
          ></i>
        }
      />
      <StatCard
        color="rgb(247, 103, 182)"
        text="ORDER CANCEL"
        amount="2"
        ic={
          <i
            class="fa-regular fa-circle-xmark fa-2xl"
            style={{ color: "#ffffff" }}
          ></i>
        }
      />
      <StatCard
        color="rgb(105, 205, 255)"
        text="ORDER PROCESSING"
        amount="6"
        ic={
          <i class="fa-solid fa-rotate fa-2xl" style={{ color: "#ffffff" }}></i>
        }
      />
      <StatCard
        color="rgb(105, 255, 203)"
        text="TOTAL INCOME"
        amount="£45000"
        ic={
          <i
            class="fa-solid fa-money-bill fa-2xl"
            style={{ color: "#ffffff" }}
          ></i>
        }
      />
    </div>
  );
}
