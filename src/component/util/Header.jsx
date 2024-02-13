import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-lime-400 px-20 py-4 text-1xl font-bold">
      <nav className="flex justify-between items-center">
        <Link>
          <img src="https://e7.pngegg.com/pngimages/5/879/png-clipart-flipkart-e-commerce-vu-televisions-sales-gmail-logo-blue-text-thumbnail.png" alt=" logo img" className="h-16 rounded-full"/> 
        </Link>
        {/*Search Bar*/}
        <div>
          <input
            type="text"
            placeholder="Search for Products,Categories,etc.."
            className="rounded-3xl h-10 w-96 border-red-500"
          />
        </div>

        {/*Link Block */}
        <div className="flex items-center space-x-5 font-weight: 600 ">
          {/*Log in */}
          <Link to={"/login"} className="p-2 ">
            Log In
          </Link>

          {/*Become seller Option */}
          <Link to={"/seller"} className="p-2">
            Become A Seller
          </Link>

          {/*Cart*/}
          <Link to={"/cart"} className="p-2">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
