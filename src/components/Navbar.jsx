import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">Recipe Book Application</Link>
  </nav>
);

export default Navbar;
