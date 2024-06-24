import React from 'react'
import { getContact } from '@/lib/data';
import { deleteContact } from '@/lib/action';
import CreateFormSubmit from '@/components/CreateFormSubmit';
import {FiTrash} from "react-icons/fi"

const DetailsPage = async ({ params }) => {
    const { id } = params;
    const contact = await getContact(id)

  return (
    <div>
        <h2>{contact.firstName}</h2>
        <p>{contact.lastName}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <form
            action={deleteContact}
        >
            <input hidden name='id' defaultValue={contact.id} />
            <CreateFormSubmit loadingText="deleting" text={<FiTrash style={{color: 'red'}} />}
            />
        </form>
    </div>

  )
}

export default DetailsPage;