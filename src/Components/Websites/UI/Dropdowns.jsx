import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = ({ label, options, selected, onSelect, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={`flex flex-col gap-5 relative ${className}`}>
            {/* Label */}
            <label className='text-primary text-[20px] lg:text-[25px] font-bold'>{label}</label>

            {/* Dropdown Trigger */}
            <div
                className='w-full h-[60px] md:h-[76px] text-placeholder ring-2 ring-border rounded-10px text-[16px] lg:text-[20px] pr-2 md:pr-[10px] xl:pr-[20px] bg-white outline-none focus:ring-primary duration-200 flex items-center justify-between px-4 cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected}
                <IoIosArrowDown className='text-placeholder text-[25px] md:text-[35px]' />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className='absolute top-[110px] md:top-[125px] left-0 w-full max-h-[300px] overflow-auto border rounded-10px bg-white shadow-lg z-10'>
                    {options.map((item, index) => (
                        <div
                            key={index}
                            className='px-4 py-3 hover:bg-red-500 hover:text-white text-[16px] lg:text-[20px] cursor-pointer duration-200'
                            onClick={() => {
                                onSelect(item);
                                setIsOpen(false);
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;