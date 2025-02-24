// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

const SideBar = ({ isSidebarOpen, toggleSidebar }) => {
  // Check if the user is logged in (example: cookie called 'userLoggedIn')
  const isLoggedIn = document.cookie.includes('userLoggedIn=true'); // Change this as per your cookie name and value logic
  
  return (
    <div>
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden' onClick={toggleSidebar}></div>
      )}

      <div
        className={`fixed lg:hidden top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
      >
        <div className='p-4 relative'>
          <button className='absolute top-4 left-4 text-gray-800' onClick={toggleSidebar}>
            <RiCloseLine size={30} />
          </button>
          <h2 className='text-xl font-bold mb-4'>القائمة</h2>
          <ul className='space-y-4'>
            {/* Conditionally render the links based on login state */}
            {isLoggedIn ? (
              // If logged in, show logout
              <li>
                <Link to='/logout' className='block text-gray-800' onClick={toggleSidebar}>
                  الخروج
                </Link>
              </li>
            ) : (
              // If not logged in, show login and my account
              <div>
                <li>
                  <Link to='/login' className='block text-gray-800' onClick={toggleSidebar}>
                    تسجيل الدخول
                  </Link>
                </li>
                <li>
                  <Link to='/myaccount' className='block text-gray-800' onClick={toggleSidebar}>
                    حسابي
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
