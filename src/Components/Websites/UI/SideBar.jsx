// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLine, RiStarSFill } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import { FaRegQuestionCircle, FaTiktok, FaTwitter } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { FiLogIn } from 'react-icons/fi';
import { MdCardMembership, MdOutlineAccountCircle, MdOutlinePrivacyTip, MdOutlineProductionQuantityLimits, MdOutlineSecurity } from 'react-icons/md';
import { ImFacebook2 } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { GrSnapchat } from 'react-icons/gr';
import Cookies from 'universal-cookie';

const SideBar = ({ isSidebarOpen, toggleSidebar }) => {

  const cookies = new Cookies();
  const token = cookies.get('auth_token');

  const logout = () => {
    cookies.remove('auth_token', { path: '/' });
  };

  return (
    <div>
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden' onClick={toggleSidebar}></div>
      )}

      <div
        className={`fixed lg:hidden top-0 right-0 h-full w-64 bg-[#f1ecea] shadow-lg z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300`}
      >
        <div className=' relative flex flex-col overflow-y-scroll '>
          <button className='absolute  top-3 left-2 text-gray-800' onClick={toggleSidebar}>
            <RiCloseLine size={25} />
          </button>
          <h2 className='text-[15px] bg-white font-bold mb-2 text-right px-4 py-4'>القائمة </h2>

          <div className='flex flex-col bg-white mb-2 '>
            <div className='flex justify-between items-center border-b border-border px-2 '>

              <Link onClick={logout} to={'/login'} className='flex items-center gap-1  py-4'>
                <FiLogIn className={` ${token ? 'text-primary' : ' text-green-600'}`} size={15} />
                {
                  token ? <div className='text-[12px] text-primary'> تسجيل الخروج</div> :
                    <div className='text-[12px] '>تسجيل الدخول او انشاء حساب</div>
                }
              </Link>
              <IoIosArrowBack className={` ${token ? 'text-primary' : ' '}`} size={15} />
            </div>
            <Link to={'/addpost'} className='flex justify-between items-center border-b border-border px-2'>

              <div className='flex items-center gap-1  py-4 '>
                <GoPlus size={16} />
                <div className='text-[12px]'>اضافة اعلان</div>
              </div>
              <IoIosArrowBack size={15} />
            </Link>
            <Link to={'/myaccount'} className='flex justify-between items-center border-b border-border px-2'>

              <div className='flex items-center gap-1  py-4 '>
                <MdOutlineAccountCircle size={16} />
                <div className='mr-1 text-[12px]'> حسابي</div>
              </div>
              <IoIosArrowBack size={15} />
            </Link>


          </div>

          <div className='flex flex-col bg-white mb-2'>
            <Link to={'/'} className='flex justify-between items-center border-b bg-white border-border px-2'>
              <div className='flex items-center gap-1  py-4 '>
                <MdCardMembership size={16} />
                <div className='mr-1 text-[12px]'> توثيق العضوية
                </div>
              </div>
              <IoIosArrowBack size={15} />
            </Link>
            <Link to={'/'} className='flex justify-between items-center border-b bg-white border-border px-2'>
              <div className='flex items-center gap-1  py-4 '>
                <FaRegQuestionCircle size={16} />
                <div className='mr-1 text-[12px]'> الأسئلة الشائعة</div>
              </div>
              <IoIosArrowBack size={15} />
            </Link>

            <Link to={'/'} className='flex justify-between items-center border-b bg-white border-border px-2'>
              <div className='flex items-center gap-1  py-4 '>
                <MdOutlineProductionQuantityLimits size={16} />
                <div className='mr-1 text-[12px]'>قائمة السلع والاعلانات الممنوعة</div>
              </div>
              <IoIosArrowBack size={15} />
            </Link>
          </div>
          <div className='flex flex-col bg-white mb-2'>
            <Link to={'/'} className='flex justify-between items-center border-b bg-white border-border px-2'>
              <div className='flex items-center gap-1  py-4 '>
                <MdOutlinePrivacyTip size={16} />
                <div className='mr-1 text-[12px]'> سياسة الخصوصية</div>
              </div>
              <IoIosArrowBack size={15} />
            </Link>
            <Link to={'/'} className='flex justify-between items-center border-b bg-white border-border px-2'>
              <div className='flex items-center gap-1  py-4 '>
                <MdOutlineSecurity size={16} />
                <div className='mr-1 text-[12px]'>مركز الأمان</div>
              </div>
              <IoIosArrowBack size={15} />
            </Link>
            <Link to={'/'} className='flex justify-between items-center border-b bg-white border-border px-2'>
              <div className='flex items-center gap-1  py-4 '>
                <RiStarSFill size={16} />
                <div className='mr-1 text-[12px]'>نظام التقييم</div>
              </div>
              <IoIosArrowBack size={15} />
            </Link>
          </div>

          <div className='flex flex-wrap mx-4 gap-2 items-center justify-center mt-4  '>
            <div className=' flex flex-wrap gap-3 justify-center'>
              <ImFacebook2 size={30} className='text-[#FF936D]' />
              <SiInstagram size={30} className='text-[#FF936D]' />
              <GrSnapchat size={30} className='text-[#FF936D]' />
              <FaTiktok size={30} className='text-[#FF936D]' />
              <FaTwitter size={30} className='text-[#FF936D]' />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SideBar;
