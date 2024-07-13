import React from 'react'
import Link from 'next/link'
import {FiPlusCircle, FiHome} from "react-icons/fi"

const Navbar = async () => {
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center bg-zinc-800 px-8 py-6'>
      <Link href={'/'} className='text-white font-bold text-base md:text-lg font-serif border-b-2 md:border-b-0 pb-1 md:pb-0'>The News Room</Link>
      <div className='flex flex-col sm:justify-between gap-5 md:gap-10 md:flex-row w-full md:w-8/12 lg:w-[47%]'>
        <div className='flex justify-between w-full md:w-80 lg:w-64 mt-4 md:mt-0'>
          <Link 
            className='flex items-center gap-1 font-medium text-white cursor-pointer'
            href={'/'}
          >
            <FiHome /> <span>Home</span>
          </Link>
          <Link 
            className='flex items-center gap-1 text-white font-medium cursor-pointer'
            href={'/create'}
          >
            <FiPlusCircle /> <span>Create</span>
          </Link>
        </div>
        <div className='flex justify-between w-full md:w-[90%] lg:w-60'>
          <p className='text-white font-medium cursor-pointer'>
            Login in
          </p>
          <p className='text-white font-medium cursor-pointer'>
            Register
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar