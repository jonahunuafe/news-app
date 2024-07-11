"use client"

import { deleteNews } from '@lib/action';
import { useSearchParams, usePathname } from 'next/navigation';
import CustomSubmitBtn from '@/components/CustomSubmitBtn';
import Link from "next/link";

const Modal = ({ id }) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathName = usePathname();

  return (
    <>
        { modal && 
            <dialog className="fixed left-0 top-0 w-full h-[100vh] bg-transparent backdrop-brightness-75 overflow-auto flex justify-center items-center">
                <div className="bg-emerald-950 m-auto p-8 rounded">
                    <div className="flex flex-col items-center">
                        <form
                            action={deleteNews}
                        >
                            <label className='text-white text-lg'>Are you sure you want to delete?</label>
                            <input hidden name='id' defaultValue={id} />
                            <div className="flex justify-between mt-3">
                                <CustomSubmitBtn 
                                    loadingText={<p className='bg-red-500 text-white rounded py-1 px-2'>Deleting...</p>} 
                                    text={<p className="bg-red-500 text-white py-1 px-2">Delete</p>}
                                />
                                <Link href={pathName}>
                                    <button type="button" className="bg-red-500 text-white py-1 px-2">
                                        Cancel
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        }
    </>
  )
}

export default Modal;
