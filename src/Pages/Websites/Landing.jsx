import React, { useEffect, useState } from 'react';
import Posts from '../../Components/Websites/page/Posts';
import CategoryNavbar from '../../Components/Websites/Header/CategoryNavbar';
import SubNavbar from '../../Components/Websites/Header/SubNavbar';
import axios from 'axios';
import { baseUrl } from '../../Api/Api';

const Landing = () => {
    const [ads, setAds] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [visibleCount, setVisibleCount] = useState(10); // Start with 10 visible posts

    const fetchAds = async (query = '', location = 'جميع المناطق') => {
        try {
            const response = await axios.get(`${baseUrl}/ad`, {
                params: {
                    search: query,
                    category: selectedCategory === "used" ? undefined : selectedCategory, // Don't send "used" as category
                    location: location !== 'جميع المناطق' ? location : undefined,
                },
                withCredentials: true,
            });
            setAds(response.data.ads);
            setVisibleCount(10); // Reset visible count when filters change
        } catch (err) {
            console.error('Error fetching ads:', err);
        }
    };

    // Fetch ads when searchQuery, selectedCategory, selectedBrand, or selectedLocation changes
    useEffect(() => {
        fetchAds(searchQuery, selectedLocation);
    }, [searchQuery, selectedCategory, selectedBrand, selectedLocation]);

    const handleSearch = (query) => setSearchQuery(query);
    const handleLocationChange = (loc) => setSelectedLocation(loc);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedBrand(''); // Reset selected brand when category changes
    };

    const handleBrandChange = (brand) => {
        setSelectedBrand(brand);
    };

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 10); // Increase by 10
    };

    return (
        <div className='flex flex-col gap-[10px] md:gap-5 xl:gap-7 pb-[100px] md:pb-0'>
            <SubNavbar onSearch={handleSearch} onLocationChange={handleLocationChange} />
            <CategoryNavbar onCategoryChange={handleCategoryChange} onBrandChange={handleBrandChange} />
            <div className="min-h-[50vh] container flex gap-[10px] md:gap-5 xl:gap-7">
                <div className="w-full md:w-[1138px]">
                    <Posts
                        selectedCategory={selectedCategory}
                        selectedBrand={selectedBrand}
                        visibleCount={visibleCount}
                        ads={ads}
                    />
                </div>
                <div className="hidden lg:block bg-bgsecondary w-[455px]"></div>
            </div>

            {/* Show More Button */}
            {visibleCount < ads.length && (
                <div className="text-center mb-[5px] md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full">
                    <div
                        onClick={handleShowMore}
                        className="ring-2 ring-border text-[10px] md:text-[13px] lg:text-[17px] mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px] rounded-10px flex justify-center items-center font-semibold text-placeholder cursor-pointer"
                    >
                        مشاهدة المزيد ...
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default Landing;