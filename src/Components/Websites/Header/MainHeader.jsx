// src/components/MainHeader.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Logo/Logowhite.png';
import user from '../../../assets/LoginRegister/1.svg';
import logout from '../../../assets/LoginRegister/3.svg';
import login from '../../../assets/LoginRegister/2.svg'
import Sidebar from '../UI/SideBar';  // Import Sidebar component
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';
import { motion } from 'framer-motion';
import { SlMenu } from 'react-icons/sl';
import { FavoriteContext } from '../../../Context/FavoriteContext';
import Favorite from '../UI/Favorite';
import { MdOutlineFavorite } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';


const MainHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cookies = new Cookies();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const { toggleFavorite } = useContext(FavoriteContext);


  const token = cookies.get('auth_token');
  let username = '';

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      username = decodedToken.username || '';
    } catch (error) {
      console.error('Invalid token:', error);
      cookies.remove('auth_token', { path: '/' });
      navigate('/login');
    }
  }


  const logOut = () => {
    try {

      cookies.remove('auth_token', { path: '/' });

      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      alert("Logout failed. Please try again.");
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='bg-primary flex h-[60px] md:h-[70px] lg:h-[80px] items-center'>
      <div className='container flex justify-between items-center'>
        <Link to={'/'}> <img className='w-12 md:w-12 lg:w-16 xl:w-20' src={Logo} alt='' /></Link>
        <div className='text-white flex'>
          <div className='flex gap-2 mx-2 items-center'>
            <button onClick={toggleFavorite} className='border-2 hidden lg:flex items-center justify-center border-white rounded-10px 
             px-8 md:h-[45px] xl:h-[50px] lg:text-[17px]'>المفضلة</button>
            <Link to={'/myaccount'}>
              <FaUser className=' lg:hidden ' size={20} />
            </Link>
            <button className='lg:hidden' onClick={toggleSidebar}>
              <SlMenu size={25} />
            </button>
          </div>
          {toggleFavorite ? <Favorite /> : ""}
          <div className='flex gap-4'>
            {username ? (
              <Link to='/myaccount' className='border-2 hidden lg:flex items-center border-white rounded-10px min-w-[216px] md:h-[45px] xl:h-[50px] lg:text-[17px]'>
                <span className='w-full px-2 text-center font-semibold'>{username}@</span>
                <span className='w-[55px] xl:w-[60px] md:h-[45px] xl:h-[50px] border-2 pb-1 border-l-0 flex items-center justify-center rounded-10px'>
                  <img src={user} className='w-12' alt='' />
                </span>
              </Link>
            ) : (
              <Link to='/login' className='border-2 hidden lg:flex items-center border-white rounded-10px w-[150px] md:h-[45px] xl:h-[50px] lg:text-[17px]'>
                <span className='w-[80%] text-center font-semibold'>الدخول</span>
                <span className='w-[45px] xl:w-[50px] md:h-[45px] xl:h-[50px] border-2  border-l-0 flex items-center justify-center rounded-10px'>
                  <img src={logout} className='w-16' alt='' />
                </span>
              </Link>
            )}
            {
              token ?
                <div onClick={logOut} className='border-2 md:h-[45px] xl:h-[50px] w-[150px] lg:text-[17px] hidden lg:flex items-center border-white rounded-10px'>
                  <span className='w-[75%] text-center font-semibold cursor-pointer'>الخروج</span>
                  <span className='w-[45px] xl:w-[50px] md:h-[45px] xl:h-[50px] border-2  border-l-0 flex items-center justify-center rounded-10px'>
                    <img className='w-14' src={logout} alt='' />
                  </span>
                </div>
                : (
                  <Link to="/register" className='border-2 md:h-[45px] xl:h-[50px] w-auto  lg:text-[17px] hidden lg:flex items-center border-white rounded-10px'>
                    <span className=' text-center font-semibold px-4'>انشاء حساب جديد</span>
                    <span className='w-[45px] xl:w-[50px] md:h-[45px] xl:h-[50px] border-2 pb-1 border-l-0 flex items-center justify-center rounded-10px'>
                      <img className='' src={login} alt='' />
                    </span>
                  </Link>
                )
            }</div>
        </div>
      </div>

      {/* Render the Sidebar component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </motion.div>
  );
};

export default MainHeader;
