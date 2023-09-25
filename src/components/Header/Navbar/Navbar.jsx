import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from './logo';



const Navbar = () => {
    return (
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <Logo></Logo>
  </div>
  <div className="flex-none">
    <ul className="flex gap-5">
      <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Home
            </NavLink></li>
      <li>
      <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Donation
            </NavLink>
      </li>
      <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Statistics
            </NavLink>

            
          </li>
    </ul>
  </div>
</div>
    </div>
    );
};

export default Navbar;