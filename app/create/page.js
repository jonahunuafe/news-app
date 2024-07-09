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
      <div>
        <h1>You can only create a post when you are logged in</h1>
        <p><LoginLink>Login</LoginLink></p>
      </div>
    )
  )
}

export default CreatePage