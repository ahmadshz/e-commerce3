import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { FiX, FiMenu } from "react-icons/fi"; // أيقونات الفتح والإغلاق
import Logo from "../../assets/Logo/Logo.png";
import Cookies from "universal-cookie";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); // للتحكم في فتح وإغلاق القائمة
  const cookies = new Cookies();
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to get the current URL

  const navlink = [
    { name: "عرض الاعلانات", link: "posts" },
    { name: "الاعلانات المعلقة", link: "post/pending" },
    { name: "اضافة اعلان جديد", link: "post/AddPostDash" },
  ];

  const handleLogout = () => {
    try {
      cookies.remove("auth_token", { path: "/" });
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        className={`${isOpen ? "opacity-0 duration-200" : "opacity-100 duration-200"
          } lg:hidden absolute top-8 left-8 z-50 p-2 bg-primary text-white rounded-md`}
        onClick={() => setIsOpen(true)}
      >
        <FiMenu size={20} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`h-screen bg-white shadow-lg border-l-2 border-border flex flex-col items-center py-4 lg:py-10 px-6 w-64 transition-transform duration-300 z-50 fixed ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          }`}
      >
        <button
          className="lg:hidden self-end mb-4 p-2 hover:text-red-600 transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={24} />
        </button>

        <div className="mb-6 w-full">
          <img src={Logo} alt="Logo" className="w-20 lg:w-24 max-w-full" />{" "}
          {/* الشعار يناسب جميع الشاشات */}
        </div>

        <div className="flex-1 flex flex-col justify-center w-full gap-2">
          {/* Use <a> tag with conditional styling */}
          <NavLink
          to={'/'}
          className={({ isActive }) =>
            `w-full text-sm lg:text-lg font-bold rounded-10px py-2 lg:py-3 transition duration-300 ${isActive ? "text-primary border-white" : ""
            }`
          }
        >
          الصفحة الرئيسية
        </NavLink>
          <a
            href="/dashboard/users" // Link to the users page
            className={`w-full text-sm lg:text-lg font-bold rounded-10px py-2 lg:py-3 transition duration-300 ${location.pathname === "/dashboard/users" ? "text-primary" : ""
              }`}
          >
            عرض المستخدمين
          </a>

          {/* NavLinks for other pages */}
          {navlink.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              className={({ isActive }) =>
                `w-full text-sm lg:text-lg font-bold rounded-10px py-2 lg:py-3 transition duration-300 ${isActive ? "text-primary border-white" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-primary text-white text-sm lg:text-lg font-bold border-2 border-white rounded-10px py-2 lg:py-3 hover:bg-red-600 transition duration-300"
          >
            تسجيل الخروج
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;