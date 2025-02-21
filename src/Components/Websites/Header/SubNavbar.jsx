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
        <div className='container flex items-center gap-5'>
            {/* Search Input */}
            <div className='md:h-[45px] xl:h-[53px] md:w-2/4 xl:w-1/2 ring-2 ring-border relative rounded-10px'>
                <input
                    type='search'
                    className='h-full w-full font-normal text-[17px] rounded-10px pr-[20px] focus:outline-none'
                    placeholder='ابحث عن أي عقار أو سلعة أو خدمة في سوريا...'
                />
                <img
                    src={searchIcon}
                    alt=''
                    className='bg-primary md:h-[45px] xl:h-[53px] absolute left-0 top-0 p-2 rounded-l-10px'
                />
            </div>

            {/* Location Dropdown */}
            <div className='flex justify-between items-center w-2/4'>
                <div className=" md:w-[170px] xl:w-[200px] relative  text-placeholder">
                    {/* Button */}
                    <button
                        onClick={toggleDropdown}
                        className=" w-full md:h-[45px]  xl:h-[53px] text-[17px] ring-2 flex items-center ring-border rounded-10px md:px-[10px] xl:px-[20px] bg-transparent focus:outline-none text-right"
                    >
                        <span className="flex-grow">{selectedLocation}</span>
                        <MdOutlineKeyboardArrowDown
                            className="md:h-[45px] xl:h-[53px] md:w-[40px] text-placeholder bg-white ring-2 ring-border rounded-10px  absolute -left-2"
                        />
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                        <div
                            className="absolute w-full max-h-[300px] overflow-y-auto border border-gray-300 rounded-10px mt-1 bg-white z-10"
                            style={{ scrollbarWidth: 'thin', scrollbarColor: '#ccc transparent' }}
                        >
                            <div
                                onClick={() => handleSelect('جميع المناطق')}
                                className="  md:pr-2 xl:pr-5 py-2 px-4 text-[17px] hover:bg-gray-200 cursor-pointer"
                            >
                                <span className='text-[17px]'>جميع المناطق</span>
                            </div>
                    
                            {location.map((loc, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(loc)}
                                    className="w-full pr-5 py-2 px-4 hover:bg-gray-200 cursor-pointer"
                                >
                                    <span></span>
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                    
                </div>

                {/* Last Div (Pushed to the Left) */}
                <Link className=' md:w-[160px]  xl:w-[210px] md:h-[45px] xl:h-[53px] bg-primary flex  items-center  rounded-10px' to={"/addPost"}>
                    <div className='  text-white w-[160px] text-center '>
                        أضــف اعــلان
                    </div>
                    <div className='bg-placeholder h-full rounded-10px flex items-center justify-center md:w-[50px]'>
                        <img className='md:w-7 xl:w-9' src={add} alt='' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SubNavbar;