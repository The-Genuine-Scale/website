import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaBars,
  FaRegUserCircle,
  FaTimes,
  FaUsers,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { RiContactsBook2Line } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { auth } from "../../api/firebase";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const checkLoginStatus = () => {
    const user = auth.currentUser;
    if (user) {
      navigate("/account");
      console.log("User is logged in");
    } else {
      navigate("/login");
      console.log("User is not logged in");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log("User is logged in");
      } else {
        setIsLoggedIn(false);
        console.log("User is not logged in");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.setItem("uid", null);
        console.log("User signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log("Sign out error:", error);
      });
  };

  return (
    <div className="main_container_header">
      <div className="main_box_header">
        {/* DESKTOP HEADER */}
        <div className="desktop_header">
          <div className="desk_top_section_header">
            <div className="desk_top_left_section_header">
              <img src={logo} alt="logo" />
              <h2>SCALE</h2>
              <div className="desk_search_container_header">
                <input type="text" placeholder="Search..." />
                <div className="search_icon_container_header">
                  <GoSearch className="search_icon_header" />
                </div>
              </div>
            </div>

            <div className="desk_top_right_section_header">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="desk_bottom_section_header">
            <div className="desk_bottom_left_section_header">
              <Link to="/products/birthday"><p> Birthday</p></Link>
              <Link to="/products/anniversary"><p> Anniversary</p></Link>
              <Link to="/products/cake"><p> Cakes</p></Link>
              <Link to="/products/flower"><p> Flowers</p></Link>
              <Link to="/products/customise"><p> Customised</p></Link>
              <Link to="/products/gift"><p> Gifts</p></Link>
            </div>

            {isLoggedIn ? (
              <div className="desk_bottom_right_section_header">
                <Link to="/cart" className="desk_cart_container_header">
                  <AiOutlineShoppingCart className="desk_cart_icon_header" />
                  <p>Cart</p>
                </Link>
                <div
                  className="desk_account_container_header"
                  onClick={checkLoginStatus}
                >
                  <FaRegUserCircle className="desk_account_icon_header" />
                  <p>Account</p>
                </div>
                <div
                  className="desk_signout_button_header"
                  onClick={handleSignOut}
                >
                  <FaSignOutAlt className="signout_icon_header" />
                  <p>Sign Out</p>
                </div>
              </div>
            ) : (
              <div className="desk_bottom_right_section_header">
                <Link to="/cart" className="desk_cart_container_header">
                  <AiOutlineShoppingCart className="desk_cart_icon_header" />
                  <p>Cart</p>
                </Link>
                <Link to="/login" className="desk_signup_button_header">
                  <FaSignInAlt className="signup_icon_header" />
                  <p>Login</p>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="mobile_header">
          <div className="mobile_box_header">
            <div className="mob_top_section_header">
              <div className="mob_top_left_section_header">
                <FaBars className="nav_icon_header" onClick={handleClick} />
                <Link to="/" className="mob_logo_header">
                  <h2>SCALE</h2>
                </Link>
              </div>

              {isLoggedIn ? (
                <div className="mob_top_right_section_header">

              <Link to="/cart" className="mob_cart_container_header">
                <AiOutlineShoppingCart className="mob_cart_icon_header" />
                <p>Cart</p>
              </Link>
                  <div
                    className="mob_account_container_header"
                    onClick={checkLoginStatus}
                  >
                    <FaRegUserCircle className="mob_account_icon_header" />
                    <p>Account</p>
                  </div>
                  <div
                    className="mob_signout_button_header"
                    onClick={handleSignOut}
                  >
                    <FaSignOutAlt className="mob_signout_icon_header" />
                    <p>Sign Out</p>
                  </div>
                </div>
              ) : (
                <div className="mob_top_right_section_header">
                  <Link to="/login" className="mob_signup_button_header">
                    <FaSignInAlt className="mob_signup_icon_header" />
                    <p>Login</p>
                  </Link>
                </div>
              )}
            </div>

            <div className="mob_bottom_section_header">
              <div className="mob_search_container_header">
                <input type="text" placeholder="Search..." />
                <div className="mob_search_icon_container_header">
                  <GoSearch className="mob_search_icon_header" />
                </div>
              </div>
            </div>
          </div>

          {/* SIDE SECTION */}
          <div
            className={
              !click
                ? "mob_side_section_header"
                : "mob_side_section_header side_active_header"
            }
          >
            <div className="side_top_section_header">
              <div className="side_top_upper_section_header">
                <FaTimes
                  className="side_nav_icon_header"
                  onClick={handleClick}
                />
                <div className="desk_top_middle_box_header">
                  <p>WISHLIST</p>
                </div>
              </div>

              <div className="side_top_lower_section_header">
                <h2>SCALE</h2>
              </div>
            </div>

            <div className="side_middle_section_header">
              <Link to="/" className="side_middle_box_header">
                <p>Home</p>
                <BiHome className="side_middle_icon_header" />
              </Link>
              <Link to="/aboutus" className="side_middle_box_header">
                <p>About Us</p>
                <FaUsers className="side_middle_icon_header" />
              </Link>
              <Link to="/contactus" className="side_middle_box_header">
                <p>Contact Us</p>
                <RiContactsBook2Line className="side_middle_icon_header" />
              </Link>
            </div>

            <div className="side_bottom_section_header">
              <Link to="/products/birthday" className="side_bottom_box_header">
                <p>Birthday</p>
              </Link>
              <Link
                to="/products/anniversary"
                className="side_bottom_box_header"
              >
                <p>Anniversary</p>
              </Link>
              <Link to="/products/cake" className="side_bottom_box_header">
                <p>Cakes</p>
              </Link>
              <Link to="/products/flower" className="side_bottom_box_header">
                <p>Flowers</p>
              </Link>
              <Link to="/products/customise" className="side_bottom_box_header">
                <p>Customise</p>
              </Link>
              <Link to="/products/gift" className="side_bottom_box_header">
                <p>Gifts</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
