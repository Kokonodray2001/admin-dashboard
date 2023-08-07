import React from "react";
import RecentOrders from "../RecentOrders/RecentOrders";
import Stats from "../Stats/Stats";
import Header from "../Header/Header";
export default function DashBoardPage() {
  return (
    <div>
      <Header />
      <Stats />
      <RecentOrders />
    </div>
  );
}
