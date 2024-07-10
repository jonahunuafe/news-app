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
      <div className='text-white flex justify-between items-center w-full md:w-1/4 lg:w-1/3 pt-4 pb-1 md:pt-0 md:pb-0'>
        <Link 
          className='flex items-center gap-1 font-medium cursor-pointer'
          href={'/'}
        >
          <FiHome /> <span>Home</span>
        </Link>
        <Link 
          className='flex items-center gap-1 font-medium cursor-pointer'
          href={'/create'}
        >
          <FiPlusCircle /> <span>Create</span>
        </Link>
      </div>
      <div>
        {
          user ? 
            <div>
              <p>{user.given_name}</p>
              <LogoutLink className='text-white font-medium cursor-pointer'>Logout</LogoutLink>
            </div>
            : (
            <div className='flex gap-10'>
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