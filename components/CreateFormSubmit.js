'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';


const CreateFormSubmit = ({ loadingText, text }) => {
    const { pending } = useFormStatus();
  
    return (
        <button 
            className='btn btn-wide bg-orange-400'
            type='submit'
            disabled={pending}
        >
            {pending ? loadingText : text}
        </button>
    )
}

export default CreateFormSubmit;