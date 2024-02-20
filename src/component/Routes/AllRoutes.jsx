import React from "react";
import { Route, Routes } from "react-router-dom";
import navs from "./Navigations";
import App from "../../App";
import { useAuth } from "../Context/AuthProvider";
import PageNotFound from "../Util/PageNotFound";

const AllRoutes = () => {
  const { auth } = useAuth();

  const { username, role, isAuthenticated } = auth;

  const routes = () => {
    return (
      <Route
        path={"/"}
        element={<App username={username} isAuthenticated={isAuthenticated} />}
      >
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                // console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              // console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    );
  };
  return (
    <Routes>
      {routes()}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
