import React from 'react'
import { getSpecificNews } from '@/lib/data';
import { deleteNews } from '@/lib/action';
import CustomSubmitBtn from '@/components/CustomSubmitBtn';
import {FiTrash} from "react-icons/fi";
import Link from "next/link";

const DetailsPage = async ({ params }) => {
  const { id } = params;
  const specificNews = await getSpecificNews(id)

  return (
    <div className="flex justify-center flex-col px-6 md:w-[70%] m-auto break-words">
      <div className='h-1 w-[70%] md:w-[100%] bg-orange-400 rounded mx-auto mb-6 mt-12'></div>
      <h2 className="text-center font-bold text-2xl py-6 text-green-400">{specificNews.headline}</h2>
      <p 
        className="text-white"
        dangerouslySetInnerHTML={{
        __html: specificNews.description.replace(/\n/g, '<br />'),
      }}></p>
      <h4 className="text-right text-white pt-4 mb-2">Source: {specificNews.creator}</h4>
      <div className="flex justify-between">
        <form
          action={deleteNews}
        >
          <input hidden name='id' defaultValue={specificNews.id} />
          <CustomSubmitBtn 
            loadingText={<p className='bg-red-100 text-red-600 rounded p-3'>Deleting...</p>} 
            text={<FiTrash className="text-orange-400 text-lg" />}
          />
        </form>
        <span className="text-right block text-white">
          Email: {specificNews.email}
        </span>
      </div>
      <span className="text-green-400 font-medium text-right block mt-3">
        Posted on: {specificNews.createdAt.toLocaleString()}
      </span>
      <Link href="/" className="text-center font-medium mt-7 text-green-400 border-lime-500 border-2 w-[max-content] mx-auto px-4 py-2 rounded-full">
        Back to Home Page
      </Link>
      <div className='h-1 w-[70%] md:w-[100%] mx-auto bg-orange-400 rounded my-10'></div>
    </div>
  )
}

export default DetailsPage;