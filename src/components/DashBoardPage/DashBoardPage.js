import React from "react";
import RecentOrders from "../RecentOrders/RecentOrders";
import Stats from "../Stats/Stats";
import Header from "../Header/Header";
import Linechart from "../LineChart/LineChart";
export default function DashBoardPage() {
  return (
    <div>
      <Header />
      <Stats />
      <Linechart />
      <RecentOrders />
    </div>
  );
}
