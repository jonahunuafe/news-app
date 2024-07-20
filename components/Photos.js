import React from 'react'
import { CldUploadButton } from 'next-cloudinary';

function Photos() {
  return (
    <div>
        <CldUploadButton
            options={{ multiple: true }}
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
        >
            <span>
                Upload
            </span>
        </CldUploadButton>
    </div>
  )
}

export default Photos;