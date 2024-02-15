import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ role }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    event.preventDefault();
    // console.log(username);
    // console.log(password);
    // console.log(role);

    // fire request to the server
    // using axios
    const URL = "http://localhost:8080/ekart/v1/register";
    const body = {
      email: username,
      password: password,
      userRole: role,
    };

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.post(URL, body, header);
      console.log(response);
      sessionStorage.setItem('email',username)
      navigate("/verify-otp");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center m-auto mt-16 w-fit border-lime-100 border-2 shadow-2xl  rounded-xl">
      <div className="p-2 flex-col flex justify-center items-center w-72  bg-lime-200 rounded-l-lg">
        <span className="p-2 font-mono font-bold text-2xl ">
          Looks like you're new here!
        </span>
        <p className="p-2">
          Sign up with your{" "}
          <span className="font-medium">email & password</span> to get started
        </p>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
          alt="Register Image"
          className="h-32 mt-20"
        />
      </div>

      <form>
        <div className="p-2 flex-col flex justify-center items-center w-96 h-60">
          <input
            type="email"
            placeholder="email address"
            required
            onChange={(event) => setUsername(event.target.value)}
            className="p-2 border-2 border-gray-500 w-80 h-10 rounded-xl "
          />{" "}
          <br />
          <input
            type="text"
            placeholder="password"
            required
            onChange={(event) => setPassword(event.target.value)}
            className="p-2 border-2 border-gray-500  w-80 h-10 rounded-xl"
          />{" "}
          <br />
          <button
            type="submit"
            onClick={handleRegistration}
            className="p-2  border-gray-500 bg-amber-400 rounded-3xl font-bold font-sans w-80  justify-center"
          >
            SUBMIT
          </button>
          {/*<Link to={"/verify-otp"}  ></Link> */}
        </div>
      </form>
    </div>
  );
};

export default Register;
