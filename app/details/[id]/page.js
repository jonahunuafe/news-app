import React from 'react'
import { getContact } from '@/lib/data';
import { deleteContact } from '@/lib/action';
import CreateFormSubmit from '@/components/CreateFormSubmit';
import {FiTrash} from "react-icons/fi";
import Card from '@/app/ui/Card';

const DetailsPage = async ({ params }) => {
  const { id } = params;
  const contact = await getContact(id)

  return (
    <div className="flex align-middle justify-center flex-col h-[100vh] px-6 md:w-[70%] m-auto bg-slate-100">
      <h2 className="text-center font-bold text-2xl text-gray-800">{contact.headline}</h2>
      <p className="text-center text-gray-800">{contact.description}</p>
      <h4 className="text-right text-gray-800">Source: {contact.creator}</h4>
      <div className="flex align-bottom justify-between">
        <form
          action={deleteContact}
        >
          <input hidden name='id' defaultValue={contact.id} />
          <CreateFormSubmit 
            loadingText={<p className='bg-zinc-500 text-red-600'>Deleting...</p>} 
            text={<FiTrash style={{color: 'red'}} />}
          />
        </form>
        <span className="text-right block text-gray-800">Email: {contact.email}</span>
      </div>
    </div>
  )
}

export default DetailsPage;