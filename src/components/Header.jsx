import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCart, BiUser } from "react-icons/bi";

const Header = (props) => {
  return (
    <header className="bg-gray-50 shadow-md flex items-center justify-between px-10 py-5 border-b-[1px] text-[#36496f] sticky top-0 left-0 z-50">
      <h3 className="text-lg font-bold">
        <a href="#">Nike Store</a>
      </h3>
      <ul className="flex gap-x-10 text-md">
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Children</a>
        </li>
      </ul>
      <div className="flex items-center text-md">
        <label
          htmlFor="search"
          className="mr-2 flex items-center justify-center"
        >
          <AiOutlineSearch />
        </label>
        <input
          id="search"
          type="text"
          placeholder="search here..."
          className="focus:outline-none border-b-[1px] bg-transparent"
        />
      </div>
      <div className="flex items-center gap-x-8 font-semibold text-lg">
        <h3
          onClick={() => window.alert("Your Account!")}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <BiUser /> Account
        </h3>
        <h3
          onClick={() => props.setShowCart(!showCart)}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <BiCart /> Cart
        </h3>
      </div>
    </header>
  );
};

export default Header;
