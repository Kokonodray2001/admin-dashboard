import React, { useState, useEffect } from "react";
import "./LineChart.css";
import axios from "axios";
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
// const label = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
export default function LineChart() {
  const [labels, setLabels] = useState([]);
  const [visits, setVisits] = useState([]);
  const [sales, setSales] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const shopId = "64d26ced56d9dd620fa75b1b";
        const response = await axios.get(
          "http://localhost:3002/shopStat/getStats/" + shopId
        );

        //visits
        const visitsArr = response.data.data.map((el) => el.visits);
        setVisits(visitsArr);

        //sales
        const salesArr = response.data.data.map((el) => el.sales);
        setSales(salesArr);

        //month label
        const monthArr = response.data.data.map((el) => el.month);
        setLabels(monthArr);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(visits);
    console.log(sales);
    console.log(labels);
  }, [visits, sales, labels]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Visit",
        data: visits,
        fill: "start",
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.5)",
        //  cubicInterpolationMode: "monotone",
      },
      {
        label: "Sales",
        data: sales,
        fill: "start",
        borderColor: "rgba(175,19,192,1)",
        backgroundColor: "rgba(175,19,192,0.5)",
        //cubicInterpolationMode: "monotone",
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
