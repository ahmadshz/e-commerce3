import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import person from '../../../assets/iconpost/7.svg';
import { motion } from 'framer-motion';

const Posts = ({ ads, selectedCategory, selectedBrand, visibleCount, sponsorImages, loading }) => {
    const [totalDisplayedAds, setTotalDisplayedAds] = useState(0);
    const [isSponsorClicked, setIsSponsorClicked] = useState(false);
    const navigate = useNavigate();

    const timeAgo = (timestamp) => {
        const now = new Date();
        const postedAt = new Date(timestamp);
        const diff = Math.floor((now - postedAt) / 1000);
        const minutes = Math.floor(diff / 60);
        const hours = Math.floor(diff / 3600);
        const days = Math.floor(diff / 86400);
        if (minutes < 60) return `قبل ${minutes} دقيقة`;
        else if (hours < 24) return `قبل ${hours} ساعة`;
        else return `قبل ${days} يوم`;
    };

    const filteredAds = ads.filter((item) => {
        const categoryMatch = selectedCategory
            ? selectedCategory === "used"
                ? item.condition?.toLowerCase() === "used"
                : item.category === selectedCategory
            : true;

        const brandMatch = selectedBrand
            ? (item.vehicleType?.toLowerCase().includes(selectedBrand.arabic)
                || item.propertyType?.toLowerCase().includes(selectedBrand)
                || item.deviceType?.toLowerCase().includes(selectedBrand)
                || item.adType?.toLowerCase().includes(selectedBrand))
            : true;

        return categoryMatch && brandMatch;
    });

    const reversedAds = [...filteredAds].reverse();

    const adsWithSponsor = [];
    reversedAds.forEach((ad, index) => {
        adsWithSponsor.push(ad);
        if (index === 4) {
            adsWithSponsor.push('sponsor');
        }
    });

    const displayedAds = adsWithSponsor.slice(0, visibleCount);

    useEffect(() => {
        setTotalDisplayedAds(visibleCount);
    }, [visibleCount]);

    const handleSponsorClick = () => setIsSponsorClicked(true);
    const handleCloseModal = () => setIsSponsorClicked(false);

    const goToSinglePost = (id) => {
        window.scrollTo(0, 0);
        navigate(`/${id}`);
    };

    return (
        <div className='flex flex-col gap-5'>
            {loading ?

                (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-center text-[13px] lg:text-[20px] font-semibold py-10"
                    >
                        جاري تحميل الإعلانات...
                    </motion.div>
                )
                : displayedAds.length > 0 ? (
                    displayedAds.map((item, index) =>
                        item === 'sponsor' ? (
                            <motion.div
                                key="sponsor"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-[150px] md:h-[200px] bg-bgsecondary flex justify-center items-center lg:hidden cursor-pointer"
                                onClick={handleSponsorClick}
                            >
                                <img
                                    src={sponsorImages?.imageUrl}
                                    alt="Sponsor"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                onClick={() => goToSinglePost(item._id)}
                                key={item._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (totalDisplayedAds - visibleCount + index) * 0.2 }}
                                className='bg-[#FAFAFA] w-full h-[120px] md:h-[140px] lg:h-[160px] flex justify-between cursor-pointer'
                            >
                                <div className='w-4/6 lg:w-4/5 px-3 md:p-3 h-full flex flex-col justify-between'>
                                    <div className='text-[12px] lg:text-[20px] font-semibold truncate'>{item.title}</div>
                                    <div className='flex gap-4 lg:gap-10'>
                                        <div className='w-1/2 lg:w-auto max-w-[250px]  truncate'>
                                            <div className='flex gap-1'>
                                                <img className='w-4 md:w-5' src={clock} alt="" />
                                                <h1 className='text-[10px] lg:text-[14px] text-placeholder  '>{timeAgo(item.createdAt)}</h1>
                                            </div>
                                            <div className='flex gap-1'>
                                                <img className='w-4 md:w-5' src={person} alt="" />
                                                <h1 className='text-[10px] lg:text-[14px] text-placeholder  '>{item.user.username}</h1>
                                            </div>
                                        </div>
                                        <div className='w-1/2 lg:w-auto truncate'>
                                            <div className='flex gap-1'>
                                                <img className='w-4 md:w-5' src={price} alt="" />
                                                <h1 className='text-[10px] lg:text-[14px] text-placeholder  '>{item.priceUSD}</h1>
                                            </div>
                                            <div className='flex gap-1'>
                                                <img className='w-4 md:w-5' src={pricesy} alt="" />
                                                <h1 className='text-[10px] lg:text-[14px] text-placeholder '>{item.priceSYP}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-[10px] lg:text-[14px] text-placeholder'>{item.location}</div>
                                </div>
                                <div className='w-2/6 lg:w-1/5'>
                                    <img
                                        className='h-full w-full object-cover'
                                        src={Array.isArray(item.images) ? item.images[0] : item.images}
                                        alt=''
                                    />
                                </div>
                            </motion.div>
                        )
                    )
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-center text-[13px] lg:text-[20px] font-semibold py-10"
                    >
                        لا يوجد اعلانات يرجى زيارة الموقع لاحقًا
                    </motion.div>
                )}

            {isSponsorClicked && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={handleCloseModal}
                >
                    <div className="bg-white p-4 rounded-lg max-w-[90%] max-h-[90%] overflow-auto">
                        <img
                            src={sponsorImages?.imageUrl}
                            alt="Sponsor"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Posts;
