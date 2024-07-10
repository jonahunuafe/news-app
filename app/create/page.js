import React from 'react'
import Heading from '@/components/Heading'
import CreateForm from '@/components/CreateForm'
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const CreatePage = async () => {
  const { isAuthenticated } = getKindeServerSession();
  return (await isAuthenticated() ? (
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
      <div className='flex flex-col items-center mt-56'>
        <h1 className='text-center text-white px-3 text-lg'>
          You Want to Create a Post?
        </h1>
        <button className='text-white bg-green-500 py-1 px-2 mt-3 hover:bg-green-400 rounded-md'>
          <LoginLink>Login</LoginLink>
        </button>
      </div>
    )
  )
}

export default CreatePage