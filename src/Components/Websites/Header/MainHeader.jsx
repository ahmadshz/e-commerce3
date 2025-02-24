import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo/Logowhite.png';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import user from '../../../assets/LoginRegister/1.svg'
import logout from '../../../assets/LoginRegister/3.svg'

const MainHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='bg-primary flex h-[60px] lg:h-[70px] xl:h-[95px] items-center'>
      <div className='container flex justify-between items-center'>
        <img className='w-12 md:w-12 lg:w-16 xl:w-20' src={Logo} alt='' />
        <div className='text-white flex gap-4'>
          <button className='lg:hidden' onClick={toggleSidebar}>
            {isSidebarOpen ? <RiCloseLine size={25} /> : <RiMenu2Line size={23} />}
          </button>
          <Link to='/myaccount' className='border-2 hidden lg:flex  items-center border-white rounded-10px w-[216px] md:h-[45px] xl:h-[53px]  lg:text-[17px]'>
            <span className='w-[80%] text-center'>@dallal.sy</span>
            <span className='w-[45px] xl:w-[53px]  md:h-[45px] xl:h-[53px] border-2 pb-1 border-l-0 flex items-center justify-center rounded-10px '>
              <img src={user} className='w-9' alt='' /></span>
          </Link>
          <Link to='/register' className='border-2 md:h-[45px] xl:h-[53px] w-[150px]  lg:text-[17px]  hidden lg:flex items-center  border-white rounded-10px'>
            <span className='w-[75%] text-center'>الخروج</span>
            <span className='w-[45px] xl:w-[53px] md:h-[45px] xl:h-[53px] border-2 pb-1 border-l-0 flex items-center justify-center rounded-10px '>
              <img className='w-9 ' src={logout} alt='' />
            </span>
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden' onClick={toggleSidebar}></div>
      )}

      <div
        className={`fixed lg:hidden top-0 left-0 h-full  w-64 bg-white shadow-lg z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
      >
        <div className='p-4 relative'>
          <button className='absolute top-4 left-4 text-gray-800' onClick={toggleSidebar}>
            <RiCloseLine size={25} />
          </button>
          <h2 className='text-xl font-bold mb-4'>القائمة</h2>
          <ul className='space-y-4'>
            <li>
              <Link to='/' className='block text-gray-800' onClick={toggleSidebar}>الرئيسية</Link>
            </li>
            <li>
              <Link to='/about' className='block text-gray-800' onClick={toggleSidebar}>من نحن</Link>
            </li>
            <li>
              <Link to='/services' className='block text-gray-800' onClick={toggleSidebar}>الخدمات</Link>
            </li>
            <li>
              <Link to='/contact' className='block text-gray-800' onClick={toggleSidebar}>تواصل معنا</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
