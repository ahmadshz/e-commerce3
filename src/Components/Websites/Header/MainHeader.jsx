import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/Logo/Logowhite.png'

const MainHeader = () => {
  return (
    <div className='bg-primary flex h-[60px] lg:h-[70px] xl:h-[95px] items-center'>
      <div className='container flex justify-between items-center'>
        <img className='w-10 md:w-12 lg:w-16 xl:w-20' src={Logo} alt='' />
        <div className='text-white flex gap-4'>
          <Link to='/login' className='border-2 hidden md:block border-white rounded-md p-1 px-2 font-medium'>
            الدخول
          </Link>
          <Link to='/register' className='border-2 hidden md:block font-medium text-lg border-white rounded-md px-4 py-1'>
            انشاء حساب
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
