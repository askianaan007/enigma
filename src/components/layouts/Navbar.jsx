import React from "react";
import { logo, logout } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] bg-white flex justify-between items-center px-11">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <div>
        <ul className="list-none flex gap-8 justify-center items-center text-sm cursor-pointer ">
          <Link to={"/"} className="hover:font-medium">
            HOME
          </Link>
          <Link to={""} className="hover:font-medium">
            FAVOURITE
          </Link>
        </ul>
      </div>
      <Link to={"login"} className="pr-6">
        <img className="w-8" src={logout} alt="logout" />
      </Link>
    </nav>
  );
};

export default Navbar;
