import React, { useEffect, useState } from 'react';
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api';
import { Link } from 'react-router-dom';
import DeletePost from './DeletePost';
import { motion, AnimatePresence } from 'framer-motion';

const MyPost = () => {
    const [ads, setAds] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedAdId, setSelectedAdId] = useState(null);
    const [visiblePosts, setVisiblePosts] = useState(5);
    const [isDeleting, setIsDeleting] = useState(false);

    const cookies = new Cookies();
    const token = cookies.get('auth_token');

    // Fetch user's ads with authentication
    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/ad/my-ads`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

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
            return `قبل ${days} ايام`;
        }
    };

    const ShowdeletePost = (id) => {
        setSelectedAdId(id);
        setShowDelete(true);
    };

    // Delete Post
    const deletePost = async (id) => {
        setIsDeleting(true);
        try {
            await axios.delete(`${baseUrl}/ad/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            fetchData();
            setShowDelete(false);
        } catch (err) {
            console.error('Error deleting ad:', err);
        }
        finally {
            setIsDeleting(false);
        }
    };

    // // Update Status Post
    // const updatePost = async (id) => {
    //     try {
    //         const response = await axios.post(`${baseUrl}/ad/${id}/refresh`, {}, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         if (response.status === 200) {
    //             setMessage('تم تحديث الإعلان بنجاح!');
    //             setMessageType('success');
    //             fetchData();
    //         } else {
    //             setMessage('فشل تحديث الإعلان. يرجى المحاولة مرة أخرى.');
    //             setMessageType('error');
    //         }
    //     } catch (err) {
    //         console.error('Error updating ad:', err);
    //         setMessage('حدث خطأ أثناء تحديث الإعلان.');
    //         setMessageType('error');
    //     }
    // };

    const handleShowMore = () => {
        setVisiblePosts((prev) => prev + 5);
    };

    // Animation variants for framer-motion
    const postVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const getUpdatePath = (category, id) => {
        switch (category) {
            case "car":
                return `/updatePostCar/${id}`;
            case "bike":
                return `/updatePostBike/${id}`;
            case "stores":
                return `/updatePostStore/${id}`;
            case "real_estate":
                return `/updatePostEstate/${id}`;
            case "electronics":
                return `/updatePostDevices/${id}`;
            case "furniture":
                return `/updatePostFurniture/${id}`;
            case "pets":
                return `/updatePostAnimals/${id}`;
            case "jobs":
                return `/updatePostJob/${id}`;
            case "services":
                return `/updatePostServices/${id}`;
            case "education":
                return `/updatePostEducation/${id}`;
            case "parties":
                return `/updatePostParty/${id}`;
            case "others":
                return `/updatePostOther/${id}`;
            default:
                return `/myaccount`;
        }
    };



    return (
        <div className='mt-10 md:mt-16'>

            {showDelete && (
                <DeletePost
                    closeDelete={() => setShowDelete(false)}
                    deletePost={() => deletePost(selectedAdId)}
                    isDeleting={isDeleting}
                />
            )}

            {Array.isArray(ads) && ads.length > 0 ? (
                <AnimatePresence>
                    {ads.slice(0, visiblePosts).map((item, index) => {
                        const relativeIndex = index % 5;
                        return (
                            <motion.div
                                key={item._id}
                                variants={postVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3, delay: relativeIndex * 0.3 }}
                            >
                                <div
                                    className='bg-background mt-[15px] py-0 w-full lg:w-full xl:w-[1130px] 2xl:w-[1455px] h-[160px] flex flex-wrap 
                                lg:flex-col max-lg:h-auto'
                                >
                                    {/* Title and Location */}
                                    <div className='w-2/6 md:w-3/5 mt-2 lg:w-2/6 flex flex-col justify-between lg:h-full md:py-2 pr-2 md:pr-[10px] xl:pr-[20px]'>
                                        <Link to={`/${item._id}`} className='text-[12px] lg:text-[20px] font-semibold'>{item.title}</Link>
                                        <span className='text-[10px] lg:text-[14px] font-normal text-placeholder'>{item.location}</span>
                                    </div>

                                    {/* Prices, Time, User */}
                                    <div className='w-2/6 mt-2 h-full md:w-1/5 lg:h-full lg:w-1/6'>
                                        <div className='xl:pr-16 md:py-2 flex flex-col md:justify-between h-full text-placeholder text-[10px] md:text-[13px] lg:text-[17px]'>
                                            <div className='flex gap-1 md:gap-2 items-center'>
                                                <img className='w-4 md:w-5' src={price} alt='' />
                                                <span className='py-0 text-[10px] lg:text-[14px]'>{item.priceUSD}</span>
                                            </div>
                                            <div className='flex gap-1 md:gap-2 items-center'>
                                                <img className='w-4 md:w-5' src={pricesy} alt='' />
                                                <span className='py-0 text-[10px] lg:text-[14px]'>{item.priceSYP}</span>
                                            </div>
                                            <div className='flex gap-1 md:gap-2 items-center w-[100%]'>
                                                <img className='w-4 md:w-5' src={clock} alt='' />
                                                <span className='py-0 text-[10px] lg:text-[14px]'>{timeAgo(item.createdAt)}</span>
                                            </div>
                                            <div className='flex gap-1 md:gap-2 items-center'>
                                                <span className='py-0 w-[50%] md:w-auto mx-auto text-[10px] lg:text-[14px] '>{item.status}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className='w-2/6 rounded-10px md:w-1/5 lg:h-full mx-auto lg:w-1/6 md:my-0 h-[130px]'>
                                        <img className='h-full object-cover w-[150px] max-lg:w-full max-lg:h-full' src={item.images.length > 1 ? item.images[0] : item.images} alt='' />
                                    </div>

                                    {/* Buttons */}
                                    <div className='flex lg:w-1/6 mx-auto w-full py-4 lg:py-0 lg:flex-col justify-center lg:h-full gap-4 items-center lg:mx-4 xl:mx-0'>

                                        <Link
                                            to={getUpdatePath(item.category, item._id)}
                                            className='bg-primary cursor-pointer text-white w-[140px] lg:w-[150px] xl:w-[160px] 2xl:w-[190px] h-[50px] 
                                                     text-[12px] lg:text-[16px] font-semibold rounded-10px flex items-center justify-center max-lg:h-[40px]'
                                        >
                                            تعديل الاعلان
                                        </Link>
                                        <div
                                            onClick={() => ShowdeletePost(item._id)}
                                            className='bg-primary cursor-pointer text-white w-[140px] lg:w-[150px] xl:w-[160px] 2xl:w-[190px] h-[50px] 
                                     text-[12px] lg:text-[16px] font-semibold rounded-10px flex items-center justify-center max-lg:h-[40px]'>
                                            مسح الاعلان
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            ) : (
                <p className='font-semibold text-[17px] lg:text-[25px]'>هذه الخانة فارغة لم يتم اضافة أي اعلانات بعد.</p>
            )}

            {/* Show More Button */}
            {ads.length > visiblePosts && (
                <div className="text-center mb-[5px] md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full">
                    <div
                        onClick={handleShowMore}
                        className=" border md:border-2 border-border text-[10px] md:text-[13px] lg:text-[17px]
                         mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px]
                          rounded-10px flex justify-center items-center font-semibold text-placeholder cursor-pointer"
                    >
                        مشاهدة المزيد ...
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyPost;