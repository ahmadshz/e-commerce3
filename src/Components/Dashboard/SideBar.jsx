import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi"; // أيقونات الفتح والإغلاق
import Logo from "../../assets/Logo/Logo.png";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); // للتحكم في فتح وإغلاق القائمة

  const navlink = [
    { name: "الصفحة الرئيسية", link: "/" },
    { name: "عرض المستخدمين", link: "users" },
    { name: "الإعدادات", link: "/settings" },
  ];

  return (
    <div>
      {/* زر فتح القائمة في الشاشات الصغيرة */}
      <button
        className={`${isOpen ? 'opacity-0 duration-200' : 'opacity-100 duration-200'} lg:hidden fixed top-10 left-4 z-50 p-2  bg-primary text-white rounded-md`}
        onClick={() => setIsOpen(true)}
      >
        <FiMenu size={20} />
      </button>

      {/* خلفية سوداء عند فتح القائمة */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* الشريط الجانبي */}
      <div
        className={`fixed lg:relative top-0 right-0 h-screen bg-white shadow-lg border-l-2 border-border flex flex-col items-center py-4 lg:py-10 px-6 w-64 transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        {/* زر الإغلاق داخل Sidebar */}
        <button
          className="lg:hidden self-end mb-4 p-2 hover:text-red-600 transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={24} />
        </button>

        {/* اللوجو */}
        <div className="mb-6 w-full">
          <img src={Logo} alt="Logo" className="w-20 lg:w-24 max-w-full" /> {/* الشعار يناسب جميع الشاشات */}
        </div>

        {/* الروابط في المنتصف */}
        <div className="flex-1 flex flex-col justify-center w-full gap-2">
          {navlink.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              className={({ isActive }) =>
                `w-full text-sm lg:text-lg font-bold rounded-10px py-2 lg:py-3 transition duration-300 ${
                  isActive ? "text-primary border-white" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* زر تسجيل الخروج */}
        <div className="w-full">
          <button className="w-full bg-primary text-white text-sm lg:text-lg font-bold border-2 border-white rounded-10px py-2 lg:py-3 hover:bg-red-600 transition duration-300">
            تسجيل الخروج
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
