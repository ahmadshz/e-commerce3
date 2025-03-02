import React from 'react';
import { Link } from 'react-router-dom';
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import person from '../../../assets/iconpost/7.svg';

const Posts = ({ ads, selectedCategory, selectedBrand, visibleCount }) => {
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
        // Check if the selected category is "used"
        const categoryMatch = selectedCategory
            ? selectedCategory === "used"
                ? item.condition?.toLowerCase() === "used" // Compare with the "condition" field
                : item.category === selectedCategory // Compare with the "category" field
            : true;

        // Check if the selected brand matches
        const brandMatch = selectedBrand
            ? item.vehicleType?.toLowerCase().includes(selectedBrand.arabic)
            : true;

        return categoryMatch && brandMatch;
    });

    // Slice the filtered ads based on visibleCount
    const displayedAds = filteredAds.slice(0, visibleCount);

    return (
        <div className='flex flex-col gap-5'>
            {displayedAds.length > 0 && (
                displayedAds.map((item) => (
                    <div className='bg-[#FAFAFA] w-full h-[110px] md:h-[140px] lg:h-[160px] flex' key={item._id}>
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
                                    <span className='py-0 text-[13px] md:text-[15px]'>{item.priceUSD}</span>
                                </div>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <img className='w-4 md:w-5 lg:w-6' src={pricesy} alt='' />
                                    <span className='py-0 text-[13px] md:text-[15px] w-[50%]'>{item.priceSYP}</span>
                                </div>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <img className='w-4 md:w-5 lg:w-6' src={clock} alt='' />
                                    <span className='py-0 text-[13px] md:text-[15px]'>{timeAgo(item.createdAt)}</span>
                                </div>
                                <div className='flex gap-1 md:gap-2 items-center'>
                                    <img className='w-4 md:w-5 lg:w-6' src={person} alt='' />
                                    <span className='py-0 text-[13px] md:text-[15px] w-[70%] truncate'>{item.user}</span>
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
                    </div>
                ))
            ) }
        </div>
    );
};

export default Posts;