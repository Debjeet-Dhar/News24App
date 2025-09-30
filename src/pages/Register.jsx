import React, { useState } from 'react'
import { toast } from "react-toastify";
import logo from "../assets/newsLogo 1@2x.png";
import { FaFacebook, FaStar } from "react-icons/fa";
import { CgGoogle } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      toast.error("Email already registered");
      return;
    }

    // Save new user
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Signup successful! You can now login.");
    navigate("/login");
  };
  return (
    <div className="outside min-h-screen mx-auto">
      <div className="main p-10 flex flex-col items-center justify-center">
        <div className="logo flex items-center justify-center">
          <div className="img flex items-center flex-col space-y-2.5">
            <img src={logo} alt="Logo" className="w-27 h-27" />
            <h1 className="text-3xl font-bold ">News 24</h1>
          </div>
        </div>
        <div className="input mt-6 flex items-center justify-center min-w-full">
          <form onSubmit={handleSignup} className="main_input flex flex-col text-xl space-y-7 w-full py-3 px-2">
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-13 outline-none border-b border-b-gray-900 "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-13 outline-none border-b border-b-gray-900"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-13 outline-none border-b border-b-gray-900"
            />

            <input type="submit" value="Sing up" className="bg-blue-500 text-white max-w-2/4 px-8 py-4 rounded-md font-semibold mx-auto" />
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
          <p className="max-w-lg text-lg font-semibold mt-4 ">Already Have Acoount <span className="text-blue-700">Login</span></p>
          <p className="max-w-sm mt-8 text-center font-semibold">
            By signing up to News24 you are accepting our <span className="font-bold">Terms & Conditions</span></p>
        </div>
      </div>
    </div>
  )
}

export default Register