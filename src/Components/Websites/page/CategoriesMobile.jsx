import React, { useState } from 'react';
import Sidbarcategory from '../UI/Sidbarcategory';
import LandingCategory from '../UI/LandingCategory';
import { IoIosArrowForward } from 'react-icons/io';

const CategoriesMobile = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-primary z-50 fixed top-0 h-[60px] text-[15px] font-bold text-white flex items-center justify-center w-full">
        الاقسام الرئيسية
        <span onClick={goBack} className="absolute right-2">
          <IoIosArrowForward size={25} />
        </span>
      </div>

      {/* Main Content */}
      <div className="flex pt-[60px]">
        {/* Sidebar */}
        <div className="w-[30%] bg-background">
          <Sidbarcategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Landing Category */}
        <div className="w-[70%]">
          <LandingCategory selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesMobile;