import Image from "next/image";
import Logo from "../public/images/CREATE-hero/logo.png";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-start justify-between items-center p-6 container mx-auto">
      <Image src={Logo} alt="logo" className="shrink w-1/6 object-contain" />
      {/* hamburger menu, has no functionality */}
      <div className="hover:cursor-pointer sm:hidden">
        <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
        <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
        <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
      </div>
      <ul className="sm:flex text-center hidden justify-between items-center p-9">
        <li className="text-yellow-500 mx-5 hover:text-blue-600 hover:text-lg">
          <a href="#create">CREATE</a>
        </li>
        <li className="mx-5 hover:text-lg">
          <a href="#explore">EXPLORE</a>
        </li>
        <li className="mx-5 hover:text-lg">
          <a href="#gmdice">GM.DICE</a>
        </li>
        <li className="mx-5 hover:text-lg">
          <a href="#about">ABOUT</a>
        </li>
        <li className="mx-5 hover:text-lg">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
