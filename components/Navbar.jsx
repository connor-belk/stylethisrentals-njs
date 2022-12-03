import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#fefefe");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fefefe");
        setTextColor("#101010");
      } else {
        setColor("transparent");
        setTextColor("#fefefe");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <nav className="flex justify-between items-center p-5">
        <Link href="#">
          <h1
            style={{ color: `${textColor}` }}
            className="font-tanmoncheri font-bold text-3xl sm:text-4xl pt-3"
          >
            StyleThisRentals
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden md:flex gap-6 text-xl"
        >
          <li className="hover:text-slate-200 hover:scale-105 transition-all duration-150">
            <Link href="#">Dresses</Link>
          </li>
          <li className="hover:text-slate-200 hover:scale-105 transition-all duration-150">
            <Link href="#">About</Link>
          </li>
          <li className="hover:text-slate-200 hover:scale-105 transition-all duration-150">
            <Link href="#">FAQ</Link>
          </li>
          <li className="hover:text-slate-200 hover:scale-105 transition-all duration-150">
            <Link href="#">Contact</Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <div className="block md:hidden z-10">
          {nav ? (
            <AiOutlineClose
              style={{ color: `#fefefe` }}
              size={30}
              onClick={handleNav}
            />
          ) : (
            <AiOutlineMenu
              style={{ color: `${textColor}` }}
              size={30}
              onClick={handleNav}
            />
          )}
        </div>
        {/* MOBILE MENU */}
        <div
          className={
            nav
              ? "md:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black/90 text-center ease-in-out transition-all duration-400"
              : "md:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black/90 text-center ease-in-out transition-all duration-400"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="text-[#fefefe] text-4xl py-5 hover:text-gray-500 transition-all duration-150"
            >
              <Link href="/">Dresses</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-[#fefefe] text-4xl py-5 hover:text-gray-500 transition-all duration-150"
            >
              <Link href="#">FAQ</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-[#fefefe] text-4xl py-5 hover:text-gray-500 transition-all duration-150"
            >
              <Link href="#">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-[#fefefe] text-4xl py-5 hover:text-gray-500 transition-all duration-150"
            >
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
