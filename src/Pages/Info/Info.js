import React, { useState } from "react";
import "./Info.css";
import question_mark from "../../Assets/Question Mark.png";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required!");
    } else if (!isValidEmail(email)) {
      setError("Please enter a valid email address!");
    } else {
      navigate("/quizapp");
    }

    setTimeout(() => {
      setError("");
    }, 2000);
  };
  return (
    <div className="container">
      <div className="img">
        <img src={question_mark} alt="" />
      </div>
      <div className="inf">
        <label htmlFor="">Enter your email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button id="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Info;
