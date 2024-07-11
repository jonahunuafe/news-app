import React from 'react'
import { getSpecificNews } from '@/lib/data';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from "next/link";
import Modal from '@components/Modal';


const DetailsPage = async ({ params }) => {
  const { getPermissions } = getKindeServerSession();
  const userPermissions = (await getPermissions())?.permissions;

  const { id } = params;
  const specificNews = await getSpecificNews(id)

  return (
    <>
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
        <Link href="?modal=true">
          <button type="button" className="bg-blue-500 text-white p-2">Delete Post</button>
        </Link>
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
    {userPermissions && <Modal id={specificNews.id} />}
    </>
  )
}

export default DetailsPage;