import React from 'react'
import {FiTrash} from "react-icons/fi";
import { getSpecificNews } from '@/lib/data';
import Modal from '@components/Modal';

const DeletePage = async ({ params }) => {
    
  const { id } = params;
  const deleteSpecificNews = getSpecificNews(id)
  return (
    <div>DeletePage</div>
  )
}

export default DeletePage;