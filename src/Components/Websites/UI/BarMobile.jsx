import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../../assets/Carandothers/houses.svg'
import {  BiCategory } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

const BarMobile = () => {
    return (
        <div className='fixed md:hidden z-[50] bottom-0 right-0 h-[70px] w-full bg-background'>
            <div className='flex justify-around items-center h-full gap-2 text-primary font-bold text-[13px]'>
                <NavLink
                    className={({ isActive }) =>
                        `flex flex-col items-center ${isActive ? 'text-primary' : 'text-black'}`
                    }
                    to={'/'}
                >
                    <img className='w-7' src={home} alt='' />
                    <span>الرئيسية</span>
                </NavLink>
                <NavLink className='text-primary flex flex-col items-center' to={'/category'}>
                    <BiCategory size={25} />
                    <span>الاقسام</span>
                </NavLink>
                <NavLink className='text-primary flex flex-col items-center' to={'/addpost'}>
                    <FiPlus size={25} />
                    <span>اضافة اعلان</span>
                </NavLink>
                <NavLink className='text-primary flex flex-col items-center' to={'/myaccount'}>
                    <MdOutlineAccountCircle size={25} />
                    <span>حسابي</span>
                </NavLink>

            </div>
        </div>
    );
};

export default BarMobile;