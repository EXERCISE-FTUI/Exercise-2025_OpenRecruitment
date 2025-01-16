import React from 'react'
import ourVisionsvg from '@/images/ourVision.svg'
import Image from 'next/image'

const OurVision = () => {
  return (
    <div className='w-full max-w-4xl mx-auto pb-32 flex flex-col justify-center items-center max-md:p-4'>
         <h1 className="text-7xl text-center font-normal text-blue_2 max-md:text-6xl mb-14 max-md:mb-5 ">
            Our <span className="font-black text-purple_4">Vision</span>
          </h1>
        <div className='w-full h-auto p-4 text-center bg-gradient-to-r from-blue_2 to-purple_4'>
            <p className='text-white_1 text-md font-light'>
            EXERCISE 2025 as a professional, inspiring, and supportive family where every member can grow, learn, and gain meaningful experiences. Bringing EXERCISE to greater recognition across the Faculty of Engineering and other faculties through innovation, a sense of family values, and a spirit of collaboration.
            </p>
        </div>
    </div>
  )
}

export default OurVision