import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../../ReduxToolkit/userSlice';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoReaderOutline } from 'react-icons/io5';

const User = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div className="">
            <div className="overflow-auto rounded-lg shadow-md">
                <table className="min-w-max w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-primary text-white">
                            <th className="p-3 text-left whitespace-nowrap">الرقم التعريفي</th>
                            <th className="p-3 text-left whitespace-nowrap">الاسم الأول</th>
                            <th className="p-3 text-left whitespace-nowrap">الاسم الأخير</th>
                            <th className="p-3 text-left whitespace-nowrap">اسم المستخدم</th>
                            <th className="p-3 text-left whitespace-nowrap">البريد الإلكتروني</th>
                            <th className="p-3 text-left whitespace-nowrap">رقم الهاتف</th>
                            <th className="p-3 text-left whitespace-nowrap">الدور</th>
                            <th className="p-3 text-left whitespace-nowrap">الإجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((item, index) => (
                                <tr key={index} className="border-b even:bg-gray-100 hover:bg-gray-200">
                                    <td className="p-3 text-center whitespace-nowrap">{index + 1}</td>
                                    <td className="p-3 text-left whitespace-nowrap">{item.firstname}</td>
                                    <td className="p-3 text-left whitespace-nowrap">{item.lastname}</td>
                                    <td className="p-3 text-left whitespace-nowrap">{item.username}</td>
                                    <td className="p-3 text-left whitespace-nowrap">{item.email}</td>
                                    <td className="p-3 text-left whitespace-nowrap">{item.phoneNumber}</td>
                                    <td className="p-3 text-left whitespace-nowrap">{item.role}</td>
                                    <td className="p-3  whitespace-nowrap flex items-center justify-end gap-2">
                                        <Link to={`/dashboard/users/${item._id}`}>
                                            <IoReaderOutline size={20} color="blue" />
                                        </Link>
                                        <MdDelete onClick={() => handleDelete(item._id)} size={20} color="red" />
                                    </td>

                                </tr>

                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center p-5">
                                    Loading...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
