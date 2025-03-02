import React, { useEffect } from 'react';
import { data } from '../../../utils/data';

const Sidbarcategory = ({ selectedCategory, setSelectedCategory }) => {

  useEffect(() => {
    // Prevent body scroll when sidebar is open
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    // Cleanup when sidebar is closed
    return () => {
      body.style.overflow = '';
    };
  }, []);

  return (
    <div className="min-h-[93vh] overflow-y-auto fixed top-0 right-0 scroll-smooth w-[30%] z-50">
      {data.map((item, index) => (
        item.title !== "مستعمل" && (
          <div
            key={index}
            className={`hover:bg-gray-200 transition-colors duration-200 ${
              selectedCategory === item.category ? 'bg-gray-300' : ''
            }`}
            onClick={() => setSelectedCategory(item.category)}
          >
            <p className="text-[14px] w-full py-[14px] px-2">{item.title}</p>
          </div>
        )
      ))}
    </div>
  );
};

export default Sidbarcategory;
