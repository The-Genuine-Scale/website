import React, { useEffect, useState } from "react";
import { getUserDetails, updateUserDetails } from "../../api/user";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
  const [userDetails, setUserDetails] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
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
      setIsEditMode(false);
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
    <div className="account-page">
    <div className="label">
      <h1>Account Details</h1>
      <div>
        <div className="edit">
          {!isEditMode && (
            <button onClick={() => setIsEditMode(true)}>Edit</button>
          )}
          {isEditMode && (
            <button onClick={handleSaveChanges}>Save Changes</button>
          )}
        </div>
          Addresses:
          {isEditMode ? (
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
          ) : (
            <div>
              {userDetails.address &&
                userDetails.address.map((address) => (
                  <div key={address}>
                    {address}
                    {isEditMode && (
                      <button onClick={() => handleDeleteAddress(address)}>
                        Delete
                      </button>
                    )}
                  </div>
                ))}
            </div>
          )}
      </div>
      </div>
      <div className="label">
          Date of Birth:
          <input
            type="text"
            name="dob"
            value={userDetails.dob || ""}
            disabled={!isEditMode}
            onChange={handleInputChange}
          />
      </div>
      <div className="label">
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email || ""}
            disabled={!isEditMode}
            onChange={handleInputChange}
          />
      </div>
      <div className="label">
          Gender:
          <input
            type="text"
            name="gender"
            value={userDetails.gender || ""}
            disabled={!isEditMode}
            onChange={handleInputChange}
          />
      </div>
      <div className="label">
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={userDetails.mobileNumber || ""}
            disabled={!isEditMode}
            onChange={handleInputChange}
          />
      </div>
      <div className="label">
          Name:
          <input
            type="text"
            name="name"
            value={userDetails.name || ""}
            disabled={!isEditMode}
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
        <button onClick={handleViewCart}>View Cart</button>
        <button onClick={handleViewOrderHistory}>View Order History</button>
        {/* <button onClick={handleViewWishlist}>View Wishlist</button> */}
      </div>
    </div>
  );
};

export default Account;
