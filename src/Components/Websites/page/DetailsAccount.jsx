import React, { useEffect, useState } from 'react';
import MainHeader from '../Header/MainHeader';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'universal-cookie';
import { baseUrl } from '../../../Api/Api';

const DetailsAccount = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get('auth_token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        // Fetch user details from API
        const fetchUserDetails = async () => {
          try {
            const response = await axios.get(`${baseUrl}/user/${userId}`);
            setUserDetails(response.data);
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        };

        fetchUserDetails();
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  if (!userDetails) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="min-h-screen">
      <MainHeader />
      <div className="min-h-screen   px-4 sm:px-6 lg:px-8">
        <div className="py-6 bg-white container">
          {/* عنوان معلومات الحساب */}
          <h2 className="text-[25px] lg:text-[30px] text-primary font-bold my-10 sm:my-16 lg:my-20">
            معلومات الحساب
          </h2>

          {/* شبكة العناصر */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-5 mb-10 sm:mb-16 lg:mb-20">
            {/* الاسم الأول */}
            <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
              <div className="font-semibold text-[20px] lg:text-[25px] md:w-[239px] flex items-center">
                الاسم
              </div>
              <div className="text-placeholder bg-gray-100 w-full lg:w-[433px] h-[60px] md:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3">
                {userDetails.firstname}
              </div>
            </div>

            {/* اسم العائلة */}
            <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
              <div className="font-semibold text-[20px] lg:text-[25px] md:w-[239px] flex items-center">
                اسم العائلة
              </div>
              <div className="text-placeholder bg-gray-100 w-full lg:w-[433px] h-[60px] md:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3">
                {userDetails.lastname}
              </div>
            </div>

            {/* اسم المستخدم */}
            <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
              <div className="font-semibold text-[20px] lg:text-[25px] md:w-[239px]">
                اسم المستخدم
              </div>
              <div className="text-placeholder bg-gray-100 w-full lg:w-[433px] h-[60px] md:h-[76px] rounded-10px font-medium tracking-wider p-3 flex items-center">
                {userDetails.username}
              </div>
            </div>

            {/* رقم الجوال */}
            <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
              <div className="font-semibold text-[20px] lg:text-[25px] md:w-[239px]">
                رقم الجوال
              </div>
              <div className="text-placeholder bg-gray-100 w-full lg:w-[433px] h-[60px] md:h-[76px] rounded-10px font-medium tracking-wider p-3 flex items-center">
                {userDetails.phoneNumber}
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 col-span-1 sm:col-span-2">
              <div className="font-semibold text-[20px] lg:text-[25px] xl:w-[239px]">
                البريد الإلكتروني
              </div>
              <div className="text-placeholder bg-gray-100 w-full lg:w-[952px] xl:w-[1170px] 2xl:w-[1272px]  h-[60px] md:h-[76px] rounded-10px font-medium tracking-wider p-3 flex items-center">
                {userDetails.email}
              </div>
            </div>
          </div>

          {/* عنوان إعلاناتي */}
          <h2 className=" text-[25px] lg:text-[30px] text-primary font-bold my-10 sm:my-16 lg:my-20">
            اعلاناتي
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsAccount;
