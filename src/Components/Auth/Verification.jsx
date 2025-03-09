import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { baseUrl } from '../../Api/Api';
import Navbar from '../Websites/Header/Navbar';

const Verification = () => {
    const [verificationCode, setVerificationCode] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const email = localStorage.getItem('email'); 

    // Handle OTP verification and navigate on success
    const handleVerification = async (e) => {
        e.preventDefault();

        if (!email) {
            setError('No email found in localStorage');
            return;
        }

        const payload = {
            email: email,  
            otp: verificationCode,
        };

        try {
            const response = await fetch(`${baseUrl}/user/verify-otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setError('');  

                localStorage.removeItem('email');

                navigate('/successVerification'); 
            } else {
                setError(data.message);  
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-[90vh] container  flex flex-col justify-center md:justify-normal md:pt-44">
                <h2 className="text-[16px] md:text-[20px] lg:text-[25px] font-semibold  text-primary  mb-3 md:mb-10 ">
                    انشاء حساب جديد
                </h2>

                <p className="text-[16px] md:text-[20px] lg:text-[25px] mb-4">
                    من فضلك ضع الكود المكون من ستة أرقام المرسل الى الايميل الخاص بك
                </p>

                <form onSubmit={handleVerification} >
                    <div className='flex items-center justify- w-full md:w-[400px] gap-7 my-4 md:my-8'>
                        <label className=' text-[14px] md:text-[16px] lg:text-[20px]'>الكود</label>
                        <input
                            id="verificationCode"
                            type="text"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            placeholder="123456"
                            className=" text-[14px] lg:text-[20px] w-[150px] h-[50px] md:h-[60px] lg:h-[76px]
                              border md:border-2 border-border  focus:outline-none focus:border-primary 
                             focus:ring-primary rounded-10px text-center"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-[14px] md:text-[16px] lg:text-[20px]">{error}</p>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="w-full  text-[16px] md:text-[20px] lg:text-[25px] md:w-[200px] px-6 py-3  md:py-4 bg-primary text-white rounded-md hover:bg-secondary transition duration-300"
                        >
                            التأكيد
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Verification;
