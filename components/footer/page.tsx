import React from 'react';
import Exer_Footer from '@/images/Exer-Footer.svg';
import Image from 'next/image';
import location from '@/images/location.svg';
import email from '@/images/email.svg';
import instagramWhite from '@/images/instagramWhite.svg';
import linkedinWhite from '@/images/linkedinWhite.svg';

const Footer = () => {
  return (
    <div className="w-full flex flex-col  h-auto my-10">
      {/* Top Section */}
      <div className="w-full flex flex-row">
        {/* Left Section */}
        <div className="w-1/2 h-full bg-gradient-to-r from-purple_4 to-blue_1">
          <div className="flex flex-col justify-start my-8 ml-16">
            <Image src={Exer_Footer} alt="logo" className="w-48 h-24" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-full bg-gradient-to-r from-blue_1 to-purple_2 flex flex-col justify-center">
          <div className="flex flex-row items-start gap-4 px-8">
            <Image src={location} alt="location" className="w-6 h-6" />
            <p className="text-sm text-white">
              Faculty of Engineering, University of Indonesia, Jl. Prof. DR. Ir R Roosseno, Kukusan, Beji, Depok City, West Java 16425
            </p>
          </div>
          <div className="flex flex-row items-start gap-4 px-8 mt-6">
          <Image src={email} alt="email" className="w-6 h-6" />
            <p className="text-sm text-white">
             hr@exerciseftui.com
            </p>
          </div>

        </div>
      </div>

    
    </div>
  );
};

export default Footer;
