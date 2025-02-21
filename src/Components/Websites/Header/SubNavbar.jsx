import React, { useState } from 'react';
import searchIcon from '../../../assets/HeadersIcon/1.svg';
import add from '../../../assets/HeadersIcon/2.svg'
import { location } from '../../../utils/data';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SubNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('جميع المناطق');

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (loc) => {
        setSelectedLocation(loc);
        setIsOpen(false);
    };

    return (
        <div className='container flex flex-wrap md:flex-nowrap justify-between items-center  gap-[10px] md:gap-5'>
            {/* Search Input */}
            <div className='h-[35px] md:h-[45px] xl:h-[53px] w-full md:w-3/4 lg:w-1/2 ring-2 ring-border relative rounded-md md:rounded-10px'>
                <input
                    type='search' 
                    className='h-full w-full font-normal   text-[13px] md:text-[15px] lg:text-[17px] rounded-md md:rounded-10px pr-2  md:pr-[10px] xl:pr-[20px] focus:outline-none'
                    placeholder='ابحث عن أي عقار أو سلعة أو خدمة في سوريا...'
                />
                <img
                    src={searchIcon}
                    alt=''
                    className='bg-primary h-full md:h-[45px] xl:h-[53px] absolute left-0 top-0 p-1 md:p-2 rounded-l-[6px] md:rounded-l-10px'
                />
            </div>

            {/* Location Dropdown */}
            <div className=' md:flex justify-between items-center w-2/4 md:1/4 lg:w-2/4'>
                <div className=" w ring-2 ring-border rounded-md md:rounded-10px w-full lg:w-[170px] xl:w-[220px] relative  text-placeholder">
                    {/* Button */}
                    <button
                        onClick={toggleDropdown}
                        className="w-full h-[35px] md:h-[45px] xl:h-[53px]  flex items-center justify-between  "
                    >
                        <span className="w-[75%] md:w-[80%] text-center text-[13px] md:text-[15px] lg:text-[17px] ">{selectedLocation}</span>
                        <MdOutlineKeyboardArrowDown
                            className="  w-[22%] md:w-[20%] h-[35px] md:h-[45px] xl:h-[53px] ring-2 ring-border rounded-md md:rounded-10px"
                        />
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                        <div
                            className="absolute w-full lg:w-[170px] xl:w-[220px] max-h-[300px] overflow-y-auto border border-gray-300 rounded-md md:rounded-10px mt-1 bg-white z-10"
                            style={{ scrollbarWidth: 'thin', scrollbarColor: '#ccc transparent' }}
                        >
                            <div
                                onClick={() => handleSelect('جميع المناطق')}
                                className="  xl:pr-5 py-1 text-[17px] hover:bg-gray-200 cursor-pointer"
                            >
                                <span className='text-start md:text-center pr-2 md:pr-5  text-[13px] md:text-[15px] lg:text-[17px]'>جميع المناطق</span>
                            </div>
                    
                            {location.map((loc, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(loc)}
                                    className="w-full pr-2 md:pr-5 py-1  hover:bg-gray-200 cursor-pointer text-[15px] md:text-[16px] lg:text-[17px]"
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                    
                </div>

                <Link className=' hidden lg:flex lg:w-[170px] xl:w-[210px] lg:h-[45px] xl:h-[53px]  md:text-[14px] lg:text-[17px]  bg-primary   items-center  rounded-md md:rounded-10px' to={"/addPost"}>
                    <div className='  text-white w-[160px] text-center '>
                        أضــف اعــلان
                    </div>
                    <div className='bg-placeholder h-full rounded-md md:rounded-10px flex items-center justify-center md:w-[50px]'>
                        <img className=' md:w-7 xl:w-9' src={add} alt='' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SubNavbar;