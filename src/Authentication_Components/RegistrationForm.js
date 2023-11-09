import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setage] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [mobileNum, setmobile] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password) {
      alert("password is match");
    } else {
      alert("Passwords do not match");
    }

    try {
      const FormData = {
        email,
        firstName,
        lastName,
        password,
        age,
        dob,
        gender,
        mobileNum,
      };
      console.log(FormData);
      // Reset form fields and loading state upon success
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setage("");
      setdob("");
      setgender("");
      setmobile("");

      // Redirect to login page or handle success logic
      // navigate("/auth/login");
    } catch (error) {
      // Handle registration failure, e.g., display an error message
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <div className="input-group">
        <input
          className="auth-input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="auth-input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
      </div>
      <div className="input-group">
        <input
          className="auth-input"
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="auth-input"
          type="text"
          placeholder="DOB"
          value={dob}
          onChange={(e) => setdob(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="auth-input"
          type="text"
          placeholder="gender"
          value={gender}
          onChange={(e) => setgender(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="auth-input"
          type="text"
          placeholder="mobile No"
          value={mobileNum}
          onChange={(e) => setmobile(e.target.value)}
        />
      </div>

      <button className="auth-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default RegistrationForm;
