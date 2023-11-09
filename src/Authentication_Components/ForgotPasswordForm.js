import React, { useState } from "react";
import "./ForgotPasswordForm.css";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    // Add code to send forgot password request to the backend
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
      </div>
      <button className="auth-button" onClick={handleForgotPassword}>
        Forgot Password
      </button>
    </div>
  );
};

export default ForgotPasswordForm;
