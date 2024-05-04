"use client";
import Link from "next/link";
import { useState } from "react";

const NavbarTop = () => {
  const [showMobileMenu, setShowMobileMenu] = useState();
  let navbarList = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skill & Experiance", link: "#skillandexperiance" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 4, name: "Education", link: "#education" },
    { id: 4, name: "Contact Me", link: "#contactme" },
  ];
  return (
    <nav>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[10vh] px-4">
        <div className="flex-shrink-0 font-bold tracking-wider text-2xl text-purple">
          MEHEDI
        </div>
        <div className="hidden md:block">
          <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium">
            {navbarList?.map((navItem, index) => {
              return (
                <Link
                  key={index}
                  href={navItem.link}
                  className="block md:inline-block px-3 py-2 rounded-md hover:text-purple"
                >
                  {navItem.name}
                </Link>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden z-50">
        {showMobileMenu && (
          <div className="px-2 py-3 space-y-2 font-medium text-slate-700">
            {navbarList?.map((navItem, index) => {
              return (
                <Link
                  key={index}
                  href={navItem.link}
                  className="block px-3 py-2 rounded-md hover:text-purple"
                >
                  {navItem.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarTop;
