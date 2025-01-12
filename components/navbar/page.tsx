import React from 'react'
import logoExerLight from '@/images/Exer-light.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-[#15394A] px-16 py-5 flex w-full justify-between'>
        <div className='w-1/2'>
            <Image src={logoExerLight} alt='logo' className='w-24 h-8'/>
        </div>
        <div className='w-1/2 flex justify-end space-x-8'>
            <a href='/aboutUs' className='text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm'>About Us</a>
            <a href='/divisions' className='text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm'>Divisions</a>
            <a href='/download' className='text-white py-1 px-1 hover:bg-indigo-700 hover:rounded-sm'>Download Booklet</a>
            <a href='/login' className='text-[#15394A] font-bold bg-white rounded-xl px-4 py-1 hover:bg-indigo-300 hover:rounded-xl'>Login</a>
        </div>
    </div>
  )
}

export default Navbar