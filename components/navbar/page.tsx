import React from 'react'
import logoExerLight from '@/images/Exer-light.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-screen flex justify-center items-center p-5'>
    <div className='bg-gradient-to-r from-purple_5 to-purple_2 px-2 py-3 flex justify-between rounded-md backdrop-blur-md shadow-lg z-10 w-full items-center'>
        <div className='w-[40%]'>
            <Image src={logoExerLight} alt='logo' className='w-24 h-8 ml-12'/>
        </div>
        <div className='w-[40%] flex justify-end mr-10 space-x-8 '>
            <a href='/aboutUs' className='text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm'>About Us</a>
            <a href='/divisions' className='text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm'>Divisions</a>
            <a href='/download' className='text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm'>Download Booklet</a>
            <a href='/login' className='text-[#15394A] font-bold bg-white rounded-xl px-4 py-1 hover:bg-indigo-300 hover:rounded-xl'>Login</a>
        </div>
    </div>
    </div>
  )
}

export default Navbar