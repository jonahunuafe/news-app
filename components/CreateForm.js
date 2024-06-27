'use client'
import React from 'react'
import Input from './Input'
import { addContact } from '@/lib/action'
import CreateFormSubmit from './CreateFormSubmit'


const CreateForm = () => {
    return (
        <div>
            <form
                action={addContact}
                className='bg-gray-100 items-center p-2  rounded'
            >
                <div className='flex mb-4'>
                    <div className='w-1/2 pr-2'>
                        <label className='text-gray-700'>Headline</label>
                        <Input
                        type='text'
                        placeholder="Headline"
                        name='headline'
                        />
                    </div>
                    <div className='w-1/2 pr-2'>
                        <label className='text-gray-700'>Creator</label>
                        <Input
                        type='text'
                        placeholder="Creator"
                        name='creator'
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <label>Description</label>
                    <textarea placeholder="description" name="description" rows='5' />
                </div>
                <div className='flex mb-4'>
                    <div className='w-1/2 pr-2'>
                        <label className='text-gray-700'>Email</label>
                        <Input
                        type='text'
                        placeholder="Email"
                        name='email'
                        />
                    </div>
                    <div className='w-1/2 pr-2'>
                        <label className='text-gray-700'>Date</label>
                        <Input
                        type='date'
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