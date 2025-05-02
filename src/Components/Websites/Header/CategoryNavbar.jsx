import React, { useState } from 'react';
import { data } from '../../../utils/data';
import { motion } from 'framer-motion';

const CategoryNavbar = ({ onCategoryChange, onBrandChange }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleCategoryClick = (index) => {
        if (selectedCategory === index) {
            setSelectedCategory(null);
            onCategoryChange(null);
            setSelectedBrand(null);
        } else {
            setSelectedCategory(index);
            onCategoryChange(data[index].category);
            setSelectedBrand(null);
        }
    };


    const handleBrandClick = (index) => {
        setSelectedBrand(index);
        onBrandChange(data[selectedCategory].brands[index]);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="container pb-2 xl:pb-4">
            
            {/* Category Section */}
            <div className="flex justify-between overflow-x-auto overflow-y-hidden scroll-smooth custom-scrollbar pb-[5px] md:pb-[10px]  ">
                {data.map((category, index) => (
                    <div
                        key={index}
                        onClick={() => handleCategoryClick(index)}
                        className={`flex flex-col items-center justify-center w-[90px] md:w-[105px] lg:w-auto   md:px-4 py-0 lg:py-2 xl:py-4 cursor-pointer 
                            transition-transform transform ${selectedCategory === index ? 'lg:bg-border rounded-10px duration-300' : ''
                            }`}
                    >
                        <img
                            src={category.icon}
                            alt={category.title}
                            className={` object-cover ${index === 0
                                    ? 'w-[45px] h-[25px] md:w-[60px] md:h-[35px] lg:w-[85px] lg:h-[45px]'
                                    : index === 1
                                        ? ' w-[40px] h-[28px] md:w-[50px] md:h-[40px] lg:w-[65px] lg:h-[50px]'
                                        : index === 4
                                            ? 'w-[40px] h-[30px] md:w-[50px] md:h-[45px] lg:w-[65px] lg:h-[55px]'
                                            : index === 8
                                                ? 'w-[40px] h-[30px] md:w-[50px] md:h-[35px] lg:w-[65px] lg:h-[45px]'
                                                : index === 9
                                                    ? 'w-[40px] h-[30px] md:w-[50px] md:h-[35px] lg:w-[65px] lg:h-[45px]'
                                                    : index === 10
                                                        ? 'w-[40px] h-[30px] md:w-[50px] md:h-[40px] lg:w-[65px] lg:h-[45px]'
                                                        : 'w-[30px] h-[30px] md:h-auto md:w-[40px] lg:w-[50px]'
                                } ${selectedCategory === index ? 'hidden' : 'block'}`}
                        />
                        <img
                            src={category.iconcolor}
                            alt={category.title}
                            className={`object-cover ${index === 0
                                    ? 'w-[45px] h-[25px] md:w-[60px] md:h-[35px] lg:w-[85px] lg:h-[45px]'
                                    : index === 1
                                        ? ' w-[40px] h-[28px] md:w-[50px] md:h-[40px] lg:w-[65px] lg:h-[50px]'
                                        : index === 4
                                            ? 'w-[40px] h-[30px] md:w-[50px] md:h-[45px] lg:w-[65px] lg:h-[55px]'
                                            : index === 8
                                                ? 'w-[40px] h-[30px] md:w-[50px] md:h-[35px] lg:w-[65px] lg:h-[45px]'
                                                : index === 9
                                                    ? 'w-[40px] h-[30px] md:w-[50px] md:h-[35px] lg:w-[65px] lg:h-[45px]'
                                                    : index === 10
                                                        ? 'w-[40px] h-[30px] md:w-[50px] md:h-[40px] lg:w-[65px] lg:h-[45px]'
                                                        : 'w-[30px] h-[30px] md:h-auto md:w-[40px] lg:w-[50px]'
                                } ${selectedCategory === index ? 'block' : 'hidden'}`}
                        />
                        <div
                            className={`text-center w-[100px] md:w-[110px] lg:w-[123px] xl:w-[140px] text-[12px] md:text-[14px] lg:text-[17px]
                                        font-semibold ${selectedCategory === index ? 'text-primary' : 'text-placeholder'
                                }`}
                        >
                            {category.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Brands Section */}
            {selectedCategory !== null && data[selectedCategory].brands && data[selectedCategory].brands.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-[5px] md:mt-[20px]">
                    <div className="flex overflow-x-auto pb-[5px] md:pb-[10px] gap-1 lg:gap-2 md:gap-4 custom-scrollbar">
                        {data[selectedCategory].brands.map((brand, index) => (
                            <div
                                key={index}
                                onClick={() => handleBrandClick(index)}
                                className={`border rounded-md lg:rounded-10px px-3 py-[6px] leading-3 md:p-2 lg:p-4 w-fit bg-white text-center cursor-pointer 
                                                 ${selectedBrand === index ? 'text-primary' : 'text-placeholder'
                                    }`}
                            >
                                <p className="text-[9px] lg:text-[16px]  text-nowrap">
                                    {brand.arabic ? brand.arabic : brand}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default CategoryNavbar;