import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "./CartCard.css";

const CartCard = ({ item, increaseQuantity, decreaseQuantity }) => {
  const handleIncrease = () => {
    increaseQuantity(item.docId);
  };

  const handleDecrease = () => {
    decreaseQuantity(item.docId);
  };

  const deliveryDate = item.delivery_on ? item.delivery_on : getFutureDate(7);

  function getFutureDate(days) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate.toDateString();
  }

  return (
    <div key={item.docId} className="checkout-item">
      <div className="image-section">
        <Link to={`/product/${item.docId}`} key={item.docId}>
          <img src={item.imgUrl[0]} alt={item.name} />
        </Link>
        <div className="quantity-controls">
          <button onClick={handleDecrease} className="rem">-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease} className="add">+</button>
        </div>
      </div>
      <div className="info-section">
        <span>{item.name}</span>
        <p>{item.description}</p>
      </div>
      <div className="delivery-section">
        <p>Delivering on</p>
        <p>{deliveryDate}</p>
        <span>&#x20B9; {item.quantity*item.price} </span> ({item.quantity}*{item.price})
      </div>
      <div className="remove-section">
        <FaTrash className="trash-icon" />
      </div>
    </div>
  );
};

export default CartCard;
