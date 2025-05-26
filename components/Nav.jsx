"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavList = ["About", "Services", "Projects"];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="relative z-50 ">
      <nav className="max-w-screen-xl mx-auto px-4 py-6 
      flex text-sm items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/icons/logo.svg" width={120} height={50} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 items-center text-white font-medium">
          {NavList.map((item, index) => (
            <li key={index}>
              <Link href="/" className="hover:text-black transition font-fraunces">
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/"
              className="bg-white hover:bg-opacity-40 text-black
               font-bold py-2 px-6 rounded-full font-fraunces uppercase tracking-wide
               hover:text-white transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger - Mobile only */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <Image
              src="/icons/icon-hamburger.svg"
              width={24}
              height={24}
              alt="menu close"
            />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-1/2 -translate-x-1/2 bg-white w-[90%] py-6 rounded-md shadow-lg flex flex-col items-center space-y-6 text-lg text-gray-700">
          {/* Triangle Pointer */}
          <div className="absolute -top-3 right-4 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-white"></div>

          {NavList.map((item, index) => (
            <Link key={index} href="/" className="hover:text-black font-fraunces transition">
              {item}
            </Link>
          ))}
          <Link
            href="/"
            className="bg-yellow hover:bg-opacity-100 text-black font-fraunces font-extrabold py-2 px-6 rounded-full uppercase tracking-wide"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
