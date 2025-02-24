import React from 'react';
import MainHeader from '../Header/MainHeader';
import img from '../../../assets/download.jpeg'
import { MdOutlineAttachMoney } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { FaDollarSign, FaUser } from 'react-icons/fa';

const DetailsAccount = () => {

  return (
    <div className='min-h-screen'>
      <MainHeader />
      <div className=' min-h-screen container '>
        <div className="p-6 bg-white container  mx-auto">
          <h2 className="text-2xl lg:text-3xl text-primary font-bold my-20">معلومات الحساب</h2>
          <div className="grid grid-cols-2 gap-6 md:gap-8 mt-5 mb-20">

            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 col-span-2 md:col-span-1">
              <div className="font-semibold text-lg md:w-2/6 flex items-center">الاسم</div>
              <div className="text-placeholder bg-gray-100 w-full h-[76px] flex items-center rounded-lg text-md font-medium tracking-wider p-3">
                أحمد
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 col-span-2 md:col-span-1">
              <div className="font-semibold text-lg md:w-2/6  flex items-center">اسم العائلة</div>
              <div className="text-placeholder bg-gray-100 w-full  flex items-center rounded-lg text-md font-medium tracking-wider p-3">
                asasfasf
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 col-span-2 md:col-span-1">
              <div className="font-semibold text-lg md:w-2/6">اسم المستخدم</div>
              <div className="text-placeholder bg-gray-100 w-full rounded-lg text-md font-medium tracking-wider p-3">
                ahmd_shmt
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 col-span-2 md:col-span-1">
              <div className="font-semibold text-lg md:w-2/6">رقم الجوال</div>
              <div className="text-placeholder bg-gray-100 w-full rounded-lg text-md font-medium tracking-wider p-3">
                21313333
              </div>
            </div>

            <div className="flex flex-col lg:flex-row md:items-center gap-3 md:gap-4 col-span-2">
              <div className="font-semibold text-lg w-full lg:w-[13%]">البريد الإلكتروني</div>
              <div className="w-full text-placeholder bg-gray-100 rounded-lg text-md font-medium tracking-wider p-3">
                example@email.com
              </div>
            </div>
          </div>

          {/* اعلاناتي */}
          <h2 className="text-2xl lg:text-3xl text-primary font-bold my-20"> اعلاناتي</h2>
          

        </div>
      </div>
    </div>
  );
};

export default DetailsAccount;
