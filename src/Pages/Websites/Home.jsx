import React, { useState, useEffect } from 'react';
import Website from './Website';
import Preload from '../../Components/Websites/UI/Preload';

const Home = () => {
    const [loading, setLoading] = useState(true);

    // محاكاة تأخير في التحميل
    useEffect(() => {
        setTimeout(() => {
            setLoading(false); // إنهاء التحميل بعد 2 ثانية
        }, 2000); // محاكاة تأخير لمدة 2 ثانية (يمكنك استبداله بتحميل البيانات الفعلي)
    }, []);

    return (
        <div>
            {loading ? <Preload /> : <Website />}
        </div>
    );
};

export default Home;
