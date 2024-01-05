import React from "react";
import trees from "../assets/trees.jpeg";

const login3 = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={trees} alt="" />
        </div>
        <dir className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">Brand.</h2>
            <div>
              <input
                className="border p-2 mr-2"
                type="text"
                placeholder="User Name"
              />
              <input
                className="border p-2"
                type="text"
                placeholder="Password"
              />
            </div>
            <button className="w-full rounded-full py-2 my-4 bg-green-600 hover:bg-green-500">
              Sign in
            </button>
            <p className="text-center">Forget username or password</p>
          </form>
          <p className="text-center">Sign up</p>
        </dir>
      </div>
    </div>
  );
};

export default login3;
