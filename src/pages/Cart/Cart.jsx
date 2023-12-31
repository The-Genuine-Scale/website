import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getCartItems, removeFromCart, addToCart } from "../../api/cart";
import { getProductById } from "../../api/product";
import "./Cart.css";
import CartCard from "../../components/CartCard/CartCard";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const userId = localStorage.getItem("uid");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        console.log(userId)
        const items = await getCartItems(userId);
        console.log(items)
        const cartItemsWithDetails = await Promise.all(
          items.map(async (item) => {
            const product = await getProductById(item.productId);
            return { ...product, quantity: item.quantity };
          })
        );
        setCartItems(cartItemsWithDetails);
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      fetchCartItems();
    }
  }, [userId]);

  const handleRemoveFromCart = async (id) => {
    try {
      await removeFromCart(userId, id);
      const updatedCartItems = cartItems.map((item) => {
        if (item.docId === id) {
          const updatedQuantity = item.quantity - 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      setQuantity(quantity - 1);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleAddToCart = async (id) => {
    try {
      await addToCart(userId, id);
      const updatedCartItems = cartItems.map((item) => {
        if (item.docId === id) {
          const updatedQuantity = item.quantity + 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      setQuantity(quantity + 1);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="cart-page-container">
      <div className="cart-container">
        <h1 className="cart-title">My Cart</h1>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <CartCard
                item={item}
                increaseQuantity={() => handleAddToCart(item.docId)}
                decreaseQuantity={() => handleRemoveFromCart(item.docId)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="proceed-button">
        <Link to={`/checkout`}>
          <button>Proceed to Buy</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
