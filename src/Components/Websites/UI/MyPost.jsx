import React, { useEffect, useState } from 'react';
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api';
import { Link } from 'react-router-dom';
import DeletePost from './DeletePost';

const MyPost = () => {
    const [ads, setAds] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedAdId, setSelectedAdId] = useState(null); 
    const [visiblePosts, setVisiblePosts] = useState(2); 

    const cookies = new Cookies();
    const token = cookies.get('auth_token');

    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/ad/my-ads`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Validate and extract the array
            if (Array.isArray(res.data)) {
                setAds(res.data);
            } else if (res.data && Array.isArray(res.data.ads)) {
                setAds(res.data.ads);
            } else {
                console.error('Unexpected API response:', res.data);
                setAds([]);
            }
        } catch (err) {
            console.error('Error fetching ads:', err);
            setAds([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
            return `قبل ${days} ايام`;
        }
    };

    const ShowdeletePost = (id) => {
        setSelectedAdId(id); 
        setShowDelete(true); 
    };

    // Delete Post 
    const deletePost = async (id) => {
        try {
            const response = await axios.delete(`${baseUrl}/ad/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Ad deleted successfully', response);
            fetchData();
            setShowDelete(false); 
        } catch (err) {
            console.error('Error deleting ad:', err);
        }
    };

    const handleShowMore = () => {
        setVisiblePosts((prev) => prev + 2); 
    };

    return (
        <div className='mt-10 md:mt-16'>
            
            {showDelete && (
                <DeletePost
                    closeDelete={() => setShowDelete(false)} 
                    deletePost={() => deletePost(selectedAdId)} 
                />
            )}

            {Array.isArray(ads) && ads.length > 0 ? (
                ads.slice(0, visiblePosts).map((item, index) => (
                    <div key={index}>
                        <div
                            className='bg-background mt-[15px] py-0 w-full lg:w-full xl:w-[1130px] 2xl:w-[1455px] h-[160px] flex flex-wrap 
                        lg:flex-col max-lg:h-auto'
                        >
                            {/* Title and Location */}
                            <div className='w-2/6 md:w-3/5 mt-2  lg:w-2/6 flex flex-col justify-between lg:h-full md:py-2 pr-2 md:pr-[10px] xl:pr-[20px]'>
                                <Link to={`/singlePost/${item._id}`} className='text-[15px] md:text-[19px] lg:text-[24px] font-semibold'>{item.title}</Link>
                                <span className='text-[13px] lg:text-[15px] font-normal text-placeholder'>{item.location}</span>
                            </div>

                            {/* Prices, Time, User */}
                            <div className='w-2/6 mt-2 h-full md:w-1/5 lg:h-full lg:w-1/6'>
                                <div className='xl:pr-16 md:py-2 flex flex-col md:justify-between h-full text-placeholder text-[10px] md:text-[13px] lg:text-[17px]'>
                                    <div className='flex gap-1 md:gap-2 items-center'>
                                        <img className='w-3 md:w-5 lg:w-6 max-lg:w-5' src={price} alt='' />
                                        <span className='py-0 text-[13px] md:text-[15px]'>{item.priceUSD}</span>
                                    </div>
                                    <div className='flex gap-1 md:gap-2 items-center'>
                                        <img className='w-3 md:w-5 lg:w-6 max-lg:w-5' src={pricesy} alt='' />
                                        <span className='py-0 text-[13px] md:text-[15px]'>{item.priceSYP}</span>
                                    </div>
                                    <div className='flex gap-1 md:gap-2 items-center w-[100%]'>
                                        <img className='w-3 md:w-5 lg:w-6 max-lg:w-5' src={clock} alt='' />
                                        <span className='py-0 text-[13px] md:text-[15px]'>{timeAgo(item.createdAt)}</span>
                                    </div>
                                    <div className='flex gap-1 md:gap-2 items-center'>
                                        <span className='py-0 w-[50%] md:w-auto mx-auto text-[13px] md:text-[15px] '>{item.status}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className='w-2/6 rounded-10px md:w-1/5 lg:h-full mx-auto lg:w-1/6  md:my-0'>
                                <img className='h-full object-cover max-lg:w-full max-lg:h-full' src={item.images.length > 1 ? item.images[0] : item.images} alt='' />
                            </div>

                            {/* Buttons */}
                            <div className='flex lg:w-1/6 mx-auto w-full py-4 lg:py-0 lg:flex-col justify-center lg:h-full gap-4 items-center lg:mx-4 xl:mx-0'>
                                <div className='bg-primary text-white w-[140px] lg:w-[150px] xl:w-[160px] 2xl:w-[190px] h-[50px] text-[15px] font-semibold rounded-10px flex items-center justify-center max-lg:h-[40px]'>
                                    تحديث الاعلان
                                </div>
                                <div
                                    onClick={() => ShowdeletePost(item._id)} // Pass the ad ID
                                    className='bg-primary text-white w-[140px] lg:w-[150px] xl:w-[160px] 2xl:w-[190px] h-[50px] 
                             text-[15px] font-semibold rounded-10px flex items-center justify-center max-lg:h-[40px]'
                                >
                                    مسح الاعلان
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className='font-semibold text-[17px] lg:text-[25px]'>هذه الخانة فارغة لم يتم اضافة أي اعلانات بعد.</p>
            )}

            {/* Show More Button */}
            {ads.length > visiblePosts ? (
                <div className="text-center mb-[5px] md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full">
                    <div
                        onClick={handleShowMore}
                        className="ring-2 ring-border text-[10px] md:text-[13px] lg:text-[17px] mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px] rounded-10px flex justify-center items-center font-semibold text-placeholder cursor-pointer"
                    >
                        مشاهدة المزيد ...
                    </div>
                </div>
            )
                :
                <div className="text-center mb-[5px] md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full">
                    <div className="ring-2 ring-border text-[10px] md:text-[13px] lg:text-[17px] mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px] rounded-10px flex justify-center items-center font-semibold text-placeholder cursor-pointer"
                    >
                        لا يوجد المزيد 
                    </div>
                </div>
            }
        </div>
    );
};

export default MyPost;