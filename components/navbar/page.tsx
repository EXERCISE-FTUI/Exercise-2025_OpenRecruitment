"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logoExerLight from '@/images/Exer-light.png';
import dteExer from '@/images/dteExer.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed z-50 w-screen flex items-center justify-center">
      {/* Navbar for larger screens */}
      <div className="hidden md:flex justify-center w-[80%] items-center p-5">
        <div className="bg-gradient-to-r from-purple_5 via-blue_1 to-purple_3 px-2 py-3 flex justify-between rounded-md backdrop-blur-md shadow-lg z-10 w-full items-center">
          <div className="w-[40%]">
            <a href="/">
            <Image src={logoExerLight} alt="logo" className="w-24 h-8 ml-12" />
            </a>
          </div>
          <div className="w-[40%] flex justify-end mr-10 space-x-8">
            <a
              href="/aboutUs"
              className="text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm"
            >
              About Us
            </a>
            <a
              href="/divisions"
              className="text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm"
            >
              Divisions
            </a>
            <a
              href="/download"
              className="text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm"
            >
              Download Booklet
            </a>
            <a
              href="/login"
              className="text-[#15394A] font-bold bg-white rounded-xl px-4 py-1 hover:bg-indigo-300 hover:rounded-xl"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Navbar for mobile screens */}
      <div className="md:hidden flex flex-col items-start gap-2.5 px-5 py-3 w-full">
        <div className="bg-gradient-to-r from-purple_5 via-blue_3 to-purple_4 w-full h-16 rounded-xl flex justify-between items-center px-5">
          <a href='/'>
          <Image src={dteExer} alt="logo" className="w-14 h-auto" />
          </a>
         
          <div
            className="w-10 h-10 bg-[#15394a]/0 rounded flex flex-col justify-center items-center gap-1.5 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
          </div>
        </div>

        {/* Dropdown menu */}
        {isMobileMenuOpen && (
          <div className="w-full bg-gradient-to-r from-purple_5 via-blue_3 to-purple_4 rounded-xl mt-2 shadow-lg flex flex-col space-y-2 px-5 py-3">
            <a
              href="/aboutUs"
              className="text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm"
            >
              About Us
            </a>
            <a
              href="/divisions"
              className="text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm"
            >
              Divisions
            </a>
            <a
              href="/download"
              className="text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm"
            >
              Download Booklet
            </a>
            <a
              href="/login"
              className="text-[#15394A] font-bold bg-white rounded-xl px-4 py-1 hover:bg-indigo-300 hover:rounded-xl"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
