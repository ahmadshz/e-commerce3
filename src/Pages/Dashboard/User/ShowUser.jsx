import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../../ReduxToolkit/userSlice"; // Import the new action
import axios from "axios";
import { baseUrl } from "../../../Api/Api";
import Cookies from "universal-cookie";
import price from '../../../assets/iconpost/1.svg';
import pricesy from '../../../assets/iconpost/3.svg';
import clock from '../../../assets/iconpost/6.svg';
import person from '../../../assets/iconpost/7.svg';

const ShowUser = () => {
    const [postId, setPostId] = useState([]); // Initialize as an empty array
    const [visiblePosts, setVisiblePosts] = useState(5); // State to track visible posts

    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentUser, loading, error } = useSelector((state) => state.user);

    const cookies = new Cookies();
    const token = cookies.get("auth_token");

    useEffect(() => {
        dispatch(getUserById(id)); // Fetch the user by ID
    }, [dispatch, id]);

    useEffect(() => {
        const fetchUserAds = async () => {
            try {
                const response = await axios.get(`${baseUrl}/user/user-ads/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPostId(response.data || []); // Set to empty array if no data is found
            } catch (error) {
                console.error("Error fetching user ads:", error);
                setPostId([]); // Set to empty array in case of an error
            }
        };

        fetchUserAds();
    }, [id, token]);

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

    // Function to handle "Show More" button click
    const handleShowMore = () => {
        setVisiblePosts((prev) => prev + 5); // Increase visible posts by 5
    };

    if (loading) return <p className="font-semibold text-[17px] lg:text-[20px] p-5">جار التحميل...</p>;
    if (error) return <p className="font-semibold text-[17px] lg:text-[20px] p-5">حدث خطأ: {error}</p>;
    if (!currentUser) return <p></p>;

    return (
        <div className="p-5 bg-white ">
            <h2 className="text-[25px] lg:text-[30px] text-primary font-bold mb-10 ">تفاصيل المستخدم</h2>
            <div className="py-6 bg-white ">
                {/* شبكة العناصر */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-5 mb-10 sm:mb-16 lg:mb-20">
                    {/* الاسم الأول */}
                    <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
                        <div className="font-semibold text-[17px] lg:text-[20px] md:w-[239px] flex items-center">
                            الاسم
                        </div>
                        <div className="text-placeholder text-[15px] lg:text-[17px] border-2 border-border 
              w-full lg:w-[433px] h-[60px] md:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3">
                            {currentUser.firstname}
                        </div>
                    </div>

                    {/* اسم العائلة */}
                    <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
                        <div className="font-semibold text-[17px] lg:text-[20px] md:w-[239px] flex items-center">
                            اسم العائلة
                        </div>
                        <div className="text-placeholder text-[15px] lg:text-[17px] border-2 border-border w-full
               lg:w-[433px] h-[60px] md:h-[76px] flex items-center rounded-10px font-medium tracking-wider p-3">
                            {currentUser.lastname}
                        </div>
                    </div>

                    {/* اسم المستخدم */}
                    <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
                        <div className="font-semibold text-[17px] lg:text-[20px] md:w-[239px] flex items-center">
                            اسم المستخدم
                        </div>
                        <div className="text-placeholder text-[15px] lg:text-[17px] border-2 border-border 
              w-full lg:w-[433px] h-[60px] md:h-[76px] rounded-10px font-medium tracking-wider p-3 flex items-center">
                            {currentUser.username}
                        </div>
                    </div>

                    {/* رقم الجوال */}
                    <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
                        <div className="font-semibold text-[17px] lg:text-[20px] md:w-[239px] flex items-center">
                            رقم الجوال
                        </div>
                        <div className="text-placeholder border-2 text-[15px] lg:text-[17px] border-border
               w-full lg:w-[433px] h-[60px] md:h-[76px] rounded-10px font-medium tracking-wider p-3 flex items-center">
                           {currentUser.phoneNumber}+
                        </div>
                    </div>

                    {/* البريد الإلكتروني */}
                    <div className="flex flex-col lg:flex-row gap-3 md:gap-4 col-span-1 sm:col-span-2 ">
                        <div className="font-semibold text-[17px] lg:text-[20px] xl:w-[239px] flex items-center">
                            البريد الإلكتروني
                        </div>
                        <div className="text-placeholder border-2 border-border w-full lg:w-[800px] xl:w-[1183px] 2xl:w-[1242px]
                h-[60px] md:h-[76px] rounded-10px text-[15px] lg:text-[17px] font-medium tracking-wider p-3 flex items-center">
                            {currentUser.email}
                        </div>
                    </div>
                </div>

                {/* عنوان إعلاناتي */}
                <h2 className="text-[25px] lg:text-[30px] text-primary font-bold mt-10 mb-10">اﻋﻼﻧﺎﺗﻲ</h2>
                {postId.length > 0 ? (
                    <div className='flex flex-col gap-5 w-full lg:w-[800px] xl:w-[1103px] 2xl:w-[1484px]'>
                        {postId.slice(0, visiblePosts).map((item, index) => (
                            <div className='bg-[#FAFAFA] w-full h-[110px] md:h-[140px] lg:h-[160px] flex justify-between' key={index}>
                                <div className='w-2/6 md:w-1/2 xl:w-3/5 flex flex-col justify-between md:py-2 pr-2 md:pr-[10px] xl:pr-[20px]'>
                                    <Link to={`/singlePost/${item._id}`} className='w-[90%] text-[14px] md:text-[19px] lg:text-[24px] font-semibold'>
                                        {item.title}
                                    </Link>
                                    <h1 className='py-0 text-[13px] md:text-[15px] font-normal text-placeholder'>{item.location}</h1>
                                </div>
                                <div className='w-4/6 md:w-1/2 xl:w-1/4 flex justify-between'>
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
                                            <span className='py-0 text-[13px] md:text-[15px] w-[70%] '>{item.status}</span>
                                        </div>
                                    </div>
                                    <Link to={`/singlePost/${item._id}`} className='w2/4 w-[199px]'>
                                        <img className='h-full w-full object-cover' src={item.images.length > 1 ? item.images[0] : item.images} alt='' />
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {/* Show More Button */}
                        {visiblePosts < postId.length && (
                            <div
                                onClick={handleShowMore}
                                className="ring-2 ring-border text-[10px] md:text-[13px] lg:text-[17px] mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px] rounded-10px flex justify-center items-center font-semibold text-placeholder cursor-pointer"
                            >
                                مشاهدة المزيد ...
                            </div>
                        )}
                    </div>
                ) : (
                    <p className='font-semibold text-[17px] lg:text-[25px]'>هذه الخانة فارغة لم يتم اضافة أي اعلانات بعد.</p>
                )}
            </div>
        </div>
    );
};

export default ShowUser;