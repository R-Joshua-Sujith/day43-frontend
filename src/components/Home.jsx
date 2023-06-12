import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div
          className="logout"
          onClick={() => {
            navigate("/login");
          }}
        >
          LOG OUT
        </div>
      </div>
      <div className="login-container">
        <h1>Login Successful</h1>
      </div>
    </div>
  );
};

export default Home;
