import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { BsQuestion } from 'react-icons/bs'

import { Link } from 'react-router-dom'

const ButtonBottom = () => {
    return (
        <div className="fixed right-5 bottom-10 w-20 h-screen flex flex-col justify-end items-center gap-4">
            <Link
                to={`create-pin`}
                className="bg-white text-black rounded-full w-12 h-12 flex justify-center items-center drop-shadow-md">
                <div className="hover:bg-gray-100 rounded-full w-4/5 h-4/5 flex justify-center items-center">
                    <IoMdAdd fontSize={25} className="" />
                </div>
            </Link>
            <button
                type="button"
                className="bg-white text-black rounded-full w-12 h-12 flex justify-center items-center drop-shadow-md">
                <div className="hover:bg-gray-100 rounded-full w-4/5 h-4/5 flex justify-center items-center">
                    <BsQuestion fontSize={30} className="" />
                </div>
            </button>
        </div>
    )
}

export default ButtonBottom
