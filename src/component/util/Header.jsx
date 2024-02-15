import React from "react";
import { Link } from "react-router-dom";

const Header = ({isAuthenticated}) => {
  return (
    <header className="bg-lime-300 px-20 py-2 text-1xl font-bold">
      <nav className="flex justify-between items-center">
        <Link>
          <img src="https://bofrike.in/wp-content/uploads/2019/04/EKART-LOGO.png" alt=" logo img" className="h-12 rounded-xl border-2 border-orange-400"/> 
        </Link>
        {/*Search Bar*/}
        <div>
          <input
            type="text"
            placeholder="Search for Products,Categories,etc.."
            className="rounded-3xl h-10 w-96 border-2 border-pink-300 p-4"
          />
        </div>

        {/*Link Block */}
        <div className="flex items-center space-x-5 font-weight: 600 ">
          {/*Log in */}

           {isAuthenticated ? <Link to={"/account"} className="p-2">Account</Link>:<Link to={"/login"} className="p-2 "> Log In</Link>}
           
          {/* {isAuthenticated || <Link to={"/login"} className="p-2 ">
            Log In
            </Link>} */}

          {/*Become seller Option */}
          <Link to={"/seller"} className="p-2">
            Become a Seller
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
