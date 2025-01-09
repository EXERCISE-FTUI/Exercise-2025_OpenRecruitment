
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
 
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='mb-10 text-9xl'>
      EXERCISE FTUI
      </div>  
      <div>
        <Link className='bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded size-auto p-4 text-xl'
        href={'/dashboard/upload'}>
          Upload Form
        </Link>
      </div>
    </div>
  )
}

export default HomePage