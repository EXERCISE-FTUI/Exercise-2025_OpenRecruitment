import Link from 'next/link';
import React from 'react'

const Page = ({ params } : { params : {id : string}} ) => {
    const { id } = params;

  return (
    <div className='justify-center items-center flex flex-col h-screen'>
        <h1 className='mb-10'>Welcome Users {id} </h1>
        <Link href='/dashboard/users'> Back </Link>

    </div>
  )
}

export default Page