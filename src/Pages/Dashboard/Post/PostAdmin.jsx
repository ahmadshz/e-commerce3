import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { baseUrl } from '../../../Api/Api';
import { Link } from 'react-router-dom';
import { IoReaderOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { FaUserClock, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PostAdmin = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to handle errors
    const [totalAdsCount, setTotalAdsCount] = useState(0); // Animated total ads counter
    const [lastMonthAdsCount, setLastMonthAdsCount] = useState(0); // Animated last month ads counter
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
    const [itemsPerPage] = useState(10); // Number of items per page

    const cookies = new Cookies();
    const token = cookies.get('auth_token');

    // Fetch posts from the API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${baseUrl}/ad`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Check if the response contains data
                if (response.data) {
                    setPosts(response.data);
                } else {
                    throw new Error('No data found');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [token]);

    // Number of ads created in the last month
    const lastMonthUsers = posts?.ads
        ? posts.ads.filter((post) => {
            const postDate = new Date(post.createdAt);
            const currentDate = new Date();
            const lastMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1;
            const lastMonthYear =
                currentDate.getMonth() === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();

            return postDate.getMonth() === lastMonth && postDate.getFullYear() === lastMonthYear;
        }).length
        : 0;

    // Animate the counters
    useEffect(() => {
        const animateCounters = () => {
            let totalCount = 0;
            let lastMonthCount = 0;

            const totalInterval = setInterval(() => {
                if (totalCount < posts.total) {
                    totalCount += 1;
                    setTotalAdsCount(totalCount);
                } else {
                    clearInterval(totalInterval);
                }
            }, 50); // Adjust speed here

            const lastMonthInterval = setInterval(() => {
                if (lastMonthCount < lastMonthUsers) {
                    lastMonthCount += 1;
                    setLastMonthAdsCount(lastMonthCount);
                } else {
                    clearInterval(lastMonthInterval);
                }
            }, 50); // Adjust speed here
        };

        if (posts.total && lastMonthUsers) {
            animateCounters();
        }
    }, [posts.total, lastMonthUsers]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseUrl}/ad/delete-ad/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPosts((prevPosts) => ({
                ...prevPosts,
                ads: prevPosts.ads.filter((post) => post._id !== id),
            }));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = posts.ads ? posts.ads.slice(indexOfFirstItem, indexOfLastItem) : [];

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Total Ads Card */}
                <div className="flex gap-6 mb-6 col-span-2 justify-center">
                    {/* Total Ads Card */}
                    <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl flex flex-col items-center border border-gray-200">
                        <div className="bg-[#ff402c] p-3 rounded-full shadow-md">
                            <FaUsers className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 mt-3">عدد الاعلانات الكلي</h3>
                        <p className="text-5xl font-extrabold text-[#ff402c] mt-2">{totalAdsCount}</p>
                    </div>

                    {/* Last Month Ads Card */}
                    <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl flex flex-col items-center border border-gray-200">
                        <div className="bg-[#ff402c] p-3 rounded-full shadow-md">
                            <FaUserClock className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 mt-3">الاعلانات في الشهر الأخير</h3>
                        <p className="text-5xl font-extrabold text-[#ff402c] mt-2">
                            {lastMonthAdsCount}/{totalAdsCount}
                        </p>
                    </div>
                </div>
            </div>

            {/* Ads Table */}
            <div className="overflow-x-auto">
                <table className="min-w-max w-full border-collapse bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-primary text-white">
                            <th className="p-3 text-left">الرقم التعريفي</th>
                            <th className="p-3 text-left">الصور</th>
                            <th className="p-3 text-left">اسم الاعلان</th>
                            <th className="p-3 text-left">نوع الاعلان</th>
                            <th className="p-3 text-left">العنوان</th>
                            <th className="p-3 text-left">السعر بالليرة سورية</th>
                            <th className="p-3 text-left">السعر بالدولار</th>
                            <th className="p-3 text-left">التاريخ</th>
                            <th className="p-3 text-left">الإجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((post, index) => (
                                <tr key={post._id} className="border-b even:bg-gray-100 hover:bg-gray-200">
                                    <td className="p-3 text-center">{indexOfFirstItem + index + 1}</td>
                                    <td className="py-3 px-4 text-left">
                                        {post.images.length > 1 ? (
                                            <img
                                                src={post.images[0]}
                                                alt=""
                                                className="w-12 h-12 object-cover rounded-md inline-block"
                                            />
                                        ) : (
                                            <img
                                                src={post.images}
                                                alt=""
                                                className="w-12 h-12 object-cover rounded-md inline-block"
                                            />
                                        )}
                                    </td>
                                    <td className="p-3 text-left">{post.title}</td>
                                    <td className="p-3 text-left">{post.category}</td>
                                    <td className="p-3 text-left">{post.location}</td>
                                    <td className="p-3 text-left">{post.priceSYP}</td>
                                    <td className="p-3 text-left">{post.priceUSD}</td>
                                    <td className="p-3 text-left">
                                        {new Date(post.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-3 py-6 h-full flex justify-end items-center gap-2">
                                        <Link to={`/singlePost/${post._id}`}>
                                            <IoReaderOutline size={20} className="text-blue-500" />
                                        </Link>
                                        <MdDelete
                                            onClick={() => handleDelete(post._id)}
                                            size={20}
                                            className="text-red-500 cursor-pointer"
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="py-5 text-center">
                                    {loading ? 'جار التحميل...' : 'لا يوجد اعلانات'}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
                <nav>
                    <ul className="flex items-center gap-2">
                        {/* Previous Button */}
                        <li>
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-2 bg-gray-200 text-gray-500 hover:bg-gray-300 disabled:cursor-not-allowed rounded-md flex items-center gap-1"
                            >
                                <FaChevronRight />
                            </button>
                        </li>

                        {/* Page Numbers */}
                        {Array.from({ length: Math.ceil(posts.ads?.length / itemsPerPage) || 1 }, (_, i) => (
                            <li key={i + 1}>
                                <button
                                    onClick={() => paginate(i + 1)}
                                    className={`px-4 py-2 leading-tight border rounded-md ${currentPage === i + 1
                                            ? 'bg-primary text-white'
                                            : 'bg-white text-gray-500 hover:bg-gray-100'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            </li>
                        ))}

                        {/* Next Button */}
                        <li>
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === Math.ceil(posts.ads?.length / itemsPerPage)}
                                className="px-3 py-2 bg-gray-200 text-gray-500 hover:bg-gray-300 disabled:cursor-not-allowed rounded-md flex items-center gap-1"
                            >
                                <FaChevronLeft />

                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PostAdmin;