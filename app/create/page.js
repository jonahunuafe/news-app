import React from 'react'
import Heading from '@/components/Heading'
import CreateForm from '@/components/CreateForm'

const CreatePage = () => {
  return (
    <section >
        <Heading
          title="Add Contact"
          description="Add Contacts Below"
        />
        <div className='flex flex-col items-center justify-center'>
          <CreateForm />
        </div>
    </section>
  )
}

export default CreatePage