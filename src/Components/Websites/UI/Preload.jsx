import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/Logo/Logowhite.png';  // Make sure this path is correct!

const Preload = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1200);
    }, []);

    return (
        <div
            className={`w-full h-screen flex justify-center items-center bg-primary transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0'}`}
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999 }}
        >
            <img src={Logo} alt="Logo" className='w-[90px]  md:w-[150px] ' />
        </div>
    );
};

export default Preload;
