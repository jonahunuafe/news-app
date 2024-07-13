import React from 'react'
import Heading from '@/components/Heading'
import CreateForm from '@/components/CreateForm'
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const CreatePage = async () => {
  const {isAuthenticated} = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <>
    { isUserAuthenticated ? (
      <section>
        <Heading
          title="Fill in the Form Below to Make a Post of Latest News."
          description="News Based on Assumption and False claim is highly Prohibited!"
        />
        <div className='flex flex-col items-center justify-center mt-10'>
          <CreateForm />
        </div>
      </section>
    ) : (
      <div className='flex flex-col justify-center items-center h-[90vh]'>
        <p className='text-white pb-3'>
          Do You Want To Post News?
        </p>
        <div className='h-1 w-[30%] md:w-[10%] bg-emerald-400 rounded mx-auto'></div>
        <LoginLink className='text-white bg-emerald-500 py-1 px-3 rounded mt-8 cursor-pointer hover:bg-emerald-400'>
          Login
        </LoginLink>
      </div>
    )
  }
  </>
  )
}

export default CreatePage