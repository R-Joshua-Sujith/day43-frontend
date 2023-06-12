import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Nav.css";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-items" onClick={() => navigate("/")}>
        Sign Up
      </div>
      <div
        className="nav-items"
        onClick={() => {
          navigate("/login");
        }}
      >
        LOGIN
      </div>
    </div>
  );
};

export default Nav;
