import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';



const Login= () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {auth,setAuth}=useAuth();

 
  

  const handleLogin = async (event) => {
    event.preventDefault();
    // fire request to the server
    // using axios
    const URL = "http://localhost:8080/ekart/v1/login";
    const body = {
      email: username,
      password: password,
      
    };

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.post(URL, body, header);
      if (response.status===200) {
        console.log(response);
        const user={
          userid:response.data.data.userId,
          username:response.data.data.userName,
          role:response.data.data.userRole,
          isAuthenticated:response.data.data.authenticated,
          accessExpiration:response.data.data.accessExpiration,
          refreshExpiration:response.data.data.refreshExpiration
        }
        localStorage.setItem("user",JSON.stringify(user));
        setAuth(user)
        console.log(auth);
        navigate("/");
      }
    
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.message);
    }
  };

return (
  <div className='flex justify-center m-auto mt-16 w-fit border-yellow-100 border-2 shadow-2xl  rounded-xl'>
    <div className='p-2 flex-col flex justify-center items-center w-72  bg-yellow-200 rounded-l-lg'>
      <span className='p-2 font-mono font-bold text-5xl '>Login</span>
      <p className='p-2'>Get access to your Orders, Wishlist and Recommendations</p>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="Register Image"  className='h-32 mt-20'/>
    </div>
  
  <div className='p-2 flex-col flex justify-center items-center w-96 h-80'>
    <input id='username' type="text" placeholder='email Id' onChange={(event) => setUsername(event.target.value)} className='p-2 border-2 border-gray-500 w-80 h-10 rounded-xl ' /> <br />
    <input type="text" placeholder='password' onChange={(event) => setPassword(event.target.value)} className='p-2 border-2 border-gray-500  w-80 h-10 rounded-xl' /> <br />
    <button onClick={handleLogin} className='p-2 bg-lime-300  rounded-3xl font-bold font-sans w-80  justify-center active:bg-violet-600 '>Login</button>
    <Link to={"/customer/register"} className='text-blue-600 mt-20 ' >New to eKart ? Create an account</Link>
    
  </div>
  </div>
)

}

export default Login;
