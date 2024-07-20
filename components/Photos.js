// "use client"

// import React from 'react'
// import { CldUploadButton } from 'next-cloudinary';

// function Photos() {
//   return (
//     <div className='bg-emerald-950 w-max'>
//         <CldUploadButton
//             options={{ multiple: true }}
//             uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
//         >
//             <span>
//                 Upload Image
//             </span>
//         </CldUploadButton>
//     </div>
//   )
// }

// export default Photos;

"use client";
import { CldImage } from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Photos() {
  return (
    <div>
    <CldImage
      src="cld-sample-3" // Use this sample image or upload your own via the Media Explorer
      width="500" // Transform the image: auto-crop to square aspect_ratio
      height="500"
      crop={{
        type: 'auto',
        source: true
      }}
    />
    </div>
  );
}