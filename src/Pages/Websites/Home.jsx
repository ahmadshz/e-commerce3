import React, { useState, useEffect } from 'react';
import Preload from '../../Components/Websites/UI/Preload';

import Web from './Web';
const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {loading ? <Preload /> : <Web />

            }
        </div>
    );
};

export default Home;
