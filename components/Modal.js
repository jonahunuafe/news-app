"use client"

import React from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from "next/link";

const Modal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathName = usePathname();
  return (
    <>
        { modal && 
            <dialog className="fixed left-0 top-0 w-full h-full bg-black opacity-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-white m-auto p-8">
                    <div className="flex flex-col items-center">
                        <p>Modal Content</p>
                        <br/>
                        <Link href={pathName}>
                            <button type="button" className="bg-red-500 text-white p-2">
                                Close Modal
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