import React, { useState, useEffect } from "react";
import "./RecentOrdersPage.css";
import Order from "../RecentOrders/Order/Order";
import { useNavigate } from "react-router-dom";
import axios from "axios";

var newOrderArray;
export default function RecentOrders() {
  const navigate = useNavigate();

  const [orderArray, setOrderArray] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3002/order/getOrderDetails/64d26ced56d9dd620fa75b1b"
        );
        setOrderArray(response.data.Orders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); // works on mount

  useEffect(() => {
    console.log(orderArray);
    newOrderArray = orderArray.map((order) => (
      <Order
        orderID={order._id}
        paymentMethod={order.paymentMethod}
        orderDate={order.orderDate}
        deliveryDate={order.deliveryDate}
        status={order.status}
        total={order.total}
      />
    ));
  }, [orderArray]);
  return (
    <div className="recent-order-container">
      <div className="recent-order-header">
        <span>Recent Orders</span>
        <button
          className="btn btn-primary"
          fdprocessedid="09edqc"
          onClick={() => {
            navigate("/");
          }}
        >
          BACK
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
      <div className="recent-order-table-rows">{newOrderArray}</div>
    </div>
  );
}
