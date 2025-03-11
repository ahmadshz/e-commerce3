import React, { useContext, useEffect, useState } from 'react';
import MainHeader from '../Header/MainHeader';
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import person from '../../../assets/iconpost/7.svg';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import logo from '../../../assets/Logo/Logowhite.png';
import { FavoriteContext } from '../../../Context/FavoriteContext';

const SinglePost = () => {
    const [ad, setAd] = useState({});
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sponsorImages, setSponsorImages] = useState(null);
    const [error, setError] = useState(false)

    // Check if the current ad is already in the favorites list
    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
    const isFavorite = favorites.some((favorite) => favorite._id === ad._id);

    //Add And Remove favorite 
    const handleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites(ad._id);
        } else {
            addToFavorites(ad);
        }
    };

    const fetchSponsorImages = async () => {
        try {
            const response = await axios.get(`${baseUrl}/img/sponsor-image`);
            console.log('Sponsor Images Data:', response.data);

            if (response.data && response.data.imageUrl) {
                setSponsorImages(response.data);
            } else {
                console.error('Expected an object with imageUrl but got:', response.data);
                setSponsorImages(null);
            }
        } catch (err) {
            console.error('Error fetching sponsor images:', err);
        }
    };

    useEffect(() => {
        fetchSponsorImages();
    }, []);

    // Fetch ad data whenever the 'id' changes
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/ad/${id}`);
                setAd(res.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, [id]);


    // Function to calculate time ago
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
                            className='bg-background px-4 py-2 h-[120px] md:h-[140px] lg:h-[160px] flex justify-between'
                        >
                            <div className='h-full flex flex-col justify-between'>
                                <div className='text-[12px] lg:text-[20px] font-semibold'>{ad.title}</div>
                                <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>{ad.location} <span className='mx-1'>({ad.user.phoneNumber}+)</span></p>
                            </div>
                            <div className='flex justify-evenly gap-4 lg:px-4 text-placeholder'>
                                {ad.category === 'car' && (
                                    <div className='hidden  lg:flex flex-col justify-around'>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder '>النوع: {ad.vehicleType}</p>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>القير: {ad.transmission}</p>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>الممشى: {ad.mileage}</p>
                                    </div>
                                )}
                                {ad.category === 'bike' && (
                                    <div className='hidden  lg:flex flex-col justify-around'>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder '>النوع: {ad.vehicleType}</p>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>القير: {ad.transmission}</p>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>الممشى: {ad.mileage}</p>
                                    </div>
                                )}
                                {ad.category === 'real_estate' && (
                                    <div className='hidden  lg:flex flex-col  justify-around'>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder '>النوع: {ad.propertyType}</p>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>نوع الطابو: {ad.deedType}</p>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>مشروع سكني جديد: {ad.newHousingProject ? 'نعم' : 'لا'}</p>
                                        
                                    </div>
                                )}
                                {ad.category === 'electronics' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder '>النوع: {ad.deviceType}</p>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                        <div />
                                    </div>
                                )}
                                
                                {ad.category === 'pets' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <div />
                                        <div />

                                    </div>
                                )}
                                {ad.category === 'education' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder '>النوع: {ad.adType}</p>


                                    </div>
                                )}
                                {ad.category === 'jobs' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <div />
                                        <div />

                                    </div>
                                )}
                                {ad.category === 'others' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                        <div />

                                    </div>
                                )}
                                {ad.category === 'parties' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <div />
                                        <div />

                                    </div>
                                )}
                                {ad.category === 'services' && (
                                    <div className='hidden  lg:flex flex-col '>
                                        <p className='text-[10px] lg:text-[14px] font-normal text-placeholder '>النوع: {ad.adType}</p>
                                        <div />
                                        <div />

                                    </div>
                                )}

                                {/* Add other categories similarly */}
                                <div className='flex flex-col justify-around'>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4 md:w-5' src={price} alt='' />
                                        <span className='text-[10px] lg:text-[14px] font-normal text-placeholder'>{ad.priceUSD}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4 md:w-5' src={pricesy} alt='' />
                                        <span className='text-[10px] lg:text-[14px] font-normal text-placeholder'>{ad.priceSYP}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4 md:w-5' src={clock} alt='' />
                                        <span className='text-[10px] lg:text-[14px] font-normal text-placeholder'>{timeAgo(ad.createdAt)}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4 md:w-5' src={person} alt='' />
                                        <span className='text-[10px] lg:text-[14px] font-normal text-placeholder'>{ad.user?.username}</span>
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
                                    <p className='text-[12px] lg:text-[20px] font-normal '>نوع العقار: {ad.propertyType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>نوع الطابو: {ad.deedType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>الحالة :
                                        {ad.condition === 'furnished' ? 'مفروش' : 'unfurnished' ? " غير مفروش" : "على عظم"} </p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>


                                </div>
                            )}
                            {ad.category === 'car' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>النوع: {ad.vehicleType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>القير: {ad.transmission}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>الممشى: {ad.mileage}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>

                                </div>
                            )}
                            {ad.category === 'bike' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>النوع: {ad.vehicleType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>القير: {ad.transmission}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>الممشى: {ad.mileage}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>

                                </div>
                            )}
                            {ad.category === 'electronics' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>النوع: {ad.vehicleType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>

                                </div>
                            )}
                            {ad.category === 'furniture' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>

                                </div>
                            )}
                            {ad.category === 'pets' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>

                                </div>
                            )}
                            {ad.category === 'education' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>

                                </div>
                            )}
                            {ad.category === 'jobs' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>

                                </div>
                            )}
                            {ad.category === 'others' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>

                                </div>
                            )}
                            {ad.category === 'parties' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal '>{ad.description}</p>

                                </div>
                            )}
                            {ad.category === 'services' && (
                                <div className='space-y-2'>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>النوع: {ad.adType}</p>
                                    <p className='text-[12px] lg:text-[20px] font-normal'>الحالة: {ad.condition === 'new' ? 'جديد' : 'مستعمل'}</p>
                                </div>
                            )}
                            <button className={` px-4 text-white rounded-10px h-[50px] md:h-[60px]   text-[12px] md:text-[14px] lg:text-[17px]
                             ${isFavorite ? "bg-primary" : "bg-placeholder"}`} onClick={handleFavorite}>
                                {isFavorite ? "حذف من المفضلة" : "اضافة الى المفضلة"}
                            </button>
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
                        className="hidden lg:block bg-bgsecondary w-[455px] overflow-y-auto"
                        style={{
                            backgroundImage: sponsorImages ? `url(${sponsorImages.imageUrl})` : 'none',
                            backgroundRepeat: 'repeat-y', // Repeat vertically only
                            backgroundSize: 'contain', // Adjust the image size
                        }}
                    >
                        {/* Display sponsor image */}
                        {sponsorImages && (
                            <div className="w-full h-[200px] mb-4">
                                <img
                                    src={sponsorImages.imageUrl} // Use the imageUrl from the object
                                    alt="Sponsor"
                                    className="w-full h-full  rounded-lg"
                                />
                            </div>
                        )}
                    </motion.div>
                </div>
            ) : (
                <div className='h-[70vh] text-[12px] lg:text-[20px] flex justify-center items-center'>{error &&
                    (<div>
                        هذا الاعلان غير متوفر
                    </div>)}
                </div>
            )
            }

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
        </div>

    );
};

export default SinglePost;