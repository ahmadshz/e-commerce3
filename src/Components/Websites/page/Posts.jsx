import { Link } from 'react-router-dom';
import img from '../../../assets/download.jpeg';
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import person from '../../../assets/iconpost/7.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [ad, setAd] = useState([]);
    const [visibleCount, setVisibleCount] = useState(2);

    // Fetch ads from the API
    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await axios.get('http://localhost:8000/ad', {
                    withCredentials: true
                });
                setAd(response.data.ads);
            } catch (err) {
                console.error('Error fetching ads:', err);
            }
        };

        fetchAds();
    }, []);

    const displayedAds = ad.slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 2);
    };

    // Function to calculate time difference
    const timeAgo = (timestamp) => {
        const now = new Date();
        const postedAt = new Date(timestamp);
        const differenceInSeconds = Math.floor((now - postedAt) / 1000);

        const minutes = Math.floor(differenceInSeconds / 60);
        const hours = Math.floor(differenceInSeconds / 3600);
        const days = Math.floor(differenceInSeconds / (3600 * 24));

        if (minutes < 60) {
            const minuteText = minutes === 1 ? 'دقيقة' : (minutes > 1 && minutes < 11) ? 'دقائق' : 'دقيقة';
            return `قبل ${minutes} ${minuteText}`;
        } else if (hours < 24) {
            const hourText = hours === 1 ? 'ساعة' : 'ساعات';
            return ` قبل ${hours} ${hourText} `;
        } else {
            const dayText = days === 1 ? 'يوم' : 'أيام';
            return `قبل ${days} ${dayText}`;
        }
    };



    return (
        <div className='flex flex-col gap-5'>
            {displayedAds.map((item, index) => (
                <div className='bg-[#FAFAFA] w-full h-[110px] md:h-[140px] lg:h-[160px] flex' key={index}>
                    <div className='w-2/4 xl:w-3/5 flex flex-col justify-between md:py-2 pr-2 md:pr-[10px] xl:pr-[20px]'>
                        <Link to={`/${item._id}`} className='w-[90%] text-[14px] md:text-[19px] lg:text-[24px] font-semibold'>{item.title}</Link>
                        <h1 className='text-[13px] lg:text-[17px] font-normal text-placeholder'>{item.location}</h1>
                    </div>
                    <div className='w-2/4 xl:w-2/5 flex'>
                        <div className='w-3/5 md:py-2 flex flex-col md:justify-between text-placeholder text-[10px] md:text-[13px] lg:text-[17px]'>
                            <div className='flex gap-1 md:gap-2 items-center'>
                                <img className='w-3 md:w-5 lg:w-6' src={price} alt='' />
                                <span className='py-0'>{item.priceUSD}</span>
                            </div>
                            <div className='flex gap-1 md:gap-2 items-center'>
                                <img className='w-3 md:w-5 lg:w-6' src={pricesy} alt='' />
                                <span className='py-0 w-[50%]'>{item.priceSYP}</span>
                            </div>
                            <div className='flex gap-1 md:gap-2 items-center'>
                                <img className='w-3 md:w-5 lg:w-6' src={clock} alt='' />
                                <span className='py-0'>{timeAgo(item.createdAt)}</span>
                            </div>
                            <div className='flex gap-1 md:gap-2 items-center'>
                                <img className='w-3 md:w-5 lg:w-6' src={person} alt='' />
                                <span className='py-0 w-[70%] truncate'>{item.user}</span>
                            </div>
                        </div>
                        <div className='w-2/4'>
                            <img className='h-full object-cover' src={img} alt='' />
                        </div>
                    </div>
                </div>
            ))}

            {/* زر "مشاهدة المزيد" يظهر فقط إذا كان هناك المزيد من الإعلانات */}
            {visibleCount < ad.length && (
                <div className='text-center mb-[5px] md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full'>
                    <button
                        onClick={handleShowMore}
                        className='ring-2 ring-border text-[10px] md:text-[13px] lg:text-[17px] mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px] rounded-10px flex justify-center items-center font-semibold text-placeholder'
                    >
                        مشاهدة المزيد ...
                    </button>
                </div>
            )}
        </div>
    );
};

export default Posts;
