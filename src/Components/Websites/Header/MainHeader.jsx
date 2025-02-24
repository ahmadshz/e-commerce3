// src/components/MainHeader.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Logo/Logowhite.png';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import user from '../../../assets/LoginRegister/1.svg';
import logout from '../../../assets/LoginRegister/3.svg';
import login from '../../../assets/LoginRegister/2.svg'
import Sidebar from '../UI/SideBar';  // Import Sidebar component
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

const MainHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cookies = new Cookies();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const token = cookies.get('auth_token');
  let username = '';

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      username = decodedToken.username || ''; // Ensure username exists
    } catch (error) {
      console.error('Invalid token:', error);
      cookies.remove('auth_token', { path: '/' }); // Remove invalid token
      navigate('/login');
    }
  }

  const logOut = () => {
    cookies.remove('auth_token', { path: '/' });
    navigate('/');
  };

  return (
    <div className='bg-primary flex h-[60px] md:h-[70px] lg:h-[95px] items-center'>
      <div className='container flex justify-between items-center'>
        <img className='w-12 md:w-12 lg:w-16 xl:w-20' src={Logo} alt='' />
        <div className='text-white flex gap-4'>
          <button className='lg:hidden' onClick={toggleSidebar}>
            {isSidebarOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={27} />}
          </button>

          {username  ? (
            <Link to='/myaccount' className='border-2 hidden lg:flex items-center border-white rounded-10px min-w-[216px] md:h-[45px] xl:h-[53px] lg:text-[17px]'>
              <span className='min-w-[75%] px-2 text-center'>{username}@</span>
              <span className='w-[45px] xl:w-[53px] md:h-[45px] xl:h-[53px] border-2 pb-1 border-l-0 flex items-center justify-center rounded-10px'>
                <img src={user} className='w-12' alt='' />
              </span>
            </Link>
          ) : (
            <Link to='/login' className='border-2 hidden lg:flex items-center border-white rounded-10px w-[216px] md:h-[45px] xl:h-[53px] lg:text-[17px]'>
              <span className='w-[80%] text-center'> تسجيل الدخول</span>
              <span className='w-[45px] xl:w-[53px] md:h-[45px] xl:h-[53px] border-2 pb-1 border-l-0 flex items-center justify-center rounded-10px'>
                <img src={logout} className='w-14' alt='' />
              </span>
            </Link>
          )}
          {
            token ?
            <div onClick={logOut} className='border-2 md:h-[45px] xl:h-[53px] w-[150px] lg:text-[17px] hidden lg:flex items-center border-white rounded-10px'>
              <span className='w-[75%] text-center'>الخروج</span>
              <span className='w-[45px] xl:w-[53px] md:h-[45px] xl:h-[53px] border-2  border-l-0 flex items-center justify-center rounded-10px'>
                <img className='w-14' src={logout} alt='' />
              </span>
            </div>
          : (
            <Link to="/register" className='border-2 md:h-[45px] xl:h-[53px] w-auto  lg:text-[17px] hidden lg:flex items-center border-white rounded-10px'>
              <span className=' text-center px-4'>انشاء حساب جديد</span>
              <span className='w-[45px] xl:w-[53px] md:h-[45px] xl:h-[53px] border-2 pb-1 border-l-0 flex items-center justify-center rounded-10px'>
                <img className='w-11' src={login} alt='' />
              </span>
            </Link>
          )
          }
        </div>
      </div>

      {/* Render the Sidebar component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default MainHeader;
