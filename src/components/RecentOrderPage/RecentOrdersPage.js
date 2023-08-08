import React from "react";
import "./RecentOrdersPage.css";
import Order from "../RecentOrders/Order/Order";
import { useNavigate } from "react-router-dom";
const OrderArr = [
  <Order
    orderID="af212f"
    paymentMethod="COD"
    orderDate="Sept 8th 10pm"
    deliveryDate="September 10th 2020"
    status="Pending"
    total="52222"
  />,
  <Order
    orderID="af212f"
    paymentMethod="COD"
    orderDate="Sept 8th 10pm"
    deliveryDate="September 10th 2020"
    status="Delivered"
    total="52222"
  />,
  <Order
    orderID="af212f"
    paymentMethod="COD"
    orderDate="Sept 8th 10pm"
    deliveryDate="September 10th 2020"
    status="Cancel"
    total="52222"
  />,
  <Order
    orderID="af212f"
    paymentMethod="COD"
    orderDate="Sept 8th 10pm"
    deliveryDate="September 10th 2020"
    status="delivered"
    total="52222"
  />,
];

export default function RecentOrders() {
  const navigate = useNavigate();
  return (
    <div className="recent-order-container">
      <div className="recent-order-header">
        <h1>Recent Orders</h1>
        <button
          className="btn btn-primary"
          fdprocessedid="09edqc"
          onClick={() => {
            navigate("/");
          }}
        >
          ⬅
        </button>
      </div>
      <div className="recent-order-table-cols">
        <span>Order ID</span>
        <span>Payment Method</span>
        <span>Order Date</span>
        <span>Delivery Date</span>
        <span>Status</span>
        <span>Total</span>
      </div>
      <div className="recent-order-table-rows">{OrderArr}</div>
    </div>
  );
}
