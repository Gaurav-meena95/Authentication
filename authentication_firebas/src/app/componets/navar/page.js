"use client";
import Link from "next/link";
import React from "react";

const Navbar = ({ login }) => {
  return (
    <nav className="bg-[#654781] flex justify-between items-center px-8 py-5">
      <div className="">Necxis</div>
      <div className="">
        <a className="mx-10  hover:underline underline-offset-5" href="">
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
        <Link href={"/componets/login"}>
          <button className="bg-purple-500 p-1 px-5 rounded-lg border-none hover:bg-purple-700 transition hover:cursor-pointer ">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
