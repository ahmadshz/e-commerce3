import React, { useState, useEffect } from 'react';
import Website from './Website';
import Preload from '../../Components/Websites/UI/Preload';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); 
        }, 2000); 
    }, []);

    return (
        <div>
            {loading ? <Preload /> : <Website />}
        </div>
    );
};

export default Home;
