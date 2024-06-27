import React from 'react'
import Heading from '@/components/Heading'
import Navbar from '@/components/Navbar'
import Input from '@/components/Input'
import CreateFormSubmit from '@/components/CreateFormSubmit'
import { getContact } from '@/lib/data'
import { updateContact } from '@/lib/action'

const EditSingleContact = async ({ params }) => {
    const { id } = params;
    const contact = await getContact(id)
  return (
    <section>
        <Heading
            title='Single Contact'
            description='View & Update Contact Below'
        />
        <Navbar />
        <div className='flex flex-col py-4 px-4'>
            <form
            action={updateContact}
            className='bg-gray-100 flex flex-col items-center p-2 rounded'
            >
                <div className='flex mb-4'>
                <div className='w-1/2 pr-2'>
                    <input type='text' name='id' hidden value={contact.id} />
                    <label className='text-gray-700'>Headline</label>
                    <Input
                    type='text'
                    placeholder={contact.headline}
                    name='headline'
                    />
                </div>
                <div className='w-1/2 pr-2'>
                    <label className='text-gray-700'>Creator</label>
                    <Input
                    type='text'
                    placeholder={contact.creator}
                    name='lastName'
                    />
                </div>
            </div>
            <div className='w-full'>
                <label>Description</label>
                <textarea placeholder={contact.description} name="description" rows='5' />
            </div>
            <div className='flex mb-4'>
                <div className='w-1/2 pr-2'>
                    <label className='text-gray-700'>Email</label>
                    <Input
                    type='text'
                    placeholder={contact.email}
                    name='email'
                    />
                </div>
            </div>
            <CreateFormSubmit  className='btn btn-wide bg-orange-400' loadingText="Updating Contact..." text="Update Contact"/>
        </form>
        </div>
    </section>
  )
}

export default EditSingleContact