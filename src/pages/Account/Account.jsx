import React, { useEffect, useState } from "react";
import { getUserDetails, updateUserDetails } from "../../api/user";
import { useNavigate } from "react-router-dom";
import "./Account.css";
import Stats from "../../components/Stats/Stats";

const Account = () => {
  const [userDetails, setUserDetails] = useState({});
  const [newAddress, setNewAddress] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("uid");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails(userId);
        setUserDetails(userDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await updateUserDetails(userId, userDetails);
      console.log("User details updated successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewOrderHistory = () => {
    navigate('/orders')
  };

  const handleViewCart = () => {
    navigate('/cart')
  };

//   const handleViewWishlist = () => {
//     navigate('/wishlist')
//   };

  const handleAddAddress = () => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      address: [...prevUserDetails.address, newAddress],
    }));
    setNewAddress("");
  };

  const handleDeleteAddress = (address) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      address: prevUserDetails.address.filter((a) => a !== address),
    }));
  };

  return (
    <>
    <div className="account-page">
    <div className="label">
      <h1>Account Details</h1>
      <div>
          Addresses:
            <div >
              {userDetails.address &&
                userDetails.address.map((address) => (
                  <div key={address}>
                    {address}
                    <button onClick={() => handleDeleteAddress(address)}>
                      Delete
                    </button>
                  </div>
                ))}
              <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <button onClick={handleAddAddress}>Add Address</button>
            </div>
      </div>
      </div>
      <div className="label">
          Date of Birth:
          <input
            type="text"
            name="dob"
            value={userDetails.dob || ""}
            onChange={handleInputChange}
          />
      </div>
      <div className="label">
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email || ""}
            onChange={handleInputChange}
          />
      </div>
      <div className="label">
          Gender:
          <input
            type="text"
            name="gender"
            value={userDetails.gender || ""}
            onChange={handleInputChange}
          />
      </div>
      <div className="label">
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={userDetails.mobileNumber || ""}
            onChange={handleInputChange}
          />
      </div>
      <div className="label">
          Name:
          <input
            type="text"
            name="name"
            value={userDetails.name || ""}
            onChange={handleInputChange}
          />
      </div>
      <div className="label">
          User ID:
          <input
            type="text"
            name="userId"
            value={userDetails.userId || ""}
            disabled
          />
      </div>
      <div className="all_buttons">
      <button onClick={handleSaveChanges}>Save</button>
        <button onClick={handleViewCart}>Cart</button>
        <button onClick={handleViewOrderHistory}>Order History</button>
        {/* <button onClick={handleViewWishlist}>View Wishlist</button> */}
      </div>
    </div>
    <Stats />
    </>
  );
};

export default Account;
