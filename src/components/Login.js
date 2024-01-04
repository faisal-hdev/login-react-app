import React from "react";
import loginImg from "../assets/login.jpeg";

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-gray-300 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-6">
          <h2 className="text-4xl font-bold text-center p-2">Brand.</h2>
          <div className="flex flex-col py-4">
            <label className="text-xl">User Name</label>
            <input
              className="border p-4"
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="flex flex-col py-4">
            <label className="text-xl">Password</label>
            <input
              className="border p-4"
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button className="border font-bold my-5 w-full rounded-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xl">
            Sign In
          </button>
          <div className="flex justify-between mb-4">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" name="" id="" /> Remember
              Me
            </p>
            <p>Create an account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
