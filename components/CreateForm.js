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
                        <label className='text-gray-700'>FirstName</label>
                        <Input
                        type='text'
                        placeholder="FirstName"
                        name='firstName'
                        />
                    </div>
                    <div className='w-1/2 pr-2'>
                        <label className='text-gray-700'>LastName</label>
                        <Input
                        type='text'
                        placeholder="LastName"
                        name='lastName'
                        />
                    </div>
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
                        <label className='text-gray-700'>Contact Number</label>
                        <Input
                        type='number'
                        placeholder="Contact Number"
                        name='phone'
                        />
                    </div>
                </div>
                <CreateFormSubmit className="btn btn-wide bg-orange-400" loadingText="Creating Contact..." text="Create Contact" />
            </form>
        </div>
    )
}

export default CreateForm