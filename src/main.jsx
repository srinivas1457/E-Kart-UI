import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./component/Util/PageNotFound.jsx";
import AllRoutes from "./component/Routes/AllRoutes.jsx";
import AuthProvider from "./component/Context/AuthProvider.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        child={
          <AllRoutes/>
        }
      />
    </BrowserRouter>
  </React.StrictMode>
);
