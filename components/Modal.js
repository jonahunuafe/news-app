"use client"

import React from 'react';
import { deleteNews } from '@lib/action';
import { useSearchParams, usePathname } from 'next/navigation';
// import DeletePost from './DeletePost';
import CustomSubmitBtn from '@/components/CustomSubmitBtn';
import Link from "next/link";

const Modal = ({ id }) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathName = usePathname();
  return (
    <>
        { modal && 
            <dialog className="fixed left-0 top-0 w-full h-full bg-black opacity-90 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-emerald-950 m-auto p-8">
                    <div className="flex flex-col items-center">
                        <form
                            action={deleteNews}
                        >
                        <input hidden name='id' defaultValue={id} />
                        <CustomSubmitBtn 
                            loadingText={<p className='bg-red-100 text-red-600 rounded p-3'>Deleting...</p>} 
                            text={<p className="text-orange-400 text-lg">Delete</p>}
                        />
                        </form>
                        <Link href={pathName}>
                            <button type="button" className="bg-red-500 text-white p-2">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
            </dialog>
        }
    </>
  )
}

export default Modal;