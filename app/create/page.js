import React from 'react'
import Heading from '@/components/Heading'
import CreateForm from '@/components/CreateForm'

const CreatePage = () => {
  return (
    <section >
        <Heading
          title="Fill in the Form Below to Make a Post of Latest News."
          description="News Based on Assumption and False claim is highly Prohibited!"
        />
        <div className='flex flex-col items-center justify-center mt-10'>
          <CreateForm />
        </div>
    </section>
  )
}

export default CreatePage