import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { baseUrl } from '../../Api/Api';
import MainHeader from '../Websites/Header/MainHeader';
import Navbar from '../Websites/Header/Navbar';

const Verification = () => {
    const [verificationCode, setVerificationCode] = useState(''); // State for verification code
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate(); // Initialize the navigate function

    const email = localStorage.getItem('email'); // Get email from localStorage

    const handleVerification = async (e) => {
        e.preventDefault();

        if (!email) {
            setError('No email found in localStorage');
            return;
        }

        const payload = {
            email: email,  // Use the email from localStorage
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
                setError('');  // Reset any previous errors

                // Delete email from localStorage after successful verification
                localStorage.removeItem('email');

                // Navigate to the successVerification route
                navigate('/successVerification'); // Redirect to the success verification page
            } else {
                setError(data.message);  // Display error message from backend
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen container  flex flex-col justify-center md:justify-normal md:pt-44">
                <h2 className="text-[25px] lg:text-[30px] font-semibold  text-primary  mb-10 md:mb-20 ">
                    انشاء حساب جديد
                </h2>

                <p className="text-xl sm:text-[20px] lg:text-[25px] mb-4">
                    من فضلك ضع الكود المكون من ستة أرقام المرسل الى الايميل الخاص بك
                </p>

                <form onSubmit={handleVerification} >
                    <div className='flex items-center justify-between w-full md:w-[400px] gap-7 my-8'>
                        <label className='text-[20px] lg:text-[25px]'>الكود</label>
                        <input
                            id="verificationCode"
                            type="text"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            placeholder="123456"
                            className=" text-[20px] w-[150px]  border-2 border-border  focus:outline-none focus:border-primary 
                             focus:ring-primary rounded-10px text-center p-4"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-[20px] text-primary text-center">{error}</p>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="w-full  text-[20px] md:text-[25px] md:w-[200px] px-6 py-3  md:py-4 bg-primary text-white rounded-md hover:bg-secondary transition duration-300"
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
