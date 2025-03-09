import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = ({ label, options, selected, onSelect, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    
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
        <div ref={dropdownRef} className={`flex flex-col md:gap-2 lg:gap-5 relative ${className}`}>
            {/* Label */}
            <label className='text-primary text-[14px] md:text-[16px] lg:text-[25px] font-bold'>{label}</label>

            {/* Dropdown Trigger */}
            <div
                className={`w-full h-[50px] md:h-[60px] lg:h-[76px] text-placeholder  border md:border-2 rounded-10px text-[12px] md:text-[14px] lg:text-[20px] 
                pr-2 md:pr-[10px] xl:pr-[20px] bg-white outline-none duration-200 flex items-center justify-between 
                px-4 cursor-pointer ${isOpen ? 'border-primary' : 'border-border'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected || 'اختر الماركة'} {/* ✅ عرض النص الافتراضي إذا لم يتم اختيار أي خيار */}
                <IoIosArrowDown className='text-placeholder text-[25px] md:text-[35px]' />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className='absolute top-[80px] md:top-[100px] lg:top-[125px] left-0 w-full max-h-[300px]
                 overflow-auto border rounded-10px bg-white shadow-lg z-10'>
                    {options.map((item, index) => (
                        <div
                            key={index}
                            className='px-4 py-1 md:py-3 hover:bg-primary hover:text-white cursor-pointer duration-200 text-[12px] md:text-[14px] lg:text-[20px]'
                            onClick={() => {
                                onSelect(item); // ✅ تمرير النص المحدد فقط
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
