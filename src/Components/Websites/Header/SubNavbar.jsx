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
        <div className='container flex flex-wrap lg:flex-nowrap justify-between items-center  gap-2'>
            {/* Search Input */}
            <div className='h-[35px] md:h-[45px] xl:h-[53px] w-full  lg:w-1/2 ring-2 ring-border relative rounded-10px'>
                <input
                    type='search' 
                    className='h-full w-full font-normal   text-[13px] md:text-[15px] lg:text-[17px] rrounded-10px pr-2  md:pr-[10px] xl:pr-[20px] focus:outline-none'
                    placeholder='ابحث عن أي عقار أو سلعة أو خدمة في سوريا...'
                />
                <img
                    src={searchIcon}
                    alt=''
                    className='bg-primary h-full md:h-[45px] xl:h-[53px] w-[40px]  lg:w-[54px] absolute left-0 top-0 p-1 md:p-2 rounded-l-10px'
                />
            </div>

            {/* Location Dropdown */}
            <div className=' flex justify-between items-center gap-4  w-full lg:w-2/4'>
                <div className=" w-2/4 lg:w-[160px] xl:w-[210px] ring-2 ring-border rounded-10px relative text-placeholder">
                    {/* Button */}
                    <button
                        onClick={toggleDropdown}
                        className="w-full h-[35px] md:h-[45px] xl:h-[53px]  flex items-center justify-between  "
                    >
                        <span className="w-[75%] md:w-[85%] lg:w-[80%] text-center text-[13px] md:text-[15px] lg:text-[17px] ">{selectedLocation}</span>
                        <MdOutlineKeyboardArrowDown
                            className="  w-[40px]  lg:w-[54px]  h-[35px] md:h-[45px] xl:h-[53px] ring-2 ring-border rounded-10px"
                        />
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                        <div
                            className="absolute w-full lg:w-[160px] xl:w-[210px] max-h-[300px] overflow-y-auto border border-gray-300 rounded-10px mt-1 bg-white z-10"
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

                <Link to={'/addpost'} className='flex items-center  w-2/4 lg:w-[170px] xl:w-[220px] h-[35px] md:h-[45px] xl:h-[53px]  text-[13px] md:text-[15px] lg:text-[17px]  bg-primary rounded-md md:rounded-10px'>
                    <div className='text-white w-[75%] md:w-[85%] lg:w-[80%] text-center '>
                        أضــف اعــلان
                    </div>
                    <div className=' w-[40px]  lg:w-[54px] bg-placeholder h-full rounded-md md:rounded-10px flex items-center justify-center'>
                        <img className='w-8 ' src={add} alt='' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SubNavbar;