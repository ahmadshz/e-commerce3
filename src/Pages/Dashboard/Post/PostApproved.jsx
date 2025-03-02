import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../Api/Api'; // Adjust the path as needed
import Cookies from 'universal-cookie';
import { FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons
import { IoClose } from 'react-icons/io5';
import { MdPendingActions } from 'react-icons/md';

const PostApproved = () => {
    const [pendingAds, setPendingAds] = useState([]); // State to store pending ads
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to handle errors
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
    const [itemsPerPage] = useState(10); // Number of items per page
    const [totalPendingAdsCount, setTotalPendingAdsCount] = useState(0); // Total count of pending ads
    const [animatedCount, setAnimatedCount] = useState(0); // Animated counter value

    const cookies = new Cookies();
    const token = cookies.get('auth_token');

    // Fetch pending ads from the API
    useEffect(() => {
        const fetchPendingAds = async () => {
            try {
                const response = await axios.get(`${baseUrl}/ad/find/get-pending`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data) {
                    setPendingAds(response.data);
                    setTotalPendingAdsCount(response.data.length); // Set total count
                } else {
                    throw new Error('No data found');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPendingAds();
    }, [token]);

    // Animate the counter
    useEffect(() => {
        if (totalPendingAdsCount > 0) {
            const interval = setInterval(() => {
                setAnimatedCount((prevCount) => {
                    if (prevCount < totalPendingAdsCount) {
                        return prevCount + 1;
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 50); // Adjust speed here (lower = faster)

            return () => clearInterval(interval); // Cleanup interval on unmount
        }
    }, [totalPendingAdsCount]);

    // Approve an ad
    const approveAd = async (id) => {
        try {
            await axios.put(`${baseUrl}/ad/${id}/approve`, { status: "approved" }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPendingAds((prevAds) => prevAds.filter((ad) => ad._id !== id));
            setTotalPendingAdsCount((prevCount) => prevCount - 1); // Decrease total count
        } catch (error) {
            console.error('Error approving ad:', error);
        }
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = pendingAds.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-6">
            {/* Counter Card */}
            <div className="flex justify-center mb-6">
                <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl flex flex-col items-center border border-gray-200">
                    <div className="bg-[#ff402c] p-3 rounded-full shadow-md">
                        <MdPendingActions className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mt-3">عدد الاعلانات المعلقة</h3>
                    <p className="text-5xl font-extrabold text-[#ff402c] mt-2">{animatedCount}</p>
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
                            currentItems.map((ad, index) => (
                                <tr key={ad._id} className="border-b even:bg-gray-100 hover:bg-gray-200">
                                    <td className="p-3 text-center">{indexOfFirstItem + index + 1}</td>
                                    <td className="py-3 px-4 text-left">
                                        {ad.images && ad.images.length > 0 ? (
                                            <img
                                                src={ad.images[0]}
                                                alt="Ad"
                                                className="w-12 h-12 object-cover rounded-md inline-block"
                                            />
                                        ) : (
                                            <span>لا توجد صورة</span>
                                        )}
                                    </td>
                                    <td className="p-3 text-left">{ad.title}</td>
                                    <td className="p-3 text-left">{ad.category}</td>
                                    <td className="p-3 text-left">{ad.location}</td>
                                    <td className="p-3 text-left">{ad.priceSYP}</td>
                                    <td className="p-3 text-left">{ad.priceUSD}</td>
                                    <td className="p-3 text-left">
                                        {new Date(ad.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-3 py-6 h-full flex justify-end items-center gap-2">
                                        <button onClick={() => approveAd(ad._id)} className="text-blue-500 hover:text-blue-700"><FaCheck /></button>
                                        <button className="text-red-500 hover:text-red-700"><IoClose size={30} /></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="py-5 text-center">
                                    تحميل...
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
                        {Array.from({ length: Math.ceil(pendingAds.length / itemsPerPage) }, (_, i) => (
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
                                disabled={currentPage === Math.ceil(pendingAds.length / itemsPerPage)}
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

export default PostApproved;