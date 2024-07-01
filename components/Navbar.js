import React from 'react'
import Link from 'next/link'
import {FiPlusCircle, FiHome} from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-700 px-8 py-6'>
      <Link href={'/'} className='text-white font-bold text-base md:text-lg font-serif'>The News Room</Link>
      <div className='text-white cursor-pointer flex gap-6 md:gap-20 items-center'>
        <Link 
          className='flex items-center gap-1 font-medium'
          href={'/'}
        >
          <FiHome /> <span>Home</span>
        </Link>
        <Link 
          className='flex items-center gap-1 font-medium'
          href={'/create'}
        >
          <FiPlusCircle /> <span>Create</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar