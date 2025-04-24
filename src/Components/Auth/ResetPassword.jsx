import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Websites/Header/Navbar';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulate password reset validation
        setTimeout(() => {
            if (!newPassword || !confirmPassword) {
                setError('يرجى إدخال كلمة المرور وتأكيدها');
            } else if (newPassword !== confirmPassword) {
                setError('كلمتا المرور غير متطابقتين');
            } else {
                // Simulate API call here
                setSuccess(true);
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <div className='h-screen'>
            <Navbar />
            <div className='container h-full flex items-center justify-center'>
                <div className='w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[635px] h-auto flex flex-col gap-4 border-2 border-primary rounded-10px bg-white'>
                    <div className='bg-primary flex items-center text-white rounded-t-10px h-[50px] md:h-[60px] lg:h-[85px] px-6'>
                        <h1 className='text-[16px] md:text-[20px] lg:text-[25px] font-bold'>إعادة تعيين كلمة المرور</h1>
                    </div>

                    <form className='flex flex-col gap-2 sm:gap-[20px] lg:py-4 px-6' onSubmit={handleSubmit}>
                        {success ? (
                            <p className='text-center text-green-600 text-[16px] md:text-[18px] lg:text-[20px] font-semibold py-6'>
                                تم تحديث كلمة المرور بنجاح. <Link to='/login' className='text-primary underline'>تسجيل الدخول</Link>
                            </p>
                        ) : (
                            <div className='flex flex-col gap-2 sm:gap-[20px] '>
                                {/* New Password */}
                                <div className='flex flex-col xl:flex-row justify-between xl:items-center md:gap-2 lg:gap-4 xl:gap-2'>
                                    <label className='text-[14px] md:text-[16px] lg:text-[20px] font-semibold w-[230px]'>كلمة المرور الجديدة</label>
                                    <input
                                        type='password'
                                        placeholder='ادخل كلمة المرور الجديدة'
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className='w-full xl:w-[433px] h-[50px] md:h-[60px] lg:h-[76px] text-placeholder text-[12px] md:text-[14px] lg:text-[17px] 
                                        border md:border-2 border-border focus:outline-none focus:border-primary rounded-10px pr-2'
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className='flex flex-col xl:flex-row justify-between xl:items-center md:gap-2 lg:gap-4 xl:gap-2'>
                                    <label className='text-[14px] md:text-[16px] lg:text-[20px] font-semibold w-[230px]'>تأكيد كلمة المرور</label>
                                    <input
                                        type='password'
                                        placeholder='أعد إدخال كلمة المرور'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className='w-full xl:w-[433px] h-[50px] md:h-[60px] lg:h-[76px] text-placeholder text-[12px] md:text-[14px] lg:text-[17px] 
                                        border md:border-2 border-border focus:outline-none focus:border-primary rounded-10px pr-2'
                                    />
                                </div>

                                {/* Error */}
                                {error && <p className='text-primary text-[14px] md:text-[16px] font-semibold'>{error}</p>}

                                {/* Submit */}
                                <button
                                    type='submit'
                                    className={`bg-primary text-white font-bold text-[16px] md:text-[18px] lg:text-[20px] w-full h-[45px] md:h-[50px] lg:h-[70px] mt-2 mb-5 lg:my-5 rounded-lg p-2 ${loading ? 'opacity-50' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'جارٍ التحديث...' : 'تحديث كلمة المرور'}
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
