import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
    return (
        <div className='fixed z-50 inset-0 backdrop-blur-sm flex justify-center items-center'>
            <AiOutlineLoading3Quarters className="animate-spin text-primary text-5xl mb-3" />
        </div>
    )
}

export default Loading
