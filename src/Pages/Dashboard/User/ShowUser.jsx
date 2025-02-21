import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers } from "../../../ReduxToolkit/userSlice";

const ShowUser = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.user);

    useEffect(() => {
        if (users.length === 0) {
            dispatch(getUsers());
        }
    }, [dispatch, users.length]);

    const user = users.find((user) => user._id === id);

    if (loading) return <p>جار التحميل...</p>;

    if (!user) return <p>المستخدم غير موجود!</p>;

    return (
        <div className="p-5 bg-white container">
            <h2 className="text-xl text-primary font-bold">تفاصيل المستخدم</h2>
            <div className="grid grid-cols-2 gap-4 md:gap-8 mt-5 mb-20">
                <div className="flex flex-col lg:flex-row gap-5 md:gap-2 col-span-2 md:col-span-1 ">
                    <div className="  font-medium text-md tracking-wider  md:w-2/6 ">اﻻﺳﻢ</div>
                    <div className="text-placeholder bg-gray-100 w-full  rounded-10px  text-sm  font-medium  tracking-wider   p-3">{user.firstname}</div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 md:gap-2 col-span-2 md:col-span-1 ">
                    <div className="  font-medium text-md tracking-wider  md:w-2/6">اسم العائلة</div>
                    <div className="text-placeholder bg-gray-100 w-full  rounded-10px  text-sm  font-medium  tracking-wider   p-3">{user.lastname}</div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 md:gap-2 col-span-2 md:col-span-1 ">
                    <div className=" font-medium text-md tracking-wider  md:w-2/6">اسم المستخدم</div>
                    <div className="text-placeholder bg-gray-100 w-full  rounded-10px  text-sm  font-medium  tracking-wider   p-3">{user.username}</div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 md:gap-5 col-span-2 lg:col-span-1 ">
                    <div className=" font-medium text-md tracking-wider w-full  lg:w-2/6">رقم الجوال</div>
                    <div className="text-placeholder bg-gray-100 w-full  rounded-10px  text-sm  font-medium  tracking-wider   p-3">{user.phoneNumber}</div>
                </div>
                <div className="flex flex-col lg:flex-row md:items-center gap-2 md:gap-5 col-span-2 ">
                    <div className="  font-medium  tracking-wider w-full lg:w-[13%]   ">البريد الإلكتروني</div>
                    <div className="w-full text-placeholder bg-gray-100   rounded-10px  text-sm  font-medium  tracking-wider   p-3">{user.email}</div>
                </div>
            </div>

            {/* Ads Section */}
            <h2 className="text-2xl text-primary font-bold mt-10 mb-6">اﻋﻼﻧﺎﺗﻲ</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600 text-center">لا توجد اعلانات لعرضها.</p>
            </div>
            
        </div>
    );
};

export default ShowUser;
