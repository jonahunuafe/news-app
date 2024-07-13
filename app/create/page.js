import React from 'react'
import Heading from '@/components/Heading'
import CreateForm from '@/components/CreateForm'
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
      <div>Access Denied</div>
    )
  }
  </>
  )
}

export default CreatePage