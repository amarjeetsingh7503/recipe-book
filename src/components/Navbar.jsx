import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-logo">
      Recipe<span style={{ color: "#eca83f" }}>Book</span>
    </Link>
    <div className="nav-search">
      <input type="text" placeholder="Search" />
      <SearchIcon className="search-icon" />
    </div>
  </nav>
);

export default Navbar;
