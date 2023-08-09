import React, { useEffect, useState } from "react";
import "./RecentOrders.css";
import Order from "./Order/Order";
import { useNavigate } from "react-router-dom";
import axios from "axios";
var smallOrderArr;
// const OrderArr = [
//   <Order
//     orderID="af212f"
//     paymentMethod="COD"
//     orderDate="Sept 8th 10pm"
//     deliveryDate="September 10th 2020"
//     status="Pending"
//     total="52222"
//   />,
//   <Order
//     orderID="af212f"
//     paymentMethod="COD"
//     orderDate="Sept 8th 10pm"
//     deliveryDate="September 10th 2020"
//     status="Delivered"
//     total="52222"
//   />,
//   <Order
//     orderID="af212f"
//     paymentMethod="COD"
//     orderDate="Sept 8th 10pm"
//     deliveryDate="September 10th 2020"
//     status="Cancel"
//     total="52222"
//   />,
//   <Order
//     orderID="af212f"
//     paymentMethod="COD"
//     orderDate="Sept 8th 10pm"
//     deliveryDate="September 10th 2020"
//     status="delivered"
//     total="52222"
//   />,
// ];

// const smallOrderArr = OrderArr.slice(0, 3);
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
    const newOrderArray = orderArray.map((order) => (
      <Order
        orderID={order._id}
        paymentMethod={order.paymentMethod}
        orderDate={order.orderDate}
        deliveryDate={order.deliveryDate}
        status={order.status}
        total={order.total}
      />
    ));
    smallOrderArr = newOrderArray.slice(0, 3);
  }, [orderArray]);
  return (
    <div className="recent-order-container">
      <div className="recent-order-header">
        <span>Recent Orders</span>
        <button
          className="btn btn-primary"
          fdprocessedid="09edqc"
          onClick={() => {
            navigate("/viewAll");
          }}
        >
          View All
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
      <div className="recent-order-table-rows">{smallOrderArr}</div>
    </div>
  );
}
