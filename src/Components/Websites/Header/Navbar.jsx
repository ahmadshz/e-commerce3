import React from 'react'
import Logo from '../../../assets/Logo/Logowhite.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-primary h-[60px] md:h-[70px] lg:h-[80px] flex items-center  w-full '>
    <Link to={'/'} className=' container'>
        <img className=' w-10 md:w-12 lg:w-16 xl:w-20 ' src={Logo} alt=''  />
    </Link>
</div>  
  )
}

export default Navbar