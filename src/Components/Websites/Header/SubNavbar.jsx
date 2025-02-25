import React, { useState, useEffect } from 'react';
import searchIcon from '../../../assets/HeadersIcon/1.svg';
import add from '../../../assets/HeadersIcon/2.svg';
import { location } from '../../../utils/data';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SubNavbar = ({ onSearch, onLocationChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('جميع المناطق');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (loc) => {
        setSelectedLocation(loc);  // تحديث الموقع المختار في الواجهة
        setIsOpen(false);          // إغلاق القائمة المنسدلة
        onLocationChange(loc);     // إرسال الموقع المختار إلى المكون الأب (Landing.js)
    };

    // تفعيل البحث أثناء الكتابة
    useEffect(() => {
        onSearch(searchQuery);
    }, [searchQuery]);

    return (
        <div className='container flex flex-wrap lg:flex-nowrap justify-between items-center gap-2'>
            {/* مربع البحث */}
            <div className='h-[35px] md:h-[45px] xl:h-[53px] w-full lg:w-1/2 2xl:w-[876px] border-2 border-border relative rounded-10px'>
                <input
                    type='search'
                    className='h-full w-full font-normal text-[13px] md:text-[15px] lg:text-[17px] rounded-10px pr-2 md:pr-[10px] xl:pr-[20px] focus:outline-none'
                    placeholder='ابحث عن أي عقار أو سلعة أو خدمة في سوريا...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // تحديث نص البحث أثناء الكتابة
                />
                <img
                    src={searchIcon}
                    alt=''
                    className='bg-primary h-[34px] md:h-[43px] xl:h-[52px] w-[40px] lg:w-[54px] absolute -left-[1px] -top-[1.5px] p-1 md:p-2 rounded-10px'
                />
            </div>

            {/* قائمة اختيار الموقع */}
            <div className='flex justify-between items-center gap-4 w-full lg:w-2/4'>
                <div className="w-2/4 lg:w-[160px] 2xl:w-[195px] border-2 border-border rounded-10px relative text-placeholder">
                    {/* زر القائمة المنسدلة */}
                    <button
                        onClick={toggleDropdown}
                        className="w-full h-[35px] md:h-[45px] xl:h-[53px] flex items-center justify-between"
                    >
                        <span className="w-[75%] md:w-[85%] lg:w-[80%] text-center text-[13px] md:text-[15px]">
                            {selectedLocation}
                        </span>
                        <MdOutlineKeyboardArrowDown className="w-[40px] lg:w-[54px] h-[39px] md:h-[49px] xl:h-[57px] border-2 border-l-0 border-border rounded-10px" />
                    </button>

                    {/* القائمة المنسدلة */}
                    {isOpen && (
                        <div className="absolute w-full lg:w-[160px] 2xl:w-[193px] max-h-[300px] overflow-y-auto border border-gray-300 rounded-10px mt-1 bg-white z-10">
                            <div
                                onClick={() => handleSelect('جميع المناطق')} // اختيار "جميع المناطق"
                                className="xl:pr-5 py-1 text-[15px] hover:bg-gray-200 cursor-pointer"
                            >
                                جميع المناطق
                            </div>

                            {location.map((loc, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(loc)} // اختيار موقع معين
                                    className="w-full pr-2 md:pr-5 py-1 hover:bg-gray-200 cursor-pointer text-[15px] md:text-[16px] lg:text-[17px]"
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* زر إضافة إعلان */}
                <Link to={'/addpost'} className='flex items-center justify-between w-2/4 lg:w-[170px] xl:w-[220px] h-[35px] md:h-[45px] xl:h-[53px] text-[13px] md:text-[15px] lg:text-[17px] bg-primary rounded-10px'>
                    <div className='text-white w-[75%] md:w-[85%] lg:w-[80%] text-center font-bold'>أضــف اعــلان</div>
                    <div className='w-[40px] lg:w-[54px] bg-placeholder h-full rounded-10px flex items-center justify-center'>
                        <img className='w-8' src={add} alt='' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SubNavbar;