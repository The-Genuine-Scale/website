import React, { useState } from "react";
import { signUp } from "../../api/auth";
import { Link } from 'react-router-dom';
import "./SignUp.css";
import Image from "../../assets/login.png"
import LoginLogo from "../../assets/login-logo.png"

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
      <img src={LoginLogo} alt="login-logo" className="login-logo"/>
      <form onSubmit={handleSubmit}>
        <div className="label">
        Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          </div>
          <div className="label">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        {error && <p className="signup-error">{error}</p>}
        <div className="login-link">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
          </div>
        <p className="end">Scale is India’s top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones. You can find thoughtful gifts for all special days like Birthdays, Anniversaries, Valentine's day and festivals like Rakshabandhan (Rakhi), Diwali and Christmas etc. Our range of gifts includes flower bouquets and yummy cakes which can be delivered to all major cities in under 2 hours. We can also deliver personalised gifts, potted plants, chocolates, gift hampers, digital gifts etc</p>
      </div>
      <img src={Image} alt="Image" className="login-image"/>
    </div>
  );
};

export default SignupPage;
