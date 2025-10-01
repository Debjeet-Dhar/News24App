import React, { useState } from 'react'
import logo from "../assets/newsLogo 1@2x.png";
import { toast } from "react-toastify";
import { FaFacebook, FaStar } from "react-icons/fa";
import { CgGoogle } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
  
      if (user) {
        // Save logged-in user in localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        toast.success("Login successful!");
        navigate("/feed");
      } else {
        toast.error("Invalid email or password");
      }
    };

     const handelRegister = () =>{
        navigate("/login");
      }
  
    return (
        <div className="outside min-h-screen mx-auto">
            <div className="main p-10 flex flex-col items-center justify-center">
                <div className="logo flex items-center justify-center">
                    <div className="img flex items-center flex-col space-y-2.5">
                        <img src={logo} alt="Logo" className="w-27 h-27" />
                        <h1 className="text-3xl font-bold ">News 24</h1>
                    </div>
                </div>
                <div className="input mt-15 flex items-center justify-center min-w-full">
                    <form className="main_input flex flex-col text-xl space-y-7 w-full py-3 px-2"   onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            className="h-13 outline-none border-b border-b-gray-900 "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-13 outline-none border-b border-b-gray-900"
                        />

                        <input type="submit" value="Login" className="bg-blue-500 text-white max-w-2/4 px-8 py-4 rounded-md font-semibold mx-auto" />
                    </form>

                </div>
                {/* Divider */}
                <div className="my-5 flex items-center justify-center">
                    <div className="h-px w-45 bg-gray-500"></div>
                    <span className="mx-2 text-md text-gray-500">OR</span>
                    <div className="h-px w-45 bg-gray-500"></div>
                </div>

                <div className="social_login flex flex-col items-center justify-center min-w-full">
                    <div className="flex items-center justify-evenly space-x-7 mt-7 w-full">
                        <div className="icon border border-black w-4/5 mx-auto h-17 rounded-lg flex items-center justify-center space-x-2">
                            <div className="icon w-12 text-4xl">
                                <CgGoogle />
                            </div>
                            <div className="text">
                                <h3>Continue with Google</h3>
                            </div>
                        </div>
                    </div>
                    <p className="max-w-lg text-lg font-semibold mt-4 ">Don't Have Any Acoount <span onClick={handelRegister}  className="text-blue-700">Sign In</span></p>
                    <p className="max-w-sm mt-8 text-center font-semibold">
                        By signing up to News24 you are accepting our <span className="font-bold">Terms & Conditions</span></p>
                </div>
            </div>
        </div>
    )
}


export default Login
