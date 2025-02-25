import React, { useState } from 'react';
import { data } from '../../../utils/data'; // Import the data

const CategoryNavbar = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // State to track the selected category
    const [selectedBrand, setSelectedBrand] = useState(null); // State to track the selected brand

    const handleCategoryClick = (index) => {
        setSelectedCategory(index); // Update the selected category
        setSelectedBrand(null); // Reset selected brand when category changes
    };

    const handleBrandClick = (index) => {
        setSelectedBrand(index); // Update the selected brand
    };

    return (
        <div className="container">
            {/* Scrollable Container for Categories */}
            <div className="flex justify-between  overflow-x-auto overflow-y-hidden scroll-smooth custom-scrollbar pb-[5px] md:pb-[10px]">
                {data.map((category, index) => (
                    <div
                        key={index}
                        onClick={() => handleCategoryClick(index)}
                        className={` flex flex-col items-center justify-center md:px-4 py-0 lg:py-2 xl:py-5 cursor-pointer  transition-transform transform ${selectedCategory === index
                            ? 'bg-border rounded-10px duration-300'
                            : ''
                            }`}
                    >
                        <img
                            src={ category.icon}
                            alt={category.title}
                            className={` w-10 lg:w-12 xl:w-16 object-cover ${selectedCategory === index ? 'hidden' : 'block'}`}
                        />
                        <img
                            src={ category.iconcolor }
                            alt={category.title}
                            className={`w-10 lg:w-12 xl:w-16 object-cover  ${selectedCategory === index ? 'block' : 'hidden'}`}
                        />
                        
                        <div
                            className={`text-center w-[100px] lg:w-[123px] xl:w-[140px] text-[10px] md:text-[13px] lg:text-[17px] font-semibold ${selectedCategory === index ? 'text-primary' : 'text-placeholder'
                                }`}
                        >
                            {category.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Brands Section */}
            {selectedCategory !== null && data[selectedCategory].brands && data[selectedCategory].brands.length > 0 && (
                <div className="mt-[5px] md:mt-[20px]">
                    <div className="flex overflow-x-auto pb-[5px] md:pb-[10px] gap-2 md:gap-4 custom-scrollbar">
                        {data[selectedCategory].brands.map((brand, index) => (
                            <div
                                key={index}
                                onClick={() => handleBrandClick(index)} 
                                className={`border rounded-10px px-2 py-1 md:p-4 w-fit bg-white text-center  cursor-pointer ${selectedBrand === index ? 'text-primary' : 'text-placeholder'
                                    }`} 
                            >
                                <p className="text-[10px] md:text-[12px] lg:text-[16px] font-semibold truncate">
                                    {brand.arabic ? brand.arabic : brand}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryNavbar;
