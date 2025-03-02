import React from 'react';
import { data } from '../../../utils/data';

const Sidbarcategory = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="min-h-[93vh] overflow-y-auto fixed top-0  right-0 scroll-smooth w-[30%]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`hover:bg-gray-200 transition-colors duration-200 ${
            selectedCategory === item.category ? 'bg-gray-300' : ''
          }`}
          onClick={() => setSelectedCategory(item.category)}
        >
          <p className="text-[12px] w-full py-[14px] px-2">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidbarcategory;
