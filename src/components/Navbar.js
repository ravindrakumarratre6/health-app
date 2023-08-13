import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/user-profile">User Profile</Link>
      <Link to="/exercise-routines">Exercise Routines</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
