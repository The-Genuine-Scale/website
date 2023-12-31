import React, { useEffect, useState } from "react";
import { getCartItems } from "../../api/cart";
import { getProductById } from "../../api/product";
import { updateOrderHistory } from "../../api/order";
import { addAddressToUser, getAddressesByUser } from "../../api/user";
import { getUserDetails } from "../../api/user";
import "./Checkout.css";
import { FaTrash } from "react-icons/fa";
import CartCard from "../../components/CartCard/CartCard";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({});
  const [addressOptions, setAddressOptions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const userId = localStorage.getItem("uid");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails(userId);
        setPersonalDetails({
          name: userDetails.name,
          mobileNumber: userDetails.mobileNumber,
          email: userDetails.email,
        });
        console.log(personalDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems(userId);
        const cartItemsWithDetails = await Promise.all(
          items.map(async (item) => {
            const product = await getProductById(item.productId);
            return { ...product, quantity: item.quantity };
          })
        );
        setCartItems(cartItemsWithDetails);
        console.log(cartItemsWithDetails);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchAddresses = async () => {
      try {
        const addresses = await getAddressesByUser(userId);
        setAddressOptions(addresses);
        console.log(addressOptions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartItems();
    fetchAddresses();
  }, [userId]);

  const handleQuantityIncrease = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };
  const handleQuantityDecrease = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity--;
    setCartItems(updatedCartItems);
  };

  const handleCheckout = async () => {
    try {
      for (const item of cartItems) {
        const orderDetails = {
          personalDetails,
          selectedAddress,
          paymentMethod,
          product: item,
          quantity: item.quantity,
        };

        await updateOrderHistory(userId, orderDetails);
      }

      setCartItems([]);
      setPersonalDetails({});
      setAddressOptions([]);
      setSelectedAddress("");
      setPaymentMethod("");
      console.log("Order placed successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddAddress = async () => {
    if (newAddress) {
      try {
        await addAddressToUser(userId, newAddress);
        setAddressOptions([...addressOptions, newAddress]);
        setSelectedAddress(newAddress);
        setNewAddress("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="checkout-page-container">
      <div className="checkout-container">
        <div className="checkout-section">
          <div className="checkout-section-label">1</div>
          <div className="checkout-form">
            <h2>Personal Details</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={personalDetails.name || ""}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  name: e.target.value,
                })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={personalDetails.email || ""}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  email: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={personalDetails.mobileNumber || ""}
              onChange={(e) =>
                setPersonalDetails({
                  ...personalDetails,
                  mobileNumber: e.target.value,
                })
              }
            />
          <div className="address-list">
            <h3>Select Address</h3>
            {addressOptions.map((address) => (
              <label key={address}>
                <input
                  type="radio"
                  value={address}
                  checked={selectedAddress === address}
                  onChange={(e) => setSelectedAddress(e.target.value)}
                />
                <span>{address}</span>
                <FaTrash className="trash-icon" />
              </label>
            ))}
          </div>
            <input
              type="text"
              placeholder="Add New Address"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <button onClick={handleAddAddress}>Add Address</button>
          </div>
        </div>
        <div className="checkout-section">
          <div className="checkout-section-label">2</div>
          <div className="checkout-items">
            <h2>Items</h2>
            {cartItems.map((item, index) => (
              <CartCard
                item={item}
                increaseQuantity={() => handleQuantityIncrease(index)}
                decreaseQuantity={() => handleQuantityDecrease(index)}
              />
            ))}
          </div>
        </div>
        <div className="checkout-section payment">
        <div className="payment-top">
          <div className="checkout-section-label">3</div>
          <div className="checkout-form">
          <div className="payment-list">
            <h2>Payment Method</h2>
            <label>
              <input
                type="radio"
                value="cash_on_deliver"
                checked={paymentMethod === "cash_on_deliver"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            </div>
          </div>
          </div>
          <button onClick={handleCheckout}>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
