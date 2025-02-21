import React from 'react';
import MainHeader from '../Header/MainHeader';
import img from '../../../assets/download.jpeg'
import { MdOutlineAttachMoney } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { FaDollarSign, FaUser } from 'react-icons/fa';

const DetailsAccount = () => {
  const products = [
    {
      id: 1,
      name: 'كورولا 2013 تجديد وكالة',
      priceUsd: 500,
      priceSYria: 1000,
      time: ' قبل ساعتين ',
      imag: img,
      location: 'دمشق',
      username: 'ابو خالد'
    }
  ]

  return (
    <div className='min-h-screen'>
      <MainHeader />
      <div className=' min-h-screen '>
        <div className="p-6 bg-white container  mx-auto">
          <h2 className="text-2xl lg:text-3xl text-primary font-bold my-20">معلومات الحساب</h2>
          <div className="grid grid-cols-2 gap-6 md:gap-8 mt-5 mb-20">

            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 col-span-2 md:col-span-1">
              <div className="font-semibold text-lg md:w-2/6">الاسم</div>
              <div className="text-placeholder bg-gray-100 w-full rounded-lg text-md font-medium tracking-wider p-3">
                أحمد
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 col-span-2 md:col-span-1">
              <div className="font-semibold text-lg md:w-2/6">اسم العائلة</div>
              <div className="text-placeholder bg-gray-100 w-full rounded-lg text-md font-medium tracking-wider p-3">
                شمت
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
          <div className='bg-[#FAFAFA] lg:min-h-[160px] flex flex-wrap md:flex-nowrap my-3'>
          {/* العنوان والموقع */}
          <div className='w-full md:w-2/5 p-4 h-auto md:h-[160px] flex flex-col justify-between'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>كوروال 2013 تجديد وكالة</h1>
              <h1 className='text-placeholder text-sm md:text-base my-4'>دمشق</h1>
          </div>
      
          {/* تفاصيل الإعلان */}
          <div className='w-full md:w-1/5 h-auto py-3 px-4 md:pr-16'>
              <div className="grid grid-cols-2 md:flex md:flex-col gap-3 text-placeholder">
                  <div className="flex items-center gap-2">
                      <MdOutlineAttachMoney className="text-lg" />
                      <span className="text-sm md:text-base">260,040,000</span>
                  </div>
      
                  <div className="flex items-center gap-2">
                      <FaDollarSign className="text-lg" />
                      <span className="text-sm md:text-base">20,000</span>
                  </div>
      
                  <div className="flex items-center gap-2">
                      <BiTime className="text-lg" />
                      <span className="text-sm md:text-base">قبل ساعتين</span>
                  </div>
      
                  <div className="flex items-center gap-2">
                      <FaUser className="text-lg" />
                      <span className="text-sm md:text-base">أبو خالد</span>
                  </div>
              </div>
          </div>
      
          {/* صورة الإعلان */}
          <div className='w-full md:w-1/5 h-auto md:h-[160px] px-4 py-3'>
              <img className='w-full h-full max-h-[160px] object-cover rounded-lg' src={img} alt='' />
          </div>
      
          {/* أزرار التحكم */}
          <div className='w-full md:w-1/5 h-auto py-4 px-5 flex flex-col justify-center gap-3'>
              <button className='bg-primary w-full md:w-5/6 mx-auto text-white p-2 rounded-10px text-sm md:text-base text-center'>
                  تحديث الاعلان
              </button>
              <button className='bg-primary w-full md:w-5/6 mx-auto text-white p-2 rounded-10px text-sm md:text-base text-center'>
                  مسح الاعلان
              </button>
          </div>
      </div>
          <div className='bg-[#FAFAFA] lg:min-h-[160px] flex flex-wrap md:flex-nowrap my-3'>
          {/* العنوان والموقع */}
          <div className='w-full md:w-2/5 p-4 h-auto md:h-[160px] flex flex-col justify-between'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>كوروال 2013 تجديد وكالة</h1>
              <h1 className='text-placeholder text-sm md:text-base my-4'>دمشق</h1>
          </div>
      
          {/* تفاصيل الإعلان */}
          <div className='w-full md:w-1/5 h-auto py-3 px-4 md:pr-16'>
              <div className="grid grid-cols-2 md:flex md:flex-col gap-3 text-placeholder">
                  <div className="flex items-center gap-2">
                      <MdOutlineAttachMoney className="text-lg" />
                      <span className="text-sm md:text-base">260,040,000</span>
                  </div>
      
                  <div className="flex items-center gap-2">
                      <FaDollarSign className="text-lg" />
                      <span className="text-sm md:text-base">20,000</span>
                  </div>
      
                  <div className="flex items-center gap-2">
                      <BiTime className="text-lg" />
                      <span className="text-sm md:text-base">قبل ساعتين</span>
                  </div>
      
                  <div className="flex items-center gap-2">
                      <FaUser className="text-lg" />
                      <span className="text-sm md:text-base">أبو خالد</span>
                  </div>
              </div>
          </div>
      
          {/* صورة الإعلان */}
          <div className='w-full md:w-1/5 h-auto md:h-[160px] px-4 py-3'>
              <img className='w-full h-full max-h-[160px] object-cover rounded-lg' src={img} alt='' />
          </div>
      
          {/* أزرار التحكم */}
          <div className='w-full md:w-1/5 h-auto py-4 px-5 flex flex-col justify-center gap-3'>
              <button className='bg-primary w-full md:w-5/6 mx-auto text-white p-2 rounded-10px text-sm md:text-base text-center'>
                  تحديث الاعلان
              </button>
              <button className='bg-primary w-full md:w-5/6 mx-auto text-white p-2 rounded-10px text-sm md:text-base text-center'>
                  مسح الاعلان
              </button>
          </div>
      </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsAccount;
