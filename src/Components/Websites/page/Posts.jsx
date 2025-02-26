import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/download.jpeg';
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import person from '../../../assets/iconpost/7.svg';

const Posts = ({ ads, selectedCategory, selectedBrand, setVisibleCount, visibleCount }) => {
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
            return `قبل ${hours} ساعة${hours === 1 ? '' : 'ات'}`;
        } else {
            return `قبل ${days} يوم${days === 1 ? '' : 'ات'}`;
        }
    };

    const filteredAds = ads.filter((item) => {
        const categoryMatch = selectedCategory ? item.category === selectedCategory : true;
        const brandMatch = selectedBrand ? item.brand === selectedBrand : true;
        return categoryMatch && brandMatch;
    });

    const displayedAds = filteredAds.slice(0, visibleCount);

    return (
        <div className='flex flex-col gap-5'>
            {displayedAds.map((item, index) => (
                <div className='bg-[#FAFAFA] w-full h-[110px] md:h-[140px] lg:h-[160px] flex' key={index}>
                    <div className='w-2/6 xl:w-3/5 flex flex-col justify-between md:py-2 pr-2 md:pr-[10px] xl:pr-[20px]'>
                        <Link to={`/singlePost/${item._id}`} className='w-[90%] text-[14px] md:text-[19px] lg:text-[24px] font-semibold'>
                            {item.title}
                        </Link>
                        <h1 className='text-[13px] lg:text-[17px] font-normal text-placeholder'>{item.location}</h1>
                    </div>
                    <div className='w-4/6 xl:w-2/5 flex'>
                        <div className='w-2/4 md:py-2 flex flex-col md:justify-between text-placeholder text-[10px] md:text-[13px] lg:text-[17px]'>
                            <div className='flex gap-1 md:gap-2 items-center'>
                                <img className='w-4 md:w-5 lg:w-6' src={price} alt='' />
                                <span className='py-0'>{item.priceUSD}</span>
                            </div>
                            <div className='flex gap-1 md:gap-2 items-center'>
                                <img className='w-4 md:w-5 lg:w-6' src={pricesy} alt='' />
                                <span className='py-0 w-[50%]'>{item.priceSYP}</span>
                            </div>
                            <div className='flex gap-1 md:gap-2 items-center'>
                                <img className='w-4 md:w-5 lg:w-6' src={clock} alt='' />
                                <span className='py-0'>{timeAgo(item.createdAt)}</span>
                            </div>
                            <div className='flex gap-1 md:gap-2 items-center'>
                                <img className='w-4 md:w-5 lg:w-6' src={person} alt='' />
                                <span className='py-0 w-[70%] truncate'>{item.user}</span>
                            </div>
                        </div>
                        <div className='w2/4 w-[199px]'>
                            <img className='h-full object-cover' src={item.images.length > 1 ? item.images[0] : item.images} alt='' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;