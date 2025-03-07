import React, { useEffect } from 'react'; // Import useEffect
import { Link } from 'react-router-dom';
import { FaTiktok } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import Cookies from 'universal-cookie';
import { IoClose, IoPersonSharp } from 'react-icons/io5';
import { FaCircleArrowLeft } from 'react-icons/fa6';
import { BiLogoInstagramAlt, BiSolidPlusCircle } from 'react-icons/bi';

const SideBar = ({ isSidebarOpen, toggleSidebar }) => {
  const cookies = new Cookies();
  const token = cookies.get('auth_token');

  const logout = () => {
    cookies.remove('auth_token', { path: '/' });
    window.location.reload();
  };

  // Add or remove overflow: hidden from body based on isSidebarOpen
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling in the background
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling in the background
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  return (
    <div >
      {isSidebarOpen && (
        <div className='fixed inset-0  z-[70] lg:hidden ' onClick={toggleSidebar}></div>
      )}

      <div
        className={`fixed lg:hidden bottom-0 right-0  h-[calc(100%-60px)] md:h-[calc(100%-70px)] w-72 bg-[#FAFAFA] shadow-lg z-[100] transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 overflow-y-auto `}
      >
        <div className='relative flex flex-col '> {/* Allow scrolling inside the sidebar */}
          <button className='absolute top-3 left-2 text-gray-800' onClick={toggleSidebar}>
            <IoClose className='font-bold' size={30} />
          </button>
          <h2 className='text-[17px]  font-semibold mb-4 px-4 text-right  py-3'>القائمة</h2>

          <div className='flex flex-col  mb-4 px-4'>
            <div className='flex justify-between items-center  '>
              <Link onClick={logout} to={'/login'} className='flex items-center gap-1 py-3'>
                {token ? (
                  <div className='text-[14px] text-primary'>تسجيل الخروج</div>
                ) : (
                  <div className='text-[14px]'>تسجيل الدخول او انشاء حساب</div>
                )}
              </Link>
              <FaCircleArrowLeft className='text-primary' size={20} />
            </div>
            <Link to={'/addpost'} className='flex justify-between items-center  '>
              <div className='flex items-center gap-1 py-3'>
                <div className='text-[14px]'>اضافة اعلان</div>
              </div>
              <BiSolidPlusCircle size={24} className='text-primary' />
            </Link>
            <Link to={'/myaccount'} className='flex justify-between items-center  '>
              <div className='flex items-center gap-1 py-3'>
                <div className='mr-1 text-[14px]'>حسابي</div>
              </div>
              <IoPersonSharp size={24} className='text-primary' />
            </Link>
          </div>

          <div className='flex flex-col  mb-4 px-4'>
            <Link to={'/registration'} className='flex justify-between items-center  '>
              <div className='flex items-center gap-1 py-3'>
                <div className='mr-1 text-[14px]'>تسجيل </div>
              </div>
            </Link>
            <Link to={'/memberDocumentation'} className='flex justify-between items-center  '>
              <div className='flex items-center gap-1 py-3'>
                <div className='mr-1 text-[14px]'>توثيق العضوية</div>
              </div>
            </Link>
            <Link to={'/faq'} className='flex justify-between items-center  '>
              <div className='flex items-center gap-1 py-3'>
                <div className='mr-1 text-[14px]'>الأسئلة الشائعة</div>
              </div>
            </Link>
            <Link to={'/prohibitedAds'} className='flex justify-between items-center  '>
              <div className='flex items-center gap-1 py-3'>
                <div className='mr-1 text-[14px]'>قائمة السلع والاعلانات الممنوعة</div>
              </div>
            </Link>


            <Link to={'/privacyPolicy'} className='flex justify-between items-center  '>
              <div className='flex items-center gap-1 py-3'>
                <div className='mr-1 text-[14px]'>سياسة الخصوصية</div>
              </div>
            </Link>
            <Link to={'/securityCenter'} className='flex justify-between items-center  '>
              <div className='flex items-center gap-1 py-3'>
                <div className='mr-1 text-[14px]'>مركز الأمان</div>
              </div>
            </Link>

          </div>

          <div className='flex flex-wrap mx-4 gap-4  mt-4 mb-16'>
            <span className=' text-[14px] '>تواصل معنا</span>
            <div className='flex flex-wrap gap-4 justify-between '>
              <FaTiktok size={30} className='text-primary' />
              <GrFacebookOption size={35} className='text-primary' />
              <BiLogoInstagramAlt size={35} className='text-primary' />
              <svg
                className='text-primary fill-current font-bold'
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <polygon points="41,6 9.929,42 6.215,42 37.287,6"></polygon><polygon fill="#fff" points="31.143,41 7.82,7 16.777,7 40.1,41" ></polygon><path d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>
              </svg>
            </div>
          </div>
          <div className='flex flex-col justify-center p-4 gap-2 h-[200px] bg-primary text-white  mt-4 '>
            <div className='mr-1 text-[14px]'>دلّال هو المنصة المثالية التي تلبي جميع احتياجات الشعب السوري
            </div>
            <div className='mr-1 text-[14px]'>
              معًا نبني سوريا المستقبل
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SideBar;