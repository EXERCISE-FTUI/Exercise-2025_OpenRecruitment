import React from 'react';
import Exer_Footer from '@/images/Exer-Footer.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-full h-48 flex flex-row">
      <div className="w-1/2 h-full bg-gradient-to-r from-purple_4 to-blue_1">
      <div className='flex flex-col justify-start my-8 ml-16'>
        <Image src={Exer_Footer} alt="logo" className="w-48 h-24" />
        </div>
      </div>
      <div className="w-1/2 h-full bg-gradient-to-r from-blue_1 to-purple_2">
        {/* Konten sisi kanan footer */}
      </div>
    </div>
  );
};

export default Footer;
