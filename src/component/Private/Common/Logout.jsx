import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthProvider';

const Logout = () => {

  const navigate=useNavigate();
  const{auth,setAuth}=useAuth();

  const handleLogout=async ()=>{
    const URL="http://localhost:8080/ekart/v1/logout"
    try {
      const response=await axios.post(URL,{},{withCredentials: true});
      if(response.status===200){
        localStorage.removeItem('user')
        setAuth({
          userId:"",
          username:"",
          role:"CUSTOMER",
          isAuthenticated:false,
          accessExpiration:"",
          refreshExpiration:""
      });
        window.alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.message);
    }
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout
