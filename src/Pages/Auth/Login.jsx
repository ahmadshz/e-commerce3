import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from 'react-icons/fa';
import { BiShow } from 'react-icons/bi';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import axios from 'axios';
import { baseUrl } from '../../Api/Api';
import Cookies from 'universal-cookie';
import Navbar from '../../Components/Websites/Header/Navbar';

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const cookies = new Cookies();

    const togglePassword = () => {
        setShow(!show);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${baseUrl}/user/login`, { email, password });
            const { token } = response.data;
            cookies.set('auth_token', token, { path: '/' });
            navigate('/');
        } catch (err) {
            setError('فشل تسجيل الدخول، يرجى المحاولة مرة اخرى');
            setLoading(false);
        }
    };

    return (
        <div className='h-screen'>
            <Navbar />
            <div className='container h-full flex items-center justify-center'>
                {/* Form Container */}
                <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[735px] h-auto sm:h-auto flex flex-col gap-4 border-2 border-primary rounded-lg bg-white'>
                    {/* Header */}
                    <div className='bg-primary flex justify-between items-center text-white text-2xl font-medium p-4 sm:p-5'>
                        <h1 className='text-[25px] sm:text-[30px] font-bold'>تسجيل الدخول</h1>
                        <Link to='/'>
                            <IoArrowBackCircleOutline size={30} />
                        </Link>
                    </div>

                    {/* Form */}
                    <form className='flex flex-col gap-4 sm:gap-[20px] p-4' onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className='flex flex-col xl:flex-row justify-between xl:items-center gap-4 xl:gap-2'>
                            <label className='text-[20px] sm:text-[25px]'> اسم المستخدم </label>
                            <input
                                type="text"
                                placeholder='ادخل البريد الإلكتروني هنا'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full xl:w-[433px] h-[50px] sm:h-[76px] border-2 border-border focus:outline-none focus:border-primary rounded-lg p-2'
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative flex flex-col xl:flex-row justify-between xl:items-center gap-4 xl:gap-2">
                            <label className=' text-[20px] w-[230px] sm:text-[25px]'> كلمة المرور </label>
                            <input
                                type={show ? 'text' : 'password'}
                                placeholder='ادخل كلمة المرور هنا'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full xl:w-[433px] h-[50px] sm:h-[76px] border-2 border-border focus:outline-none focus:border-primary rounded-lg p-2'
                            />
                            {/* Password Toggle Button */}
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute left-4 top-[57px] sm:top-[25px] md:top-[65px]  xl:top-[27px] text-placeholder"
                            >
                                {show ? <FaRegEyeSlash size={30} /> : <BiShow size={30} />}
                            </button>
                        </div>

                        {/* Error Message */}
                        {error && <p className='text-red-500 text-[18px] sm:text-[20px] font-semibold p-2 sm:p-5'>{error}</p>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`bg-primary text-[20px] md:text-[25px] lg:text-[30px] text-white w-full mx-auto h-[60px] lg:h-[76px] mt-[20px] sm:mt-[30px] rounded-lg p-2 font-medium ${loading ? 'opacity-50' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                        </button>

                        {/* Register Link */}
                        <Link to='/register' className='text-center text-placeholder text-[18px] sm:text-[20px] font-semibold p-2 sm:p-5'>
                            انشاء حساب جديد
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;