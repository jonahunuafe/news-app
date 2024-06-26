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
            title='Did you Make a Typo or Need to Make Adjustment?.'
            description='View & Update News Below!'
        />
        <Navbar />
        <div className='w-[90%] md:w-[70%] m-auto'>
            <form
                action={updateContact}
                className='bg-gray-100 flex flex-col items-center p-2 rounded mt-10'
            >
            <div className='flex mb-4 w-[100%]'>
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
                    name='creator'
                    />
                </div>
            </div>
            <div className='flex flex-col mb-4 w-[100%]'>
                <label>Description</label>
                <textarea 
                    className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus-outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
                    placeholder={contact.description} 
                    name="description" 
                    rows='5' 
                />
            </div>
            <div className='flex mb-4 w-[100%]'>
                <div className='w-1/2 pr-2'>
                    <label className='text-gray-700'>Email</label>
                    <Input
                    type='text'
                    placeholder={contact.email}
                    name='email'
                    />
                </div>
                <div className='w-1/2 pr-2'>
                    <label htmlFor='date' className='text-gray-700'>Date</label>
                    <Input
                    type='date'
                    id='date'
                    placeholder="Date"
                    name='date'
                    />
                </div>
            </div>
            <CreateFormSubmit  className='bg-orange-400 px-3 py-1 rounded' loadingText="Updating Contact..." text="Update Contact"/>
        </form>
        </div>
    </section>
  )
}

export default EditSingleContact;