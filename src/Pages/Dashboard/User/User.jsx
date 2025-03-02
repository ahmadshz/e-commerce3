import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../../ReduxToolkit/userSlice";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoReaderOutline } from "react-icons/io5";
import { FaUserClock, FaUsers, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const User = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const [totalUsersCount, setTotalUsersCount] = useState(0);
    const [lastMonthUsersCount, setLastMonthUsersCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
    const [itemsPerPage] = useState(10); // Number of items per page

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    // Total number of users
    const totalUsers = users.length;

    // Number of users created in the last month
    const lastMonthUsers = users.filter((user) => {
        const userDate = new Date(user.createdAt);
        const currentDate = new Date();
        const oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
        return userDate > oneMonthAgo;
    }).length;

    // Animate the counters
    useEffect(() => {
        const animateCounters = () => {
            let totalCount = 0;
            let lastMonthCount = 0;

            const totalInterval = setInterval(() => {
                if (totalCount < totalUsers) {
                    totalCount += 1;
                    setTotalUsersCount(totalCount);
                } else {
                    clearInterval(totalInterval);
                }
            }, 50); // Adjust speed here

            const lastMonthInterval = setInterval(() => {
                if (lastMonthCount < lastMonthUsers) {
                    lastMonthCount += 1;
                    setLastMonthUsersCount(lastMonthCount);
                } else {
                    clearInterval(lastMonthInterval);
                }
            }, 50); // Adjust speed here
        };

        animateCounters();
    }, [totalUsers, lastMonthUsers]);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-4">
            {/* Cards for Total Users & Last Month Users */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Total Users Card */}
                <div className="flex gap-6 mb-6 col-span-2 justify-center">
                    {/* Total Users Card */}
                    <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl flex flex-col items-center border border-gray-200">
                        <div className="bg-[#ff402c] p-3 rounded-full shadow-md">
                            <FaUsers className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 mt-3">عدد المستخدمين الكلي</h3>
                        <p className="text-5xl font-extrabold text-[#ff402c] mt-2">{totalUsersCount}</p>
                    </div>

                  
                </div>
            </div>

            {/* Users Table */}
            <div className="overflow-auto shadow-md">
                <table className="min-w-max w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-primary text-white ">
                            <th className="p-3 text-left">الرقم التعريفي</th>
                            <th className="p-3 text-left">الاسم الأول</th>
                            <th className="p-3 text-left">الاسم الأخير</th>
                            <th className="p-3 text-left">اسم المستخدم</th>
                            <th className="p-3 text-left">البريد الإلكتروني</th>
                            <th className="p-3 text-left">رقم الهاتف</th>
                            <th className="p-3 text-left">الدور</th>
                            <th className="p-3 text-left">الإجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((item, index) => (
                                <tr key={index} className="border-b even:bg-gray-100 hover:bg-gray-200">
                                    <td className="p-3 text-center">{indexOfFirstItem + index + 1}</td>
                                    <td className="p-3 text-left">{item.firstname}</td>
                                    <td className="p-3 text-left">{item.lastname}</td>
                                    <td className="p-3 text-left">{item.username}</td>
                                    <td className="p-3 text-left">{item.email}</td>
                                    <td className="p-3 text-left">{item.phoneNumber}+</td>
                                    <td className="p-3 text-left">{item.role}</td>
                                    <td className="p-3 justify-end flex items-center gap-2">
                                        <Link to={`/dashboard/users/${item._id}`}>
                                            <IoReaderOutline size={20} className="text-blue-500" />
                                        </Link>
                                        <MdDelete onClick={() => handleDelete(item._id)} size={20} className="text-red-500 cursor-pointer" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center p-5">
                                    لا يوجد مستخدمين
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
                        {Array.from({ length: Math.ceil(users.length / itemsPerPage) }, (_, i) => (
                            <li key={i + 1}>
                                <button
                                    onClick={() => paginate(i + 1)}
                                    className={`px-4 py-2 leading-tight border rounded-md ${
                                        currentPage === i + 1
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
                                disabled={currentPage === Math.ceil(users.length / itemsPerPage)}
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

export default User;