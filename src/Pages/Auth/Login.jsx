import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegEyeSlash } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Login = () => {
    const [show, setShow] = useState(false)

    const togglePassword = () => {
        setShow(!show)
    }

    const goBcak = () => {
        window.history.back()
    }

    return (
        <div className='h-screen fixed inset-0 bg-[rgba(77,76,76,0.1)] backdrop-blur-sm flex justify-center items-center '>
            <div className='container'>
                <div className=' w-full  sm:w-3/4 md:w-2/4  flex flex-col gap-4 border-2 border-primary rounded-lg bg-white'>
                    <div className=' bg-primary flex justify-between items-center text-white text-2xl font-medium p-5' >
                        <h1>تسجيل الدخول</h1>
                        <IoArrowBackCircleOutline onClick={goBcak} size={30} />
                    </div>
                    <form className='flex flex-col gap-4 p-4 '>
                        <input className='border-2 border-gray-200 focus:outline-none focus:border-primary rounded-md p-2' type="text" placeholder=' ادخل البريد الإلكتروني هنا' />
                        <div className="relative w-full">
                            <input
                                className='w-full border-2 border-gray-200 focus:outline-none focus:border-primary rounded-md p-2'
                                type={show ? 'text' : 'password'}
                                placeholder=' ادخل كلمة المرور هنا'
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {show ? <FaRegEyeSlash size={23} /> : <BiShow size={23} />}
                            </button>
                        </div>
                        <button className='bg-primary text-white rounded-md p-2 font-medium'>تسجيل الدخول</button>
                        <Link to='/register' className='text-center text-gray-400 font-medium p-5'>انشاء حساب جديد</Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
