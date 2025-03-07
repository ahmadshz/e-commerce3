import React, { useState, useEffect } from 'react';
import Posts from '../../Components/Websites/page/Posts';
import CategoryNavbar from '../../Components/Websites/Header/CategoryNavbar';
import SubNavbar from '../../Components/Websites/Header/SubNavbar';
import axios from 'axios';
import { baseUrl } from '../../Api/Api';
import { motion } from 'framer-motion';

const Landing = () => {
    const [ads, setAds] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [visibleCount, setVisibleCount] = useState(10); // Start with 10 visible posts
    const [sponsorImages, setSponsorImages] = useState(null); // State for sponsor image (object)

    // Fetch ads
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

    // Fetch sponsor image
    const fetchSponsorImages = async () => {
        try {
            const response = await axios.get(`${baseUrl}/img/sponsor-image`);
            console.log('Sponsor Images Data:', response.data); // Check the data format

            // Ensure the data is an object with imageUrl
            if (response.data && response.data.imageUrl) {
                setSponsorImages(response.data);
            } else {
                console.error('Expected an object with imageUrl but got:', response.data);
                setSponsorImages(null); // Set to null if data is invalid
            }
        } catch (err) {
            console.error('Error fetching sponsor images:', err);
        }
    };

    // Fetch ads and sponsor images on component mount
    useEffect(() => {
        fetchAds(searchQuery, selectedLocation);
        fetchSponsorImages();
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

    const renderSponsorAfterEvery5Posts = (adsArray) => {
        const adsWithSponsor = [];
        for (let i = 0; i < adsArray.length; i++) {
            adsWithSponsor.push(adsArray[i]);
            // Insert sponsor image after every 5 posts for large screens
            if ((i + 1) % 5 === 0 && i + 1 < adsArray.length) {
                adsWithSponsor.push('sponsor'); // Mark the spot for the sponsor image
            }
        }
        return adsWithSponsor;
    };

    return (
        <div className='min-h-screen flex flex-col gap-[10px] md:gap-5 xl:gap-7 pb-[80px] md:pb-0'>
            <SubNavbar onSearch={handleSearch} onLocationChange={handleLocationChange} />
            <CategoryNavbar onCategoryChange={handleCategoryChange} onBrandChange={handleBrandChange} />
            <div className="min-h-[100vh] container flex gap-[10px] md:gap-5 xl:gap-7">
                <div className="w-full md:w-[1138px]">
                    <Posts
                        selectedCategory={selectedCategory}
                        selectedBrand={selectedBrand}
                        visibleCount={visibleCount}
                        ads={renderSponsorAfterEvery5Posts(ads)}
                        sponsorImages={sponsorImages}
                    />
                </div>
                {/* Sponsor Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="hidden lg:block bg-bgsecondary w-[455px] overflow-y-auto"
                    style={{
                        backgroundImage: sponsorImages ? `url(${sponsorImages.imageUrl})` : 'none',
                        backgroundRepeat: 'repeat-y', // Repeat vertically only
                        backgroundSize: 'contain', // Adjust the image size
                    }}
                >
                </motion.div>
            </div>

            {/* Show More Button */}
            {visibleCount < ads.length && (
                <div className="text-center mb-[5px] md:mb-[10px] lg:mb-[2px] mt-[15px] md:mt-[30px] w-full">
                    <div
                        onClick={handleShowMore}
                        className="border md:border-2 border-border text-[10px] md:text-[13px] lg:text-[17px] mx-auto h-[40px] md:h-[60px] lg:h-[76px] w-[110px] md:w-[150px] lg:w-[250px] rounded-10px flex justify-center items-center font-semibold text-placeholder cursor-pointer"
                    >
                        مشاهدة المزيد ...
                    </div>
                </div>
            )}
        </div>
    );
};

export default Landing;
