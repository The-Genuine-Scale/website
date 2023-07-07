import React, { useState } from "react";
import { signUp } from "../../api/auth";
import { Link } from 'react-router-dom';
import "./SignUp.css";

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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email ID"
              onChange={handleEmailChange}
            />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <button type="submit" className="signup-button">
              Sign Up
            </button>
        </form>
        {error && <p className="signup-error">{error}</p>}
        <div className="login-link">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
