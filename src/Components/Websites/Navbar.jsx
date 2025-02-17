import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../../Pages/Auth/Login'
import { MdPerson } from "react-icons/md";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)

   const handleOpen = () => {
      setIsOpen(!isOpen)
   }

    return (
        <div className='bg-primary flex items-center p-4'>
            <div className=' container flex justify-between items-center'>
                <h1 className='text-3xl font-bold text-white'>دلال</h1>
                <div className='text-white flex gap-4'>
                  <div onClick={handleOpen} className='border-2 hidden md:block border-white rounded-md p-1 px-2 py-2 font-medium' >الدخول</div>
                  <Link className='border-2 hidden  md:block border-white rounded-md px-4 py-2 font-medium' to="/register">انشاء حساب</Link>
                  <MdPerson className='text-3xl  md:hidden' />
                </div>
            </div>
            {isOpen && <Login/> }
        </div>
    )
}

export default Navbar