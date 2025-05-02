import React from 'react'
import add from '../../../assets/HeadersIcon/2.svg'
import { Link } from 'react-router-dom'

const ButtonAddMobile = () => {
    return (
        <Link to={'/addpost'} className='w-full fixed md:hidden bottom-0 h-[55px] bg-primary text-[16px] text-white  flex items-center justify-center gap-3'>
            أضــــــــــف إعــــــــــلان
            <img className='w-8 mt-1' src={add} alt=''/>
        </Link>
    )
}

export default ButtonAddMobile