import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CartCard.css";

const CartCard = ({ item, increaseQuantity, decreaseQuantity }) => {
    const handleIncrease = () => {
        increaseQuantity(item.docId);
      };
    
      const handleDecrease = () => {
        decreaseQuantity(item.docId);
      };
    
  return (
    <div key={item.docId} className="checkout-item">
    <Link to={`/product/${item.docId}`} key={item.docId}>
      <img src={item.imgUrl[0]} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      </Link>
      <div className="quantity-controls">
        <button
          onClick={handleIncrease}
        >
          +
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={handleDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartCard;
