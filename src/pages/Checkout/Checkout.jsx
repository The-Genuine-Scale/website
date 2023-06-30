import React, { useEffect, useState } from "react";
import { getCartItems } from "../../api/cart";
import { getProductById } from "../../api/product";
import { updateOrderHistory } from "../../api/order";
import { addAddressToUser, getAddressesByUser } from "../../api/user";
import { getUserDetails } from "../../api/user";
import "./Checkout.css";
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
        setPersonalDetails({name: userDetails.name, mobileNumber: userDetails.mobileNumber, email: userDetails.email});
        console.log(personalDetails)
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
        console.log(cartItemsWithDetails)
      } catch (error) {
        console.log(error);
      }
    };
    const fetchAddresses = async () => {
      try {
        const addresses = await getAddressesByUser(userId);
        setAddressOptions(addresses);
        console.log(addressOptions)
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
      <h1>Checkout</h1>
      <div className="checkout-forms">
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
        </div>
        <div className="checkout-form">
          <h2>Address</h2>
          <select
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
          >
            <option value="">Select Address</option>
            {addressOptions?.map((address) => (
              <option key={address} value={address}>
                {address}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Add New Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <button onClick={handleAddAddress}>Add Address</button>
        </div>
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
        <div className="checkout-form">
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
        <button onClick={handleCheckout}>Pay</button>
      </div>
    </div>
  );
};

export default Checkout;
