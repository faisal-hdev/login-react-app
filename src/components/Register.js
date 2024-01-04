import React from "react";
import loginImg from "../assets/login.jpeg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const Register = () => {
  return (
    <div className="w-full h-screen relative bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt=""
      />
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h1 className="text-4xl font-bold text-center py-4">Brand.</h1>
          <div className="flex justify-between font-medium py-5">
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
              <BsFacebook className="mr-2" />
              facebook
            </p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
              <FcGoogle className="mr-2" />
              Google
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label className="relative text-lg">User Name</label>
            <input
              required
              className="border relative bg-gray-100 p-3"
              placeholder="Enter Your Name"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col">
            <label className="relative text-lg">Password</label>
            <input
              required
              className="border relative bg-gray-100 p-3"
              placeholder="Enter Your Password"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-xl text-white rounded-full">
            Sign in
          </button>
          <p className="flex items-center mt-2 relative">
            <input className="mr-2" type="checkbox" /> Remember Me
          </p>
          <p className="text-center mt-8 relative">Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
