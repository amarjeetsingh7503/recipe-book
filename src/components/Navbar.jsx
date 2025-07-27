import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-logo">
      Recipe<span style={{ color: "#eca83f" }}>Book</span>
    </Link>
    <div className="account">
      <AccountCircleIcon />
    </div>
  </nav>
);

export default Navbar;
