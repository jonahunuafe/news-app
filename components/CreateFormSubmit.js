'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';


const CreateFormSubmit = () => {
    const { pending } = useFormStatus();
  
    return (
        <button 
            className='btn btn-wide bg-orange-400'
            type='submit'
            disabled={pending}
        >
            {pending ? 'Creating Contact...' : 'Create Contact'}
        </button>
    )
}

export default CreateFormSubmit;