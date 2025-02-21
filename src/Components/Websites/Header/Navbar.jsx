import React from 'react'
import Logo from '../../../assets/Logo/Logowhite.png'

const Navbar = () => {
  return (
    <div className='bg-primary h-[95px] flex items-center p-4 w-full fixed'>
    <div className=' container'>
        <img className='w-12 md:w-16' src={Logo} alt=''  />
    </div>
</div>  
  )
}

export default Navbar