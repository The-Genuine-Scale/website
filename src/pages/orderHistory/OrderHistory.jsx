import React, { useEffect, useState } from "react";
import { getOrders } from "../../api/order";
import "./OrderHistory.css";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const userId = localStorage.getItem("uid");

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const orderHistoryData = await getOrders(userId);
        setOrderHistory(orderHistoryData);
        console.log(orderHistoryData);
      } catch (error) {
        console.log("Error fetching order history:", error);
      }
    };

    fetchOrderHistory();
  }, []);

  if (!orderHistory) {
    return <div>Loading order history...</div>;
  }

  return (
    <div className="order-history">
      <h1>Order History</h1>
      {orderHistory.length === 0 ? (
        <div>No orders found.</div>
      ) : (
        orderHistory.map((order) => (
          <div className="order" key={order.orderId}>
            <div className="product-info">
              <img src={order.product.imgUrl[0]} alt={order.product.name} />
              <div className="product-details">
                <h3>{order.product.name}</h3>
                <p>Payment Method: {order.paymentMethod}</p>
                <p>Quantity: {order.quantity}</p>
                <p>Selected Address: {order.selectedAddress}</p>
              </div>
            </div>
            <div className="personal-details">
              <h3>Customer Details</h3>
              <ul>
                <li><span>Name:</span> {order.personalDetails.fullName}</li>
                <li><span>Mobile Number:</span> {order.personalDetails.number}</li>
                <li><span>Email:</span> {order.personalDetails.email}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
