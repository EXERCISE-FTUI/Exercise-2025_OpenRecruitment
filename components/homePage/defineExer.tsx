import React from 'react'
import exerBox1 from '@/images/exerBox-1.svg'

import whatIs from '@/images/whatIs.svg'
import Image from 'next/image'

const DefineExer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto pb-10">
        <Image src={whatIs} alt="whatIs" className="w-60 h-28 max-md:w-40 max-md:h-16 max-md:pl-8" />
        <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:justify-center max-md:items-center'>
          <div className='flex flex-col max-md:items-center max-md:justify-center'>
            <Image src={exerBox1} alt="exerBox1" className="w-[380px] h-40 max-md:w-[290px] max-md:h-32 items-center" />
          </div>
        <div className='w-[425px] p-3 text-center h-auto m-auto self-stretch'>
          <p className='text-lg text-blue_2'>
          We have been innovating since <span className='font-black'>2016</span> with a track record of qualified work and have become the <span className='font-black'>largest technology organization at the Faculty of Engineering</span>, University of Indonesia.
          </p>
        </div>
        </div>
    </div>
  )
}

export default DefineExer