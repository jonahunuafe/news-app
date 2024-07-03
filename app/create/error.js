'use client'

import React from 'react'

const error = () => {
  return (
    <div className='flex flex-col align-middle justify-center gap-6 bg-red-100 h-[100vh]'>
        <h1 className='text-center text-xl md:text-2xl font-medium text-red-600'>
            An error occured!
        </h1>
        <p className='text-center text-xl md:text-2xl font-medium px-4 text-red-600'>
            Failed to Create News, Please Make Sure all Fields are Filled Before Posting a News
        </p>
    </div>
  )
}

export default error