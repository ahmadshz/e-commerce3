import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TbLogout2 } from 'react-icons/tb';
import axios from 'axios';
import { baseUrl } from '../../Api/Api';
import Cookies from 'universal-cookie'; // Import universal-cookie
import Navbar from '../../Components/Websites/Header/Navbar';

const Register = () => {
    // State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const cookies = new Cookies();

    // Handle Change Form Data
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (formData.password !== formData.confirmPassword) {
            setError('كلمات المرور غير متطابقة');
            setLoading(false);
            return;
        }

        const sanitizedPhoneNumber = formData.phone.replace(/\D/g, '');

        const dataToSend = {
            firstname: formData.firstName,
            lastname: formData.lastName,
            username: formData.username,
            phoneNumber: sanitizedPhoneNumber,
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post(`${baseUrl}/user/register`, dataToSend);
            console.log(response.data);
            const { token } = response.data;
            cookies.set('auth_token', token, { path: '/' });

            // Save email in localStorage
            localStorage.setItem('email', formData.email);

            navigate('/verification');
        } catch (err) {
            console.error('Server Error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'فشل في إنشاء الحساب، يرجى المحاولة مرة أخرى');
            setLoading(false);
        }
    };



    return (
        <div>
            <Navbar />
            <div className='min-h-screen container flex flex-col justify-center   pt-16  '>
                <div className='flex justify-between my-4 md:my-10'>
                    <h1 className='font-bold text-xl md:text-[25px] text-primary '>اﻧﺸﺎء ﺣﺴﺎب ﺟﺪﻳﺪ</h1>
                    <Link to={'/'}>
                        <TbLogout2 className='text-primary font-bold text-2xl md:text-4xl' />
                    </Link>
                </div>
                <form className='mt-8  md:my-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ' onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className='flex  items-center gap-2 md:gap-4'>
                        <label htmlFor="firstName" className="font-semibold text-sm md:text-[21px] w-1/3">الاسم</label>
                        <input
                            id='firstName'
                            type='text'
                            value={formData.firstName}
                            onChange={handleChange}
                            className='ring-2 ring-border focus:outline-none focus:border-primary rounded-10px font-normal  text-sm md:text-[17px]  w-2/3 p-3 md:p-4 xl:p-6'
                            placeholder='اكتب اسمك باللغة العربية'
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <label htmlFor="lastName" className="lg:text-center font-semibold text-sm md:text-[21px]  w-1/3">
                            اﺳﻢ اﻟﻌﺎﺋﻠﺔ
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="ring-2 ring-border focus:outline-none focus:border-primary rounded-10px font-normal  text-sm md:text-[17px] w-2/3 p-3 md:p-4 xl:p-6"
                            placeholder="اكتب اسم العائلة باللغة العربية"
                            required
                        />
                    </div>


                    {/* Username */}
                    <div className='flex items-center gap-2 md:gap-4'>
                        <label htmlFor="username" className=' font-semibold text-sm md:text-[21px]  w-1/3'>اﺳﻢ اﻟﻤﺴﺘﺨﺪم</label>
                        <input
                            id='username'
                            type='text'
                            value={formData.username}
                            onChange={handleChange}
                            className="ring-2 text-left ring-border focus:outline-none focus:border-primary rounded-10px font-normal text-sm md:text-[17px] w-2/3 p-3 md:p-4 xl:p-6"
                            placeholder='@'
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div className='flex items-center gap-2 md:gap-4'>
                        <label htmlFor="phone" className=' lg:text-center font-semibold text-sm md:text-[21px]  w-1/3'>رقم الهاتف</label>
                        <input
                            id='phone'
                            type='tel'
                            value={formData.phone}
                            onChange={handleChange}
                            className="ring-2 text-left ring-border focus:outline-none focus:border-primary rounded-10px font-normal text-sm md:text-[17px] w-2/3 p-3 md:p-4 xl:p-6"
                            placeholder=' +963 ... ... ...'
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className='flex  items-center gap-2 md:gap-4 md:col-span-2'>
                        <label htmlFor="email" className=' font-semibold text-sm md:text-[21px]  w-1/3 md:w-[19.35%]'>البريد الإلكتروني</label>
                        <input
                            id='email'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='ring-2 text-left ring-border focus:outline-none focus:border-primary rounded-10px  text-sm md:text-[17px] font-normal   w-2/3 md:w-full  p-3 md:p-4 xl:p-6'
                            placeholder='@'
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className='flex  items-center  gap-2 md:gap-4'>
                        <label htmlFor="password" className=' font-semibold text-sm md:text-[21px]  w-1/3'>كلمة المرور</label>
                        <input
                            id='password'
                            type='password'
                            value={formData.password}
                            onChange={handleChange}
                            className="ring-2 ring-border focus:outline-none  focus:border-primary rounded-10px  text-sm md:text-[17px] font-normal  w-2/3 p-3  md:p-4 xl:p-6"
                            placeholder='ادخل كلمة المرور'
                            required
                        />
                    </div>
                    <div className='hidden md:block' />

                    {/* Confirm Password */}
                    <div className='flex  items-center gap-2 md:gap-4'>
                        <label htmlFor="confirmPassword" className=' font-semibold text-sm md:text-[21px]  w-1/3'>تأكيد كلمة المرور</label>
                        <input
                            id='confirmPassword'
                            type='password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="ring-2 ring-border focus:outline-none focus:border-primary rounded-10px  text-sm md:text-[17px] font-normal w-2/3 p-3 md:p-4 xl:p-6"
                            placeholder='اعد إدخال كلمة المرور'
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {error && <p className='text-red-500 text-sm col-span-1 md:col-span-2 text-center'>{error}</p>}

                    {/* Submit Button */}
                    <div className='col-span-1 md:col-span-2 flex justify-center items-center my-4 md:my-10'>
                        <button
                            type="submit"
                            className={`bg-primary font-bold text-lg md:text-[25px] text-white py-2 mt-10 md:py-6 w-full md:w-2/4 rounded-10px  ${loading ? 'opacity-50' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'جاري إنشاء الحساب...' : 'اﻧﺸﺎء ﺣﺴﺎب ﺟﺪﻳﺪ'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;