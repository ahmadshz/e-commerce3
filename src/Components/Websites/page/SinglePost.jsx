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
import BarMobile from '../UI/BarMobile';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import logo from '../../../assets/Logo/Logowhite.png';

const SinglePost = () => {
    const [ad, setAd] = useState({}); // Initialize as an empty object
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

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const scaleUp = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className='flex flex-col gap-[30px]'>
            <MainHeader />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='container '>
                <HiOutlineArrowRight onClick={goBack} className=' text-[30px] h-[30px] lg:h-[50px] lg:text-[45px]  ' />
            </motion.div>
            {/* Check if ad has data before rendering */}
            {Object.keys(ad).length > 0 ? (
                <div className="min-h-screen relative container flex flex-col md:flex-row gap-5 mb-[50px] md:mb-0">
                    <div className="w-full md:w-[1138px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className='bg-background p-4 h-[150px] flex justify-between'
                        >
                            <div className='h-full flex flex-col justify-between'>
                                <div className='text-[15px] md:text-[20px] lg:text-[25px] font-semibold'>{ad.title}</div>
                                <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{ad.location}{ad.user.phoneNumber}</p>
                            </div>
                            <div className='flex justify-evenly gap-4 lg:px-4 text-placeholder'>
                                {ad.category === 'car' && (
                                    <div className='hidden  lg:flex flex-col justify-around'>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.vehicleType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>القير: {ad.transmission}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>الممشى: {ad.mileage}</p>
                                    </div>
                                )}
                                {ad.category === 'bike' && (
                                    <div className='hidden  lg:flex flex-col justify-around'>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.vehicleType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>الممشى: {ad.mileage}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                    </div>
                                )}
                                {ad.category === 'real_estate' && (
                                    <div className='hidden  lg:flex flex-col  justify-around'>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.propertyType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>نوع الطابو: {ad.deedType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>مشروع سكني جديد: {ad.newHousingProject ? 'نعم' : 'لا'}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                    </div>
                                )}
                                {ad.category === 'electronics' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.deviceType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                        <div />
                                    </div>
                                )}
                                {ad.category === 'electronics' && (
                                    <div className='hidden  lg:flex flex-col'>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                        <div />

                                    </div>
                                )}
                                {ad.category === 'pets' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                        <div />
                                        <div />

                                    </div>
                                )}
                                {ad.category === 'education' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>


                                    </div>
                                )}
                                {ad.category === 'jobs' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                        <div />
                                        <div />

                                    </div>
                                )}
                                {ad.category === 'others' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                        <div />

                                    </div>
                                )}
                                {ad.category === 'parties' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                        <div />
                                        <div />

                                    </div>
                                )}
                                {ad.category === 'services' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <p className='text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                        <div />
                                        <div />

                                    </div>
                                )}

                                {/* Add other categories similarly */}
                                <div className='flex flex-col justify-around'>
                                    <div className='flex items-center gap-1'>
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
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className='my-6 space-y-4 p-4 bg-gray-200 lg:bg-transparent rounded-lg'
                        >
                            {ad.category === 'real_estate' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>نوع العقار: {ad.propertyType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>نوع الطابو: {ad.deedType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>نوع الطابو:
                                        {ad.condition === 'furnished' ? 'مفروش' : 'unfurnished' ? " غير مفروش" : "على عظم"} </p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className=' md:hidden text-[13px] lg:text-[15px] font-normal text-placeholder'>رقم الهاتف:{ad.user.phoneNumber}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>


                                </div>
                            )}
                            {ad.category === 'car' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>النوع: {ad.vehicleType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>القير: {ad.transmission}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>الممشى: {ad.mileage}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>

                                </div>
                            )}
                            {ad.category === 'bike' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>النوع: {ad.vehicleType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>القير: {ad.transmission}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>الممشى: {ad.mileage}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>

                                </div>
                            )}
                            {ad.category === 'electronics' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>النوع: {ad.vehicleType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>

                                </div>
                            )}
                            {ad.category === 'furniture' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>

                                </div>
                            )}
                            {ad.category === 'pets' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>

                                </div>
                            )}
                            {ad.category === 'education' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>

                                </div>
                            )}
                            {ad.category === 'jobs' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>

                                </div>
                            )}
                            {ad.category === 'others' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>

                                </div>
                            )}
                            {ad.category === 'parties' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>رقم الهاتف:{ad.user.phoneNumber}</p>

                                </div>
                            )}
                            {ad.category === 'services' && (
                                <div className='space-y-2'>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[15px] lg:text-[20px] font-normal '>{ad.description}</p>
                                </div>
                            )}

                        </motion.div>

                        <div className='w-full custom-scroll overflow-x-auto  flex flex-wrap  gap-10  py-4' st>
                            {Array.isArray(ad.images) && ad.images.length > 0 && (
                                ad.images.map((image, index) => (
                                    <div className='relative'>
                                        <motion.img
                                            variants={fadeIn}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ duration: 0.5, delay: 0.7 }}
                                            key={index}
                                            className='w-full md:w-[200px]  h-[300px] lg:w-[300px] lg:h-[400px]  xl:w-[380px] xl:h-[500px] 
                                        2xl:w-[450px] 2xl:h-[550px] rounded-10px object-cover cursor-pointer'
                                            src={image}
                                            alt=''
                                            onClick={() => handleImageClick(image)}
                                        />
                                        <img className='w-10 md:w-12 lg:w-16 xl:w-20 absolute bottom-4 right-4  ' src={logo} alt='' />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="hidden lg:block bg-bgsecondary w-[455px]"></motion.div>
                </div>
            ) : (
                <div className='h-screen'></div>
            )}

            {isModalOpen && (
                <motion.div
                    variants={scaleUp}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img src={selectedImage} alt="Selected" className="max-w-[90vw] max-h-[90vh] object-contain" />
                        <button
                            className="absolute top-0 md:top-2 right-2 font-bold text-xl md:text-2xl p-2 text-white bg-primary rounded-10px"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </div>
                </motion.div>
            )}

            <Footer />
            <BarMobile />
        </div>
    );
};

export default SinglePost;