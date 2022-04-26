import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Spinner = ({ message }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <TailSpin color="#767676" width={200} height={50} className="m-5" />
            <p className="text-lg text-center px-2 mt-4">{message}</p>
        </div>
    )
}

export default Spinner
