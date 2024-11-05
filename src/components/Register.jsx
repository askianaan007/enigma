import React from "react";
import { logo } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="bg-backGray h-screen flex items-center justify-center">
      <div className="px-[120px] py-[10px] bg-white  rounded-lg">
        <div className=" mt-10 w-full flex justify-center">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-3xl">Register</h1>
        <div className="flex flex-col md:flex-row gap-0 md:gap-5">
          <div className=" flex flex-col  mt-3 mb-0 md:mb-5">
            <div className="mb-2 mt-3 flex flex-col gap-4">
              <div class="relative ">
                <input
                  type="text"
                  id="firstName"
                  class="block pe-10 pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="First name"
                />
                <label
                  for="firstName"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Your name *
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="email"
                  class="block pe-10 ps-5 pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="abc@gmail.com"
                />
                <label
                  for="email"
                  class="absolute w-full text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email *
                </label>
              </div>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  class="block pe-10 pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="*******"
                />
                <label
                  for="password"
                  class="absolute  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
            </div>

            <p className="text-xs text-buttonPink">Please enter a password</p>
          </div>
          <div className=" flex flex-col  mt-0 md:mt-3 mb-5">
            <div className="mb-2 mt-3 flex flex-col gap-4">
              <div class="relative ">
                <input
                  type="text"
                  id="lastName"
                  class="block pe-10 ps-5  pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Last name"
                />
                <label
                  for="lastName"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Last name
                </label>
              </div>
              <div class="relative">
                <input
                  type="number"
                  id="phone"
                  class="block pe-10 ps-5  pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="011 2222 333"
                />
                <label
                  for="phone"
                  class="absolute w-full text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Phone number *
                </label>
              </div>
              <div class="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  class="block pe-10 ps-5  pb-3 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="*******"
                />
                <label
                  for="confirmPassword"
                  class="absolute  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  confirm password
                </label>
              </div>
            </div>

            <p className="text-xs text-buttonPink">
              the password does not matched
            </p>
          </div>
        </div>

        <button className="px-2.5 pb-2 pt-2 w-full md:w-[35%] bg-buttonPink rounded-md text-white shadow-lg">
          Create Account
        </button>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs  mt-[20%] mb-[15%]">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-buttonPink">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
