import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler
);
export default function LineChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Visit",
        data: [65, 59, 45, 81, 56, 85, 90],
        fill: "start",
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.5)",
        cubicInterpolationMode: "monotone",
      },
      {
        label: "Sales",
        data: [5, 5, 10, 1, 36, 2, 30],
        fill: "start",
        borderColor: "rgba(175,19,192,1)",
        backgroundColor: "rgba(175,19,192,0.5)",
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Sales",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top", // You can change the position of the legend as needed
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 style={{ color: "rgb(231, 70, 1)" }}>Sales Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
}
