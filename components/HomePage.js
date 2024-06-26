"use client"

import React from 'react';
import Link from "next/link";
import Search from './Search';
import {FiEdit} from "react-icons/fi";



const IndexPage = ({ contacts }) => {

    const totalContacts = contacts.length;

  return (
    <div className='flex flex-col px-4 py-4'>
        <div>
            <p>Showing { totalContacts } { totalContacts > 1 ? "Users" : "User" }</p>
            <Search />
            {totalContacts === 0 ? <p>No result returned</p> :  (
                <table className='table-auto w-full text-center whitespace-nowrap'>
                <thead>
                  <tr>
                    <th 
                    className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl'
                    >
                      FirstName
                    </th>
                    <th
                    className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'
                    >
                      LastName
                    </th>
                    <th
                    className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'
                    >
                      Email
                    </th>
                    <th
                    className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'
                    >
                      Contact #
                    </th>
                    <th
                    className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    contacts.map((contact) => (                 
                      <tr key={contact.id}>
                        <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.firstName}</td>
                        <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.lastName}</td>
                        <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.email}</td>
                        <td className='border-t-2 text-center border-gray-200 px-4 py-3'>{contact.phone}</td>
                        <td className='border-t-2 text-center border-gray-200 px-4 py-3 flex items-center gap-4'>
                          <Link href={`editcontact/${contact.id}`}>
                            <FiEdit />
                          </Link>
                        </td>
                        <td>
                          <div className="text-center text-green-600 cursor-pointer">
                            <Link href={`/details/${contact.id}`}>View Details</Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )}
        </div>
    </div>
  )
}

export default IndexPage;