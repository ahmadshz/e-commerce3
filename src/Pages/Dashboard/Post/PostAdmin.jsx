import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { baseUrl } from '../../../Api/Api';
import { Link } from 'react-router-dom';
import { IoReaderOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight, FaUserClock, FaUsers } from 'react-icons/fa';
import { BsPostcard } from 'react-icons/bs';

const PostAdmin = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to handle errors
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
    const [itemsPerPage] = useState(10); // Number of items per page
    const [totalPostsCount, setTotalPostsCount] = useState(0); // Total count of posts
    const [animatedCount, setAnimatedCount] = useState(0); // Animated counter value

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
                    setPosts(response.data); // Set the fetched posts to state
                    setTotalPostsCount(response.data.ads?.length || 0); // Set total count
                } else {
                    throw new Error('No data found');
                }
            } catch (error) {
                setError(error.message); // Set error message if something goes wrong
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchPosts();
    }, [token]);

    // Animate the counter
    useEffect(() => {
        if (totalPostsCount > 0) {
            const interval = setInterval(() => {
                setAnimatedCount((prevCount) => {
                    if (prevCount < totalPostsCount) {
                        return prevCount + 1;
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 50); // Adjust speed here (lower = faster)

            return () => clearInterval(interval); // Cleanup interval on unmount
        }
    }, [totalPostsCount]);

    // Handle delete post
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseUrl}/ad/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            setPosts((prevPosts) => {
                if (!prevPosts || !Array.isArray(prevPosts.ads)) return prevPosts;
    
                return {
                    ...prevPosts,
                    ads: prevPosts.ads.filter((post) => post._id !== id), // تعديل `ads` بدلاً من `prevPosts` مباشرةً
                };
            });
    
            setTotalPostsCount((prevCount) => Math.max(0, prevCount - 1));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = posts.ads?.slice(indexOfFirstItem, indexOfLastItem) || [];

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Render pagination controls
    const renderPagination = () => {
        const pageNumbers = [];
        const totalPages = Math.ceil(posts.ads?.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
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
                        {pageNumbers.map((number) => (
                            <li key={number}>
                                <button
                                    onClick={() => paginate(number)}
                                    className={`px-4 py-2 leading-tight border rounded-md ${
                                        currentPage === number
                                            ? 'bg-primary text-white'
                                            : 'bg-white text-gray-500 hover:bg-gray-100'
                                    }`}
                                >
                                    {number}
                                </button>
                            </li>
                        ))}

                        {/* Next Button */}
                        <li>
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-2 bg-gray-200 text-gray-500 hover:bg-gray-300 disabled:cursor-not-allowed rounded-md flex items-center gap-1"
                            >
                                <FaChevronLeft />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Total Posts Card */}
                <div className="flex gap-6 mb-6 col-span-2 justify-center">
                    <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl flex flex-col items-center border border-gray-200">
                        <div className="bg-[#ff402c] p-3 rounded-full shadow-md">
                            <BsPostcard className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 mt-3">عدد الاعلانات الكلي</h3>
                        <p className="text-5xl font-extrabold text-[#ff402c] mt-2">{animatedCount}</p>
                    </div>
                </div>
            </div>

            {/* Ads Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
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
                                        <Link to={`/dashboard/users/${post._id}`}>
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
                                    لا يوجد اعلانات
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {renderPagination()}
        </div>
    );
};

export default PostAdmin;