import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import Logout from "../Private/Common/Logout";

const Header = () => {
  // Access authentication context
  const { auth } = useAuth();
  const { isAuthenticated, username, role } = auth;

  return (
    <header className="bg-lime-300 px-20 py-2 text-1xl font-bold">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://bofrike.in/wp-content/uploads/2019/04/EKART-LOGO.png"
            alt="Logo"
            className="h-12 rounded-xl border-2 border-orange-400"
          />
        </Link>

        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search for Products, Categories, etc.."
            className="rounded-3xl h-10 w-96 border-2 border-pink-300 p-4"
          />
        </div>

        {/* Links Block */}
        <div className="flex items-center space-x-5 font-weight: 600 ">
          {/* Authentication Links */}
          {isAuthenticated ? (
            <>
              {/* Welcome message */}
              <span>*{username}*</span>

              {/* Role-specific links */}
              {role === "SELLER" ? (
                <>
                  <Link to="/account" className="p-2">
                    Account
                  </Link>
                  <Link to="/dashboard" className="p-2">
                    Dashboard
                  </Link>
                  <Link to="/orders" className="p-2">
                    Orders
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/account" className="p-2">
                  Account
                  </Link>
                  <Link to="/cart" className="p-2">
                    Cart
                  </Link>
                  <Link to="/wishlist" className="p-2">
                    Wishlist
                  </Link>
                  <Link to="/orders" className="p-2">
                    Orders
                  </Link>
                </>
              )}

              {/* Logout */}
              <Logout/>
            </>
          ) : (
            <>
              {/* Pre-authentication links */}
              <Link to="/" className="p-2">
                Home
              </Link>
              <Link to="/seller/register" className="p-2">
                Become a Seller
              </Link>
              <Link to="/login" className="p-2">
                Log In
              </Link>
              
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
