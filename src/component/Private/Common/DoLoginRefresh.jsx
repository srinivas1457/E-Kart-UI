import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

const DoLoginRefresh = () => {
  const navigate = useNavigate();

  const refresh = async () => {
    const URL = "http://localhost:8080/ekart/v1/refresh-login";
    try {
      const response = await axios.post(URL,{}, {
        withCredentials: true,
      });
      if (response.status === 200) {
        const user = {
          userId: response.data.data.userId,
          username: response.data.data.userName,
          role: response.data.data.userRole,
          isAuthenticated: response.data.data.authenticated,
          accessExpiration: response.data.data.accessExpiration,
          refreshExpiration: response.data.data.refreshExpiration,
        };
        return user;
      }
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.message);
    }
  };

  const validateAndRefresh = async () => {
    const userString = localStorage.getItem("user");
    if (userString && userString !== "{}") {
      const user = JSON.parse(userString);
      if (new Date(user.refreshExpiration) > new Date()) {
        if (new Date(user.accessExpiration) > new Date()) {
          return user;
        } else {
          console.log("above refresh call ");
          return await refresh();
        }
      } else {
        localStorage.removeItem('user');
        navigate("/login");
      }
    } else {
      navigate("/");
    }
  };

  return { validateAndRefresh };
};

export default DoLoginRefresh;
