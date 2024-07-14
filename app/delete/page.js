import React from 'react'
import Link from 'next/link';
import {FiTrash} from "react-icons/fi";
import { getAllNews } from '@lib/data';
// import Modal from '@components/Modal';

const DeletePage = async () => {

  const deleteNews = await getAllNews();

  return (
    <div>
        <p>Delete Specific News</p>
        {
            deleteNews.map((news) => (
                <div>
                    <Link href="?modal=true">
                        <FiTrash className="text-orange-400 text-lg" />
                    </Link>
                    <h2>{news.headline}</h2>
                </div>
            ))
        }
        {/* <Modal id={deleteSpecificNews.id} /> */}
    </div>
  )
}

export default DeletePage;