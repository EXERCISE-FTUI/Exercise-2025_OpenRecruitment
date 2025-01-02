import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='justify-center items-center flex flex-col h-screen'>
    <h1>This is Users Page</h1>
    <div className='flex flex-col'>
        <Link href='/dashboard/users/1'> For User 1</Link>
        <Link href='/dashboard/users/2'> For User 2</Link>
        <Link href='/dashboard/users/3'> For User 3</Link>
    </div>
    </div>
  )
}

export default Page