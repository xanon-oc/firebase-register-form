import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/register-rbs">Register-RBS</NavLink>
      <NavLink to="/register-bs">Register-BS</NavLink>
    </nav>
  );
};

export default Header;
