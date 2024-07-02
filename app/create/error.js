'use client'

import React from 'react'

const error = () => {
  return (
    <div className='flex flex-col align-middle justify-center bg-red-100 h-[100vh]'>
        <p className='text-center text-xl md:text-2xl font-medium px-3'>
            Failed to Create News, Please Make Sure all Fields are Filled Before Posting a News
        </p>
    </div>
  )
}

export default error