import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import person from '../../../assets/iconpost/7.svg';
import { motion } from 'framer-motion';

const Posts = ({ ads, selectedCategory, selectedBrand, visibleCount, sponsorImages }) => {
    const [totalDisplayedAds, setTotalDisplayedAds] = useState(0);
    const [isSponsorClicked, setIsSponsorClicked] = useState(false); // State to track sponsor click

    // Function to calculate time ago
    const timeAgo = (timestamp) => {
        const now = new Date();
        const postedAt = new Date(timestamp);
        const differenceInSeconds = Math.floor((now - postedAt) / 1000);

        const minutes = Math.floor(differenceInSeconds / 60);
        const hours = Math.floor(differenceInSeconds / 3600);
        const days = Math.floor(differenceInSeconds / (3600 * 24));

        if (minutes < 60) {
            return `قبل ${minutes} دقيقة`;
        } else if (hours < 24) {
            return `قبل ${hours} ساعة`;
        } else {
            return `قبل ${days} يوم`;
        }
    };

    // Filter ads based on selected category and brand
    const filteredAds = ads.filter((item) => {
        const categoryMatch = selectedCategory
            ? selectedCategory === "used"
                ? item.condition?.toLowerCase() === "used"
                : item.category === selectedCategory
            : true;

        const brandMatch = selectedBrand
            ? item.vehicleType?.toLowerCase().includes(selectedBrand.arabic)
            : true;

        return categoryMatch && brandMatch;
    });

    // Slice the filtered ads based on visibleCount
    const displayedAds = filteredAds.slice(0, visibleCount);

    // Update totalDisplayedAds whenever visibleCount changes
    useEffect(() => {
        setTotalDisplayedAds(visibleCount);
    }, [visibleCount]);

    // Handle sponsor click
    const handleSponsorClick = () => {
        setIsSponsorClicked(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setIsSponsorClicked(false);
    };

    return (
        <div className='flex flex-col gap-5'>
            {displayedAds.length > 0 ? (
                displayedAds.map((item, index) => (
                    item === 'sponsor' ? (
                        <motion.div
                            key="sponsor"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-[150px] md:h-[200px] bg-bgsecondary flex justify-center items-center lg:hidden cursor-pointer"
                            onClick={handleSponsorClick} // Add click handler
                        >
                            <img
                                src={sponsorImages?.imageUrl}
                                alt="Sponsor"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (totalDisplayedAds - visibleCount + index) * 0.2 }}
                            className='bg-[#FAFAFA] w-full h-[130px] md:h-[140px] lg:h-[160px] flex'>
                            <div className='w-2/6 md:w-1/2 xl:w-3/5 flex flex-col justify-between md:py-2 pr-2 md:pr-[10px] xl:pr-[20px]'>
                                <Link to={`/singlePost/${item._id}`} className='w-[90%] text-[14px] md:text-[19px] lg:text-[24px] font-semibold'>
                                    {item.title}
                                </Link>
                                <h1 className='py-0 text-[13px] md:text-[15px] font-normal text-placeholder'>{item.location}</h1>
                            </div>
                            <div className='w-4/6 md:w-1/2 xl:w-2/5 flex justify-between'>
                                <div className='w-2/4 md:py-2 flex flex-col md:justify-between text-placeholder text-[10px] md:text-[13px] lg:text-[17px]'>
                                    <div className='flex gap-1 md:gap-2 items-center'>
                                        <img className='w-4 md:w-5 lg:w-6' src={price} alt='' />
                                        <span className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{item.priceUSD}</span>
                                    </div>
                                    <div className='flex gap-1 md:gap-2 items-center'>
                                        <img className='w-4 md:w-5 lg:w-6' src={pricesy} alt='' />
                                        <span className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{item.priceSYP}</span>
                                    </div>
                                    <div className='flex gap-1 md:gap-2 items-center'>
                                        <img className='w-4 md:w-5 lg:w-6' src={clock} alt='' />
                                        <span className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{timeAgo(item.createdAt)}</span>
                                    </div>
                                    <div className='flex gap-1 md:gap-2 items-center'>
                                        <img className='w-4 md:w-5 lg:w-6' src={person} alt='' />
                                        <span className='text-[13px] lg:text-[15px] font-normal text-placeholder truncate'>{item?.user?.username}</span>
                                    </div>
                                </div>
                                <Link to={`/singlePost/${item._id}`} className='w-2/4 md:w-[199px]'>
                                    <img
                                        className='h-full w-full object-cover'
                                        src={Array.isArray(item.images) ? item.images[0] : item.images}
                                        alt=''
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    )
                ))
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-lg font-semibold text-gray-500 py-10">
                    لا يوجد اعلانات يرجى زيارة الموقع لاحقًا
                </motion.div>
            )}

            {/* Modal for Sponsor Image */}
            {isSponsorClicked && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={handleCloseModal} // Close modal on click outside
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