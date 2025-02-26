import React, { useEffect, useState } from 'react';
import MainHeader from '../Header/MainHeader';
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import person from '../../../assets/iconpost/7.svg';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api';
import Footer from '../Footer/Footer';

const SinglePost = () => {
    const [ad, setAd] = useState(''); // Initialize as null or an empty object
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/ad/${id}`);
            setAd(res.data); // Set the single ad object
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);



    const timeAgo = (timestamp) => {
        const now = new Date();
        const postedAt = new Date(timestamp);
        const differenceInSeconds = Math.floor((now - postedAt) / 1000);

        const minutes = Math.floor(differenceInSeconds / 60);
        const hours = Math.floor(differenceInSeconds / 3600);
        const days = Math.floor(differenceInSeconds / (3600 * 24));

        if (minutes < 60) {
            return `قبل ${minutes} دقيقة${minutes === 1 ? '' : 'ات'}`;
        } else if (hours < 24) {
            return `قبل ${hours} ساع${hours > 10 ? 'ة' : 'ات'}`;
        } else {
            return `قبل ${days} ${days === 1 ? 'يوم' : 'ايام'}`;
        }
    };

    return (
        <div className='flex flex-col gap-[100px]'>
            <MainHeader />
            <div className="min-h-screen container flex gap-[10px] md:gap-5 xl:gap-7">
                <div className="w-full md:w-[1138px]">
                    {/* Render the single ad */}
                    <div className='bg-background w-full h-[155px] flex'>
                        <div className='w-3/5 md:py-2 pr-2 md:pr-[10px] xl:pr-[20px] flex flex-col justify-between'>
                            <div className='text-[15px] md:text-[19px] lg:text-[24px] font-semibold'>{ad.title}</div>
                            <div className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{ad.location}</div>
                        </div>
                        {/* Details Post like Mileage */}
                        <div className='w-1/5'>
                            <div className='xl:pr-16 md:py-2 flex flex-col md:justify-evenly h-full text-placeholder text-[10px] md:text-[13px] lg:text-[17px]'>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <span className='text-[13px] md:text-[15px] '>النوع: </span>
                                    <span className='py-0 text-[13px] md:text-[15px]'>{ad.type}</span>
                                </div>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <span className='text-[13px] md:text-[15px] '>الحالة:</span>
                                    <span className='py-0 text-[13px] md:text-[15px]'>{ad.status}</span>
                                </div>
                                <div className='flex gap-1 md:gap-2 items-center w-[100%]'>
                                    <span className='text-[13px] md:text-[15px] '>القير :</span>
                                    <span className='py-0 text-[13px] md:text-[15px]'>{ad.gear}</span>
                                </div>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <span className='text-[13px] md:text-[15px] '>الممشى :</span>
                                    <span className='py-0 w-[50%] md:w-auto text-[13px] md:text-[15px]'>{ad.mileage}</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/5'>
                            <div className='md:py-2 flex flex-col md:justify-evenly h-full text-placeholder text-[10px] md:text-[13px] lg:text-[17px]'>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <img className='w-3 md:w-5 lg:w-6 max-lg:w-5' src={price} alt='' />
                                    <span className='py-0 text-[13px] md:text-[15px]'>{ad.priceUSD}</span>
                                </div>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <img className='w-3 md:w-5 lg:w-6 max-lg:w-5' src={pricesy} alt='' />
                                    <span className='py-0 text-[13px] md:text-[15px]'>{ad.priceSYP}</span>
                                </div>
                                <div className='flex gap-1 md:gap-2 items-center w-[100%]'>
                                    <img className='w-3 md:w-5 lg:w-6 max-lg:w-5' src={clock} alt='' />
                                    <span className='py-0 text-[13px] md:text-[15px]'>{timeAgo(ad.createdAt)}</span>
                                </div>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <img className='w-3 md:w-5 lg:w-6 max-lg:w-5' src={person} alt='' />
                                    <span className='py-0 w-[50%] md:w-auto text-[13px] md:text-[15px]'>{ad.user?.username}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-8 flex flex-col'>
                        <span className='text-[13px] md:text-[15px] '>هوندا اكورد EX 2015</span>
                        <span className='text-[13px] md:text-[15px] ' >بنزين</span>
                        <span className='text-[13px] md:text-[15px] ' >قير اوتماتيك</span>
                        <span className='text-[13px] md:text-[15px] ' >الممشى: 300 ألف كيلو</span>
                        <span className='text-[13px] md:text-[15px] '>{ad.description}</span>
                       
                    </div>
                    <div className='custom-scrollbar w-full overflow-x-auto whitespace-nowrap'>
                        {ad.images && ad.images.length > 1 ? (
                            <div className='inline-flex gap-2'>
                                {ad.images.map((image, index) => (
                                    <img
                                        key={index}
                                        className=' w-[500px] h-[620px] object-cover inline-block'
                                        src={image}
                                        alt={``}
                                    />
                                ))}
                            </div>
                        ) : (
                            // Render a single image
                            <img
                                className='w-[500px] h-[620px] object-cover'
                                src={ad.images?.[0]}
                                alt=''
                            />
                        )}
                    </div>
                </div>
                <div className="hidden lg:block bg-bgsecondary w-[455px]"></div>
            </div>
            <Footer />
        </div>
    );
};

export default SinglePost;