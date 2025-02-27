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
    const [ad, setAd] = useState([]);
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/ad/${id}`);
                setAd(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);

    const timeAgo = (timestamp) => {
        const now = new Date();
        const postedAt = new Date(timestamp);
        const differenceInSeconds = Math.floor((now - postedAt) / 1000);

        const minutes = Math.floor(differenceInSeconds / 60);
        const hours = Math.floor(differenceInSeconds / 3600);
        const days = Math.floor(differenceInSeconds / (3600 * 24));

        if (minutes < 60) return `قبل ${minutes} دقيقة`;
        if (hours < 24) return `قبل ${hours} ساعة`;
        return `قبل ${days} يوم`;
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className='flex flex-col gap-[40px] md:gap-[100px]'>
            <MainHeader />
            <div className="min-h-screen container flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-[1138px]">
                    <div className='bg-background p-4 h-[155px] flex flex-row justify-between'>
                        <div className='h-full flex flex-col justify-between'>
                            <div className='text-[17px] md:text-[19px] lg:text-[24px] font-semibold'>{ad.title}</div>
                            <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{ad.location}</p>
                        </div>
                        <div className='flex gap-4 text-placeholder'>

                            {ad.category === 'car' && (
                                <div className='hidden  lg:flex flex-col justify-around'>
                                    <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.vehicleType}</p>
                                    <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>الحالة: {ad.condition}</p>
                                    <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>القير: {ad.transmission}</p>
                                    <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>الممشى: {ad.mileage}</p>
                                </div>
                            )}
                            <div className='flex flex-col justify-around'>
                                <div className='flex items-center  gap-1'>
                                    <img className='w-4 md:w-5' src={price} alt='' />
                                    <span className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{ad.priceUSD}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className='w-4 md:w-5' src={pricesy} alt='' />
                                    <span className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{ad.priceSYP}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className='w-4 md:w-5' src={clock} alt='' />
                                    <span className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{timeAgo(ad.createdAt)}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className='w-4 md:w-5' src={person} alt='' />
                                    <span className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{ad.user?.username}</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='my-6 space-y-4 p-4 bg-gray-200 lg:bg-transparent rounded-lg'>
                        <p className='text-md'>{ad.description}</p>
                        {ad.category === 'real_estate' && (
                            <div className='space-y-2'>
                                <p>نوع العقار: {ad.propertyType}</p>
                                <p>نوع الطابو: {ad.deedType}</p>
                                <p>مشروع سكني جديد: {ad.newHousingProject ? 'نعم' : 'لا'}</p>
                            </div>
                        )}
                        {ad.category === 'car' && (
                            <div className='space-y-2 block lg:hidden'>
                                <p>النوع: {ad.vehicleType}</p>
                                <p>الحالة: {ad.condition}</p>
                                <p>القير: {ad.transmission}</p>
                                <p>الممشى: {ad.mileage}</p>
                            </div>
                        )}
                    </div>

                    <div className='w-full custom-scrollbar overflow-x-auto flex gap-2 py-4'>
                        {ad.images?.map((image, index) => (
                            <img
                                key={index}
                                className='w-[200px] h-[300px] md:w-[350px] md:h-[450px] object-cover cursor-pointer '
                                src={image}
                                alt=''
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block bg-bgsecondary w-[455px]"></div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="relative">
                        <img src={selectedImage} alt="Selected" className="max-w-[90vw] max-h-[90vh] object-contain" />
                        <button className="absolute top-2 right-2 bg-white rounded-full p-2 text-black hover:bg-gray-200" onClick={closeModal}>✕</button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default SinglePost;