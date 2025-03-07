import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from 'react-icons/fa';
import { BiShow } from 'react-icons/bi';
import axios from 'axios';
import { baseUrl } from '../../Api/Api';
import Cookies from 'universal-cookie';
import Navbar from '../../Components/Websites/Header/Navbar';
import { jwtDecode } from 'jwt-decode';

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
            const  token  = response.data.token;
            cookies.set('auth_token', token);
            const {role} = jwtDecode(cookies.get('auth_token'));
            const go = role === 'admin' ? '/dashboard/welcomeDashboard' : '/';
            navigate(`${go}`);
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
                <div className='w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[635px] h-auto sm:h-auto flex flex-col gap-4 border-2 border-primary rounded-10px bg-white'>
                    {/* Header */}
                    <div className='bg-primary flex items-center text-white  rounded-t-10px  h-[50px] md:h-[60px] lg:h-[85px] px-6'>
                        <h1 className='text-[16px] md:text-[20px] lg:text-[25px] font-bold'>تسجيل الدخول</h1>
                        
                    </div>

                    {/* Form */}
                    <form className='flex flex-col gap-2 sm:gap-[20px]  lg:py-4 px-6' onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className='flex flex-col xl:flex-row justify-between xl:items-center md:gap-2 lg:gap-4 xl:gap-2'>
                            <label className=' text-[14px] md:text-[16px] lg:text-[20px] font-semibold w-[230px]'> اسم المستخدم </label>
                            <input
                                type="text"
                                placeholder='ادخل البريد الإلكتروني هنا'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full xl:w-[433px] h-[50px] md:h-[60px] lg:h-[76px] text-placeholder text-[12px] md:text-[14px] lg:text-[17px] 
                                border-2 border-border focus:outline-none focus:border-primary rounded-10px pr-2'
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative flex flex-col xl:flex-row justify-between xl:items-center md:gap-2 lg:gap-4 xl:gap-2">
                            <label className='text-[14px] md:text-[16px] lg:text-[20px] w-[230px] font-semibold'> كلمة المرور </label>
                            <input
                                type={show ? 'text' : 'password'}
                                placeholder='ادخل كلمة المرور هنا'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full xl:w-[433px] h-[50px] md:h-[60px] lg:h-[76px] text-placeholder text-[12px] md:text-[14px] lg:text-[17px] 
                                border-2 border-border focus:outline-none focus:border-primary rounded-10px pr-2'
                            />
                            {/* Password Toggle Button */}
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute left-4 top-[41px] sm:top-[32px] md:top-[52px] lg:top-[67px] xl:top-[23px] text-placeholder"
                            >
                                {show ? <FaRegEyeSlash className='text-[25px] md:text-[30px]' /> : <BiShow className='text-[25px] md:text-[30px]'  />}
                            </button>
                        </div>

                        {/* Error Message */}
                        {error && <p className='text-primary text-[14px] md:text-[16px] lg:text-[20px] font-semibold px-2 '>{error}</p>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`bg-primary text-[16px] lg:text-[20px]  font-bold text-white w-full h-[45px]  md:h-[50px] lg:h-[70px] mt-[5px] lg:mt-[30px] rounded-lg p-2 ${loading ? 'opacity-50' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'جاري تسجيل الدخول...' : 'الدخول'}
                        </button>

                        {/* Register Link */}
                        <Link to='/register' className='text-center text-placeholder text-[14px] md:text-[16px] lg:text-[20px] font-semibold p-2 lg:p-5'>
                            انشاء حساب جديد
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;