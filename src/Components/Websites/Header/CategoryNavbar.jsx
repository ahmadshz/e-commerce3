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
            <div className="flex justify-between gap-x-5 overflow-x-auto overflow-y-hidden scroll-smooth custom-scrollbar pb-[10px]">
                {data.map((category, index) => (
                    <div
                        key={index}
                        onClick={() => handleCategoryClick(index)}
                        className={` flex flex-col items-center justify-center gap-2 px-4 py-5 cursor-pointer  transition-transform transform ${selectedCategory === index
                            ? 'bg-border rounded-10px duration-300'
                            : ''
                            }`}
                    >
                        <img
                            src={ category.icon}
                            alt={category.title}
                            className={`w-16 object-cover ${selectedCategory === index ? 'hidden' : 'block'}`}
                        />
                        <img
                            src={ category.iconcolor }
                            alt={category.title}
                            className={`w-16 object-cover  ${selectedCategory === index ? 'block' : 'hidden'}`}
                        />
                        
                        <div
                            className={`text-center w-[140px] text-sm md:text-[17px] font-bold ${selectedCategory === index ? 'text-primary' : 'text-placeholder'
                                }`}
                        >
                            {category.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Brands Section */}
            {selectedCategory !== null && data[selectedCategory].brands && data[selectedCategory].brands.length > 0 && (
                <div className="mt-5 md:mt-[20px]">
                    <div className="flex overflow-x-auto pb-[10px] gap-4 custom-scrollbar">
                        {data[selectedCategory].brands.map((brand, index) => (
                            <div
                                key={index}
                                onClick={() => handleBrandClick(index)} // Set the selected brand when clicked
                                className={`border rounded-10px p-4 w-fit bg-white text-center cursor-pointer ${selectedBrand === index ? 'text-primary' : 'text-placeholder'
                                    }`} // Change text color to primary if selected
                            >
                                {/* Only show Arabic if available, otherwise show English */}
                                <p className="text-sm md:text-[17px] font-semibold truncate">
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
