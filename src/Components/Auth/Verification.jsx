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
            <div className="min-h-screen container  flex flex-col pt-56">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold  text-primary mb-6">
                    انشاء حساب جديد
                </h2>

                <p className="text-xl sm:text-2xl md:text-3xl mb-4">
                    من فضلك ضع الكود المكون من ستة أرقام المرسل الى االيميل الخاص بك
                </p>

                <form onSubmit={handleVerification} >
                    <div className='flex items-center gap-7 my-8'>
                        <label className='text-xl sm:text-2xl md:text-3xl'>الكود</label>
                        <input
                            id="verificationCode"
                            type="text"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            placeholder="123456"
                            className=" lg:w-1/12 text-xl ring-2 ring-border  focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary rounded-10px text-center p-4"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-600 text-center">{error}</p>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="w-fit px-6 py-4 bg-primary text-white rounded-md hover:bg-secondary transition duration-300"
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
