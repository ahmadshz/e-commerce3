import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '../Websites/Header/Navbar';
import axios from 'axios';
import { baseUrl } from '../../Api/Api';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post(`${baseUrl}/user/send-reset-link`, { email });

            if (response.data.success || response.status === 200) {
                setSubmitted(true);
            } else {
                setError('حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً.');
            }
        } catch (err) {
            if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError('فشل في الاتصال بالخادم.');
            }
        }

        setLoading(false);
    };

    return (
        <div className='h-screen'>
            <Navbar />
            <div className='container h-full flex items-center justify-center'>
                <div className='w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[635px] h-auto flex flex-col gap-4 border-2 border-primary rounded-10px bg-white'>
                    {/* Header */}
                    <div className='bg-primary flex items-center text-white rounded-t-10px h-[50px] md:h-[60px] lg:h-[85px] px-6'>
                        <h1 className='text-[16px] md:text-[20px] lg:text-[25px] font-bold'>نسيت كلمة المرور</h1>
                    </div>

                    {/* Form or Success Message */}
                    <div className='flex flex-col gap-2 sm:gap-[20px] lg:py-4 px-6'>
                        {submitted ? (
                            <div className='text-center py-6'>
                                <FaCheckCircle className='text-primary text-4xl mx-auto mb-4' />
                                <p className='text-[16px] md:text-[18px] lg:text-[20px] font-semibold'>
                                    تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.
                                </p>
                            </div>
                        ) : (
                            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                                <label className='text-[14px] md:text-[16px] lg:text-[20px] font-semibold'>
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type='email'
                                    placeholder='ادخل بريدك الإلكتروني'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder text-[12px] md:text-[14px] lg:text-[17px] 
                                    border md:border-2 border-border focus:outline-none focus:border-primary rounded-10px pr-2'
                                />

                                {error && <p className='text-primary text-[14px] md:text-[16px] font-semibold'>{error}</p>}

                                <button
                                    type='submit'
                                    className={`bg-primary text-white font-bold text-[16px] md:text-[18px] lg:text-[20px] w-full h-[45px] md:h-[50px] lg:h-[70px] rounded-lg p-2 ${loading ? 'opacity-50' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'جاري الإرسال...' : 'إرسال رابط إعادة التعيين'}
                                </button>

                                <Link to='/login' className='text-center text-placeholder text-[14px] md:text-[16px] lg:text-[20px] font-semibold py-2 lg:py-5'>
                                    العودة لتسجيل الدخول
                                </Link>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
