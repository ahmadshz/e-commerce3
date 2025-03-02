import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../../assets/Carandothers/houses.svg'
import { BiAddToQueue, BiCategory } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';

const BarMobile = () => {
    return (
        <div className='fixed md:hidden z-[50] bottom-0 right-0 h-[80px] w-full bg-background'>
            <div className='flex justify-around items-center h-full gap-2 text-primary font-bold text-[15px]'>
                <NavLink
                    className={({ isActive }) =>
                        `flex flex-col items-center ${isActive ? 'text-primary' : 'text-black'}`
                    }
                    to={'/'}
                >
                    <img className='w-8' src={home} alt='' />
                    <span>الرئيسية</span>
                </NavLink>
                <NavLink className='text-primary flex flex-col items-center' to={'/'}>
                    <BiCategory size={30} />
                    <span>الاقسام</span>
                </NavLink>
                <NavLink className='text-primary flex flex-col items-center' to={'/'}>
                    <BiAddToQueue size={30} />
                    <span>اضافة اعلان</span>
                </NavLink>
                <NavLink className='text-primary flex flex-col items-center' to={'/'}>
                    <MdOutlineAccountCircle size={30} />
                    <span>حسابي</span>
                </NavLink>

            </div>
        </div>
    );
};

export default BarMobile;