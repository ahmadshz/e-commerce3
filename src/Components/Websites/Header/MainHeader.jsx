import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const MainHeader = () => {
  return (
    <div className='bg-primary flex items-center p-4'>
    <div className=' container flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-white'>دلال</h1>
        <div className='text-white flex gap-4'>
            <Link to={'/login'}  className='border-2 hidden md:block border-white rounded-md p-1 px-2 py-2 font-medium' >الدخول</Link>
            <Link to="/register" className='border-2 hidden  md:block border-white rounded-md px-4 py-2 font-medium' >انشاء حساب</Link>
            <Dropdown />
        </div>
    </div>
</div>  )
}

export default MainHeader