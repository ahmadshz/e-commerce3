import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../Api/Api';
import Cookies from 'universal-cookie'; // Import universal-cookie
import Navbar from '../../Components/Websites/Header/Navbar';
import { FaRegEyeSlash } from 'react-icons/fa';
import { BiShow } from 'react-icons/bi';

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
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

    const navigate = useNavigate();

    const cookies = new Cookies();

    // Handle Change Form Data
    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === "phone") {
            let cleanedValue = value.replace(/\D/g, ""); 

            // Ensure it always starts with "+963 9"
            if (!cleanedValue.startsWith("9639")) {
                cleanedValue = "9639";
            }

            // Limit the total length to "+963 9" followed by 8 digits
            if (cleanedValue.length > 12) {
                cleanedValue = cleanedValue.slice(0, 12);
            }

            setFormData({
                ...formData,
                phone: "+" + cleanedValue, 
            });
        } else {
            setFormData({
                ...formData,
                [id]: value,
            });
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Validate phone number format
        if (!formData.phone.startsWith('+963')) {
            setError('رقم الهاتف يجب أن يبدأ ب +963');
            setLoading(false);
            return;
        }

        // Ensure password and confirm password match
        if (formData.password !== formData.confirmPassword) {
            setError('كلمات المرور غير متطابقة');
            setLoading(false);
            return;
        }
        // Remove non-numeric characters
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
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='flex flex-col gap-4'>
            <Navbar />
            <h1 className='text-[16px] md:text-[20px] lg:text-[25px] w-full text-primary font-bold my-4 md:my-10 lg:my-14  container'>
                إنشاء حساب جديد
            </h1>
            <div className=' container flex flex-col  '>
                <form className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 md:gap-8  mb-10 sm:mb-16 lg:mb-20' onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className='flex flex-col lg:flex-row   md:gap-4'>
                        <label htmlFor="firstName" className="  text-[14px] md:text-[16px] lg:text-[20px] font-semibold  md:w-[239px] flex items-center">الاسم</label>
                        <input
                            id='firstName'
                            type='text'
                            value={formData.firstName}
                            onChange={handleChange}
                            className='text-placeholder  text-[12px] md:text-[14px] lg:text-[17px] border md:border-2 border-border w-full lg:w-[433px] h-[50px] md:h-[60px] lg:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3 outline-none focus:border-primary'
                            placeholder='اكتب اسمك باللغة العربية'
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col lg:flex-row   md:gap-4">
                        <label htmlFor="lastName" className="  text-[14px] md:text-[16px] lg:text-[20px] font-semibold  md:w-[239px] flex items-center">
                            اﺳﻢ اﻟﻌﺎﺋﻠﺔ
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="text-placeholder  text-[12px] md:text-[14px] lg:text-[17px] border md:border-2 border-border w-full lg:w-[433px] h-[50px] md:h-[60px] lg:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3 outline-none focus:border-primary"
                            placeholder="اكتب اسم العائلة باللغة العربية"
                            required
                        />
                    </div>

                    {/* Username */}
                    <div className='flex flex-col lg:flex-row   md:gap-4'>
                        <label htmlFor="username" className='  text-[14px] md:text-[16px] lg:text-[20px] font-semibold  md:w-[239px] flex items-center'>
                            اﺳﻢ اﻟﻤﺴﺘﺨﺪم
                        </label>
                        <div className="relative w-full lg:w-[433px]">
                            <input
                                id='username'
                                type='text'
                                value={formData.username}
                                onChange={handleChange}
                                className="text-placeholder  text-[12px] md:text-[14px] lg:text-[17px] border md:border-2 border-border w-full h-[50px] md:h-[60px] lg:h-[76px] flex items-center rounded-10px font-medium tracking-wider pl-10 outline-none focus:border-primary"
                                placeholder='اكتب اسم المستخدم باللغة الانجليزية'
                                required
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-placeholder  text-[12px] md:text-[14px] lg:text-[17px] pointer-events-none">
                                @
                            </span>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className='flex flex-col lg:flex-row   md:gap-4'>
                        <label htmlFor="phone" className='  text-[14px] md:text-[16px] lg:text-[20px] font-semibold  md:w-[239px] flex items-center'>رقم الهاتف</label>
                        <input
                            id='phone'
                            type='tel'
                            value={formData.phone}
                            onChange={handleChange}
                            className="text-placeholder  text-[12px] md:text-[14px] lg:text-[17px] border md:border-2 border-border w-full lg:w-[433px] h-[50px] md:h-[60px] lg:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3 outline-none focus:border-primary"
                            placeholder='+963 9.. ... ...'
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className='flex flex-col lg:flex-row   md:gap-4 col-span-1 sm:col-span-2'>
                        <label htmlFor="email" className='  text-[14px] md:text-[16px] lg:text-[20px] font-semibold  xl:w-[239px] flex items-center'>البريد الإلكتروني</label>
                        <input
                            id='email'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='text-placeholder text-left border md:border-2 border-border w-full lg:w-[800px] xl:w-[1183px] 2xl:w-[1202px] h-[50px] md:h-[60px] lg:h-[76px] rounded-10px  text-[12px] md:text-[14px] lg:text-[17px] font-medium tracking-wider p-3 flex items-center outline-none focus:border-primary'
                            placeholder='@'
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className='flex flex-col lg:flex-row   md:gap-4 col-span-1 sm:col-span-2'>
                        <label htmlFor="password" className='  text-[14px] md:text-[16px] lg:text-[20px] font-semibold  lg:w-[142px] xl:w-[186px] 2xl:w-[239px] flex items-center'>كلمة المرور</label>
                        <div className="relative w-full md:w-[350px] xl:w-[477px]">
                            <input
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={handleChange}
                                className="text-placeholder  text-[12px] md:text-[14px] lg:text-[17px] border md:border-2 border-border
                                 w-full  h-[50px] md:h-[60px] lg:h-[76px] flex items-center rounded-10px
                                  font-medium tracking-wider p-3 outline-none focus:border-primary"
                                placeholder='اكتب كلمة السر باللغة الانجليزية'
                                required
                                minLength={6}
                            />
                            <button
                                type="button"
                                className="absolute text-placeholder inset-y-0 left-2 lg:left-5 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaRegEyeSlash className='text-[25px] md:text-[30px]' /> : <BiShow className='text-[25px] md:text-[30px]' />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className='flex flex-col lg:flex-row   md:gap-4 col-span-1 sm:col-span-2'>
                        <label htmlFor="confirmPassword" className='  text-[14px] md:text-[16px] lg:text-[20px] font-semibold  lg:w-[142px] xl:w-[186px] 2xl:w-[239px] flex items-center'>تأكيد كلمة المرور</label>
                        <div className="relative w-full md:w-[350px] xl:w-[477px]">
                            <input
                                id='confirmPassword'
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="text-placeholder  text-[12px] md:text-[14px] lg:text-[17px] border md:border-2 border-border w-full h-[50px] md:h-[60px] lg:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3 outline-none focus:border-primary"
                                placeholder='اكتب كلمة السر ثانياّ باللغة الانجليزية'
                                required
                            />
                            <button
                                type="button"
                                className="absolute text-placeholder inset-y-0 left-2 lg:left-5 flex items-center"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaRegEyeSlash className='text-[25px] md:text-[30px]' /> : <BiShow className='text-[25px] md:text-[30px]' />}
                            </button>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && <p className='  text-[14px] md:text-[16px] lg:text-[20px] font-semibold  text-primary col-span-1 md:col-span-2 text-center'>{error}</p>}

                    {/* Submit Button */}
                    <div className='col-span-1 md:col-span-2 flex justify-center items-center my-4 md:my-10'>
                        <button

                            type="submit"
                            className={`bg-primary font-bold text-[16px] md:text-[20px] lg:text-[25px] text-white  h-[50px] md:h-[60px] lg:h-[76px] w-[660px] rounded-10px ${loading ? 'opacity-50' : ''}`}
                            disabled={loading ? true : false}
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