import React, { useState } from 'react';
import MainHeader from '../Websites/Header/MainHeader';

const Verification = () => {
    const [verificationCode, setVerificationCode] = useState(''); // State for verification code
    const [isVerified, setIsVerified] = useState(false); // State to track verification status
    const [error, setError] = useState(''); // State for error messages

    // Function to handle verification code submission
    const handleVerification = (e) => {
        e.preventDefault();

        // Simulate verification logic (replace with actual API call)
        if (verificationCode === '123456') { // Example: Hardcoded verification code
            setIsVerified(true);
            setError('');
            alert('Verification successful! You can now log in.');
        } else {
            setError('Invalid verification code. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-grow flex items-center justify-center container">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">التحقق من حسابك</h2>
                    {!isVerified ? (
                        <form onSubmit={handleVerification} className="space-y-6">
                            <div>
                                <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
                                    ﻣﻦ ﻓﻀﻠﻚ ﺿﻊ اﻟﻜﻮد اﻟﻤﻜﻮن ﻣﻦ ﺳﺘﺔ أرﻗﺎم اﻟﻤﺮﺳﻞ اﻟﻰ اﻻﻳﻤﻴﻞ اﻟﺨﺎص ﺑﻚ
                                </label>
                                <input
                                    id="verificationCode"
                                    type="text"
                                    value={verificationCode}
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                    placeholder="أدخل الرمز المكون من 6 أرقام"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                            </div>
                            {error && (
                                <p className="text-sm text-red-600 text-center">{error}</p>
                            )}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition duration-300"
                                >
                                    التأكيد
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center">
                            <p className="text-green-600 font-semibold">Your account has been verified successfully!</p>
                            <p className="text-gray-600 mt-2">You can now log in and access your account.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Verification;