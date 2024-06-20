import React from 'react'
import Heading from '@/components/Heading'
import Navbar from '@/components/Navbar'
import Input from '@/components/Input'

const SingleContact = () => {
  return (
    <section>
        <Heading
            title='Single Contact'
            description='View & Update Contact Below'
        />
        <Navbar />
        <div className='flex flex-col py-4 px-4'>
            <form
            className='bg-gray-100 flex flex-col items-center p-2 rounded'
            >
                <div className='flex mb-4'>
                <div className='w-1/2 pr-2'>
                    <input type='text' name='id' hidden />
                    <label className='text-gray-700'>FirstName</label>
                    <Input
                    type='text'
                    name='firstName'
                    />
                </div>
                <div className='w-1/2 pr-2'>
                    <label className='text-gray-700'>LastName</label>
                    <Input
                    type='text'
                    name='lastName'
                    />
                </div>
            </div>
            <div className='flex mb-4'>
                <div className='w-1/2 pr-2'>
                    <label className='text-gray-700'>Email</label>
                    <Input
                    type='text'
                    name='email'
                    />
                </div>
                <div className='w-1/2 pr-2'>
                    <label className='text-gray-700'>Contact Number</label>
                    <Input
                    type='number'
                    name='phone'
                    />
                </div>
            </div>
            <button 
            className='btn btn-wide bg-orange-400'
            type='submit'>
                Update Contact
            </button>
        </form>
        </div>
    </section>
  )
}

export default SingleContact