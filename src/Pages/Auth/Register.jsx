import React from 'react';
import { TbLogout2 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='min-h-screen container flex flex-col justify-center p-10'>
            <div className='flex justify-between my-10'>
                <h1 className='font-medium text-3xl text-primary'>اﻧﺸﺎء ﺣﺴﺎب ﺟﺪﻳﺪ</h1>
                <Link to={'/'}>
                    <TbLogout2 className='text-primary font-bold' size={30} />
                </Link>
            </div>
            <form className='my-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* First Name */}
                <div className='grid grid-cols-1 gap-4'>
                    <label htmlFor="firstName" className='font-medium'>اﻻﺳﻢ</label>
                    <input
                        id='firstName'
                        type='text'
                        className='border-2 border-gray-200 focus:outline-none focus:border-primary rounded-md p-2'
                        placeholder='اكتب اسمك باللغة العربية'
                    />
                </div>

                {/* Last Name */}
                <div className='grid grid-cols-1 gap-4'>
                    <label htmlFor="lastName" className='font-medium'>اﺳﻢ اﻟﻌﺎﺋﻠﺔ</label>
                    <input
                        id='lastName'
                        type='text'
                        className='border-2 border-gray-200 focus:outline-none focus:border-primary rounded-md p-2'
                        placeholder='اكتب اسم العائلة باللغة العربية'
                    />
                </div>

                {/* Username */}
                <div className='grid grid-cols-1 gap-4'>
                    <label htmlFor="username" className='font-medium'>اﺳﻢ اﻟﻤﺴﺘﺨﺪم</label>
                    <input
                        id='username'
                        type='text'
                        className='border-2 border-gray-200 focus:outline-none focus:border-primary rounded-md p-2'
                        placeholder='اكتب اسم المستخدم باللغة العربية'
                    />
                </div>

                {/* Phone Number */}
                <div className='grid grid-cols-1 gap-4'>
                    <label htmlFor="phone" className='font-medium'>رقم الهاتف</label>
                    <input
                        id='phone'
                        type='tel'
                        className='border-2 border-gray-200 focus:outline-none focus:border-primary rounded-md p-2'
                        placeholder='  +963 ... ... ...'
                    />
                </div>

                {/* Email */}
                <div className='grid grid-cols-1 gap-4 col-span-1 md:col-span-2'>
                    <label htmlFor="email" className='font-medium'>البريد الإلكتروني</label>
                    <input
                        id='email'
                        type='email'
                        className='border-2 border-gray-200 focus:outline-none focus:border-primary rounded-md p-2'
                        placeholder='ادخل بريدك الإلكتروني'
                    />
                </div>

                {/* Password */}
                <div className='grid grid-cols-1 gap-4'>
                    <label htmlFor="password" className='font-medium'>كلمة المرور</label>
                    <input
                        id='password'
                        type='password'
                        className='border-2 border-gray-200 focus:outline-none focus:border-primary rounded-md p-2'
                        placeholder='ادخل كلمة المرور'
                    />
                </div>

                {/* Confirm Password */}
                <div className='grid grid-cols-1 gap-4'>
                    <label htmlFor="confirmPassword" className='font-medium'>تأكيد كلمة المرور</label>
                    <input
                        id='confirmPassword'
                        type='password'
                        className='border-2 border-gray-200 focus:outline-none focus:border-primary rounded-md p-2'
                        placeholder='اعد إدخال كلمة المرور'
                    />
                </div>

                {/* Submit Button */}
                <div className='col-span-1 md:col-span-2 flex justify-center items-center my-10'>
                    <button className='bg-primary text-md font-medium text-white py-3 w-full md:w-2/4 rounded-md'>
                        اﻧﺸﺎء ﺣﺴﺎب ﺟﺪﻳﺪ
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;