import React from "react";
import { logo } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-backGray h-screen flex items-center justify-center px-5">
      <div className="p-10  bg-white w-[450px] h-[550px] rounded-lg">
        <div className=" mt-10 w-ful flex justify-center">
          <img src={logo} alt="logo" />
        </div>

        <div className=" flex flex-col  mt-3 mb-5">
          <h1 className="text-3xl">Login</h1>

          <div className="mb-2 mt-5 flex flex-col gap-4">
            <div class="relative ">
              <input
                type="text"
                id="email"
                class="block px-3 pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                for="email"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email address
              </label>
            </div>
            <div class="relative">
              <input
                type="password"
                id="password"
                class="block px-3 pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="password"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password
              </label>
            </div>
          </div>

          <p className="text-xs text-buttonPink">Please enter a password</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="px-2.5 pb-2.5 pt-4 w-full bg-buttonPink rounded-md text-white shadow-lg">
            SIGN IN
          </button>
          <p className="text-xs text-buttonPink mt-3">
            your password or username is incorrect
          </p>
          <p className="text-xs  mt-10 mb-8">
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span className="text-buttonPink">Create an account</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
