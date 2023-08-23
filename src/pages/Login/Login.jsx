import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import Image from "../../assets/login.png";
import LoginLogo from "../../assets/login-logo.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendLoginLink = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendSignInLinkToEmail(auth, email, {
        url: "https://scaleindia.netlify.app/login/verify",
        handleCodeInApp: true,
      });
      localStorage.setItem('emailForSignIn', email)
      setError("Login link has been sent to your email.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <img src={LoginLogo} alt="login-logo" className="login-logo" />
        <form onSubmit={handleSendLoginLink}>
          <div className="label">
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Send Login Link</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <div className="signup-link">
          <p>Don't have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
      <img src={Image} alt="Image" className="login-image" />
    </div>
  );
};

export default Login;
