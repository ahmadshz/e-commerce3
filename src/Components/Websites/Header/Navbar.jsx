import React from 'react'
import Logo from '../../../assets/Logo/Logowhite.png'

const Navbar = () => {
  return (
    <div className='bg-primary h-[60px] md:h-[70px] lg:h-[80px] flex items-center  w-full fixed'>
    <div className=' container'>
        <img className=' w-10 md:w-12 lg:w-16 xl:w-20 ' src={Logo} alt=''  />
    </div>
</div>  
  )
}

export default Navbar