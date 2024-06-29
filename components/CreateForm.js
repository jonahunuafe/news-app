'use client'
import React from 'react'
import Input from './Input'
import { addContact } from '@/lib/action'
import CreateFormSubmit from './CreateFormSubmit'


const CreateForm = () => {
    return (
        <div className="w-[90%] md:w-[70%]">
            <form
                action={addContact}
                className='bg-gray-100 items-center p-2  rounded'
            >
                <div className='flex mb-4'>
                    <div className='w-1/2 pr-2'>
                        <label htmlFor='headline' className='text-gray-700'>Headline</label>
                        <Input
                        type='text'
                        id='headline'
                        placeholder="Headline"
                        name='headline'
                        />
                    </div>
                    <div className='w-1/2 pr-2'>
                        <label htmlFor='creator' className='text-gray-700'>Creator</label>
                        <Input
                        type='text'
                        id='creator'
                        placeholder="Creator"
                        name='creator'
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor='description'>Description</label>
                    <textarea 
                        id='description'
                        className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus-outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
                        placeholder='Description' 
                        name='description' 
                        rows='10' 
                    />
                </div>
                <div className='flex mb-4'>
                    <div className='w-1/2 pr-2'>
                        <label htmlFor='email' className='text-gray-700'>Email</label>
                        <Input
                        type='text'
                        id='email'
                        placeholder='Email'
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
                <CreateFormSubmit className="btn btn-wide bg-orange-400" loadingText="Creating Contact..." text="Create Contact" />
            </form>
        </div>
    )
}

export default CreateForm