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
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

    const navigate = useNavigate();

    const cookies = new Cookies();

    // Handle Change Form Data
    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === "phone") {
            let cleanedValue = value.replace(/\D/g, ""); // Remove non-numeric characters

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
                phone: "+" + cleanedValue, // Add "+" back
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

        const sanitizedPhoneNumber = formData.phone.replace(/\D/g, ''); // Remove non-numeric characters

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
            <div className='text-[20px] container lg:text-[25px] text-primary font-bold my-5 lg:my-20'>
                اﻧﺸﺎء ﺣﺴﺎب ﺟﺪﻳﺪ
            </div>
            <div className=' container flex flex-col  '>
                <form className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-5 mb-10 sm:mb-16 lg:mb-20' onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className='flex flex-col lg:flex-row gap-3 md:gap-4'>
                        <label htmlFor="firstName" className="font-semibold text-[17px] lg:text-[20px] md:w-[239px] flex items-center">الاسم</label>
                        <input
                            id='firstName'
                            type='text'
                            value={formData.firstName}
                            onChange={handleChange}
                            className='text-placeholder text-[15px] lg:text-[17px] border-2 border-border w-full lg:w-[433px] h-[60px] md:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3 outline-none focus:border-primary'
                            placeholder='اكتب اسمك باللغة العربية'
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
                        <label htmlFor="lastName" className="font-semibold text-[17px] lg:text-[20px] md:w-[239px] flex items-center">
                            اﺳﻢ اﻟﻌﺎﺋﻠﺔ
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="text-placeholder text-[15px] lg:text-[17px] border-2 border-border w-full lg:w-[433px] h-[60px] md:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3 outline-none focus:border-primary"
                            placeholder="اكتب اسم العائلة باللغة العربية"
                            required
                        />
                    </div>

                    {/* Username */}
                    <div className='flex flex-col lg:flex-row gap-3 md:gap-4'>
                        <label htmlFor="username" className='font-semibold text-[17px] lg:text-[20px] md:w-[239px] flex items-center'>
                            اﺳﻢ اﻟﻤﺴﺘﺨﺪم
                        </label>
                        <div className="relative w-full lg:w-[433px]">
                            <input
                                id='username'
                                type='text'
                                value={formData.username}
                                onChange={handleChange}
                                className="text-placeholder text-[15px] lg:text-[17px] border-2 border-border w-full h-[60px] md:h-[76px] flex items-center rounded-10px font-medium tracking-wider pl-10 outline-none focus:border-primary"
                                placeholder='اكتب اسم المستخدم باللغة الانجليزية'
                                required
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-placeholder text-[15px] lg:text-[17px] pointer-events-none">
                                @
                            </span>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className='flex flex-col lg:flex-row gap-3 md:gap-4'>
                        <label htmlFor="phone" className='font-semibold text-[17px] lg:text-[20px] md:w-[239px] flex items-center'>رقم الهاتف</label>
                        <input
                            id='phone'
                            type='tel'
                            value={formData.phone}
                            onChange={handleChange}
                            className="text-placeholder text-[15px] lg:text-[17px] border-2 border-border w-full lg:w-[433px] h-[60px] md:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3 outline-none focus:border-primary"
                            placeholder='+963 9.. ... ...'
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className='flex flex-col lg:flex-row gap-3 md:gap-4 col-span-1 sm:col-span-2'>
                        <label htmlFor="email" className='font-semibold text-[17px] lg:text-[20px] xl:w-[239px] flex items-center'>البريد الإلكتروني</label>
                        <input
                            id='email'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='text-placeholder text-left border-2 border-border w-full lg:w-[800px] xl:w-[1183px] 2xl:w-[1202px] h-[60px] md:h-[76px] rounded-10px text-[15px] lg:text-[17px] font-medium tracking-wider p-3 flex items-center outline-none focus:border-primary'
                            placeholder='@'
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className='flex flex-col lg:flex-row gap-3 md:gap-4 col-span-1 sm:col-span-2'>
                        <label htmlFor="password" className='font-semibold text-[17px] lg:text-[20px] lg:w-[142px] xl:w-[186px] 2xl:w-[239px] flex items-center'>كلمة المرور</label>
                        <div className="relative w-full md:w-[350px] xl:w-[477px]">
                            <input
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={handleChange}
                                className="text-placeholder text-[15px] lg:text-[17px] border-2 border-border
                                 w-full  h-[60px] md:h-[76px] flex items-center rounded-10px
                                  font-medium tracking-wider p-3 outline-none focus:border-primary"
                                placeholder='اكتب كلمة السر باللغة الانجليزية'
                                required
                                minLength={6}
                            />
                            <button
                                type="button"
                                className="absolute text-placeholder inset-y-0 left-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaRegEyeSlash size={30} /> : <BiShow size={30} />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className='flex flex-col lg:flex-row gap-3 md:gap-4 col-span-1 sm:col-span-2'>
                        <label htmlFor="confirmPassword" className='font-semibold text-[17px] lg:text-[20px] lg:w-[142px] xl:w-[186px] 2xl:w-[239px] flex items-center'>تأكيد كلمة المرور</label>
                        <div className="relative w-full md:w-[350px] xl:w-[477px]">
                            <input
                                id='confirmPassword'
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="text-placeholder text-[15px] lg:text-[17px] border-2 border-border w-full h-[60px] md:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3 outline-none focus:border-primary"
                                placeholder='اكتب كلمة السر ثانياّ باللغة الانجليزية'
                                required
                            />
                            <button
                                type="button"
                                className="absolute text-placeholder inset-y-0 left-3 flex items-center"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaRegEyeSlash size={30} /> : <BiShow size={30} />}
                            </button>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && <p className='font-semibold text-[17px] lg:text-[20px] text-primary col-span-1 md:col-span-2 text-center'>{error}</p>}

                    {/* Submit Button */}
                    <div className='col-span-1 md:col-span-2 flex justify-center items-center my-4 md:my-10'>
                        <button

                            type="submit"
                            className={`bg-primary font-bold text-lg md:text-[25px] text-white  h-[60px] md:h-[76px] w-[660px] rounded-10px ${loading ? 'opacity-50' : ''}`}
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