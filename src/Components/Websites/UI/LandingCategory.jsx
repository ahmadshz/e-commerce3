import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../Api/Api';
import { Link } from 'react-router-dom';

const LandingCategory = ({ selectedCategory }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(`${baseUrl}/ad`);
        setAds(response.data.ads);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  }, []);

  // Filter ads based on the selected category
  const filteredAds = selectedCategory
    ? ads.filter((ad) => ad.category === selectedCategory)
    : ads;

  // Function to determine the grid column span for each ad
  const getGridSpan = (index) => {
    if (index === 0) return 'col-span-3'; // First ad takes full width
    if (index % 3 === 1) return 'col-span-1'; // Every 2nd ad takes 1/3 width
    if (index % 3 === 2) return 'col-span-2'; // Every 3rd ad takes 2/3 width
    if (index % 4 === 1) return 'col-span-1'; // Every 3rd ad takes 2/3 width
    if (index % 4 === 2) return 'col-span-2'; // Every 3rd ad takes 2/3 width
    return 'col-span-3'; // Every 4th ad takes full width
  };

  return (
    <div className="min-h-[93vh] w-full p-2 grid grid-cols-3 gap-2 auto-rows-[110px]">
      {filteredAds.length > 0 ? (
        filteredAds.map((item, index) => (
          <Link
            to={`/singlePost/${item._id}`}
            key={item._id}
            className={`bg-background flex justify-center items-center relative rounded-lg p-4 ${getGridSpan(index)}`}
          >
            <div className="flex items-center justify-center">
              <span className="text-[11px] absolute top-0 right-2 font-medium">
                {item.title.length > 10 ? item.title.slice(0, 10) + '...' : item.title}
              </span>
              <img
                className="w-[50px] h-[50px] object-cover rounded-lg"
                src={item.images[0]}
                alt={item.category}
              />
            </div>
          </Link>
        ))
      ) : (
        <p className="col-span-3 text-center text-lg text-gray-500">
          No ads found for the selected category
        </p>
      )}
    </div>
  );
};

export default LandingCategory;