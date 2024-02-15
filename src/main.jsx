import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Public/Login.jsx";
import Seller from "./component/Util/Seller.jsx";
import Cart from "./component/Private/Customer/Cart.jsx";
import SellerDashBoard from "./component/Private/Seller/SellerDashBoard.jsx";
import PageNotFound from "./component/Util/PageNotFound.jsx";
import navs from "./component/Routes/Navigations.jsx";

const user = {
  userName: "",
  role: "CUSTOMER",
  isAuthenticated: false,
};

const { role, isAuthenticated } = user;

const allRoutes = () => {
  return (
    <Route path={"/"} element={<App isAuthenticated={isAuthenticated}/>}>
      {navs.map((nav, i) => {
        if (isAuthenticated) {
          if(nav.isVisibleAfterAuth){
            if (nav.role === role || nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        } else {
          if (!nav.requireAuth && nav.role === "ALL") {
            console.log(nav);
            return <Route key={i} path={nav.path} element={nav.element} />;
          }
        }
      })}
    </Route>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />}>
          <Route path="/login" element={<Login />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/cart" element={<Cart />} />
        </Route> */}
        {allRoutes()}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
