'use client';

import React from 'react';
import Exer_Footer from '@/images/Exer-Footer.svg';
import Image from 'next/image';
import location from '@/images/location.svg';
import email from '@/images/email.svg';
import instagramWhite from '@/images/instagramWhite.svg';
import linkedinWhite from '@/images/linkedinWhite.svg';

const Footer = () => {
  const handleClickInstagram = () => {
    window.open('https://www.instagram.com/exercise.ftui/');
  };

  const handleClickLinkedin = () => {
    window.open('https://www.linkedin.com/company/exercise-ftui/', '_blank');
  };

  return (
    <div className="w-full flex flex-col h-auto bg-gradient-to-r from-purple_4 via-blue_1 to-purple_2 font-light">
      {/* Top Section */}
      <div className="w-full h-full hidden md:flex flex-row m-12">
        {/* Left Section */}
        <div className="w-1/2 h-full">
          <div className="flex flex-col items-center w-[50%] justify-center h-full mt-8">
            <Image src={Exer_Footer} alt="logo" className="w-72 h-36" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-full bg-gradient-to-r from-blue_1 to-purple_2 flex flex-col justify-center mr-12">
          <div className="flex flex-row items-start gap-4 px-8 pr-24">
            <Image src={location} alt="location" className="w-6 h-6" />
            <p className="text-md text-white">
              Faculty of Engineering, University of Indonesia, Jl. Prof. DR. Ir R Roosseno, Kukusan, Beji, Depok City,
              West Java 16425
            </p>
          </div>
          <div className="flex flex-row items-start gap-4 px-8 mt-6">
            <Image src={email} alt="email" className="w-6 h-6" />
            <p className="text-md text-white">hr@exerciseftui.com</p>
          </div>
          <div className="flex flex-col items-start gap-2 px-8 mt-6">
            <p className="text-md text-white font-extrabold">Follow us</p>
            <div className="flex flex-row gap-4">
              <Image
                src={instagramWhite}
                alt="instagram"
                className="w-6 h-6"
                onClick={handleClickInstagram}
              />
              <Image
                src={linkedinWhite}
                alt="linkedin"
                className="w-6 h-6"
                onClick={handleClickLinkedin}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="md:hidden flex flex-row gap-10 mb-12">
        <div className="w-[65%] h-full flex flex-col gap-7">
          <div className="flex flex-col items-center w-[50%] justify-center h-full mt-8">
            <Image src={Exer_Footer} alt="logo" className="w-full ml-16" />
          </div>
          <div className="items-start flex flex-row pl-8 pr-12 max-md:pr-0">
            <Image src={location} alt="location" className="w-6 h-6" />
            <p className="text-md text-white">
              Faculty of Engineering, University of Indonesia, Jl. Prof. DR. Ir R Roosseno, Kukusan, Beji, Depok City,
              West Java 16425
            </p>
          </div>
        </div>
        <div className="w-[35%] h-full flex flex-col gap-7 mr-12">
          <div className="flex flex-col items-start gap-2 mt-6">
            <p className="text-lg text-white font-medium gap-6">Follow us</p>
            <div className="flex flex-row gap-4">
              <Image
                src={instagramWhite}
                alt="instagram"
                className="w-8 h-8"
                onClick={handleClickInstagram}
              />
              <Image
                src={linkedinWhite}
                alt="linkedin"
                className="w-8 h-8"
                onClick={handleClickLinkedin}
              />
            </div>
          </div>
          <div className="flex flex-row items-start gap-4 max-md:gap-2 mt-12">
            <Image src={email} alt="email" className="w-6 h-6" />
            <p className="text-md text-white">hr@exerciseftui.com</p>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-10 flex items-center justify-center">
        <p className="text-white text-md">© 2025 Exercise FTUI.</p>
      </div>
    </div>
  );
};

export default Footer;
