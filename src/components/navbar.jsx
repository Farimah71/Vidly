import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 ps-5">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </li>
          <li className="nav-item"></li>
        </ul>
      </div>
      <span className="navbar-text">
        <NavLink className="nav-link" to="/login">
          <button className="btn-user">Login</button>
        </NavLink>
        <NavLink className="nav-link" to="/register">
          <button className="btn-user">Register</button>
        </NavLink>
      </span>
    </nav>
  );
};

export default Navbar;
