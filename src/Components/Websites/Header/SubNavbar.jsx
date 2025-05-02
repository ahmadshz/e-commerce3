import React, { useState, useEffect } from 'react';
import add from '../../../assets/HeadersIcon/2.svg';
import { location } from '../../../utils/data';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBox from '../UI/SearchBox';

const SubNavbar = ({ onSearch, onLocationChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('جميع المناطق');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
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
            onSearch('');
        } else {
            onSearch(searchQuery);

            setSearchHistory((prevHistory) => {
                const newHistory = [searchQuery, ...prevHistory.filter(item => item !== searchQuery)].slice(0, 5);

                localStorage.setItem('searchHistory', JSON.stringify(newHistory));

                return newHistory;
            });
        }
        setShowHistory(false);
    };

    const handleDeleteSearch = (itemToDelete) => {
        const updatedHistory = searchHistory.filter(item => item !== itemToDelete);
        setSearchHistory(updatedHistory);

        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='container flex flex-wrap lg:flex-nowrap justify-between items-center gap-2 my-2'>
            {/* Search Box */}

            <SearchBox
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                searchHistory={searchHistory}
                showHistory={showHistory}
                setShowHistory={setShowHistory}
                onSearch={handleSearch}
                onDeleteHistoryItem={handleDeleteSearch}
                classNameBox={'hidden lg:block h-[35px] md:h-[45px] xl:h-[53px] w-full lg:w-1/2 2xl:w-[876px] border md:border-2 border-border relative rounded-10px'}
                className='h-full w-full font-normal text-[12px] md:text-[14px] lg:text-[17px] rounded-10px pr-2 md:pr-[10px] xl:pr-[20px] focus:outline-none'
                classNameIcon='bg-primary h-[34px] md:h-[43px] xl:h-[52px] w-[40px] lg:w-[54px] absolute -left-[1px] -top-[1.5px] p-1 md:p-2 rounded-10px cursor-pointer'

            />
            {/* Location Dropdown */}
            <div className='flex justify-between items-center gap-2 md:gap-4 w-full lg:w-3/5 mb-[6px] lg:mb-0'>
                <div className="w-3/4 lg:w-[160px] 2xl:w-[195px] border md:border-2 border-border rounded-md lg:rounded-10px relative text-placeholder">
                    <button
                        onClick={toggleDropdown}
                        className="w-full h-[31px] md:h-[41px] xl:h-[49px] flex items-center justify-between"
                    >
                        <span className="w-[75%] md:w-[85%] pr-2 lg:pr-0 text-start lg:text-center text-[9px] md:text-[14px] lg:text-[16px] xl:text-[17px]">
                            {selectedLocation}
                        </span>
                        <MdOutlineKeyboardArrowDown
                            className="w-[30px] lg:w-[54px] h-[35px] md:h-[45px] xl:h-[53px] border-r md:border-2 md:border-l-0 border-border 
                                       rounded-[8px] lg:rounded-10px" />
                    </button>

                    {isOpen && (
                        <div className="custom-scrollbar absolute w-full lg:w-[160px] 2xl:w-[193px] max-h-[300px] overflow-y-auto border border-gray-300 rounded-10px mt-1 bg-white z-10">
                            <div
                                onClick={() => handleSelect('جميع المناطق')}
                                className="pr-2 md:pr-5  lg:py-1 text-[9px] md:text-[14px] lg:text-[17px] hover:bg-gray-200 cursor-pointer"
                            >
                                جميع المناطق
                            </div>
                            {location.map((loc, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(loc)}
                                    className="w-full pr-2 md:pr-5 lg:py-1 hover:bg-gray-200 cursor-pointer text-[9px] md:text-[14px] lg:text-[17px]"
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Add Post Button */}
                <Link to={'/addpost'} className=' flex items-center justify-between w-2/5 lg:w-[170px] xl:w-[220px]
                 h-[31px] md:h-[41px] xl:h-[49px] text-[9px] md:text-[14px] lg:text-[17px]  bg-primary rounded-md lg:rounded-10px'>
                    <div className='text-white w-[75%] md:w-[85%] lg:w-[80%] pr-2 lg:pr-0 lg:text-center font-bold'>أضــف اعــلان</div>
                    <div className='w-[40px] lg:w-[54px] lg:bg-placeholder h-full rounded-10px flex items-center justify-center'>
                        <img className='w-5 lg:w-8 -ml-2' src={add} alt='' />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
};

export default SubNavbar;