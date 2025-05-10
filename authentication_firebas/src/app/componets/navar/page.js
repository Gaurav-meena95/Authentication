"use client";
import Link from "next/link";
import React from "react";
import Logout from "../logout/page";

const Navbar = ({ login }) => {
  return (
    <nav className="bg-[#654781] flex justify-between items-center px-8 py-5">
      <div className="">Necxis</div>
      <div className="">
        <a className="mx-10  hover:underline underline-offset-5" href="/componets/landing">
          Home
        </a>
        <a className="mx-10  hover:underline underline-offset-5" href="">
          About
        </a>
        <a className="mx-10  hover:underline underline-offset-5" href="">
          Contact us
        </a>
      </div>
      <div className="">
        <Logout/>
      </div>
    </nav>
  );
};

export default Navbar;
