import React, { useState, useEffect } from 'react';
import searchIcon from '../../../assets/HeadersIcon/1.svg';
import add from '../../../assets/HeadersIcon/2.svg';
import { location } from '../../../utils/data';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { motion } from 'framer-motion';

const SubNavbar = ({ onSearch, onLocationChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('جميع المناطق');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        // استرجاع سجل البحث من localStorage عند تحميل الصفحة
        const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(storedHistory);
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (loc) => {
        setSelectedLocation(loc);
        setIsOpen(false);
        onLocationChange(loc);
    };

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            // إذا كان حقل البحث فارغًا، قم بإظهار جميع المنشورات
            onSearch('');
        } else {
            onSearch(searchQuery);

            setSearchHistory((prevHistory) => {
                const newHistory = [searchQuery, ...prevHistory.filter(item => item !== searchQuery)].slice(0, 5);

                // حفظ سجل البحث في localStorage
                localStorage.setItem('searchHistory', JSON.stringify(newHistory));

                return newHistory;
            });
        }
        setShowHistory(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleDeleteSearch = (itemToDelete) => {
        const updatedHistory = searchHistory.filter(item => item !== itemToDelete);
        setSearchHistory(updatedHistory);

        // تحديث localStorage بعد حذف العنصر
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.5 }}
            className='container flex flex-wrap lg:flex-nowrap justify-between items-center gap-2'>
            {/* Search Box */}
            <div className='h-[35px] md:h-[45px] xl:h-[53px] w-full lg:w-1/2 2xl:w-[876px] border-2 border-border relative rounded-10px'>
                <input
                    type='search'
                    className='h-full w-full font-normal text-[13px] md:text-[15px] lg:text-[17px] rounded-10px pr-2 md:pr-[10px] xl:pr-[20px] focus:outline-none'
                    placeholder='ابحث عن أي عقار أو سلعة أو خدمة في سوريا...'
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowHistory(true);
                    }}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setShowHistory(true)}
                    onBlur={() => setTimeout(() => setShowHistory(false), 200)}
                />
                <button onClick={handleSearch}>
                    <img
                        src={searchIcon}
                        alt=''
                        className='bg-primary h-[34px] md:h-[43px] xl:h-[52px] w-[40px] lg:w-[54px] absolute -left-[1px] -top-[1.5px] p-1 md:p-2 rounded-10px cursor-pointer'
                    />
                </button>

                {/* Search History Dropdown */}
                {showHistory && searchHistory.length > 0 && (
                    <div className="absolute w-full bg-white border-2 border-border rounded-10px mt-1 z-10 max-h-[200px] custom-scrollbar overflow-y-auto">
                        {searchHistory.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between last:border-0 border-b-2 p-2 hover:bg-gray-200 cursor-pointer text-[15px]"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => {
                                    setSearchQuery(item);
                                    onSearch(item);
                                    setShowHistory(false);
                                }}
                            >
                                <span>{item}</span>
                                <CgClose className='text-placeholder font-bold'
                                    size={30}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteSearch(item);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Location Dropdown */}
            <div className='flex justify-between items-center gap-4 w-full lg:w-2/4'>
                <div className="w-2/4 lg:w-[160px] 2xl:w-[195px] border-2 border-border rounded-10px relative text-placeholder">
                    <button
                        onClick={toggleDropdown}
                        className="w-full h-[31px] md:h-[41px] xl:h-[49px] flex items-center justify-between"
                    >
                        <span className="w-[75%] md:w-[85%] lg:w-[80%] text-center text-[13px] md:text-[15px]">
                            {selectedLocation}
                        </span>
                        <MdOutlineKeyboardArrowDown className="w-[40px] lg:w-[54px] h-[35px] md:h-[45px] xl:h-[53px] border-2 border-l-0 border-border rounded-10px" />
                    </button>

                    {isOpen && (
                        <div className="custom-scrollbar absolute w-full lg:w-[160px] 2xl:w-[193px] max-h-[300px] overflow-y-auto border border-gray-300 rounded-10px mt-1 bg-white z-10">
                            <div
                                onClick={() => handleSelect('جميع المناطق')}
                                className="xl:pr-5 py-1 text-[15px] hover:bg-gray-200 cursor-pointer"
                            >
                                جميع المناطق
                            </div>
                            {location.map((loc, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(loc)}
                                    className="w-full pr-2 md:pr-5 py-1 hover:bg-gray-200 cursor-pointer text-[15px] md:text-[16px] lg:text-[17px]"
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Add Post Button */}
                <Link to={'/addpost'} className=' hidden md:flex items-center justify-between w-2/4 lg:w-[170px] xl:w-[220px]
                 h-[31px] md:h-[41px] xl:h-[49px] text-[13px] md:text-[15px] lg:text-[17px] bg-primary rounded-10px'>
                    <div className='text-white w-[75%] md:w-[85%] lg:w-[80%] text-center font-bold'>أضــف اعــلان</div>
                    <div className='w-[40px] lg:w-[54px] bg-placeholder h-full rounded-10px flex items-center justify-center'>
                        <img className='w-8' src={add} alt='' />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
};

export default SubNavbar;