'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';


const CreateFormSubmit = ({ loadingText, text, className }) => {
    const { pending } = useFormStatus();
  
    return (
        <button 
            className={className}
            type='submit'
            disabled={pending}
        >
            {pending ? loadingText : text}
        </button>
    )
}

export default CreateFormSubmit;