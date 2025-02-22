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

    const cookies = new Cookies()

    const togglePassword = () => {
        setShow(!show);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${baseUrl}/user/login`, { email, password });
            // You can store the token or user data as needed
            const { token } = response.data;
            cookies.set('auth_token', token, { path: '/' });
            navigate('/');
        } catch (err) {
            setError('فشل تسجيل الدخول، يرجى المحاولة مرة اخرى');
            setLoading(false);
        }
    };

    return (
        <div className='h-screen '>
        <Navbar/>
            <div className='container h-full flex items-center justify-center'>
                <div className='w-full sm:w-3/4 md:w-2/4 xl:w-1/4 flex flex-col gap-4 border-2 border-primary rounded-lg bg-white'>
                    <div className='bg-primary flex justify-between items-center text-white text-2xl font-medium p-5'>
                        <h1>تسجيل الدخول</h1>
                        <Link to='/'>
                            <IoArrowBackCircleOutline size={30} />
                        </Link>
                    </div>
                    <form className='flex flex-col gap-4 p-4' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='ادخل البريد الإلكتروني هنا'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full ring-2 ring-border focus:outline-none focus:border-primary rounded-10px p-2'
                        />
                        <div className="relative w-full">
                            <input
                                type={show ? 'text' : 'password'}
                                placeholder='ادخل كلمة المرور هنا'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full ring-2 ring-border focus:outline-none focus:border-primary rounded-10px p-2'
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {show ? <FaRegEyeSlash size={23} /> : <BiShow size={23} />}
                            </button>
                        </div>
                        {error && <p className='text-red-500 text-sm'>{error}</p>}
                        <button
                            type="submit"
                            className={`bg-primary text-white rounded-10px p-2 font-medium ${loading ? 'opacity-50' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                        </button>
                        <Link to='/register' className='text-center text-gray-400 font-medium p-5'>
                            انشاء حساب جديد
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
