import React from 'react';
import { data } from '../../../utils/data';

const Sidbarcategory = ({ selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category.trim().toLowerCase());
  };

  return (
    <div className="h-screen overflow-y-auto fixed top-0 right-0 scroll-smooth w-[30%] bg-background">
      {data.map((item, index) => {
        // Skip rendering if category title is "مستعمل"
        if (item.title.trim() === "مستعمل") {
          return null; // Return null to skip rendering this category
        }

        return (
          <div
            key={index}
            className={`hover:bg-gray-200 transition-colors duration-200 ${
              selectedCategory === item.category.trim().toLowerCase() ? 'bg-gray-300' : ''
            }`}
            onClick={() => handleCategoryClick(item.category)}
          >
            <p className="text-[13px] w-full py-[14px] px-2">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidbarcategory;
