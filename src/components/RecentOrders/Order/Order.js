import React from "react";
import "./Order.css";
function getStatusCol(status) {
  if (status === "Pending") return "rgb(14, 106, 244)";
  if (status === "Cancel") return "rgb(247, 15, 69)";
  return "rgb(116, 247, 15)";
}
export default function Order({
  orderID,
  paymentMethod,
  orderDate,
  deliveryDate,
  status,
  total,
}) {
  const color = getStatusCol(status);
  return (
    <div className="order-container">
      <span>{orderID}</span>
      <span>{paymentMethod}</span>
      <span>{orderDate}</span>
      <span>{deliveryDate}</span>
      <span>
        <span className="order-status" style={{ backgroundColor: color }}>
          {status}
        </span>
      </span>
      <span>₨ {total}</span>
    </div>
  );
}
