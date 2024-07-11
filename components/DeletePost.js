import React from 'react'
import CustomSubmitBtn from '@/components/CustomSubmitBtn';
import {FiTrash} from "react-icons/fi";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const DeletePost = async () => {
    const { getPermissions } = getKindeServerSession();
    const userPermissions = (await getPermissions())?.permissions;

    return (
        <>
        {
            userPermissions ? (
                <CustomSubmitBtn 
                    loadingText={<p className='bg-red-100 text-red-600 rounded p-3'>Deleting...</p>} 
                    text={<FiTrash className="text-orange-400 text-lg" />}
                />
            ) : " "
        }
        </>
    )
}

export default DeletePost;