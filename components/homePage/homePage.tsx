import React from 'react';
import hexagonLeft from '@/images/hexagonLeft.svg';
import polygonRight from '@/images/polygonRight.svg';
import star1_topLeft from '@/images/star1_topLeft.svg';
import star2_middleLeft from '@/images/star2_middleLeft.svg';
import star3_bottomRight from '@/images/star3_bottomRight.svg';
import headerExer from '@/images/headerExer.svg';
import Image from 'next/image';

const HomePageExer = () => {
  return (
    <div className="w-full h-[500px] pb-20">
      <div className="w-full h-[130%] flex flex-col justify-center items-center">
        <h1 className="text-7xl max-md:text-4xl font-black text-blue_3">
          <span className="bg-gradient-to-r from-purple_3 to-gray_2 bg-clip-text text-transparent">
            Open
          </span>{' '}
          Recruitment
        </h1>
        <div className='p-6'>
          <div className='p-5 max-md:p-2 w-full h-auto bg-blue_3 text-white_2'>
            <p className='text-5xl max-md:text-2xl font-light'>
              EXERCISE 2025
            </p>
          </div>
        </div>
        <div className='w-full gap-2 text-center'>
        <Image src={headerExer} alt="ExerFooter" className="w-full h-[100px] z-10" />
        <p className='text-blue_3 text-2xl max-md:text-lg font-extrabold italic'>#IntoTheExerverse</p>
        </div>
      </div>
      {/*Left Section */}
      <Image src={hexagonLeft} alt="hexagonLeft" className="absolute top-20 left-0 size z-0 max-lg:hidden" />
      <Image src={star1_topLeft} alt="star1_topLeft" className="absolute top-52 left-64 size-16 max-lg:left-14 max-lg:size-10 z-0" />
      <Image src={star2_middleLeft} alt="star2_middleLeft" className="absolute top-[340px] left-[380px] size max-lg:left-20 max-lg:size-7 max-lg:rotate-[28deg] z-0" />
      <Image src={star3_bottomRight} alt="star3_bottomRight" className="absolute top-[420px] left-48 size-32 max-lg:left-[-38px] max-lg:size-24 z-0" />

       {/*Right Section */}
      <Image src={polygonRight} alt="polygonRight" className="absolute top-44 right-0 size z-0 max-lg:hidden" />
      <Image src={star1_topLeft} alt="star1_topLeft" className="absolute top-40 right-48 size z-0 max-lg:right-0 max-lg:size-20" />
      <Image src={star2_middleLeft} alt="star2_middleLeft" className="absolute top-80 right-[340px] size z-0 max-lg:size-8 max-lg:right-32 max-md:right-16" />
      <Image src={star1_topLeft} alt="star1_topLeft" className="absolute top-[480px] right-52 size-12 z-0 max-lg:top-[440px] max-lg:size-6 max-lg:right-8" />

    </div>
  );
};

export default HomePageExer;
