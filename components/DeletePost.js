import React from 'react'
import CustomSubmitBtn from '@/components/CustomSubmitBtn';
import {FiTrash} from "react-icons/fi";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const DeletePost = () => {
    // const { getPermissions } = useKindeBrowserClient();
    // const userPermissions = (getPermissions())?.permissions;

    return (
        <CustomSubmitBtn 
            loadingText={<p className='bg-red-100 text-red-600 rounded p-3'>Deleting...</p>} 
            text={<FiTrash className="text-orange-400 text-lg" />}
        />
    )
}

export default DeletePost;