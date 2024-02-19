import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleVerification = async (event) => {
    event.preventDefault();
    // fire request to the server
    // using axios
    const email = sessionStorage.getItem('email'); // Retrieve email from session storage
    const URL = "http://localhost:8080/ekart/v1/verify-otp";
    const body = {
      email: email,
      otp: otp,
      
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
      sessionStorage.removeItem('email');
      window.alert(response.data.message);
      navigate("/login");
    } catch (error) {
      window.alert("OOPS!!! Wrong OTP. Please try again...");
    }
  };

  return (
    <div className="flex justify-center m-auto mt-16 w-fit border-blue-300 border-2 shadow-2xl  rounded-xl">
      <div className="p-4 flex-col flex justify-center items-center w-72  bg-gray-300 rounded-l-lg">
        <span className="p-2 font-mono font-bold text-4xl ">
          Verify Your OTP
        </span>
        <p className="p-2">OTP sent to Your registered email</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1773/1773508.png"
          alt="Register Image"
          className="h-40 mt-3"
        />
      </div>

      <div className="p-2 flex-col flex justify-center items-center w-96 h-40">
        <input
          type="text"
          placeholder="Enter your OTP"
          onChange={(event) => setOtp(event.target.value)}
          className="p-2 border-2 border-gray-500 w-80 h-10 rounded-xl "
        />{" "}
        <br />
        <button onClick={handleVerification} className="p-2 bg-yellow-400  rounded-3xl font-bold font-sans w-80  justify-center">
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;
