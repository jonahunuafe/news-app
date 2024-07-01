import React from 'react'
import { getContact } from '@/lib/data';
import { deleteContact } from '@/lib/action';
import CreateFormSubmit from '@/components/CreateFormSubmit';
import {FiTrash} from "react-icons/fi";
import Link from "next/link";

const DetailsPage = async ({ params }) => {
  const { id } = params;
  const contact = await getContact(id)

  return (
    <div className="flex justify-center flex-col h-[100vh] px-6 md:w-[70%] m-auto">
      <div className='h-1 w-[70%] bg-orange-400 rounded mx-auto mb-6'></div>
      <h2 className="text-center font-bold text-2xl py-6 text-gray-800">{contact.headline}</h2>
      <p className="text-gray-800">{contact.description}</p>
      <h4 className="text-right text-gray-800 pt-4">Source: {contact.creator}</h4>
      <div className="flex align-bottom justify-between">
        <form
          action={deleteContact}
        >
          <input hidden name='id' defaultValue={contact.id} />
          <CreateFormSubmit 
            loadingText={<p className='bg-red-100 text-red-600 rounded p-3'>Deleting...</p>} 
            text={<FiTrash style={{color: 'red'}} />}
          />
        </form>
        <span className="text-right block text-gray-800">Email: {contact.email}</span>
      </div>
      <Link href="/" className="text-center font-medium mt-7 text-green-600 border-lime-500 border-2 w-[max-content] mx-auto px-4 py-2 rounded-full">Back to Home Page</Link>
      <div className='h-1 w-[70%] mx-auto bg-orange-400 rounded mt-10'></div>
    </div>
  )
}

export default DetailsPage;