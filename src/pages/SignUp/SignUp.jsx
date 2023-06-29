import React, { useState } from 'react';
import { signUp } from '../../api/auth';
import './SignUp.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
      <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
        <div>
          <label className="signup-label">Email</label> 
          <input
            type="email"
            className="signup-input"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label className="signup-label">Password</label>
          <input
            type="password"
            className="signup-input"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit" className="signup-button">Sign Up</button>
        </div>
        {error && <p className="signup-error">{error}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
