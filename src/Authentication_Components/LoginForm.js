import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      const FormData = {
        email,
        password,
      };
      console.log(FormData);
      // Reset form fields and loading state upon success
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle login failure, e.g., display an error message
      console.error(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="auth-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
