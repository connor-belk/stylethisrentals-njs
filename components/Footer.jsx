import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 bg-slate-800 text-slate-200">
      {/* SOCIALS */}
      <div>
        <h3 className="text-3xl mb-3">Socialize With Us</h3>
        <div className="flex justify-around items-between gap-3 pt-5">
          <Link
            href="https://www.instagram.com/stylethisrentals/"
            className="hover:scale-105 hover:text-green-300 transition-all duration-150"
          >
            <FaInstagram size={45} />
          </Link>
          <Link
            href="https://www.facebook.com/stylethisrentals/"
            className="hover:scale-105 hover:text-green-300 transition-all duration-150"
          >
            <FaFacebook size={45} />
          </Link>
          <Link
            href="https://www.tiktok.com/stylethisrentals/"
            className="hover:scale-105 hover:text-green-300 transition-all duration-150"
          >
            <FaTiktok size={45} />
          </Link>
        </div>
      </div>
      {/* SITE MAP */}
      <div className="hidden sm:block">
        <h3 className="text-3xl">Site Map</h3>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Dresses</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-1 sm:col-span-2 pt-4">
        <p className="text-center text-slate-400 text-xs sm:text-sm">
          Copyright &copy; 2023{" "}
          <Link href="https://stylethisrentals.com/">StyleThisRentals</Link> |
          Designed by <Link href="https://geoffreybelk.tech/">GBWS</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
