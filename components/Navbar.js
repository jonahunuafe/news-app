import React from 'react'
import Link from 'next/link'
import {FiPlusCircle, FiHome} from "react-icons/fi"
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user)
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center bg-zinc-800 px-8 py-6'>
      <Link href={'/'} className='text-white font-bold text-base md:text-lg font-serif border-b-2 md:border-b-0 pb-1 md:pb-0'>The News Room</Link>
      <div className='flex flex-col justify-between gap-5 md:gap-x-10 md:flex-row w-full md:w-8/12 lg:w-6/12'>
        <div className='flex justify-between w-full md:w-80 lg:w-60'>
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
        {
          user ? 
            <div className='flex justify-between w-full md:w-[90%] lg:w-72'>
              <p className='text-white'>
                Logged in as <span className='text-orange-300 font-semibold'>{user.given_name}</span>
              </p>
              <LogoutLink className='text-white font-medium cursor-pointer'>Logout</LogoutLink>
            </div>
            : (
            <div className='flex justify-between w-full pt-4 pb-1 md:pt-0 md:pb-0'>
              <LoginLink className='text-white font-medium cursor-pointer'>
                Login in
              </LoginLink>
              <RegisterLink className='text-white font-medium cursor-pointer'>
                Register
              </RegisterLink>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar