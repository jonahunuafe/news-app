"use client"

import React from 'react'
import { CldUploadButton } from 'next-cloudinary';

function Photos() {
  return (
    <div className='bg-emerald-950 w-max'>
        <CldUploadButton
            options={{ multiple: true }}
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
        >
            <span>
                Upload Image
            </span>
        </CldUploadButton>
    </div>
  )
}

export default Photos;