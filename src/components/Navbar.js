import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Auction App</Link>
        <div className="d-flex">
          <Link to="/dashboard" className="nav-link mx-3">Dashboard</Link>
          <Link to="/post-auction" className="nav-link mx-3">Post Auction</Link>
          <Link to="/signup" className="btn btn-outline-warning mx-2">Sign Up</Link>
          <Link to="/signin" className="btn btn-warning mx-2">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
